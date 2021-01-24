<template>
  <div>
    <FavouritesTable />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FavouritesTable from "../components/favourites-table/component.vue";

export default Vue.extend({
  components: {
    FavouritesTable
  }
});
</script>
