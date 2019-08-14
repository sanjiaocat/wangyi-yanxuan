import Vue from 'vue';
import Routervue from 'vue-router';

import Classification from '../pages/Classification/Classification.vue';
import General from '../pages/General/General.vue';
import Home from '../pages/Home/Home.vue';
import Personal from '../pages/Personal/Personal.vue';
import ShopCar from '../pages/ShopCar/ShopCar.vue';

Vue.use(Routervue);

export default new Routervue({
    routes:[
        {
            path:'/classification',
            component:Classification
        },
        {
            path:'/general',
            component:General
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/personal',
            component:Personal
        },
        {
            path:'/shopCar',
            component:ShopCar
        },{
            path:'/',
            redirect:ShopCar
        }
    ]
})