<template>
  <RandomCharacter
    @getRandom="getRandom"
    v-if="Object.keys(randomCharacter).length !== 0"
    :name="randomCharacter.name"
    :species="randomCharacter.species"
    :image="randomCharacter.image"
    :status="randomCharacter.status"
    :origin="randomCharacter.origin"
    :location="randomCharacter.location"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import RandomCharacter from '@/components/RandomCharacter.vue';

export default defineComponent({
  components: {
    RandomCharacter,
  },

  setup() {
    const randomCharacter = ref({});

    const getRandom = async () => {
      var randomId = Math.floor(Math.random() * 671);

      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`
      );

      const data = await res.json();
      randomCharacter.value = data;
      console.log(randomCharacter);
    };

    onMounted(getRandom);
    return {
      randomCharacter,
      getRandom,
    };
  },
});
</script>
