<template>
    <div class="w-full h-[5rem] flex items-center justify-between px-4">
        <NuxtLink to="/">M.Kazemi</NuxtLink>

        <div class="flex flex-row items-center space-x-4">
            <img 
            class="w-5 h-5 hover:w-7 hover:h-7 transition-all duration-250 cursor-pointer"
            src="~/assets/icons/instagram.png" 
            alt="instagram"
            @click="goToURL('https://www.instagram.com/mhkazemi_03/')">
            <img 
            class="w-5 h-5 hover:w-7 hover:h-7 transition-all duration-250 cursor-pointer"
            src="~/assets/icons/linkedin.png" 
            alt="linkedin"
            @click="goToURL('https://www.linkedin.com/in/mohammad-hosein-kazemi-a74aaa231/')">
            <img 
            class="w-5 h-5 hover:w-7 hover:h-7 transition-all duration-250 cursor-pointer"
            src="~/assets/icons/whatsapp.png" 
            alt="whatsapp"
            @click="goToURL('https://wa.me/+989111295159')">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToURL(url) {
            window.open(url);
        },
    }
}
</script>

<style>

</style>