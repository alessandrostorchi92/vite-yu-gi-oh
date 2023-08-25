<script>
import axios from 'axios';
import SingleCard from './SingleCard.vue';

export default {
    components: {
        SingleCard
    },
    data() {
        return {
            cards: [],
        };
    },
    methods: {

        //Questa funzione deve essere invocata nel mounted{} così da riuscire a visualizzare il contenuto una volta aperta la pagina web

        fetchCards() {
            const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

            axios.get(url).then((response) => {

                //Una volta recuperati i dati dal server li salvo all'interno del data()

                //Uso il debugger sotto axios.get per sapere la risposta di axios e quindi (posizionando il mouse su response in console) cosa scrivere dopo response.data per accedere ai dati delle carte

                this.cards = response.data.data;
            });

        },

    },

     //appena si carica il componente (e quindi anche la pagina) eseguo la chiamata axios
     
    mounted() {
        this.fetchCards();
    }

}
</script>

<template>

    <div class="row row-cols-sm-1 row-cols-md-3 row-cols-lg-5 g-4">

        <div class="col" v-for="card in cards" :key="card.id">
            <SingleCard :card="card.id"></SingleCard>
        </div>

    </div>

</template>

<style lang="scss" scoped></style>