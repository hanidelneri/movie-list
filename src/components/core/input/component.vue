<template>
  <v-text-field
    v-model="innerValue"
    clearable
    append-icon="mdi-magnify"
    v-bind="$attrs"
  />
</template>
<script lang="ts">
import Vue from "vue";
import useVModel from "../use-v-model";
export default Vue.extend({
  props: {
    value: String
  },
  setup(props, { emit }) {
    const { innerValue } = useVModel(props as { value: string }, emit);
    return { innerValue };
  }
});
</script>
