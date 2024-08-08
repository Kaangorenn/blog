<script setup lang="ts">
const { slug } = useRoute().params;
</script>
<template>
    <div class="w-screen min-h-screen grid place-items-center">
        <div class="w-4/5 mx-auto bg-zinc-200 rounded-xl p-5 text-2xl my-5">
            <ContentDoc :path="`${slug}`" v-slot="{ doc }">
                <div v-if="doc">
                    <div class="text-5xl pb-5">
                        <h1>{{ doc.title }}</h1>
                    </div>
                    <div class="text-2xl">
                        <h2>{{ doc.description }}</h2>
                    </div>
                    <div class="py-5">
                        <NuxtImg :src="doc.thumbnail" class="h-96 w-full object-cover" />
                    </div>
                    <div v-for="tags in doc.tags" class="text-sm pb-5 inline-flex">
                        <p class="bg-zinc-300 mx-1 ml-0 px-5 py-2 rounded-full">{{ tags }}</p>
                    </div>
                    <div class="text-xl text-zinc-400">
                        <p>Author: {{ doc.author }}</p>
                    </div>
                    <div class="p-5">
                        <ContentRenderer :value="doc"></ContentRenderer>
                    </div>
                </div>
            </ContentDoc>
        </div>
    </div>
</template>
<style>
p:not(:last-child),
li:not(:last-child),
blockquote:not(:last-child),
h1:not(:last-child),
h2:not(:last-child),
h3:not(:last-child),
h4:not(:last-child),
pre:not(:last-child),
table:not(:last-child) {
    @apply mb-4;
}

.content h1 {
    @apply text-3xl font-bold;
}

.content h2 {
    @apply text-2xl font-bold;
}

.content h3 {
    @apply text-xl font-bold;
}

.content h4 {
    @apply text-lg font-bold;
}

.content h5 {
    @apply text-base font-bold;
}

img {
    border-radius: 0.75rem;
    object-fit: cover;
    height: 24rem;
    width: 100%;

}
</style>