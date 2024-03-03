<template>
    <NuxtLoadingIndicator/>
    <div class="w-full min-h-screen flex flex-col bg-sky-50 select-none">
        <header class="shadow-md shadow-sky-50 container mx-auto">
            <div class="flex justify-between">
                <div></div>
                <NuxtLink >
                    <img src="~/assets/images/logo.png" alt="Main logo" class="w-20 h-12 md:w-40 md:h-24" />
                </NuxtLink>
                <div></div>
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