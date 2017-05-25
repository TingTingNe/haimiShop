<template>
    <div>
        <banner-list 
        :bannerdata='getBannerList'
        :navdata='navList'></banner-list>
        <main-box
        :maindata="commodity"
        :maindata1="commodity1"></main-box>
    </div>
</template>
<script>

    import bannerList from '@/components/page/home/banner'
    import mainBox from '@/components/page/home/homemain'
    export default {
       data (){
           return {
               getBannerList : [],
                navList : [],
                commodity: [],
                commodity1 :[]
           };
       },
       created : function(){
           this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_'+this.navId,{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                var res = data.body.data;
                 this.getBannerList = res[0].Records;
                 this.navList = res[1].Records;
                 for(var i=2;i<=3;i++){
                    this.commodity.push(res[i].Records);
                 }
                 for(var m=4;m<res.length;m++){
                    this.commodity1.push(res[m]);
                 }
            })
       },
       props : {
           index : {
               type : Number,
               default : 0
           },
           navId : {
               type : String,
               default : ""
           }
       },
       components : {
            bannerList,
            mainBox
       }
    }

</script>