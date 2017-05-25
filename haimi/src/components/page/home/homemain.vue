<template>
    <div class="main-content">
        <router-link 
        :to="{name:'xiangqing1',params :{id:item[0].CastID}}"
        v-for="item in maindata" class='info'>
            <img :src="item[0].Picture" />
        </router-link>
        <div v-for="item1 in maindata1" class='info' :class="item1.Records.length == 1 ? 'delMargin' : ''">
            <h3 v-if="item1.Channel.Name">{{item1.Channel.Name}}</h3>
            <div v-if="item1.Records.length == 1 && item1.Channel.Name == false">
                <a href="javascript:;" class='imgTitle'>
                    <img :src='item1.Records[0].Picture' />
                </a>
            </div>
            <div v-if="item1.Records.length == 3">
                <div class="left">
                    <router-link 
                    :to="{name:'xiangqing1',params :{id:item1.Records[0].CastID}}">
                        <div :style='{backgroundImage:"url("+item1.Records[0].Picture+")"}'><div></div></div>
                    </router-link>
                     <router-link 
                    :to="{name:'xiangqing1',params :{id:item1.Records[1].CastID}}">
                        <div :style='{backgroundImage:"url("+item1.Records[1].Picture+")"}'><div></div></div>
                    </router-link>
                </div>
                <router-link 
                    :to="{name:'xiangqing1',params :{id:item1.Records[2].CastID}}">
                        <div class="right" :style='{backgroundImage:"url("+item1.Records[2].Picture+")"}'>
                            <div></div>
                        </div>
                </router-link>
                
            </div>
            <div v-if="item1.Records.length == 6">
                <div class="imgList">
                    <div v-for="imgList in item1.Records">
                        <router-link 
                        :to="{name:'xiangqing1',params :{id:imgList.CastID}}">
                            <img :src="imgList.Picture" />
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-if="item1.Records.length == 7 || item1.Records.length == 5">
                <div class="imgList1">
                    <div v-for="imgList1 in item1.Records">
                         <router-link 
                        :to="{name:'xiangqing1',params :{id:imgList1.CastID}}">
                            <dl>
                                <dt>
                                    <img :src="imgList1.Picture" />
                                </dt>
                                <dd>
                                    <h4 :style='{color:imgList1.SlideNameColor}'>{{imgList1.SlideName}}</h4>
                                    <p :style='{color:imgList1.DescriptionColor}'>{{imgList1.Description}}</p>
                                </dd>
                            </dl>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props : {
            maindata : {
                type : Array,
                default : []
            },
            maindata1 : {
                type : Array,
                default : []
            }
        }
    }
</script>
<style lang="less" scoped>
.main-content{
    width:100%;
    .info{
        margin-bottom: 0.1rem;
        overflow: hidden;
        width:100%;
        &.delMargin{
            margin:0;
        }
        h3{
            width:100%;
            height:0.44rem;
            line-height: 0.44rem;
            background:#fff;
            text-align: center;
        }
        &:nth-child(1){
            width:100%;
            img{
                display: block;
                width:100%;
            }
        }
        &:nth-child(2){
            width:100%;
            img{
                display: block;
                width:100%;
            }
        }
        .right{
            width:50%;
            float:left;
            background-size:100% 100%;
            div{
                padding-top:120%;
            }

        }
        .left{
            width:50%;
            float:left;
            div{
                width:100%;
                background-size:100% 100%;
                div{
                    padding-top:60%;
                }
            }
        }
        .imgList{
            div{
                float:left;
                width:50%;
                img{
                    display: block;
                    width:100%;
                }
            }
        }
        .imgTitle{
            height:0.64rem;
            display: block;
            width:100%;
            img{
                display: block;
                width:100%;
            }
        }
        .imgList1{
            display: -webkit-box;
            background:#fff;
            overflow:scroll;
            dl{
                dt{
                    width:1.05rem;
                    height:1.05rem;
                    img{
                        display: block;
                        width:100%;
                    }
                }
                dd{
                    text-align: center;
                    h4{
                        font-size:0.12rem;
                        margin-bottom: 0.05rem;
                    }
                    p{
                        font-size:0.10rem;
                        padding-bottom: 0.05rem;
                    }
                }
            }
        }
    }
}
</style>