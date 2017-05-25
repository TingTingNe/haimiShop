<template>
    <div>
        <header class="hm-header" v-if="typeNums == 1">
            <div class="left-icon-group">
                <span calss="fa fa-search"></span>
                <input placeholder="搜索宝贝" id="text" @focus="focus()" @blur='blur()'>
        </div>
        <div class="right-icon-group">
                <a href="javascript:;">搜索</a>
        </div>
        </header>
        <header class="hm-header clsIfy-header" v-else-if="typeNums == 2">
            <a  
            v-for='(item,index) in titList' 
            @click="toggleList(index)"
            :class="index==0 ? 'on' : ''">{{item.name}}</a>
        </header>
        <div class='kong' id="kong"></div>
    </div>
</template>
<script>
    export default {
        props : {
            typeNums : {
                type : Number,
                default : 1
            }
        },
        data (){
            return  {
                titList : [
                    {
                        name : "分类"
                    },
                    {
                        name : "品牌"
                    }
                ]
            }
        },
        methods: {
            toggleList(index) {
                var header = document.querySelector("header"),
                    aList = header.querySelectorAll("a");
                    for(var i=0;i<aList.length;i++){
                        aList[i].className = ""
                    }
                    aList[index].className = "on"
                    this.$emit('tabContent',index)
            },
            focus() {
                var hmFooter = document.getElementById("hm-footer");
                    hmFooter.style.display = "none";
                    onblur
            },
            blur() {
                var hmFooter = document.getElementById("hm-footer");
                    hmFooter.style.display = "block";
            }
        }
    }
</script>
<style lang="less" scoped>
    .hm-header{
        width:100%;
        height: 0.44rem;
        background: #242424;
        line-height:0.44rem;
        display: -webkit-box;
        border-bottom: 1px solid #e5e5e5;
        
        div{
            &.left-icon-group{
                margin-left:0.05rem;
                -webkit-box-flex:1;
                height:100%;
                display: -webkit-box;
                -webkit-box-align: center;
                position: relative;
                input{
                    display: block;
                    width:100%;
                    height:60%;
                    background: #1a1a1a;
                    outline: none;
                    border:none;
                    font-size:0.12rem;
                    color:#fff;
                }
                span{
                    position: absolute;
                    width:0.3rem;
                    height:0.3rem;
                    color:#fff;
                    font-size:0.16rem;
                    z-index: 100;
                }
            }
            &.right-icon-group{
                padding:0 0.15rem;
                a{
                    color:#fff;
                }
            }
        }
        &.clsIfy-header{
            background: #fff;
            display: -webkit-box;
            -webkit-box-pack:center;
            padding-bottom: 0.05rem;
            a{
                display: block;
                padding:0 0.05rem;
                margin:0 0.2rem;
                font-size:0.12rem;
                color: #242424;
                &.on{
                    border-bottom: 2px solid #242424;
                }
            }
        }
    }
    .kong{
        width:100%;
        height:0.44rem;
        display: none;
    }
</style>