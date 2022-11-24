<script setup lang="ts">
    useHead({
        title: '',
        titleTemplate: (titleChunk) => {
            return titleChunk ? 'Benotes - ' + titleChunk : 'Benotes';
        }
    })
</script>

<template>

    <Head>
        <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Meta name="description" content="Benotes. Your new open-source bookmark and notes companion" />
    </Head>

    <Body>
        <div>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </div>
    </Body>

</template>
