import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/App.vue';
import router from "@/router";
import store from "@/store";
import {vueInstance} from "@/common/myAxios";

Vue.use(ElementUI);

let instance = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});

vueInstance.instance = instance;
vueInstance.store = instance.$store;
