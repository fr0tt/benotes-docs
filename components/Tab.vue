<script setup>
import { inject } from 'vue'

const currentName = inject('currentName')
</script>
<template>
  <div v-show="currentName === name">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}

</script>


<style></style>
