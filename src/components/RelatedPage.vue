<template>
  <Relateds :relateds="characters" />
</template>

<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Relateds from '@/components/Relateds.vue';

export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },

  components: {
    Relateds,
  },

  setup() {
    const characters = ref([]);
    const route = useRoute();

    const getRelateds = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${route.params.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          const name = data.name;

          return fetch(
            `https://rickandmortyapi.com/api/character/?name=${name}`
          );
        })
        .then((res) => res.json())
        .then((data) => {
          characters.value = data.results;
        });

      console.log(characters.value);
      return characters.value;
    };

    onMounted(getRelateds);

    return {
      characters,
    };
  },
});
</script>
