<template>

   <div id="classfication">
       <!--头部标题-->
       <div class="homeSearch">
           <div class="search">
               <i class="searchi"></i>
               <span>搜索商品, 共21816款好物</span>
           </div>
       </div>
       <div class="classficationList">
           <!--z左侧列表列-->
           <div class="list-left">
               <ul class="left-listWrap">
                   <li class="left-listItem" v-for=" category in categoryList" :key="category.id">{{category.name}}</li>

               </ul>
           </div>
           <!--右侧辅导航列表-->
           <div class="list-right">
               <div class="list-rightHeader">
                   <img src="https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196">
               </div>
               <ul class="list-rightList">
                   <li class="list-rightItem" v-for="subCate in categoryList[0].subCateList" :key="subCate.id">
                       <img :src="subCate.wapBannerUrl">
                       <div class="list-rightItemText">{{subCate.name}}</div>
                   </li>
               </ul>
           </div>

       </div>


   </div>

</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
  export default{
      data(){
          return{

          }
      },
      //获取更新第二页导航数据
      mounted(){
          this.$store.dispatch('getCategoryList')

      },

      computed:{
          //获取第二页导航的数据
          ...mapState(['categoryList'])

      }

  }
</script>

<style lang="stylus">


    #classfication
        width 100%
        height 100%
        /*头部标题*/
        .homeSearch
            width 750px
            height 88px
            padding 0 30px
            box-sizing border-box
            .search
                width 690px
                height 56px
                background #ededed
                text-align center
                line-height 56px
                .searchi
                    display inline-block
                    width 28px
                    height 28px
                    background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
                    background-size 100% 100%
                    background-repeat no-repeat
                    margin-right 10px
                span
                    font-size 28px
                    color #666

            border-bottom 1px solid lightgray

        .classficationList
            width 100%
            height 100%
            display flex
            .list-left
                width 162px

                /*height 100%*/
                height 500px
                .left-listWrap
                    width 100%

                    /*background blue*/

                    .left-listItem
                        width 162px
                        height 50px
                        color #333
                        font-size 28px
                        line-height 50px
                        text-align center
                        overflow hidden
                        white-space nowrap
                        text-overflow ellipsis
                        margin-top 30px



            .list-right
                background yellow
                width 528px
                height 100%
                box-sizing border-box
                padding-top 30px

                .list-rightHeader
                    width 528px
                    height 192px
                    img
                        width 528px
                        height 192px
                .list-rightList
                    width 528px
                    display flex
                    flex-wrap wrap
                    padding-top 40px
                    .list-rightItem

                        width 144px
                        height 216px
                        margin-right 30px
                        &::nth-child(3n+1)
                            margin-left 10px
                        img
                            width 144px
                            height 144px
                        .list-rightItemText
                            width 144px
                            height 72px
                            text-align center
                            white-space wrap


</style>
