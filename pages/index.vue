<script setup>
definePageMeta({
    layout: 'home',
});
</script>

<template>
    <div class="text-center">
        <h1 class="text-5xl font-bold my-2 text-gradient">Benotes: Notes & Bookmarks</h1>
        <h2 class="text-4xl font-bold my-2 text-white">Save all your information in</h2>
        <h2 class="text-4xl font-bold my-2 text-gradient">one place.</h2>
        <a href="/docs" class="inline-block my-12 px-6 py-3 text-2xl
                tracking-wide text-white bg-gradient-to-r from-orange-500 to-pink-500
                font-bold rounded-lg">Get started</a>
        <img class="mx-auto w-8/12" src="/demo_composed_screenshots.png" alt="Benotes Screenshot"/>
    </div>
</template>

<style>
    .text-gradient {
        @apply bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-700;
    }
</style>