/**
 * Created by 54950 on 2019/7/21.
 */

import ajax from './ajax';

//获取首页数据
export const reqHomeData = ()=> ajax.get('/homeData');

//获取分类数据。
export const reqcategoryList = ()=> ajax.get('/categoryList');

