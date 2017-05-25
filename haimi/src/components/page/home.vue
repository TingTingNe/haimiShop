<template>
    <div class="bigContent">
        <header-bar
        :typeNums="1"></header-bar>
        <div class="wrap-content">
            <nav-bar v-on:tabContent="tabContent"></nav-bar>
            <component v-bind:is="currentView" :index="pageIndex" :navId="navID">
            </component>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
import headerBar from '@/components/base/header'
import navBar from '@/components/page/home/nav'
import footerBar from '@/components/base/footer'
import tuijian from '@/components/page/home/tuijian'
import page from '@//components/page/home/page'
export default {
    data (){
        return  {
            navID : "2",
            currentView : "tuijian",
            pageIndex : 0
        }
    },
    components : {
        headerBar,
        navBar,
        footerBar,
        tuijian,
        page
    },
    methods: {
        tabContent ( index,navID ){
            if( index ==0 ){
                this.currentView = "tuijian"
            }else{
                this.currentView = "page"
            }
            this.pageIndex = index;
            this.navID = navID;
        }
    }
}

</script>
<style lang="less">
    .bigContent{
        background: #F7F7F7;
    }
    .wrap-content{
        overflow: hidden;
        padding-bottom:0.45rem;
    }
</style>