<template>
    <section class="details-box flex items-center relative max-h-[600px] h-[600px]">
        <div class="details-content w-2/5 relative py-[140px] pl-[100px]">
            <h2 class="text-[#FFF] text-[36px] font-medium">{{ card.name }}</h2>
            <span class="text-[#fff] block mt-[20px]"><strong class="text-[#ffb400]">Thể loại:</strong> {{ card.type }}</span>
            <span class="text-[#fff] block mt-[20px]"><strong class="text-[#ffb400]">Năm phát hành:</strong> {{ card.year }}</span>
            <p class="text-[#fff] mt-[20px]"><strong class="text-[#ffb400]">Lời dẫn:</strong> {{ card.description }}</p>
            <div class="text-[#fff] mt-[20px]"><strong class="text-[#ffb400]">Tác giả:</strong> {{ card.director }}</div>
        </div>
        <div class="details-background w-3/5 p-[35px]">
            <img class="object-contain max-h-[525px]" :src="`https://fluffy-bublanina-e57dfa.netlify.app/images/ListFilm/${card.image}`" :alt="card.name" />
            <div class="details-background-item absolute">
                <img class="w-[100%] object-contain" :src="`https://fluffy-bublanina-e57dfa.netlify.app/images/ListFilm/${card.image}`" :alt="card.name" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DetailsFilm',
    data() {
        return {
            card: Object
        }
    },
    created() {
        this.$axios.$get(`https://hotflix-df697-default-rtdb.firebaseio.com/datafilm/${this.$route.params.id}.json`)
        .then(res => {
            this.card = res
            return res
        })
    }
}
</script>

<style scoped>
    .details-box {
        overflow-y: hidden;
        box-shadow: rgba(255, 255, 255, 0.12) 0px 20px 40px 0px, rgba(255, 255, 255, 0.32) 0px 20px 80px 0px;    
    }

    .details-background > img {
        border-radius: 10px;
        transform: translateX(65%);
    }

    .details-background-item {
        width: 100%;
        left: 0;
        top: 0;
        z-index: -2;
    }

    .details-background-item img {
        opacity: 50%;
    }

    .details-content {
        height: 100%;
    }

    .details-content::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: -200px;
        left: 0;
        z-index: -1;
        background: 
                linear-gradient(to right, #181818 10%,
                rgba(23,23,23,.98) 20%,
                rgba(23,23,23,.97) 25%,
                rgba(23,23,23,.95) 35%,
                rgba(23,23,23,.94) 40%,
                rgba(23,23,23,.92) 45%,
                rgba(23,23,23,.9) 50%,
                rgba(23,23,23,.87) 55%,
                rgba(23,23,23,.82) 60%,
                rgba(23,23,23,.75) 65%,
                rgba(23,23,23,.63) 70%,
                rgba(23,23,23,.45) 75%,
                rgba(23,23,23,.27) 80%,
                rgba(23,23,23,.15) 85%,
                rgba(23,23,23,.08) 90%,
                rgba(23,23,23,.03) 95%,
                rgba(23,23,23,0) 100%);
    }

</style>
