import { ref } from "@vue/composition-api";

export default function useTitleSearch() {
  const search = ref("");
  return { search };
}
