<template>
  <v-app name="app" v-model="phone">
    <div>
      <Calls :phone="phone" />
    </div>
  </v-app>
</template>

<script>
import Calls from "./components/Calls.vue";

export default {
  components: {
    Calls,
  },
  data() {
    return {
      phone: "",
    };
  },
};
</script>

<style scoped></style>
