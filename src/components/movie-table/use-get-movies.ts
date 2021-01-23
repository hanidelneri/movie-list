import { ref, Ref, watch, onMounted } from "@vue/composition-api";
import axios from "axios";

export default function useGetMovies(title: Ref, pageNumber: Ref) {
  const movies = ref([]);
  const isLoading = ref(false);
  const totalItems = ref(10);
  const getMovies = async () => {
    isLoading.value = true;
    const { data } = await axios.get(
      `https://jsonmock.hackerrank.com/api/movies/search/?Title=${title.value}&page=${pageNumber.value}`
    );
    movies.value = data.data;
    totalItems.value = data.total;
    isLoading.value = false;
  };
  onMounted(getMovies);
  watch(title, getMovies);
  watch(pageNumber, getMovies);
  return {
    movies,
    isLoading,
    totalItems
  };
}
