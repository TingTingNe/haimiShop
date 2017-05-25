<template>
    <div class='bigContent user'>
        <div class='user-info'>
            <dl>
                <dt>
                    <img :src='userData.Avatar' />
                </dt>
                <dd>
                    <span>{{userData.NickName}}</span>
                </dd>
            </dl>
        </div>
        <div class='user-content'>
            <h3>
                    <span>我的订单</span>
                    <span>查看全部订单></span>
                </h3>
            <nav class='user-nav'>
                <a href="javascript:;">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNrsmbtKxEAUhs8saVIo2ESWkELfQKy3sbNIFfAFVvIONgvBwlfYFNZh6xQ2Wm0v1im0iEElYKFFynjOkgGL3aTaZAL/gW8uzBQfw9wyUXVd09hiQiMMSPcVKgzDS87vmanhrh/MPI7jh8lIhKlxFFey/gkrw6Vr7YqFCGlIQxrSm1g3e+MQrMc40q0HndXSNsOchjSkIQ1pSO9L+ohZMu8tx+4PE/UlbXW0HzJPzFlHvwNmwTx23Rv6kL4RYcdxKAgCknxbJElCWZZJ8diE6XElie/7O4XlLTDPc119Hlr6hDm1bZtc193ZqSgKqqpKim/M69DS55J4nkdKbb8plmVJaZrq6sqEhfgliczVKOrcGF6YO1O+XG6Z35Y+30zMXDTbnhFb3qIBJyKkIb3nhSgv7NPm4mN6fOqRvtYVw6Ng5ptHEfxHhDSkh48/AQYAOgdpIUWPZRcAAAAASUVORK5CYII" />
                    <span>代付款</span>
                </a>
                <a href="javascript:;">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNrsmbtKxEAUhs8saVIo2ESWkELfQKy3sbNIFfAFVvIONgvBwlfYFNZh6xQ2Wm0v1im0iEElYKFFynjOkgGL3aTaZAL/gW8uzBQfw9wyUXVd09hiQiMMSPcVKgzDS87vmanhrh/MPI7jh8lIhKlxFFey/gkrw6Vr7YqFCGlIQxrSm1g3e+MQrMc40q0HndXSNsOchjSkIQ1pSO9L+ohZMu8tx+4PE/UlbXW0HzJPzFlHvwNmwTx23Rv6kL4RYcdxKAgCknxbJElCWZZJ8diE6XElie/7O4XlLTDPc119Hlr6hDm1bZtc193ZqSgKqqpKim/M69DS55J4nkdKbb8plmVJaZrq6sqEhfgliczVKOrcGF6YO1O+XG6Z35Y+30zMXDTbnhFb3qIBJyKkIb3nhSgv7NPm4mN6fOqRvtYVw6Ng5ptHEfxHhDSkh48/AQYAOgdpIUWPZRcAAAAASUVORK5CYII" />
                    <span>代付款</span>
                </a>
                <a href="javascript:;">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNrsmbtKxEAUhs8saVIo2ESWkELfQKy3sbNIFfAFVvIONgvBwlfYFNZh6xQ2Wm0v1im0iEElYKFFynjOkgGL3aTaZAL/gW8uzBQfw9wyUXVd09hiQiMMSPcVKgzDS87vmanhrh/MPI7jh8lIhKlxFFey/gkrw6Vr7YqFCGlIQxrSm1g3e+MQrMc40q0HndXSNsOchjSkIQ1pSO9L+ohZMu8tx+4PE/UlbXW0HzJPzFlHvwNmwTx23Rv6kL4RYcdxKAgCknxbJElCWZZJ8diE6XElie/7O4XlLTDPc119Hlr6hDm1bZtc193ZqSgKqqpKim/M69DS55J4nkdKbb8plmVJaZrq6sqEhfgliczVKOrcGF6YO1O+XG6Z35Y+30zMXDTbnhFb3qIBJyKkIb3nhSgv7NPm4mN6fOqRvtYVw6Ng5ptHEfxHhDSkh48/AQYAOgdpIUWPZRcAAAAASUVORK5CYII" />
                    <span>代付款</span>
                </a>
                <a href="javascript:;">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNrsmbtKxEAUhs8saVIo2ESWkELfQKy3sbNIFfAFVvIONgvBwlfYFNZh6xQ2Wm0v1im0iEElYKFFynjOkgGL3aTaZAL/gW8uzBQfw9wyUXVd09hiQiMMSPcVKgzDS87vmanhrh/MPI7jh8lIhKlxFFey/gkrw6Vr7YqFCGlIQxrSm1g3e+MQrMc40q0HndXSNsOchjSkIQ1pSO9L+ohZMu8tx+4PE/UlbXW0HzJPzFlHvwNmwTx23Rv6kL4RYcdxKAgCknxbJElCWZZJ8diE6XElie/7O4XlLTDPc119Hlr6hDm1bZtc193ZqSgKqqpKim/M69DS55J4nkdKbb8plmVJaZrq6sqEhfgliczVKOrcGF6YO1O+XG6Z35Y+30zMXDTbnhFb3qIBJyKkIb3nhSgv7NPm4mN6fOqRvtYVw6Ng5ptHEfxHhDSkh48/AQYAOgdpIUWPZRcAAAAASUVORK5CYII" />
                    <span>代付款</span>
                </a>
                <a href="javascript:;">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNrsmbtKxEAUhs8saVIo2ESWkELfQKy3sbNIFfAFVvIONgvBwlfYFNZh6xQ2Wm0v1im0iEElYKFFynjOkgGL3aTaZAL/gW8uzBQfw9wyUXVd09hiQiMMSPcVKgzDS87vmanhrh/MPI7jh8lIhKlxFFey/gkrw6Vr7YqFCGlIQxrSm1g3e+MQrMc40q0HndXSNsOchjSkIQ1pSO9L+ohZMu8tx+4PE/UlbXW0HzJPzFlHvwNmwTx23Rv6kL4RYcdxKAgCknxbJElCWZZJ8diE6XElie/7O4XlLTDPc119Hlr6hDm1bZtc193ZqSgKqqpKim/M69DS55J4nkdKbb8plmVJaZrq6sqEhfgliczVKOrcGF6YO1O+XG6Z35Y+30zMXDTbnhFb3qIBJyKkIb3nhSgv7NPm4mN6fOqRvtYVw6Ng5ptHEfxHhDSkh48/AQYAOgdpIUWPZRcAAAAASUVORK5CYII" />
                    <span>代付款</span>
                </a>
            </nav>
            <ul>
               <li>收藏宝贝</li>
               <li>收藏宝贝</li>
               <li>收藏宝贝</li>
               <li>收藏宝贝</li>
               <li>收藏宝贝</li>
               <li>收藏宝贝</li>
               <li>收藏宝贝</li>
            </ul>
            <p class='outLogin' @click="outLogin">退出登录</p>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>


