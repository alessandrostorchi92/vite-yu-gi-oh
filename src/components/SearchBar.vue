<script>

import {store} from '../store';
export default {

    data() {
        return {
            store,
        }
    }

}
</script>

<template>

    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Cerca nome carta" v-model="store.searchText"
            aria-label="Search">
        <button class=" btn btn-secondary " type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>

</template>

<style lang="scss" scoped></style>