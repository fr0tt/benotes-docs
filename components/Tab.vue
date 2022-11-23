<script setup>
import { inject } from 'vue'
const props = defineProps({
  name: String,
})
const currentName = inject('currentName')
</script>

<template>
  <div v-show="currentName === props.name">
    <slot/>
  </div>
</template>