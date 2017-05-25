<template>
    <div class="bigContent">
        <div class="wrap-content">
            <div class='topBox'>
            <a href="/">去首页逛逛</a>
            </div>
            <h4 class='tit'>大家都在买的宝贝</h4>
            <div class='tuijianBox'>
                <dl v-for='(item,index) in tuijian' :class='index%2 == 1 ? "right" : "left"'>
                    <dt>
                        <img :src='item.Pictures' />
                    </dt>
                    <dd>
                        <h4>{{item.Subject}}</h4>
                        <p>¥{{item.FinalPrice}}</p>
                    </dd>
                </dl>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import footerBar from '@/components/base/footer'
    export default {
        components : {
            footerBar
        },
        data (){
            return {
                tuijian : []
            }
        },
        created (){
             this.$http.jsonp('http://m.haimi.com/api/cart/info?clearInvalidProducts=Y',{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                this.tuijian = data.body.extra.Suggest;
            })
        }
    }
</script>

<style lang="less" scoped>
.bigContent{
    overflow: hidden;
    .topBox{
        width:100%;
        height:3.5rem;
        display: -webkit-box;
        -webkit-box-pack:center;
        -webkit-box-align:center;
        a{
            margin: 0 auto;
            color:#242424;
            border: 1px solid #000;
            text-align: center;
            font-size:0.12rem;
            display: block;
            padding:0.1rem;
        }
    }
    .tit{
        width:100%;
        height:0.44rem;
        background: #fff;
        text-align:center;
        line-height: 0.44rem;
        border-bottom: 1px solid #eee;
    }
    .tuijianBox{
        width:100%;
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
    
</style>

