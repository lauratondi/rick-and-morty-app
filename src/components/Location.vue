<template>
  <div class="loc">
    Locations
    <div>
      <h5>Location: {{ name }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Location',
  props: {
    name: String,
    residents: String,
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
};
</script>

<style scoped>
.loc {
  margin-top: 15%;
  color: white;
}
</style>
