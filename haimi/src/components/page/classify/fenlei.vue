<template>
    <div>
        <div v-for="item in datas" class='fenlei-box'>
            <div v-if='item.Records.length == 1' class='img-box'>
                <img :src='item.Records[0].Picture' />
            </div>
            <nav v-else class='navlist'>
                <a href="javascript:;" 
                v-for='navlist in item.Records'>
                    {{navlist.SlideName}}
                </a>
            </nav>
        </div>
    </div>
</template>
<script>
    export default{
        props : {
            datas : {
                type : Array,
                default : []
            }
        }
    }
</script>

<style lang="less" scoped>
    .fenlei-box{
        width:100%;
        .img-box{
            width:100%;
            img{
                display: block;
                width:100%;
            }
        }
    }
    .navlist{
        width:100%;
        background: #fff;
        overflow: hidden;
        padding:0.1rem 0;
        a{
            color:#242424;
            padding: .1rem;
            border: 1px solid #e5e5e5;
            float: left;
            margin :0.05rem 0.1rem;
        }
    }
</style>
