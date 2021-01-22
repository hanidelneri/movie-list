<template>
  <v-text-field
    v-model="innerValue"
    clearable
    outlined
    append-icon="mdi-magnify"
    v-bind="$attrs"
  />
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      innerValue: ""
    };
  },
  props: {
    value: String
  },
  watch: {
    innerValue: {
      handler(newValue) {
        this.innerValue = newValue;
        this.$emit("input", newValue);
      }
    }
  },
  mounted() {
    this.innerValue = this.value;
  }
});
</script>
