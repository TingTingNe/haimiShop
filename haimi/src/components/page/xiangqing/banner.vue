<template>
    <div class='banner'>
        <swiper :options="xiangqingBanner" ref="mySwiper"  class="shopPic">
            <swiper-slide v-for='item in bannerDatas'>
                <router-link 
                :to="{name:'xiangqing1',params :{id:item.CastID}}">
                    <img :src='item.picture' />
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>
<script>
    export default {
       data(){
           return {
                 xiangqingBanner: {
                    autoplay: 2000,
                    initialSlide: 1,
                    loop: true,
                    pagination: '.swiper-pagination'
                }
           }
       },
       props: {
           bannerDatas : {
               type : Array
           }
       }
    }
</script>
<style lang="less"scoped>
    .shopPic{
        overflow: hidden;
        display: -webkit-box;
        width:100%;
        div{
            width:100%;
            img{
                display: block;
                width:100%;
            }
        }
    }
    @-webkit-keyframes bian{
        0%{
            -webkit-transform:translate(0,100%); 
        }
        100%{
            -webkit-transform:translate(0,0);
        }
    }
</style>