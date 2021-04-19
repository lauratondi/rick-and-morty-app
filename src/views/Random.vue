<template>
  <div class="card-container">
    <h5 class="title">Meet a random character:</h5>
    <Character
      @getRandom="getRandom"
      v-if="Object.keys(randomCharacter).length !== 0"
      :name="randomCharacter.name"
      :species="randomCharacter.species"
      :image="randomCharacter.image"
      :status="randomCharacter.status"
      :origin="randomCharacter.origin"
      :location="randomCharacter.location"
    />
    <button class="btn" @click="getRandom">Random</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Character from '@/components/Character.vue';

export default defineComponent({
  // props: {
  //   randomCharacter,
  // },
  components: {
    Character,
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

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 15%;
  color: black;
}

.title {
  /* margin-top: 15%; */
  /* margin-bottom: 5%; */
  text-align: center;
  color: white;
}

.btn {
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: var(--dark-green);
}

/* 668px */
@media (max-width: 43em) {
  .card-container {
    margin-top: 20%;
  }
}
</style>
