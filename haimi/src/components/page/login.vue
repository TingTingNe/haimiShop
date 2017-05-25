<template>
    <div class='myLogin'>
        <h4>请输入手机号码验证码直接登录</h4>
        <div class='login'>
            <label>
                <span>手机号：</span>
                <input type="text" v-model="text"/>
            </label>
            <label>
                <span>验证码：</span>
                <input type="text" v-model="num"/>
                <div class='nums num1' 
                @click='getNums'
                ref='get'>获取验证码</div>
                <div class='nums' ref='nums'></div>
            </label>
        </div>
        <button @click='login'>登录</button>
    </div>
</template>


<script>
    export default {
        data (){
            return  {
                text : "",
                num : ""
            }
        },
        methods : {
            login (){
                var inputBox = document.querySelectorAll("input"),
                    reg = /^(((1[0-9][0-9]{1})|(15[0-9]{1}))+\d{8})$/;
                    for(var i=0;i<inputBox.length;i++){
                        if(inputBox[i].value == ""){
                            alert("不能问空");
                            inputBox[i].focus();
                            return false;
                        }
                    }
                    if(!reg.test(this.text)){
                        alert("请输入正确手机号")
                        return false;
                    }
                    if(this.$refs.nums.innerHTML != this.num){
                        alert("验证码有误")
                        return false;
                    }
                    window.localStorage['phone'] = this.text;
                    if(window.localStorage['phone']){
                        this.$router.push({path:"/my"})
                    }
                
            },
            getNums (){
                var arr = [];
                for(var i=1;i<=4;i++){
                   arr.push( Math.floor(Math.random()*10) );
                }
                var str = arr.join("") ;
                this.$refs.get.innerHTML = "";
                this.$refs.nums.innerHTML = str;
            }
        }
    }
</script>


<style lang="less" scoped>
    .myLogin{
        width:100%;
        height:100%;
        background: #fff;
        h4{
            color: #991f33;
            line-height: .36rem;
            background: #fff9f3;
            text-align: center;
        }
        .login{
            padding:0 0.1rem;
            position: relative;
            label{
                height:.36rem;
                line-height: .36rem;
                display: block;
                border-bottom: 1px solid #ccc;
                margin-top:0.2rem;
                span{
                    color:#666;
                }
                input{
                    outline: none;
                    border:none;
                }
            }
            .nums{
                position: absolute;
                right:5%;
                bottom:0;
                color:#991f33;
                font-size:0.12rem;
                min-width:.3rem;
                min-height:.36rem;
                &.num1{
                    z-index: 100;
                }
            }
        }
        button{
            width:95%;
            height:.44rem;
            line-height: .44rem;
            border: none;
            font-size: .14rem;
            color:#fff;
            margin: 0 auto;
            display: block;
            text-align: center;
            background: #991f33;
            margin-top:0.3rem;
            outline: none;
        }
    }
</style>