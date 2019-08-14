<template>
  <div id="App">
    <router-view></router-view>
    <FooterGuter></FooterGuter>
  </div>
</template>

<script>
import FooterGuter from './components/FooterGuter/FooterGuter.vue'

export default {

  name: 'app',
  components: {
    FooterGuter           //app里面注册组件   所有的路由组件都可以显示。（一般注册公共的组件）
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  #App{

    height:100%;


  }
 
</style>
