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
import { defineComponent, PropType } from "@vue/composition-api";
import { Movie, TableItem } from "./types";
import useFavouriteMovies from "../use-favourite-movies";

export default defineComponent({
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
    ]
  }),
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true
    },
    isLoading: {
      type: Boolean
    }
  },
  setup() {
    const {
      isFavourite,
      removeFromFavourites,
      AddToFavourite
    } = useFavouriteMovies();
    return {
      isFavourite,
      removeFromFavourites,
      AddToFavourite
    };
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
