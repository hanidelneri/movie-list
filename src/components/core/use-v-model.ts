import { toRef, ref, Ref, watch, onMounted } from "@vue/composition-api";

export default function useVModel(
  props: { value: string | number },
  emit: (event: string, ...args: any[]) => void
) {
  const value = toRef(props, "value");
  let innerValue: Ref;

  if (typeof value === "string") {
    innerValue = ref("");
  } else innerValue = ref(0);

  onMounted(() => {
    innerValue.value = value.value;
  });

  watch(value, newVal => {
    innerValue.value = newVal;
  });

  watch(innerValue, newVal => {
    innerValue.value = newVal;
    emit("input", newVal);
  });

  return { innerValue };
}
