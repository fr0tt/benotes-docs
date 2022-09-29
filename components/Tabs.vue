<script setup>
import { ref, provide } from 'vue'
const currentName = ref('current')
provide('currentName', currentName)
</script>
<template>
  <div class="tabs-component">
    <button v-for="(tab, i) in tabs" :key="i" @click="showTab(i, tab, tab.props.name)">
      {{ tab.props.name }}
    </button>
    <div class="">
      <slot />
    </div>
  </div>
</template>
<script>
import { provide, reactive, readonly } from 'vue'

export default {
  data() {
    return {
      tabs: []
    }
  },
  methods: {
    showTab (index, tab, name) {
      this.currentName = name
    }
  },
  mounted() {
    if (this.$slots !== null) {
      this.$slots.default?.().map((child) => {
        this.tabs.push(child)
      })
      this.currentName = this.tabs[0].props.name // this.currentTab = this.tabs[0]

    }
  }
}
</script>

<style>
  .tabs-component button {
    @apply px-4 py-1 border-b-2 font-semibold bg-orange-100 border-orange-300 transition-colors;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  .tabs-component button:hover, .tabs-component button.active {
    @apply border-orange-500 bg-orange-500/25 text-orange-500;
  }
</style>