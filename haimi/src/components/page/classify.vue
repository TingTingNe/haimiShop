<template>
    <div class="bigContent">
        <header-bar
        :typeNums="2"
         v-on:tabContent="tabContent"></header-bar>
        <div class="wrap-content">
            <component v-bind:is="currentView" :datas='clsData'>
            </component>
        </div>
        <footer-bar></footer-bar>

    </div>
</template>
<script>
import headerBar from '@/components/base/header'
import footerBar from '@/components/base/footer'
import fenlei from '@/components/page/classify/fenlei'
import pinpai from '@/components/page/classify/pinpai'
export default {
    components : {
        headerBar,
        footerBar,
        fenlei,
        pinpai
    },
    created () {
        this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list',{
            Params:{
                platform:"WAP"
            },
            jsonp:"_callback"
        }).then(function(data){
            this.clsData = data.body.data;
        })
    },
    data (){
       return {
           ind : 0,
           currentView : "fenlei",
           clsData : []
       }
    },
    methods: {
        tabContent ( index ){
            if( index ==0 ){
                this.clsData = [];
                this.currentView = "fenlei"
                this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list',{
                    Params:{
                        platform:"WAP"
                    },
                    jsonp:"_callback"
                }).then(function(data){
                    this.clsData = data.body.data;
                })
            }else{
                this.clsData = [];
                this.currentView = "pinpai";
                this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=yanxuan-brand-list',{
                    Params:{
                        platform:"WAP"
                    },
                    jsonp:"_callback"
                }).then(function(data){
                    this.clsData = data.body.data;
                })
            }
        }
    }
}

</script>
<style lang="less" scoped>
</style>