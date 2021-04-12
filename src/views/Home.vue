<template>
  <Characters :characters="characters" />
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import Characters from '@/components/Characters';
import { onMounted } from 'vue';

export default defineComponent({
  name: 'Home',

  components: {
    Characters,
  },

  setup() {
    const characters = ref([] as any);

    onMounted(async () => {
      // const { data } = await axios.get(
      //   'https://rickandmortyapi.com/api/character/1,2,3,4,5,7,11,183,14,20'
      // );

      // console.log(data);
      // mainCharacters.value = data;
      const res = await fetch(
        'https://rickandmortyapi.com/api/character/5,7,11,183,14,20,1,2,3,4,'
      );

      const data = await res.json();
      characters.value = data;
      console.log(characters.value);
    });
  },
});
</script>
