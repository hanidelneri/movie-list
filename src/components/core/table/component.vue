<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="isLoading"
    class="elevation-1"
    hide-default-footer
  >
    <!-- eslint-disable-next-line vue/no-unused-vars -->
    <template v-slot:item.isFavourite="{ item }">
      <v-icon
        v-if="isFavourite(item)"
        color="yellow"
        @click="removeFromFavourites(item)"
      >
        mdi-star
      </v-icon>
      <v-icon v-else @click="AddToFavourite(item)">
        mdi-star-outline
      </v-icon>
    </template>
  </v-data-table>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { Movie, TableItem } from "./types";

const STORAGE_KEY = "favourite-movies";

export default Vue.extend({
  data: () => ({
    headers: [
      {
        text: "Favourite",
        value: "isFavourite",
        sortable: false
      },
      {
        text: "ID",
        value: "imdbID",
        sortable: false
      },
      {
        text: "Year",
        value: "Year",
        sortable: false
      },
      {
        text: "Title",
        value: "Title",
        sortable: false
      }
    ],
    favourites: [] as Movie[]
  }),
  props: {
    movies: {
      type: Array as PropType<Movie[]>
    },
    isLoading: {
      type: Boolean
    }
  },
  methods: {
    getFavouritesFromStorage(): Movie[] {
      const items = localStorage.getItem(STORAGE_KEY);
      if (!items) return [];
      return JSON.parse(items);
    },
    AddToFavourite(movie: Movie) {
      this.favourites.push(movie);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favourites));
    },
    removeFromFavourites(movie: Movie) {
      const index = this.favourites.findIndex(
        item => movie.imdbID === item.imdbID
      );
      if (index > -1) this.favourites.splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favourites));
    },
    isFavourite(movie: Movie): boolean {
      return Boolean(
        this.favourites.find(item => item.imdbID === movie.imdbID)
      );
    }
  },
  mounted() {
    this.favourites = this.getFavouritesFromStorage();
  },
  computed: {
    items(): TableItem[] {
      return this.movies.map(movie => ({
        ...movie,
        isFavourite: this.isFavourite(movie)
      }));
    }
  }
});
</script>
