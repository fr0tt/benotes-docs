<script setup>
import { ref, reactive, provide, onMounted } from 'vue'
const slots = useSlots()
const currentName = ref(0)
const state = reactive({ tabs: [] })

onMounted(() => {
  if (slots === null)
    return
  slots.default?.().map((child) => {
    state.tabs.push(child)
  })
  currentName.value = state.tabs[0].props.name
})

function showTab (index, tab, name) {
  currentName.value = name
}

provide('currentName', currentName)

</script>

<template>
  <div class="tabs-component">
    <button v-for="(tab, i) in state.tabs" :key="i" @click="showTab(i, tab, tab.props.name)"
      :class="[currentName === tab.props.name ? 'is-active' : '']">
      {{ tab.props.name }}
    </button>
    <div class="my-2">
      <slot />
    </div>
  </div>
</template>

<style>
  .tabs-component {
    @apply my-8;
  }
  .tabs-component button {
    @apply px-4 py-1 border-b-2 font-medium bg-orange-100 border-orange-700 transition-colors;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  .tabs-component button.is-active,
  .tabs-component button:hover,
  .tabs-component button.active {
    @apply bg-orange-500 text-white;
  }
</style>