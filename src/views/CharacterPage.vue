<template>
  <div class="card-container">
    <h5 class="title">Meet:</h5>
    <Character
      v-if="Object.keys(character).length !== 0"
      :name="character.name"
      :species="character.species"
      :image="character.image"
      :status="character.status"
      :origin="character.origin"
      :location="character.location"
    />
    <RelatedPage :relatedPage="character.name" />
    <router-link to="/characters"
      ><button class="btn">Back to Characters</button></router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Character from '@/components/Character.vue';
import RelatedPage from '@/components/RelatedPage.vue';

export default defineComponent({
  components: {
    Character,
    // RelatedPage,
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
  text-align: center;
  color: white;
}
.btn {
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: var(--dark-green);
}
@media (max-width: 43em) {
  .card-container {
    margin-top: 20%;
  }
}
</style>
