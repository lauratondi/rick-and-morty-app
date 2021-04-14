<template>
  <Character
    v-if="Object.keys(character).length !== 0"
    :name="character.name"
    :species="character.species"
    :image="character.image"
    :status="character.status"
    :origin="character.origin"
    :location="character.location"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue';
import { useRoute } from 'vue-router';
// import { Character  } from '@/types';
import Character from '@/components/Character.vue';

export default defineComponent({
  // props: {
  //   detail: {
  //     type: Object as PropType<CharacterType>,
  //     required: true,
  //   },
  // },

  components: {
    Character,
  },

  setup() {
    const character = ref({});
    const route = useRoute();

    const load = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${route.params.id}`
      );

      const data = await res.json();
      character.value = data;

      console.log(character.value);
    };

    onMounted(load);

    return {
      character,
    };
  },
});
</script>
