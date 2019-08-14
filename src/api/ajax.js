/**
 * Created by 54950 on 2019/7/21.
 */

import axios from 'axios';
import qs from 'qs';



//添加请求拦截器
axios.interceptors.request.use((config)=>{
    //请求前对数据做点什么
    const {data,method} = config;
    //如果为post的请求将参数转换为json字符串
    if(method.toUpperCase() === 'post'){
        config.data = qs.stringify(data)
    }


    return config
},(error)=>{
    alert('请求错误',error)
    return Promise.reject(error);
})

//添加返回拦截器
axios.interceptors.response.use((response)=>{
    //返回前做点什么
    return response.data
},(error)=>{
    alert('返回错误',error)
    return Promise.reject(error)
})

export default axios;