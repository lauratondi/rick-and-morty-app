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
  <div v-if="characters.length === 0">
    <p style="color: white; height: 100vh">No Residents for this dimension</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
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
    const characters = ref([] as any);
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
.cards {
  width: 100%;
  margin-top: 15%;
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
/* 668px */
@media (max-width: 43em) {
  .cards {
    padding-top: 5%;
  }
}
</style>
