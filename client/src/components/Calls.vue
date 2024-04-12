<script setup>
import { ref, onMounted } from "vue";
import { useLayout } from "vuetify";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const isOpen = ref(false);
const { getLayoutItem, mainRect } = useLayout();

onMounted(() => {
  console.info("selected phone ", props.phone);
  console.info("mainRect ", mainRect);
});

console.info("layout ", getLayoutItem("app-bar"));
const { result } = useQuery(
  gql`
    query callsHistory($phone: PhoneNumber) {
      callsHistory {
        history(phone: $phone) {
          phone
        }
      }
    }
  `,
  () => ({
    phone: props.phone,
  })
);
</script>
<template>
  <h1>Hello</h1>
  <div>{{ result?.callsHistory?.history }}</div>
</template>

<style lang="scss" scoped></style>
