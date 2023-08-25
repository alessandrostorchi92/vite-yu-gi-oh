<script>
export default {

    props: {
        card: {
            type: Object,
            required: true
        },
    },

};
</script>

<template>

    <div class="card border-0 h-100 ">
 
        <!-- Esegue un if interno del tipo: se card_images è definito e se [0] è definito allora leggo image_url  -->

        <img :src="card.card_images?.[0]?.image_url" class="card-img-top" alt="">

        <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ card.name }}</h5>
            <p class="card-text fw-medium text-center text-white">{{ card.type }}</p>
            <a :href="card.card_images?.[0]?.image_url_cropped" class="btn btn-primary mt-auto">Mostra</a>
        </div>

    </div>

</template>

<style lang="scss" scoped>

.card-body {
    background-color: #D48F37;
}
.card-title {
    text-transform: uppercase;
    color: white;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
}

</style>