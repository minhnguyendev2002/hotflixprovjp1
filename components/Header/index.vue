<template>
    <header>
        <div class="flex items-center justify-center h-[95px] px-[20px] py-[10px]">
            <nuxt-link to="/" class="logo h-auto w-[100px]">
                <img class="scale-150" src="@/assets/images/logo.png" alt="logo" />
            </nuxt-link>
        </div>
    </header>
</template>

<script>
export default {
    name:"HeaderComponent"
}
</script>