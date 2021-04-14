<template>
  <div class="cards">
    <div class="card" v-for="location in locations" :key="location.id">
      <h5 class="card-header">{{ location.name }}</h5>
      <div class="card-body">
        <p class="card-text">
          <b>Type:</b> {{ location.type }} <br />
          <b>Dimension:</b> {{ location.dimension }}
        </p>
        <router-link :to="`/locations/${location.id}`">Residents</router-link>
      </div>
    </div>
  </div>
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="prev"
          >Previous</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { onMounted, ref, PropType, defineComponent } from 'vue';

import { Location } from '@/types';

export default defineComponent({
  name: 'Locations',

  setup() {
    const locations = ref([] as any);
    const page = ref(1);

    const load = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/location/?page=${page.value}`
      );

      const data = await res.json();
      locations.value = data.results;

      console.log(locations.value);
    };
    onMounted(load);

    const next = async () => {
      page.value++;
      await load();
    };

    const prev = async () => {
      page.value--;
      await load();
    };

    return {
      locations,
      next,
      prev,
    };
  },
});
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 15%;
  overflow: hidden;
  text-align: center;
}

.cards > * {
  margin-bottom: 1%;
}
.card {
  width: 30%;
}
</style>
