<template>
  <button
    class="btn"
    type="button"
    data-toggle="collapse"
    data-target="#collapseExample"
    aria-expanded="false"
    aria-controls="collapseExample"
  >
    Suggestions
  </button>

  <div class="collapse" id="collapseExample">
    <div v-for="related in relateds" :key="related.id">
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
