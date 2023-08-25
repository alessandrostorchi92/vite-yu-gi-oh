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

    <div class="card h-100 ">

        <img :src="card.card_images?.[0]?.image_url" class="card-img-top" alt="">

        <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ card.name }}</h5>
            <p class="card-text">{{ card.desc }}</p>
            <a :href="card.card_images?.[0]?.image_url_cropped" class="btn btn-primary mt-auto">Mostra</a>
        </div>

    </div>

</template>

<style lang="scss" scoped></style>