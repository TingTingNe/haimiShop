// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;


// Vue.directive('scrolls',{
//   bind : function(el,binding){
//     window.onscroll = function(){
//       console.log(el)
//     }
//   }
// })



const store = new Vuex.Store({
  state: {
    loadingShow: false
  },
  mutations: {
    showLoading (state,n) {
      state.loadingShow = n;
    }
  }
})

// Vue.http.interceptors.push(
//     (request, next) => {
//       store.commit('showLoading',true)
//       next((response) => {
//         store.commit('showLoading',false)
//         return response;
//       })
//     }
// )
Vue.http.interceptors.push(
  function (request, next){
    store.commit('showLoading',true)
    next(function(response){
      store.commit('showLoading',false)
      return response;
    })
  }
)


/* eslint-disable no-new */
var myApp = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


