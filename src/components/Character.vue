<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
.card {
  margin-bottom: 2%;
  border-radius: 2%;
  color: white;
  background-color: var(--dark-color);
}

.Alive {
  border: green 5px solid;
}

.Dead {
  border: red 5px solid;
}

img {
  width: 100%;
  border-radius: 50%;
}
.card-header {
  border-bottom: white 2px solid;
}
.card-footer {
  border-top: white 2px solid;
}

/* 668px */
@media (max-width: 43em) {
  .card {
    width: 15rem;
  }
}
</style>
