<script setup>
import { useMainStore } from '~/stores/mainStore';
const mainStore = useMainStore();

const plus_button = () => {
    mainStore.increment();
}
const minus_button = () => {
    mainStore.decrement();
}
</script>
<template>
    <div class="p-5 bg-white m-5 rounded-lg max-w-lg shadow-lg">
        <p>This is a project which I made to understand how Nuxt Content works, and so I can come back later to reference it.</p>
        <NuxtLink to="/blogs" class="bg-black text-white px-5 py-2 rounded-lg relative h-10 hover:bg-yellow-400 hover:text-black transition-all duration-500">Go To Blogs</NuxtLink>
    </div>

</template>