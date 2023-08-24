<script>
export default {

}
</script>

<template>
    <div class="footer-container">
        <img src="../assets/pngegg.png" alt="Bootstrap" width="350" height="200">
    </div>
</template>

<style lang="scss" scoped>

@use "../scss/partials/mixins";


.footer-container {
    @include mixins.flex-content;
    height: 250px;
    width: 100%;
    background-color: #212529;
}
</style>