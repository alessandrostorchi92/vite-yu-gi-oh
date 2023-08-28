<script>

import SearchBar from './SearchBar.vue';

export default {

    components: {
        SearchBar
    },

}
</script>

<template>

    <nav class="navbar bg-dark">

        <div class="container-fluid">

            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="Bootstrap" width="150" height="50">
            </a>

            <SearchBar></SearchBar>

        </div>

    </nav>

</template>

<style lang="scss" scoped>

</style>