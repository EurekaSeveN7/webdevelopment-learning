//入口 

//导入Vue
import Vue from 'vue'

//导入谷歌Material Design icon图标库
import '@mdi/font/css/materialdesignicons.css'

//导入App组件
import app from './App.vue'


//按需导入mint-ui Header组件以及css文件
import {
    Header
} from 'mint-ui'
Vue.component(Header.name, Header)
import {
    Swipe,
    SwipeItem
} from 'mint-ui';//mint-ui轮播图

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import {
   Button
} from 'mint-ui';
Vue.component(Button.name,Button)
import 'mint-ui/lib/style.css'
//导入mui 
import '../src/lib/mui/css/mui.min.css'

//导入Vuetify ui框架
import Vuetify from 'vuetify'
 
import 'vuetify/dist/vuetify.min.css' 
Vue.use(Vuetify)
export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
})

// VueAwesomeSwiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import '../node_modules/swiper/dist/css/swiper.css'

 


//导入vue-router路由
import VueRouter from 'vue-router'
Vue.use(VueRouter); 

import moment from 'moment' //moment格式化时间插件

Vue.filter('dateFormat',(dataStr, pattern = "YYYY-MM-DD HH:mm:ss")=>{
    return moment(dataStr).format(pattern)
})
//导入router.js 
import router from './router.js';

//导入axios插件
import axios from 'axios'; 
Vue.prototype.axios = axios;

import preview from 'vue-preview'

// 图片预览插件
Vue.use(preview, { 
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false, 
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  }) 
  

const vm = new Vue({
    el: '#app',
    
    vuetify: new Vuetify(),

    render: c => c(app),
    router, //挂载路由对象至vm实例
    axios,
})