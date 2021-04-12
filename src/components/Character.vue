<template>
  <div class="card text-center" v-if="character !== null">
    <div class="card-header">
      {{ name }}
    </div>
    <div class="card-body">
      <img :class="status" :src="image" alt=".." />
      <p class="card-text"></p>
    </div>
    <div class="card-footer">
      {{ type }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Character } from '@/types';

export default defineComponent({
  name: 'Character',
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },

  setup() {
    const character = ref({});

    const route = useRoute();
    onMounted(async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${route.params.id}`
      );

      const data = await res.json();
      character.value = data;

      console.log(character.value);
    });

    return {
      character,
    };
  },
});
</script>

<style scoped>
.card {
  margin-top: 15%;
}
</style>
