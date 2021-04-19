<template>
  <div class="cards">
    <h5 class="title">Welcome in {{ name }}</h5>
    <div class="row">
      <Residents :residents="characters" />
    </div>
  </div>
  <router-link to="/locations"
    ><button class="btn">Back to Locations</button></router-link
  >
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Character from '@/components/Character.vue';
import { Location as LocationType } from '@/types';
import Residents from '@/components/Residents.vue';

export default defineComponent({
  name: 'Location',

  props: {
    name: {
      type: String,
      required: true,
    },
  },
  components: { Residents },

  setup() {
    const residents = ref([] as any);
    const character = ref();
    const characters = ref([] as any);
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

    onMounted(getResidents);

    return {
      characters,
    };
  },
});
</script>

<style scoped>
/* h5 {
  margin-top: 15%;
  color: white;
  text-align: center;
} */
.cards {
  margin-top: 15%;
  width: 100%;
  overflow: hidden;
}

.title {
  text-align: center;
  color: white;
}
.row {
  justify-content: center;
  margin-right: 0;
  margin-left: 0;
  margin-top: 2%;
}
.row > * {
  width: unset !important;
}
.btn {
  margin-top: 10%;
  margin-bottom: 10%;
  background-color: var(--dark-green);
}
</style>
