<template>

    <div id='footer'>
        <div class="home">
            <i class="iconfont icon-yemian" @click="goto('/home')"></i>
            <span class="homeText">首页</span>
        </div>
         <div class="home" @click="goto('/classification')">
            <i class="iconfont icon-icon"></i>
            <span class="homeText">分类</span>
        </div>
         <div class="home"  @click="goto('/general')">
            <i class="iconfont icon-shiwu"></i>
            <span class="homeText">识物</span>
        </div>
         <div class="home"  @click="goto('/shopCar')">
            <i class="iconfont icon-shop-cart-white "></i>
            <span class="homeText shopcar">购物车</span>
        </div>
         <div class="home"  @click="goto('/personal')">
            <i class="iconfont icon-user-1"></i>
            <span class="homeText">个人</span>
        </div>
    </div>    
  
</template>

<script type="text/ecmascript-6">
    //import('../../router')
  export default {
      name:'FooterGuter',
      methods:{
          goto(path){
              //console.log(this.$router)
              //路由器里面包含路由跳转的方法
              this.$router.replace(path)
              //this.$router.replace(path)

          }
      }
  }
</script>

<style lang="stylus">
    #footer
        width 750px
        height 98px
       
        display flex
        justify-content space-around
        position fixed
        left 0
        bottom 0px
        background pink
        z-index 5
        .home
            width 48px
            height 71px

            display flex
            margin-top 16px
            flex-direction column
            align-items center
            .iconfont

                width 40px
                height 40px
                display inline-block

                margin-left 5px
                
            .homeText
                display inline-block
                width 48px
                height 24px
                font-size 24px

                &.shopcar
                    width 72px


 
</style>
