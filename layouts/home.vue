<template>

    <header>
        <nav class="flex px-8 py-6">
            <div class="flex-1">
                <svg class="w-8 inline-block align-middle" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 32C0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32Z" fill="#F60"></path><path d="M63.6 37.8c-3 12-7.8 15-7 14.6 0 0-3 5-13 9.4L21 42.2c19.434-34.6 13.154-3.8 24-18l18.6 13.6Z" fill="#0A0A0A" fill-opacity=".24"></path><path fill="#F60" d="M22.4 24H42v15.6H22.4z"></path><path d="M19 31.45h7.75v-9.3H19v9.3Zm0 10.85h7.75V33H19v9.3Zm9.3 0h7.75V33H28.3v9.3Zm9.3 0h7.75V33H37.6v9.3Zm-9.3-10.85h7.75v-9.3H28.3v9.3Zm9.3-9.3v9.3h7.75v-9.3H37.6Z" fill="#fff"></path>
                </svg>
                <span class="ml-2 text-orange-500 font-medium align-middle text-lg">
                    Benotes
                </span>
            </div>
            <div class="">
                <a href="https://github.com/fr0tt/benotes" target="_blank">
                    <img class="w-8 inline-block" src="/GitHub-Mark-Light-64px.png" alt="GitHub"/>
                </a>
            </div>
        </nav>
    </header>

    <main>
        <slot />
    </main>

</template>

<style>
html {
    min-height: 100%;
    @apply bg-gradient-to-b from-gray-800 to-gray-900;
}
</style>