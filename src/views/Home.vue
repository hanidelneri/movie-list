<template>
  <MovieList />
</template>

<script lang="ts">
import Vue from "vue";
import MovieList from "../components/movie-table/component.vue";

export default Vue.extend({
  name: "Home",
  components: {
    MovieList
  }
});
</script>
