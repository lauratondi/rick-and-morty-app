<template>
  <div v-for="resident in residents" :key="resident.id">
    <Character
      v-if="Object.keys(resident).length !== 0"
      :name="resident.name"
      :species="resident.species"
      :image="resident.image"
      :status="resident.status"
      :origin="resident.origin"
      :location="resident.location"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Character from '@/components/Character.vue';

export default defineComponent({
  props: {
    residents: Array,
  },

  components: {
    Character,
  },
});
</script>

<style scoped>
.row > * {
  width: unset !important;
}
</style>
