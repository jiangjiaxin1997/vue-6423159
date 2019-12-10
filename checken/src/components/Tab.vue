<template>
    <div class ='tab'>
        <ul>
            <router-link active-class='sel' tag='li' to="/recommend">
                <span>推荐</span>
            </router-link>
            <router-link active-class='sel' tag='li' to="/singer">
                <span>歌手</span>
            </router-link>
            <router-link active-class='sel' tag='li' to="/rank">
                <span>排行</span>
            </router-link>
            <router-link active-class='sel' tag='li' to="/mine">
                <span>搜索</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less">
    @import '../style/index';
   .tab{
        background: @black;
       .w(375);
       .h(44);
       font-size: @fs-s;
       color: @black_o5;
       ul{
           display: flex;
           justify-content: space-around;
           li{
               display: flex;
               width: 0;
               flex: 1;
               justify-content: center;
               span{
                   .h(27);
                   .l_h(27);
                   display: inline-block;
                   border-bottom: 2px solid @black;
               }
           }
       }
        .sel{
            color: @yellow;
            span{
                border-bottom: 2px solid @yellow;
            }
        }
   }

</style>