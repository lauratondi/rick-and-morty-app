<template>
  <div class="card text-center">
    <div class="card-header">
      {{ character.name }}
    </div>
    <div class="card-body">
      <img :class="character.status" :src="character.image" alt=".." />
      <p class="card-text"></p>
    </div>
    <div class="card-footer text-muted">
      {{ character.type }}
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// import { Character } from '@/models/character';

export default {
  name: 'Character',

  setup() {
    const character = ref();
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
};
</script>
