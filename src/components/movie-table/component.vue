<template>
  <div>
    <v-row justify="space-between" align="center" class="mb-2">
      <v-col>
        <h2>
          Movies
        </h2>
      </v-col>
      <v-col sm="11" xs="11" md="6" lg="4">
        <Input v-model="search" placeholder="search by title" />
      </v-col>
      <v-col cols="1" class="d-flex justify-end">
        <v-tooltip bottom>
          <!-- eslint-disable-next-line vue/no-unused-vars -->
          <template v-slot:activator="{ on, attrs }">
            <router-link to="/favourites">
              <v-icon size="x-large" color="orange" v-on="on" v-bind="attrs">
                mdi-star-box
              </v-icon>
            </router-link>
          </template>
          <span>go to favourite list</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <Table :movies="movies" :is-loading="isLoading" class="mb-2" />
    <Pagination
      v-model="currentPageNumber"
      :totalItems="totalItems"
      :pageSize="10"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Input from "../core/input/component.vue";
import Pagination from "../core/pagination/component.vue";
import Table from "../core/table/component.vue";
import useSearch from "../use-search";
import usePagination from "../use-pagination";
import useGetMovies from "./use-get-movies";

export default Vue.extend({
  components: {
    Input,
    Pagination,
    Table
  },
  setup() {
    const { search } = useSearch();
    const { currentPageNumber } = usePagination(search);
    const { movies, isLoading, totalItems } = useGetMovies(
      search,
      currentPageNumber
    );
    return { search, currentPageNumber, movies, totalItems, isLoading };
  }
});
</script>
