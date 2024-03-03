<template>
    <div class="w-full min-h-screen flex flex-col bg-sky-50">
        <header class="shadow-md shadow-sky-50 container mx-auto">
            <div class="flex justify-between">
                <div></div>
                <div>
                    <img src="~/assets/images/logo.png" class="w-40 h-24" />
                </div>
                <div></div>
            </div>
            <hr class="py-2 border-t-2 border">
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