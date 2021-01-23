import { ref, Ref, onMounted } from "@vue/composition-api";
import { Movie } from "./types";

const STORAGE_KEY = "favourite-movies";

export default function useLocalStorage() {
  const favourites: Ref<Movie[]> = ref([]);

  const getFavouritesFromStorage = (): Movie[] => {
    const items = localStorage.getItem(STORAGE_KEY);
    if (!items) return [];
    return JSON.parse(items);
  };

  const AddToFavourite = (movie: Movie) => {
    favourites.value.push(movie);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites.value));
  };

  const removeFromFavourites = (movie: Movie) => {
    const index = favourites.value.findIndex(
      item => movie.imdbID === item.imdbID
    );
    if (index > -1) favourites.value.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites.value));
  };

  const isFavourite = (movie: Movie): boolean => {
    return Boolean(favourites.value.find(item => item.imdbID === movie.imdbID));
  };

  onMounted(() => {
    favourites.value = getFavouritesFromStorage();
  });

  return {
    favourites,
    isFavourite,
    removeFromFavourites,
    AddToFavourite
  };
}
