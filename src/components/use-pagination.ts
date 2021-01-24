import { ref, watch, Ref } from "@vue/composition-api";

export default function usePagination(title: Ref) {
  const currentPageNumber = ref(1);
  watch(title, () => {
    currentPageNumber.value = 1;
  });
  return {
    currentPageNumber
  };
}
