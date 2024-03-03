<template class="w-scree h-screen">
    <NuxtPwaManifest />
    <NuxtLoadingIndicator/>

    <Head>
        <Meta name="theme-color" content="#00b4d8"></Meta>
    </Head>
    
    <div id="side-container" class="z-20 fixed inset-0 h-full w-full invisible">
        <div @click="toggleMenu" id="over-bg" class="absolute duration-500 ease-out transition-all h-full w-full inset-0 bg-gray-900 opacity-0"></div>
        <div id="side-menu" class="absolute duration-500 ease-out transition-all w-[85%] md:w-96 h-full bg-white/90 right-0 top-0 translate-x-full">
            <div class="size-10 flex w-full p-2 justify-end cursor-pointer">
                <Icon @click="toggleMenu" name="material-symbols:close" class="text-3xl cursor-pointer text-sky-900" />
            </div>
            <div class="py-4 md:py-10 flex flex-col items-center justify-between gap-2 p-2">
                <div class="w-full">
                    <img src="~/assets/images/logo.png" alt="Main logo" class="w-24 h-16 my-2" />
                    <div @click="redirectPage('dashboard')" class="cursor-pointer w-full border border-sky-800 px-4 py-3  rounded bg-gray-200 hover:bg-zinc-200">
                        Dashboard
                    </div>
                    <div @click="redirectPage('categories')" class="cursor-pointer w-full border border-sky-800 px-4 py-3  rounded bg-gray-200 hover:bg-zinc-200">
                        Categories
                    </div>
                    <div class="w-full border border-sky-800  rounded cursor-pointer  hover:bg-zinc-200">
                        <div class="bg-gray-200 px-4 py-3 w-full" @click="toggleCalender">Calender</div>
                        <div  id="calender" class=" w-full hidden flex justify-center items-center p-3 -translate-y-full duration-500 ease-out transition-all">
                            <div class="flex flex-col gap-3">
                                <div class="text-lg font-semibold">Choose a Date</div>
                                <VueDatePicker :enable-time-picker="false" @date-update="dateClicked" v-model="date" inline auto-apply :max-date="new Date()" :transitions="true" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full py-3  rounded cursor-pointer bg-purple-900 text-white">
                    <button @click="$pwa.install()" class="w-full text-center">
                        Install
                    </button>
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
                        <img src="~/assets/images/logo.png" alt="Main logo" class="w-18 h-12 md:w-32 md:h-[5rem]" />
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
        <ClientOnly>
            <div
                v-if="$pwa?.offlineReady || $pwa?.needRefresh"
                class="pwa-toast"
                role="alert"
            >
                <div class="message">
                <span v-if="$pwa.offlineReady">
                    App ready to work offline
                </span>
                <span v-else>
                    New content available, click on reload button to update.
                </span>
                </div>
                <button
                v-if="$pwa.needRefresh"
                @click="$pwa.updateServiceWorker()"
                >
                Reload
                </button>
                <button @click="$pwa.cancelPrompt()">
                Close
                </button>
            </div>
            <div
                v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh"
                class="pwa-toast"
                role="alert"
            >
                <div class="message">
                <span>
                    Install PWA
                </span>
                </div>
                <button @click="$pwa.install()">
                Install
                </button>
                <button @click="$pwa.cancelInstall()">
                Cancel
                </button>
            </div>
        </ClientOnly>
    </div>
    
</template>

<script setup>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    const sideMenuOpen = ref(false)

    const date = ref(new Date());

    const dateClicked = async (date) => {
        
        let year = date.getFullYear(); // Get the 4-digit year
        let month = date.getMonth() + 1; // Get the month (0-11, add 1 for human-readable month)
        month = month < 10 ? '0'+month : month;
        let day = date.getDate(); 
        day = day < 10 ? '0'+day : day ;
        toggleMenu() ;
        await navigateTo({
            path: `/news/date/${day}-${month}-${year}`,
        })
    } ;

    // const { data, refresh  } = await useFetch(() => `/api/news/date/${page.value}`,{key:`list-${page.value}`}) ;

    function toggleMenu() {
        document.querySelector('#side-container').classList.toggle('invisible')
        document.querySelector('#over-bg').classList.toggle('opacity-0')
        document.querySelector('#over-bg').classList.toggle('opacity-50')
        document.querySelector('#side-menu').classList.toggle('translate-x-full')
    }

    function toggleCalender() {
        document.querySelector('#calender').classList.toggle('hidden')
        document.querySelector('#calender').classList.toggle('-translate-y-full')
    }

    async function redirectPage(page) {
        toggleMenu() ;
        if(page == 'dashboard') {
            await navigateTo('/')
        } else if(page =='categories') {
            await navigateTo('/news/category')
        }
    }

    
</script>

<style scoped>

</style>