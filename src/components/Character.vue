<template>
  <div class="card-container">
    <h5 class="title">Meet:</h5>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 15%;
}

.title {
  margin-bottom: 5%;
  text-align: center;
  color: white;
}

.Alive {
  border: green 5px solid;
}

.Dead {
  border: red 5px solid;
}
.btn {
  margin-top: 10%;
  margin-bottom: 5%;
  background-color: var(--dark-green);
}
/* 668px */
@media (max-width: 43em) {
  .card-container {
    padding-top: 5%;
  }
  .card {
    width: 80%;
  }
  img {
    width: 90%;
  }
}
</style>
