<template>
  <div class="card-container">
    <div class="card text-center" :class="status">
      <div class="card-header">
        {{ name }}
      </div>
      <div class="card-body">
        <img :src="image" alt=".." />
        <p class="card-text"></p>
        <p><b>Origin:</b> {{ origin.name }}</p>
        <p><b>Location:</b> {{ location.name }}</p>
      </div>
      <div class="card-footer">{{ status }} | {{ species }}</div>
    </div>
    <router-link to="/characters"
      ><button class="btn">Back to Characters</button></router-link
    >
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
    species: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    origin: {
      type: Object,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.card-container {
  margin-top: 15%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Alive {
  border: green 5px solid;
}

.Dead {
  border: 5px solid red;
}
.btn {
  margin-top: 10%;
  background-color: #1f8b4f;
}
</style>
