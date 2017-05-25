<template>
    <div class="main-top">
        <swiper :options="bannerList" ref="mySwiper"  class="bannerList">
            <!-- slides -->
            <swiper-slide class="banner" v-for="item in bannerdata">
                <router-link 
                :to="{name:'xiangqing1',params :{id:item.CastID}}">
                    <img :src="item.Picture" />
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
        <nav class="navList">
            <a :href="item.wapURL" v-for="item in navdata" :style="{color:item.SlideNameColor}">
                <div><img :src="item.Picture" /></div>
                <span>{{item.SlideName}}</span>
            </a>
        </nav>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        props : {
            bannerdata : {
                type : Array,
                default : []
            },
            navdata : {
                type : Array,
                default : []
            }
        },
        components : {
            swiper,
            swiperSlide
        },
        data() {
            return {
                bannerList: {
                    autoplay: 2000,
                    initialSlide: 1,
                    loop: true,
                    pagination: '.swiper-pagination'
                }
            }
        }
    }
</script>
<style lang="less" scoped>
.main-top{
    width:100%;
    .bannerList{
        overflow: hidden;
        margin-bottom:0.1rem;
        width:100%;
        display: -webkit-box;
        .banner{
            width:100;
            img{
                display: block;
                width:100%;
            }
        }
    }
    .navList{
        background: #fff;
        width:100%;
        display: -webkit-box;
        padding-bottom: 0.1rem;
        margin-bottom:0.1rem;
        a{
            display: block;
            width:0;
            -webkit-box-flex:1;
            -webkit-box-orient: vertical;
            -webkit-box-pack:center;
            div{
                width:100%;
                margin-bottom: 0.1rem;
                img{
                    display: block;
                    width:100%;
                }
            }
            span{
                text-align: center;
                display: block;

            }
        }
    }
}
</style>