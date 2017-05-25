<template>
    <div class='page-main'>
        <h3 v-if='maindata'>{{maindata.Title}}</h3>
        <div class='page-content' v-if='maindata'>
             <router-link 
                     v-for='(item,index) in maindata.Products'
                    :to="{name:'xiangqing1',params :{id:item.ProductID}}">
                     <dl :class='index%2 == 1 ? "right" : "left"'>
                        <dt>
                            <img :src='item.Pictures' />
                        </dt>
                        <dd>
                            <h4>{{item.Subject}}</h4>
                            <p>¥ {{item.FinalPrice}}</p>
                        </dd>
                    </dl>
            </router-link>
           
        </div>
    </div>
</template>


<script>
    export default {
        props : {
            maindata : {
                type : Object
            }
        }
    }

</script>

<style lang="less">
    .page-main{
        width:100%;
        h3{
            height:0.44rem;
            width:100%;
            text-align: center;
            line-height:0.44rem;
        }
        .page-content{
            width:100%;
            a{
                color:#000;
                dl{
                    background: #fff;
                    width:49%;
                    margin-bottom:0.1rem;
                    dt{
                        width:1.8375rem;
                        height:1.8375rem;
                        margin-bottom: 0.1rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    dd{
                        padding: 0 0.1rem;
                        h4{
                            width:100%;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                            margin-bottom: 0.1rem;
                        }
                        p{
                            font-size:0.12rem;
                            margin-bottom: 0.1rem;
                        }
                    }
                    &.left{
                        float:left;
                    }
                    &.right{
                        float:right;
                    }
                }
            }
        }
    }
</style>