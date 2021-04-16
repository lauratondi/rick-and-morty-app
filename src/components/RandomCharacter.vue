<template>
  <div class="card-container">
    <h5 class="title">Meet a random character:</h5>
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
    <button class="btn" @click="$emit('getRandom')">Random</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
  border: 5px solid red;
}
.btn {
  margin-top: 5%;
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
    width: 80%;
  }
}
</style>
