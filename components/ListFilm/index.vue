<template>
    <div class="list-film-box">
        <div class="options text-[#FFF] text-center ">
            <h3 class="font-medium text-[21px] text-[#FFF]">Các thể loại</h3>
            <ul class="flex items-center justify-center list-options mt-[20px]">
                <li><a-button @click="filterArr('Action')">Hành động</a-button></li>
                <li><a-button @click="filterArr('Fantasy')">Viễn tưởng</a-button></li>
                <li><a-button @click="filterArr('Romance')">Lãng mạn</a-button></li>
                <li><a-button @click="filterArr('Cartoon')">Hoạt hình</a-button></li>
                <li><a-button @click="filterArr('Horror')">Kinh dị</a-button></li>
            </ul>
        </div>
        <div class="list-film my-[30px]">
            <Card 
                v-for="item in getDataArr" 
                :key="item.id" 
                :card-data="item"
            /> 
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import Card from "../Card";

export default {
    name:"ListFilm",
    components: {
        Card
    },
    computed: {
        ...mapGetters('film', ['getDataArr'])
    },
    created() {
        this.getApiArr()
    },
    methods:{
        ...mapActions('film', ['getApiArr','filterArr'])
    }
}
</script>

<style scoped>
    .list-film {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        gap: 25px;
    }

    .film-item .film-images {
        border: 1px solid #CCC;
        border-radius: 16px;
        overflow: hidden;
    }

    .infor-film h2 {
        font-weight: 600;
    }
    
    .infor-film span {
        font-weight: 600;
        font-size: 14px;
        cursor:unset;
    }

    .list-options li button {
        padding: 5px 25px;
        border: 2px solid #ffb400;
        margin: 0 10px;
        color: #ffb400;
        border-radius: 8px;
        transition: .3s ease;
        height: 50px;
        background-color: transparent;  
    }

    .list-options li button:hover {
        background-color: #ffb400;
        color: #FFF;
    }
</style>