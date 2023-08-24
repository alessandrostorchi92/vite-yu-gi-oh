<script>

import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import CardsList from './components/CardsList.vue';

export default {
components: {
    TheNavbar,
    TheFooter,
    CardsList
}
}

</script>

<template>
  <TheNavbar></TheNavbar>
  <main>
    <div class="container">
      <CardsList></CardsList>
    </div>
  </main>
  <TheFooter></TheFooter>
</template>

<style lang="scss">

body {
    background-color: #aea04b ;
}

</style>
