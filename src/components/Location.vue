<template>
  <div class="loc">
    Locations
    <div>
      <h5>Location: {{ name }}</h5>
      <ul>
        <li v-for="resident in residents" :key="resident.id">
          <Residents v-if="residents.length !== 0" :residents="residents" />
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
import Characters from '@/components/Characters.vue';
import { Location as LocationType } from '@/types';

export default defineComponent({
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
  components: {
    Residents,
  },

  setup() {
    const residents = ref([] as any);

    const route = useRoute();
    const getResidents = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${route.params.id}`
      );

      const data = await res.json();
      residents.value = data.results;

      console.log(residents.value);
    };

    onMounted(getResidents);
    return {
      residents,
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
