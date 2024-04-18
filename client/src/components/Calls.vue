<script setup>
import { defineProps, ref, computed } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const props = defineProps(["phone"]);

const { result } = useQuery(
  gql`
    query callsHistory {
      callsHistory {
        history {
          _id
          phone
          created
          name
        }
      }
    }
  `,
  () => ({
    phone: props.phone,
  })
);
const search = ref("");
const filteredPhones = computed(() => {
  if (!search.value || !result.value.callsHistory.history) {
    return [];
  }

  return result.value.callsHistory.history.filter((phone) =>
    phone.phone.includes(search.value)
  );
});
</script>
<script>
export default {
  data: () => ({
    open: ["Users"],
  }),
};
</script>
<template>
  <v-card v-if="result?.callsHistory?.history" class="mx-auto" width="300">
    <v-list-item prepend-icon="mdi-phone" title="Всі телефони"></v-list-item>
    <v-list v-model:opened="open">
      <v-list-item
        v-for="(item, index) in result?.callsHistory?.history"
        :key="index"
        :title="item.phone"
      ></v-list-item>
    </v-list>
  </v-card>
  <v-card class="mx-auto mt-10" width="300">
    <v-list v-model:opened="open">
      <v-text-field
        v-model="search"
        label="Інформація по номеру"
      ></v-text-field>
      <v-list-item v-for="phone in filteredPhones" :key="phone._id">
        _id:{{ phone._id }}<br />
        phone:{{ phone.phone }}<br />
        created:{{ phone.created }}<br />
        name:{{ phone.name }}</v-list-item
      >
    </v-list>
  </v-card>
</template>
<style scoped></style>
