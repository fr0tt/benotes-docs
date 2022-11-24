<script setup>
const slots = useSlots()
if (slots !== null) {
    console.log(slots.default?.())
    useHead({
      title: slots.default?.()[0].children
    })
}
</script>

<template>
    <h1 class="text-2xl my-6 font-semibold">
        <slot />
    </h1>
</template>

