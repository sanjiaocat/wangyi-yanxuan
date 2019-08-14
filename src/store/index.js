/**
 * Created by 54950 on 2019/7/21.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutation';
import getters from './getters';


Vue.use(Vuex);


export default new Vuex.Store({          //实例对象vuex
    state,
    mutations,      //直接修改状态数据的方法们
    actions,        //间接修改数据的方法，，直接commit修改mutations的方法们
    getters

})