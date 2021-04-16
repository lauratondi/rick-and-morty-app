<template>
  <div class="loc">
    Locations
    <div>
      <h5>Location: {{ name }}</h5>
      <ul>
        <li v-for="resident in residents" :key="resident.id">
          {{ residents }}
        </li>
      </ul>
      <router-link to="/locations"
        ><button class="btn">Back to Locations</button></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Residents from '@/components/Residents.vue';
import Character from '@/components/Character.vue';
import { Location as LocationType } from '@/types';

export default defineComponent({
  name: 'Location',

  props: {
    name: {
      type: String,
      required: true,
    },
    residents: {
      type: Array,
    },
  },

  setup() {
    const route = useRoute();

    const residentId = window.location.search[1];
    const characterId = new URLSearchParams(residentId);

    console.log(characterId);
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
