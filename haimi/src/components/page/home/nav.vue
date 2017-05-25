<template>
    <div>
        <nav class="nav-bar" id="nav-bar">
            <a href="javascript:;" 
            v-for="(item,index) in navList" 
            @click="toggleClass(item.NavID,index)"
            :class="index==0 ? 'on' : ''">{{item.Title}}</a>
        </nav>
        <div class='kong' id="kong"></div>
    </div>
</template>
<script>
    export default {
       data (){
           return {
               navList : []
           }
       },
       created () {
            this.$http.jsonp('http://m.haimi.com/api/nav/list',{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                //赋值给alllist数组,
                this.navList=data.body.data;
            })
       },
        methods: {
            toggleClass (id,index){
                var navList = document.querySelector(".nav-bar"),
                    aList = navList.querySelectorAll("a");
                    for(var i=0;i<aList.length;i++){
                        aList[i].className = ""
                    }
                    aList[index].className = "on"
                    this.$emit('tabContent',index,id)
            }
        }
    }
</script>
<style lang="less" scoped>
    .kong{
        display: none;
        height:0.44rem;
    }
    .nav-bar{
        width:100%;
        height:0.44rem;
        background: #fff;
        display: -webkit-box;
        overflow:hidden;
        overflow:scroll;
        z-index: 1000;
        a{
            display: block;
            width:14.2%;
            text-align: center;
            line-height:0.44rem;
            color: #242424;
            font-size: 0.12rem;
            position: relative;
            &.on{
                &:after{
                    content:"";
                    width:80%;
                    height:3px;
                    background: #242424;
                    position: absolute;
                    left:10%;
                    bottom:0;
                }
            }
        }
    }
</style>