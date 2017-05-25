<template>
    <div class="main-top">
        <div class="bannerList">
            <div class="banner" v-for="item in bannerdata">
                <img :src="item.Picture" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props : {
            bannerdata : {
                type : Array,
                default : []
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
}
</style>