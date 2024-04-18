<template>
  <v-app>
    <Calls :phone="phone" />
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
