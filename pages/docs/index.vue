<script setup>
useHead({
    title: 'Documentation',
})
</script>

<template>
    <Headline>What is Benotes ?</Headline>
    <ul>
        <li>
            Benotes is an open-source self hosted application that allows you to save
            bookmarks and notes side by side
        </li>
        <li>
            You can use it on every device from everywhere and it can also be installed
            both on mobile and desktop devices (as a PWA)
        </li>
    </ul>

    <SubHeadline>Ok, but what exactly can I do with it ?</SubHeadline>
    <p>Well if you really want to go into details, here is small list:</p>

    <ul>
        <li>Bookmarks can be automatically saved with an image, title and description</li>
        <li>
            post and bookmark items can be stored in collections that can be nested - with
            tags if you like
        </li>
        <li>supports both markdown and a rich text editor</li>
        <li>allows for as many user accounts as you like</li>
        <li>can be installed as a PWA on your mobile devices and desktop</li>
        <li>allows you to import and export bookmarks</li>
        <li>
            share content to this app (if installed as an PWA and supported by your
            browser)
        </li>
        <li>collections can be shared with your friends via a public available URL</li>
        <li>links can be instantly pasted as new posts</li>
        <li>
            can be hosted almost anywhere, thanks to its use of the lightweight Lumen
            framework and well supported PHP language
        </li>
        <li>
            works with and without a persistent storage layer (both filesystem and S3 are
            supported)
        </li>
        <li>can also be hosted via Docker, Docker Compose or on Heroku</li>
        <li>protect your data with (daily) backups</li>
    </ul>
</template>
