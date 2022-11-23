<script setup>
  const config = useAppConfig()
</script>

<template>
  <main>

    <header class="flex px-8 py-4 border-b-2 border-orange-500">
      <div class="flex-1 logo">
        <svg class="w-8 inline-block align-middle" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 32C0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32Z" fill="#F60"></path><path d="M63.6 37.8c-3 12-7.8 15-7 14.6 0 0-3 5-13 9.4L21 42.2c19.434-34.6 13.154-3.8 24-18l18.6 13.6Z" fill="#0A0A0A" fill-opacity=".24"></path><path fill="#F60" d="M22.4 24H42v15.6H22.4z"></path><path d="M19 31.45h7.75v-9.3H19v9.3Zm0 10.85h7.75V33H19v9.3Zm9.3 0h7.75V33H28.3v9.3Zm9.3 0h7.75V33H37.6v9.3Zm-9.3-10.85h7.75v-9.3H28.3v9.3Zm9.3-9.3v9.3h7.75v-9.3H37.6Z" fill="#fff"></path>
        </svg>
        <span class="ml-2 text-orange-500 font-semibold align-middle text-lg">
          Benotes
        </span>
      </div>
      <div class="searchbar group inline-block px-2 py-0.5 border-2 rounded-xl border-gray-400">
        <svg class="w-5 inline-block mr-2 align-middle text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
        </svg>
        <input class="align-middle text-orange-500 outline-none"
          placeholder="Search"/>
      </div>
    </header>

    <div class="flex">
      <aside class="w-80 px-12 py-12">
        <section v-for="section in config.sidebar" :key="section.name" class="mb-4">
          <span class="block mb-1 font-semibold text-gray-600 text-lg">{{ section.name }}</span>
          <NuxtLink v-for="page in section.pages" :key="page.link" :to="page.link"
            class="block text-gray-800 hover:text-orange-500 transition-colors">{{ page.name }}
          </NuxtLink>
        </section>
      </aside>

      <div class="documentation px-4 py-12">
        <slot />
      </div>

    </div>

  </main>
</template>

<script>
import '~/assets/app.scss'
export default {

  mounted () {
    document.querySelectorAll('h3').forEach(headline => {
      const id = headline.innerHTML.trim().toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll(':', '')
        .replace('<!--[-->', '')
        .replace('<!--]-->', '')
      headline.id = id
      headline.parentElement.querySelector('a').href = '#' + id
    })
  }
}
</script>

<style>
  .documentation {
    max-width: 1200px;
    margin-right: auto;
  }
  /*
  .border-1\.5 {
    border-width: 1.5px;
  }*/
  .router-link-active {
    @apply text-orange-500;
  }
</style>