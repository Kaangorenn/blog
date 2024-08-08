<template>
    <div class="max-w-screen-2xl mx-auto">
        <div class="w-full h-72 grid place-items-center bg-zinc-200 text-5xl">Blogs</div>
        <div class="h-full w-full grid grid-cols-1 p-5">
            <ContentList path="/" v-slot="{ list }">
                <NuxtLink :to="`/blog/${blog._path.replace(/^\/+/, '')}`" v-for="blog in list" :key="blog._path" class="bg-zinc-200 hover:bg-zinc-300 transition-all duration-500 rounded-xl p-5 md:flex md:items-center relative mb-5">
                    <div class="rounded-xl overflow-hidden ">
                        <NuxtImg :src="blog.thumbnail" class="md:h-32 md:w-56 w-full h-48 object-cover" />
                    </div>
                    <div class="text-2xl md:px-5 pb-8 md:pb-0">
                        <span class="text-sm text-zinc-400">{{ blog.date }}</span>
                        <br>
                        {{ blog.title }}
                        <br>
                        <div v-for="tags in blog.tags" class="text-xs inline-flex">
                            <p class="bg-zinc-100 mx-1 ml-0 px-5 py-2 rounded-full">{{ tags }}</p>
                        </div>
                    </div>
                    <div class="absolute md:right-5 bottom-5 md:bottom-[70px]">
                        <div class="underline">Read more</div>
                    </div>
                </NuxtLink>
            </ContentList>
        </div>
    </div>
</template>