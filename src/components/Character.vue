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
  <!-- <RelativeCharacters :relativeCharacters="relativeCharacters" /> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Character } from '@/types';
import { setup } from 'vue-class-component';

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
/* .card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 15%;
  color: black;
} */
.card {
  margin-bottom: 2%;
}

.Alive {
  border: green 5px solid;
}

.Dead {
  border: red 5px solid;
}

/* 668px */
@media (max-width: 43em) {
  /* .card-container {
    padding-top: 5%;
  } */
  .card {
    width: 80%;
  }
  img {
    width: 90%;
  }
}
</style>
