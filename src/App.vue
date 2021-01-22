<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Pagination :v-model="pageNumber" :totalItems="100" :pageSize="10" />
      <TextInput v-model="text" placeholder="search by text" />
      <Table :movies="movies" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Pagination from "./components/core/pagination/component.vue";
import TextInput from "./components/core/input/component.vue";
import Table from "./components/core/table/component.vue";

export default Vue.extend({
  name: "App",

  components: {
    Pagination,
    TextInput,
    Table
  },

  data: () => ({
    pageNumber: 1,
    text: "hello:",
    movies: [
      {
        Title: "War of the Bugs or Monsterous Manouvers in a Mushroom Maze",
        Year: 1981,
        imdbID: "tt2127390"
      },
      {
        Title:
          "Unwigged & Unplugged Live Concert DVD: An Evening with Christopher Guest, Michael McKean and Harry Shearer",
        Year: 2009,
        imdbID: "tt1496905"
      },
      {
        Title: "The Harry Connick Jr. Christmas Special",
        Year: 1993,
        imdbID: "tt3031702"
      }
    ]
  })
});
</script>
