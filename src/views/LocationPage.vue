<template>
  <Location
    v-if="Object.keys(location).length !== 0"
    :name="location.name"
    :residents="location.residents"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Location from '@/components/Location.vue';
import axios from 'axios';

export default defineComponent({
  components: {
    Location,
  },

  setup() {
    const location = ref({});
    // const residents = ref([] as any);

    const route = useRoute();

    onMounted(async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/location/${route.params.id}`
      );

      const data = await res.json();
      location.value = data;

      console.log(location.value);
    });

    // const getResidents = async () => {
    //   const res = await fetch(
    //     `https://rickandmortyapi.com/api/character/${route.params.id}`
    //   );

    //   const data = await res.json();
    //   residents.value = data.results;

    //   console.log(residents.value);
    // };
    // const load = async () => {
    //   const res = await fetch(
    //     `https://rickandmortyapi.com/api/location/${route.params.id}`
    //   ).then((res) => {
    //     const residents = data.results.residents;
    //     return fetch(
    //       `https://rickandmortyapi.com/api/character/${route.params.id}`
    //     );
    //   });
    //   const data = await res.json();
    //   location.value = data.results.locations;
    //   residents.value = data.results.residents;
    //   console.log(residents.value);
    // };

    // onMounted(load);

    return {
      location,
      // getResidents,
    };
  },
});
</script>
