<template>
  <section class="mt-[50px]">
    <h2 class="text-[#fff] inline-block text-[24px] border-b-2 border-inherit border-solid pb-[5px]">Có duy nhất ở đây</h2>
    <ListFilm />
  </section>
</template>

<script>
import ListFilm from "../components/ListFilm"

export default {
  name: 'IndexPage',
  components: {
    ListFilm
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
