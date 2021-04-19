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

export default defineComponent({
  components: {
    Location,
  },

  setup() {
    const location = ref({});
    const route = useRoute();

    onMounted(async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/location/${route.params.id}`
      );

      const data = await res.json();
      location.value = data;

      console.log(location.value);
    });

    return {
      location,
    };
  },
});
</script>
