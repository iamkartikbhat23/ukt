<template class="w-scree h-screen">
    <NuxtLoadingIndicator/>
    <div id="side-container" class="fixed inset-0 h-full w-full invisible">
        <div id="over-bg" class="absolute h-full w-full inset-0 bg-gray-900 opacity-0"></div>
        <div id="side-menu" class="absolute w-96 h-full bg-green-500 right-0 top-0 ">
    
        </div>
    </div>
    <div class="w-full min-h-screen flex flex-col bg-sky-50 select-none">
        <header class="shadow-md shadow-sky-50 container mx-auto">
            <div class="flex justify-between items-center">
                <div></div>
                <NuxtLink to="/">
                    <div class="flex flex-col gap-0.5 items-center" data-aos="zoom-out-down">
                        <img src="~/assets/images/logo.png" alt="Main logo" class="w-18 h-12 md:w-32 md:h-[5rem]" />
                        <div class="text-sm text-purple-600">You Know This?</div>
                    </div>
                </NuxtLink>
                <div>
                    <Icon name="material-symbols:menu-open-rounded" class="text-4xl cursor-pointer text-sky-900" />
                    
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

<script>
    export default {
        
    }
</script>

<style scoped>

</style>