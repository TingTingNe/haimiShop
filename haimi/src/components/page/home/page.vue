<template>
    <div>
        <page-banner :bannerdata="getBanner" v-if='getBanner'></page-banner>
        <page-main :maindata='getmain'></page-main>
    </div>
</template>
<script>
    import pageBanner from '@/components/page/home/pagebanner'
    import pageMain from '@/components/page/home/pagemain'
    export default {
       data (){
           return {
               getBanner : null,
               getmain : null
           }
       },
       props : {
           navId : {
               type : String,
               default : ""
           }
       },
       components : {
           pageBanner,
           pageMain
       },
       created (){
            this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_'+this.navId,{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                var res = data.body.data;
                this.getBanner = res[0].Records;
            })
            this.$http.jsonp("http://m.haimi.com/api/nav/advert-team-products?NavID="+this.navId+"&page=1&pageSize=100&",{
                Params : {
                    platform : "WAP"
                },
                 jsonp:"_callback"
            }).then(function(data){
                console.log(data.body.data)
                this.getmain = data.body.data[0];
            })
       },
       watch : {
           navId(){
                this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_'+this.navId,{
                    Params:{
                        platform:"WAP"
                    },
                    jsonp:"_callback"
                }).then(function(data){
                    var res = data.body.data;
                    if(res[0]){
                        this.getBanner = res[0].Records;
                    }else{
                        this.getBanner = null;
                    }
                })
                 this.$http.jsonp("http://m.haimi.com/api/nav/advert-team-products?NavID="+this.navId+"&page=1&pageSize=100&",{
                    Params : {
                        platform : "WAP"
                    },
                    jsonp:"_callback"
                }).then(function(data){
                     this.getmain = data.body.data[0];
                })
           }
       }
    }
</script>