<script>
import footerBar from '@/components/base/footer'
export default {
    data() {
        return {
            userData: {}
        }
    },
    components : {
        footerBar
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.$http.jsonp('http://m.haimi.com/api/me/buyer-status?', {
                Params: {
                    platform: "WAP"
                },
                jsonp: "_callback"
            }).then(function (data) {
                this.userData = data.body.data;
                console.log(this.userData)
            })
        },
        outLogin(){
            var boon = confirm("是否要退出");
            if(boon){
                window.localStorage.clear();
                this.$router.push({path:"/home"})
            }
        }
    }
}
</script>

<style lang="less" scoped>
.user {
    padding-bottom:.44rem;
    background: #fff;
    .user-info {
        height: 0.75rem;
        padding: .1rem;
        margin-bottom: 0.1rem;
        dl {
            width: 100%;
            display: -webkit-box;
            -webkit-box-align: center;
            dt {
                width: .5rem;
                height: .5rem;
                margin-right: 0.1rem;
                img {
                    display: block;
                    width: 100%;
                }
            }
            dd {
                font-size: 0.16rem;
            }
        }
    }
    .user-content {
        width: 100%;
        h3 {
            position: relative;
            height: .44rem;
            line-height: .44rem;
            display: -webkit-box;
            -webkit-box-pack: justify;
            padding: 0 .1rem;
            background: #fff;
            span {
                display: block;
                &:nth-child(2) {
                    color: #999;
                }
            }
            &:after {
                content: "";
                width: 100%;
                height: 1px;
                background: #999;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
        .user-nav {
            display: -webkit-box;
            padding: .1rem 0;
            background: #fff;
            margin-bottom: .1rem;
            a {
                display: block;
                width: 0;
                -webkit-box-flex: 1;
                display: -webkit-box;
                -webkit-box-align: center;
                -webkit-box-orient: vertical;
                img {
                    display: block;
                    width: .25rem;
                    height: .25rem;
                    margin-bottom: 0.05rem;
                }
                span {
                    display: block;
                    font-size: 0.12rem;
                    color: #242424;
                }
            }
        }
        ul{
            width:100%;
            background: #fff;
            margin-bottom: .1rem;
            li{
                height:.44rem;
                position: relative;
                line-height: .44rem;
                padding:0 0.2rem;
                 &:after {
                    content: "";
                    width: 100%;
                    height: 1px;
                    background: #999;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
        }
        .outLogin{
            width:95%;
            margin:0 auto;
            height:.44rem;
            text-align: center;
            line-height: .44rem;
            background: #fff;
        }
    }
}
</style>