<script>
import axios from 'axios';

export default {
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
    mounted() {
        this.fetchCards();
    }

}
</script>

<template>

    <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4">

        <div class="col" v-for="card in cards" :key="card.id">
            <div class="card h-100 ">
                <img :src="card.card_images[0].image_url" class="card-img-top" alt="immagine carta">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{ card.name }}</h5>
                    <p class="card-text">{{ card.desc }}</p>
                    <a :href="card.card_images[0].image_url_cropped" class="btn btn-primary mt-auto">Mostra</a>
                </div>
            </div>

        </div>

    </div>
    
</template>

<style lang="scss" scoped></style>