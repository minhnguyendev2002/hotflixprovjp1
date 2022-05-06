<template>
    <div class="film-item">
        <nuxt-link :to='`/${card.id}`' class="film-images block"><img :src="`https://fluffy-bublanina-e57dfa.netlify.app/images/ListFilm/${card.image}`" :alt="card.name" /></nuxt-link>
        <div class="infor-film text-center mt-[10px]">
            <nuxt-link :to='`/${card.id}`'><h2 class="text-[#FFF]">{{ card.name }}</h2></nuxt-link>
            <span class="text-[#ffb400] mt-[5px]">{{ card.type }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"CardItem",
    props: {
        cardData: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            card: this.cardData,
        }
    }
}
</script>

<style scoped>
    .film-images img {
        object-fit: cover;
        min-height: 380px;
        max-height: 380px;
        border-radius: 10px;
        box-shadow: #cececc 1.95px 1.95px 2.6px;
        border: 1px solid #878787;
    }

    .infor-film a {
        width: 100%;
        overflow: hidden;
    }

    .infor-film a h2 {
        white-space: nowrap; 
        width: 240px;
        margin: 0 auto; 
        overflow: hidden;
        border: 1px solid #000;
        text-overflow: ellipsis;
    }
</style>