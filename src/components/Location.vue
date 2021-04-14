<template>
  <div class="loc">
    Locations
    <div>
      <h5>Location: {{ name }}</h5>
      <ul>
        <li v-for="resindent in residents" :key="resindent.id">
          {{ residents }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Location',
  props: {
    name: {
      type: String,
      required: true,
    },
    residents: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.loc {
  margin-top: 15%;
  color: white;
}
</style>
