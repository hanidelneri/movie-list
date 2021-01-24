<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="pa-5">
          <router-view></router-view>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App"
});
</script>
