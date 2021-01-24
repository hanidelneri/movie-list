<template>
  <v-pagination v-model="innerValue" :length="length" :total-visible="8" />
</template>
<script lang="ts">
import Vue from "vue";
import useVModel from "../use-v-model";

export default Vue.extend({
  name: "Pagination",
  props: {
    totalItems: Number,
    value: Number,
    pageSize: Number
  },
  setup(props, { emit }) {
    const { innerValue } = useVModel({ value: props.value as number }, emit);
    return { innerValue };
  },
  computed: {
    length(): number {
      if (!this.totalItems) {
        return 0;
      }
      return Math.ceil(this.totalItems / this.pageSize);
    }
  }
});
</script>
