<template>
    <div>
        <div class='colors' v-if='xzData.PropertySku.Properties' @click='tanchu(xzData)'>
            <p>
                <span class='xz'>{{xz}}</span>
                <span>{{types}}</span>
                <span v-if='types1'>{{types1}}</span>
            </p>
        </div>
        <div class='tanchu'>
            <div class='kong' @click="rem()"></div>
            <div class='shop-box'>
                <div class='shopTit'>
                    <dl ref='dls'>
                        <dt>
                            <img :src="initPic" class='pics'/>
                        </dt>
                        <dd>    
                            <h5>¥{{xzData.FinalPrice}}</h5>
                            <p class='surplus'>(库存<span class='keep'>{{keep}}</span>件)</p>
                            <p class='type'
                                v-if='xzData.PropertySku.Properties'>
                                <span class='xz'>{{xz}}</span>
                                <span>{{types}}</span>
                                <span v-if='types1'>{{types1}}</span>
                            </p>
                        </dd>
                    </dl>
                </div>
                <div class='styles'>
                    <div v-for='(item,index) in xzData.AttrInfoArray' v-if='xzData.AttrInfoArray'>
                        <h5>{{item.AttrName}}</h5>
                        <p class='toggleType' @click='typeClick(xzData,$event,index)' ref="lable">
                            <span
                                v-for='(styles,index) in item.AttrValues.split(",")'>
                                {{styles}}
                            </span>
                        </p>
                    </div>
                </div>
                <div class="nums">
                    <p>购买数量</p>
                    <p>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </p>
                </div>
                <div class='btn-box'>
                    <p>加入购物车</p>
                    <p>立即购买</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                initPic : "",
                keep : "",
                types : "",
                xz : "",
                types1 : "",
                arr : [],
                flg : false,
                flg1 :false
            }
        },
        props: {
            xzData : {
                type : Object
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
                this.initPic = this.xzData.PicturesThumb;
                this.keep =  this.xzData.Stock;
                this.types = this.xzData.AttrInfoArray[0].AttrName;
                if(this.xzData.AttrInfoArray[1]){
                    this.types1 = this.xzData.AttrInfoArray[1].AttrName;
                }else{
                    this.types1 = null;
                }
                this.xz = "请选择:"
                if(! this.xzData.ProductPictures){
                    this.pagePic = null;
                }else{
                    this.pagePic = JSON.parse( this.xzData.ProductPictures);
                }
            },
            tanchu(datas){
                var tanchu = document.querySelector(".tanchu"),
                    body = document.querySelector("body"),
                    shopBox = document.querySelector(".shop-box");
                    tanchu.style.display='block';
                    body.style.overflow = 'hidden';
                    shopBox.style["-webkit-animation"] = "bian 2s forwards";
            },
            rem(){
                var tanchu = document.querySelector(".tanchu"),
                    body = document.querySelector("body");
                    tanchu.style.display='none';
                    body.style.overflow = 'auto';
            },
            typeClick(datas,e,ind){
                var thisDom = e.target,
                    _this = this,
                    inds = null,
                    colors = [],
                    childDom = this.$refs.lable[ind].querySelectorAll("span");
                    thisDom.className = thisDom.className ? "" : 'on';
                childDom.forEach(function(item,i){
                    if( item == thisDom ){
                        inds = i;
                        return;
                    }
                        item.className = "";
                })
                if(thisDom.nodeName == "P"){
                    return false;
                }
                if(thisDom.className != "on"){
                    this.initPic = this.xzData.PicturesThumb;
                    this.keep = this.xzData.Stock;
                    if(ind == 0){
                        this.flg = false;
                        this.types =  this.xzData.AttrInfoArray[0].AttrName;
                    }else{
                        if(this.types1){
                            this.flg1 = false;
                            this.types1 = this.xzData.AttrInfoArray[1].AttrName;
                        }
                    }
                }else{
                    if(ind == 0){
                        this.arr = [];
                        for(var i=0;i<datas.SkuInfo.length;i++){
                            colors = datas.SkuInfo[i].SkuName.split(",")[0];
                            if(thisDom.innerHTML.trim() == colors){
                                this.arr.push(datas.SkuInfo[i].Stock);
                            }
                        }
                        this.types = datas.AttrInfoArray[0].AttrValues.split(",")[inds];
                        this.initPic = datas.SkuPictures[inds].PictureThumb;
                        this.flg = true;
                    }else{
                        this.keep = this.arr[inds];
                        this.types1 = datas.AttrInfoArray[1].AttrValues.split(",")[inds];
                        this.flg1 = true;
                    }
                    this.xz = "已选择:";
                }
                if(this.flg == false && this.flg1 == false){
                    this.xz = "请选择:";
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .productScore{
        height:0.44rem;
        background: #fff;
        position: relative;
        p{
            line-height: 0.44rem;
            font-size:0.14rem;
            padding-left:0.1rem;
            span{
                color:#991f33;
                padding: 0 0.1rem;
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
    .tanchu{
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index: 5;
        display: none;
        .kong{
            position: absolute;
            left:0;
            top:0;
            right:0;
            bottom:0;
            z-index: 10;
        }
        .shop-box{
            position: fixed;
            left:0;
            right:0;
            bottom:0;
            z-index: 11;
            background: #fff;
            -webkit-transform:translate(0,100%); 
            .shopTit{
                padding: 0.2rem;
                border-bottom: 1px solid #e0e0e0;
                dl{
                    display: -webkit-box;
                    dt{
                        width:.6rem;
                        height:.6rem;
                        margin-right: 0.1rem;
                        img{
                            display: block;
                            width:100%;
                        }
                    }
                    dd{
                        h5{
                            font-size: 0.14rem;
                            color: #991f33;
                            margin-bottom: .1rem;
                        }
                        .surplus{
                            font-size: 0.12rem;
                            color: #999;
                            margin-bottom: .1rem;
                        }
                        .type{
                            font-size: 0.14rem;
                            color:#666;
                        }
                    }
                }
            }
            .styles {
                border-bottom: 1px solid #e6e6e6;
                padding:0.1rem;
                h5{
                    font-size: 0.12rem;
                    line-height: 2;
                    margin-bottom: 0.05rem;
                }
                p{
                    display: -webkit-box;
                    span{
                        display: block;
                        font-size: 0.12rem;
                        border: 1px solid #000;
                        padding:0.05rem;
                        margin-right:0.05rem;
                        &.on{
                            border: 1px solid #801a2a;
                            color: #801a2a;
                        }
                    }
                }
            }
            .nums,.btn-box{
                width:100%;
                height:.44rem;
                display: -webkit-box;
                p{
                    -webkit-box-flex: 1;
                    line-height: 0.44rem;
                }
            }
            .nums{
                padding: 0 0.1rem;
                height:0.6rem;
                p{
                    line-height: 0.6rem;
                    &:nth-child(2){
                    display: -webkit-box;
                    text-align: center;
                    -webkit-box-align: center;
                    -webkit-box-pack: end;
                        span{
                            display: block;
                            width:.3rem;
                            height:.3rem;
                            border: 1px solid #e6e6e6;
                            line-height: .3rem;
                            &:nth-child(2){
                                width:.52rem;
                            }
                        }
                    }
                }
            }
            .btn-box{
                p{
                    text-align: center;
                    font-size: 0.16rem;
                    &:nth-child(1){
                        border-top: 1px solid #eee;
                    }
                    &:nth-child(2){
                        background: #801a2a;
                        border-top: 1px solid #801a2a;
                        color:#fff;
                    }
                }
            }
        }
    }
</style>