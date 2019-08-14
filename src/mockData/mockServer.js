import homeData from './homeData.json';
import category from './category.json';
import categoryList from './categoryList.json';

import Mock from 'mockjs';


Mock.mock('/homeData',{
    code:0,
    data:homeData
});

Mock.mock('/category',{
    code:0,
    data:category
});


Mock.mock('/categoryList',{
    code:0,
    data:categoryList
});