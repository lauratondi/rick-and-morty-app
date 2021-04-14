<template>
  <div>
    {{ resident.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Residents',

  props: {
    residents: {
      type: Array,
      required: true,
    },
  },
});
</script>
