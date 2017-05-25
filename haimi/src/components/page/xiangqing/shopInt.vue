<template>
    <div>
         <div class='shopMsg'>
            <h3 class='tit'>{{int.Subject}}</h3>
            <div class='pirceAndNms'>
                <p class='pirce'>
                    <span>¥{{int.FinalAmount}}</span>
                    <span>{{int.FinalPrice}}</span>
                </p>
                <p class='nums'>月消{{int.SoldNum}}件</p>
            </div>
        </div>
        <div class='postage'>
            邮费{{int.Postage.slice(0,1)}}元
        </div>
        <div class='baozhang'>
            <p v-for='bz in int.Promises'>{{bz}}</p>
        </div>
        <div class='tejia' v-if='int.Promotions[0]'>
            <p>{{int.Promotions[0].Subject}}</p>
        </div>
    </div>
</template>


<script>
    export default {
        props : {
            int : {
                type : Object
            }
        }
    }
</script>

<style lang="less" scoped>
    .shopMsg{
        padding:0.1rem;
        position: relative;
        background: #fff;
        &:after{
            content:"";
            width:100%;
            height:1px;
            background: #999;
            position: absolute;
            left:0;
            bottom:0;
        }
        .tit{
            font-size:0.16rem;
            line-height: 0.24rem;
            margin-bottom: .15rem;
        }
        .pirceAndNms{
            display: -webkit-box;
            -webkit-box-pack:justify;
            .pirce{
                :nth-child(1){
                    color:#991f33;
                    font-size:0.16rem;
                }
                :nth-child(2){
                    color:#999;
                    font-size:0.12rem;
                    margin-left: .2rem;
                    text-decoration: line-through;
                }
            }
            .nums{
                font-size:.12rem;
                color:#999;
            }
        }
    }
    .postage{
        background: #fff;
        font-size: 0.12rem;
        color:#999;
        height:0.44rem;
        line-height: .44rem;
        padding-left:0.1rem;
        margin-bottom:0.1rem;
    }
    .baozhang{
        background: #fff;
        display: -webkit-box;
        height:0.44rem;
        position: relative;
        &:after{
            content:"";
            width:100%;
            height:1px;
            background: #999;
            position: absolute;
            left:0;
            bottom:0;
        }
        p{
            font-size:0.12rem;
            line-height: 0.44rem;
            margin-left:0.1rem;
        }
    }
</style>