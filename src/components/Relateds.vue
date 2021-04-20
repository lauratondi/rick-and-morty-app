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
        <!-- <div class="card text-center" :class="related.status">
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
        </div> -->
        <Character
          v-if="Object.keys(related).length !== 0"
          :name="related.name"
          :species="related.species"
          :image="related.image"
          :status="related.status"
          :origin="related.origin"
          :location="related.location"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Character from '@/components/Character.vue';

export default defineComponent({
  props: {
    relateds: Array,
  },
  components: {
    Character,
  },
});
</script>

<style scoped>
.btn {
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: var(--dark-green);
}
</style>
