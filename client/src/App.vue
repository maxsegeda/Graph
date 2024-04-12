<template>
  <v-app>
    <v-text-field v-model="phone" label="Телефон"></v-text-field>
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
