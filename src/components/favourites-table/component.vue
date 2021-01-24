<template>
  <div>
    <v-row justify="end" align="center" class="mb-2">
      <v-col>
        <h2>Favourites</h2>
      </v-col>
      <v-col cols="1" class="d-flex justify-end">
        <v-tooltip bottom>
          <!-- eslint-disable-next-line vue/no-unused-vars -->
          <template v-slot:activator="{ on, attrs }">
            <router-link to="/">
              <v-icon size="x-large" v-on="on" v-bind="attrs">
                mdi-format-list-bulleted-square
              </v-icon>
            </router-link>
          </template>
          <span>go to main list</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <Table :movies="favourites" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Table from "../core/table/component.vue";
import useFavouriteMovies from "../core/use-favourite-movies";

export default Vue.extend({
  components: {
    Table
  },
  setup() {
    const { favourites } = useFavouriteMovies();
    return {
      favourites
    };
  }
});
</script>
