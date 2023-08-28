<script>
import axios from 'axios';
import SingleCard from './SingleCard.vue';
import { store } from '../store';

export default {

    components: {
        SingleCard
    },

    data() {
        return {
            cards: [],
            paginationInfo: {},
            currentPage: 1,
            store,
        };
    },

    watch: {
        // Ogni volta che store.searchText cambia eseguo questa funzione 
        "store.searchText": function (newSearchText) {
            this.cards = [];
            this.fetchCards(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0&fname=${newSearchText.toLowerCase()}`)
        }
    },

    methods: {

        //Questa funzione deve essere invocata nel mounted{} così da riuscire a visualizzare il contenuto una volta aperta la pagina web

        // Questa funzione deve avere come argomento l'url

        fetchCards(nextUrl) {

            // Se nextUrl !== "" allora assegna il link nextUrl altrimenti il link di default

            // const url = nextUrl ?? "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";
            const url = nextUrl ? nextUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

            axios.get(url).then((response) => {

                //Una volta recuperati i dati dal server li salvo all'interno del data()

                //Uso il debugger sotto axios.get per sapere la risposta di axios e quindi (posizionando il mouse su response in console) cosa scrivere dopo response.data per accedere ai dati delle carte

                // Per aggiungere altre carte a quelle che compaiono di default devo utilizzare il push 

                this.cards.push(...response.data.data);
                this.paginationInfo = response.data.meta;
            }).catch(() => { alert("nessun dato trovato") });

        },

        fetchNextPage() {

            // Recupero il link della pagina successiva richiamando la funzione iniziale fetchCards()
            this.fetchCards(this.paginationInfo.next_page);
        }

    },

    //appena si carica il componente (e quindi anche la pagina) eseguo la chiamata axios

    mounted() {
        this.fetchCards();
    }

}
</script>

<template>
    <div class="py-5">

        <div class="row row-cols-sm-1 row-cols-md-3 row-cols-lg-5 g-4">

            <div class="col" v-for="card in cards" :key="card.id">
                <SingleCard :card="card"></SingleCard>
            </div>

        </div>

        <div class="text-center py-5">

            <button class="btn btn-outline-primary" @click="fetchNextPage">Mostra altro</button>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>