<template>
    <footer class="hm-footer" id="hm-footer">
        <nav>
            <router-link :to="item.url" v-for="item in footerList" active-class='on'>
                <i :class="item.class"></i>
                <span>{{item.name}}</span>
            </router-link>
        </nav>
    </footer>
</template>
<script>
export default {
    data(){
        return {
            footerList : [
                {
                    name : "首页",
                    class : "icon-home",
                    url : "/home"
                },
                {
                    name : "分类",
                    class : "icon-align-justify",
                    url : "/classify"
                },
                {
                    name : "购物车",
                    class : "icon-shopping-cart",
                    url : "/shopcar"
                },
                {
                    name : "我的",
                    class : "icon-user",
                    url : window.localStorage['phone'] ? "/my" : "/login"
                }
            ]
        }
    },
    methods : {

    }
}
</script>
<style lang="less" scoped>
    .hm-footer{
        width:100%;
        height:.44rem;
        position: fixed;
        bottom:0;
        left:0;
        border-top:1px solid #e5e5e5;
        background: #fff;
        z-index: 10;
        nav{
            width:100%;
            display:-webkit-box;
            height:100%;
            padding-top:0.05rem;
            a{
                width:0;
                display:block;
                -webkit-box-flex:1;
                display:-webkit-box;
               -webkit-box-orient:vertical;
               -webkit-box-align:center;
               color: #999;
               i{
                   display:block;
                   font-size:0.18rem;
               }
               span{
                   margin-top:0.05rem;
                   display:block;
                   font-size:0.12rem;
               }
               &.on{
                   color: #801a2a;
               }
            }
        }
    }
</style>