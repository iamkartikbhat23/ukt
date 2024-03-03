<template class="w-scree h-screen">
    <NuxtLoadingIndicator/>
    <div id="side-container" class="z-20 fixed inset-0 h-full w-full invisible">
        <div @click="toggleMenu" id="over-bg" class="absolute duration-500 ease-out transition-all h-full w-full inset-0 bg-gray-900 opacity-0"></div>
        <div id="side-menu" class="absolute duration-500 ease-out transition-all w-[85%] md:w-96 h-full bg-white/90 right-0 top-0 translate-x-full">
            <div class="size-10 flex w-full p-2 justify-end cursor-pointer">
                <Icon @click="toggleMenu" name="material-symbols:close" class="text-3xl cursor-pointer text-sky-900" />
                <div class="py-10">

                </div>
            </div>
        </div>
    </div>
    <div class="w-full min-h-screen flex flex-col bg-sky-50 select-none">
        <header class="shadow-md shadow-sky-50 container mx-auto">
            <div class="flex justify-between items-center">
                <div></div>
                <NuxtLink to="/">
                    <div class="flex flex-col gap-0.5 items-center" data-aos="zoom-out-down">
                        <nuxt-img src="./assets/images/logo.png" alt="Main logo" class="w-18 h-12 md:w-32 md:h-[5rem]" />
                        <div class="text-sm text-purple-600">You Know This?</div>
                    </div>
                </NuxtLink>
                <div>
                    <Icon @click="toggleMenu" name="material-symbols:menu-open-rounded" class="text-4xl cursor-pointer text-sky-900" />
                </div>
            </div>
            <hr class="my-2 border-t-2 border-sky-300">
        </header>
        <main class="flex flex-grow container mx-auto">
            <slot />
        </main>
        <footer>
            <div class="flex justify-end gap-2 p-3">
                <div>TnC</div>
                <div>Feedbacks</div>
            </div>
        </footer>
    </div>
</template>

<script setup>
    function toggleMenu() {
        document.querySelector('#side-container').classList.toggle('invisible')
        document.querySelector('#over-bg').classList.toggle('opacity-0')
        document.querySelector('#over-bg').classList.toggle('opacity-50')
        document.querySelector('#side-menu').classList.toggle('translate-x-full')
    }
</script>

<style scoped>

</style>