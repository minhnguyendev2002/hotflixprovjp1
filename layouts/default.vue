<template>
    <div>
        <Header />
        <div class="max-w-[1380px] mx-auto">
            <Nuxt />
        </div>
    </div>
</template>

<script>
import Header from "../components/Header"

export default {
    name:"DefaultLayout",
    components: {
        Header
    }
}
</script>