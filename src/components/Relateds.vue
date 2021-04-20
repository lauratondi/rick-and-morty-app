<template>
  <button
    class="btn"
    type="button"
    data-toggle="collapse"
    data-target="#collapseExample"
    aria-expanded="false"
    aria-controls="collapseExample"
  >
    Get related
  </button>

  <div class="collapse" id="collapseExample">
    <div id="related">
      <div v-for="related in relateds" :key="related.id">
        <div class="card text-center" :class="related.status">
          <div class="card-header">
            {{ related.name }}
          </div>
          <div class="card-body">
            <img :src="related.image" alt=".." />
            <p class="card-text"></p>
            <p><b>Origin:</b> {{ related.origin.name }}</p>
            <p><b>Location:</b> {{ related.location.name }}</p>
          </div>
          <div class="card-footer">
            {{ related.status }} | {{ related.species }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    relateds: Array,
  },
});
</script>

<style scoped>
.btn {
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: var(--dark-green);
}
#related {
  background-color: var(--grey-color);
}
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
