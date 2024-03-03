<template>
    <div class="w-full min-h-screen flex flex-col">
        <header class="shadow-md shadow-green-200 container mx-auto">
            <div class="flex justify-between">
                <div></div>
                <div>
                    <img src="~/assets/images/logo.png" class="w-40 h-24" />
                </div>
                <div></div>
            </div>
        </header>
        <main class="flex flex-grow container mx-auto">
            <slot />
        </main>
        <footer>
            <nav>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </nav>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>