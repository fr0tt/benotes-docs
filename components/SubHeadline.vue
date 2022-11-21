<template>
    <div class="headline-container -ml-8 text-xl">
        <a class="float-left" href=""><button>#</button></a>
        <h3 class="ml-8 mt-8 mb-4 font-semibold text-gray-900"><slot/></h3>
    </div>
</template>

<style>
    .headline-container a {
        @apply hidden cursor-pointer align-bottom;
        left: -2rem;
    }
    .headline-container:hover a {
        display: inline-block
    }
</style>