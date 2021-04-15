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
  height: 100vh;
  margin-top: 15%;
}
.Alive {
  border: green 5px solid;
}

.Dead {
  border: 5px solid red;
}
.btn {
  margin-top: 10%;
  background-color: var(--dark-green);
}
</style>
