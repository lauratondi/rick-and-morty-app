<template>
  <div class="loc">
    Locations
    <div>
      <h5>Location: {{ name }}</h5>
      <!-- <ul>
        <li v-for="resident in residents" :key="resident.id">
          {{ residents }}
        </li>
      </ul> -->
      <!-- <Residents :residents="residents" /> -->
      <Residents :residents="characters" />
      <router-link to="/locations"
        ><button class="btn">Back to Locations</button></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Character from '@/components/Character.vue';
import { Location as LocationType } from '@/types';
import Residents from '@/components/Residents.vue';

export default defineComponent({
  components: { Residents },
  name: 'Location',

  props: {
    name: {
      type: String,
      required: true,
    },
    // residents: {
    //   type: Array,
    // },
  },

  setup() {
    const residents = ref<number[]>([]);
    const character = ref();
    const characters = ref<any[]>([]);
    const location = ref();
    const route = useRoute();

    const getResidents = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/location/${route.params.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          const ids = data.residents.map((url: string) =>
            Number(
              url.replace('https://rickandmortyapi.com/api/character/', '')
            )
          );

          return fetch(
            `https://rickandmortyapi.com/api/character/${ids.join(',')}`
          );
        })
        .then((res) => res.json())
        .then((data) => {
          characters.value = Array.isArray(data) ? data : [data];
        });

      return characters.value;
    };
    // const getResidents = () => {
    //   Promise.all([
    //     fetch(`https://rickandmortyapi.com/api/location/${route.params.id}`),
    //     fetch(`https://rickandmortyapi.com/api/character/${route.params.id}`),
    //   ])
    //     .then(function (response) {
    //       return Promise.all(
    //         response.map(function (response) {
    //           return response.json();
    //         })
    //       );
    //     })
    //     .then(function (data) {
    //       residents.value = data;
    //       console.log(data);
    //     });
    // };

    onMounted(getResidents);

    return {
      characters,
    };
  },
});
</script>

<style scoped>
.loc {
  margin-top: 15%;
  color: white;
}

.btn {
  background-color: var(--dark-green);
}
</style>
