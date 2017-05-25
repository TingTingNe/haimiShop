<template>
    <div class='pinpaiBigbox'>
        <div v-for="item in datas" class='pinpai-box'>
            <dl v-for='dlList in item.Records'>
                <dt>    
                    <img :src='dlList.Picture' />
                </dt>
                <dd>
                    <h4>{{dlList.SlideName}}</h4>
                    <p>{{dlList.Description}}</p>
                </dd>
            </dl>
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
.pinpaiBigbox{
    background: #fff;
    overflow: hidden;
    .pinpai-box{
      width:100%;
      dl{
          float:left;
          width:33%;
          margin-bottom:0.15rem;
          dt{
              width:100%;
              margin-bottom:0.1rem;
              img{
                  display: block;
                  width:100%;
              }
          }
          dd{
              width:100%;
              text-align: center;
              p{
                  font-size:0.12rem;
                  color:#999;
                  margin-top:0.05rem;
              }
          }
      }
  }
}
  
</style>
