
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import loading from '../src/common/imgs/loading.gif'

import './filters'  // 加载过滤器
// import './mock/mockServer'  // 加载mockServer即可
import './mock/mockServer'  // 加载mockServer即可

// 注册全局组件标签
Vue.component(Button.name, Button)   // <mt-button>

Vue.use(VueLazyLoad, {// 内部自定义一个指令lazy
    loading
})

new Vue({
    el: '#app',
    render: h => h(App),
    router, // 使用上vue-router
    store, // 使用上vuex
})
