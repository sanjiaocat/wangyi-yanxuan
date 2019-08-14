/**
 * Created by 54950 on 2019/7/21.
 */


/**
 * Created by 54950 on 2019/7/21.
 */
import {reqHomeData,reqcategoryList} from '../api';

export default {

    async getHomeNavList ({commit}){
    // 获取导航列表的数据
    const result = await reqHomeData();
    if (result.code===0){
        const kingKongList = result.data.kingKongModule.kingKongList
        //使用commit方法调用mutations里面的方法间接修改  导航列表的数据
        commit('setHomeNavList',kingKongList);
    }


    },
    //发请求获取第二页导航数据并更改间接状态数据
    async getCategoryList({commit}){

        const result = await reqcategoryList();
        if(result.code===0){
            console.log(result)
            const categoryList = result.data
            commit('setCategoryList',categoryList)
        }
    }
}