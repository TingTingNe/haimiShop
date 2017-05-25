<template>
    <div class='xiangqingBox bigContent'>
        <div class='info'>
            <banner-com
            :bannerDatas='pagePic'></banner-com>
            <div v-for='items in pageData'>
                <shop-int
                :int='items'></shop-int>
                <xz-type
                :xzData='items'></xz-type>
                <div class='productScore'>
                    <p>宝贝评分<span>{{items.ProductScore}}分</span></p>
                </div>
                <div class='pinglun'>
                    <div v-for='item in items.TopReviews' class='plBox'>
                        <div class='user'>
                            <div>
                                <img :src='item.Buyer.Avatar'  />
                                <p class='user-name'>{{item.Buyer.NickName}}</p>
                            </div>
                            <time>{{item.CreateTime.slice(5,16)}}</time>
                        </div>
                        <p class='pinglunMsg'>{{item.BuyerNote}}</p>
                        <div class='pic'>
                            <div v-if='item.BuyerPicturesThumb'><img :src='item.BuyerPicturesThumb' /></div>
                            <div v-if='item.BuyerPicturesThumbWebp'><img :src='item.BuyerPicturesThumbWebp' /></div>
                            <div v-if='item.BuyerPictures'><img :src='item.BuyerPictures' /></div>
                            <div v-if='item.BuyerPicturesWebp'><img :src='item.BuyerPicturesWebp' /></div>
                        </div>
                    </div>
                </div>
                <div v-html='items.Descriptioin' class='tj-shop'>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bannerCom from '@/components/page/xiangqing/banner'
import shopInt from '@/components/page/xiangqing/shopInt'
import xzType from '@/components/page/xiangqing/xzType'
    export default {
        data (){
            return {
                pageData : [],
                pagePic : []
            }
        },
        created (){
            this.getData();
        },
        watch: {
            '$route': 'getData'
        },
        methods : {
            getData(){
                 if(this.$route.params.id){
                    this.$http.jsonp('http://www.haimi.com/api/product/detail-cdn?ProductID='+this.$route.params.id,{
                        Params:{
                            platform:"WAP"
                        },
                        jsonp:"_callback"
                    }).then(function(data){
                        var res = data.body.data;
                        this.pageData = [];
                        this.pageData.push(res);
                        this.initPic = res.PicturesThumb;
                        this.keep = res.Stock;
                        if(res.AttrInfoArray[0]){
                            this.types = res.AttrInfoArray[0].AttrName;
                        }
                        this.xz = "请选择:"
                        if(!res.ProductPictures){
                            this.pagePic = null;
                        }else{
                            this.pagePic = JSON.parse(res.ProductPictures);
                        }
                    })
                }else{

                }
            }
        },
         components: {
            bannerCom,
            shopInt,
            xzType
        }
    }
</script>
<style lang="less">
    .xiangqingBox{
        width:100%;
        height:100%;
        position: relative;
        .info{
             position: relative;

            .tejia,.colors{
                background: #fff;
                height:0.44rem;
                margin-bottom: 0.1rem;
                p{
                    line-height: 0.44rem;
                    margin-left:0.1rem;
                    color:#242424;
                }
            }
            .tj-shop{
                background: #fff;
                padding:0.1rem;
                overflow: hidden;
                img{
                    display: block;
                    width:100%;
                }
                p{
                    line-height:.2rem;
                    img{
                        display: block;
                        width:100%;
                    }
                    span{
                        line-height: 0.24rem;
                    }
                }
                div{
                    width:100%;
                }
                iframe{
                    width:100%;
                }
            }
            .pinglun{
                width:100%;
                background: #fff;
                padding: 0 0.1rem;
                .plBox{
                    position: relative;
                    .user{
                        width:100%;
                        height:.44rem;
                        display: -webkit-box;
                        -webkit-box-pack:justify;
                        div{
                            display: -webkit-box;
                            -webkit-box-align: center;
                            img{
                                display: block;
                                width:0.24rem;
                                height:0.24rem;
                                margin-right: 0.15rem;
                            }
                            p{
                                display: block;
                                color:#999;
                            }
                        }
                        time{
                            display: block;
                            line-height: 0.44rem;
                            font-size:0.12rem;
                            color:#999;
                        }
                    }
                    .pinglunMsg{
                        padding:0.1rem;
                        line-height: 1.5;
                    }
                    .pic{
                        width:100%;
                        display: -webkit-box;
                        padding-bottom: 0.1rem;
                        div{
                            width:.5rem;
                            height:.5rem;
                            margin:0.05rem;
                        }
                        img{
                            display: block;
                            height:100%;
                        }
                    }
                    &:after{
                        content:"";
                        width:100%;
                        height:1px;
                        background: #999;
                        position: absolute;
                        left:0;
                        bottom:0;
                    }
                }
            }
        }
    }
    @-webkit-keyframes bian{
        0%{
            -webkit-transform:translate(0,100%); 
        }
        100%{
            -webkit-transform:translate(0,0);
        }
    }
</style>