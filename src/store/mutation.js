/**
 * Created by 54950 on 2019/7/21.
 */
/**
 * Created by 54950 on 2019/7/21.
 */

export default {
    //直接修改state里面的数据导航列表的数据
    setHomeNavList(state,kingKongList){

        state.kingKongList = kingKongList;
    },
    //直接修改第二页导航数据
    setCategoryList(state,categoryList){
        state.categoryList = categoryList
    }
}