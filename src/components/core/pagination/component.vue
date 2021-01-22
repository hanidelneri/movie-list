<template>
  <v-pagination v-model="innerValue" :length="length" />
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Pagination",
  data() {
    return {
      innerValue: 1
    };
  },
  props: {
    totalItems: Number,
    value: Number,
    pageSize: Number
  },
  watch: {
    innerValue: {
      handler(newValue) {
        this.innerValue = newValue;
        this.$emit("input", newValue);
      }
    }
  },
  computed: {
    length(): number {
      return Math.ceil(this.totalItems / this.pageSize);
    }
  },
  mounted() {
    this.innerValue = this.value;
  }
});
</script>
