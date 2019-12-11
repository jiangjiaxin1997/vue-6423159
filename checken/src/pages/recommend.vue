<template>
    <div class="recommend">

        <div class="views">
            <div class="content">
<!--sss轮播图-->
                <div class="banner">
                    <Banner :data="banners,bannersl"
                            :das="bannersl"
                    ></Banner>
                </div>
<!--列表-->
                <div class="list">
                    <div class="jo">热门歌单推荐</div>
                    <ul>
                        <li
                        v-for="(item,index) in list"
                        :key="index"
                        >
                            <img
                                :src ="item.imgurl"
                            >
                            <div>
                                <span>{{item.creator.name}}</span>
                                <p>{{item.dissname}}</p>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </div>

    </div>
</template>
<script>
    import axios from 'axios'
    import {getBanner,getRecommendList} from "../api";
    import Bs from 'better-scroll'
    import Banner from "../components/Banner";
    export default {
        components: {Banner},
        data(){
            return{
                list:[],
                banners:[],
                bannersl:[]
            }
        },
        methods:{
            initBs(){
                new Bs('.views')
                console.log(111)
            }
        },
        created() {
            //首页列表数据
            getRecommendList().then((data)=>{
                this.list=data.data.data.list
                console.log(data.data.data.list)

            })
            //轮播图数据
            getBanner().then((data)=>{
                this.bannersl=data.data.slider.map((item)=>{return item.linkUrl
                })
                this.banners=data.data.slider.map((item)=>{return item.picUrl
                })
            })
        },
        mounted() {
            this.initBs()
        }
    }
</script>
<style lang="less">
 @import "../style/index.less";

.recommend{
    height: 100%;
    .fixed(88,0,0,0,@black);
    .views{
        height: 100%;
         .w(375);
        overflow: hidden;
        .content {
            .list {
                .jo {
                    .w(375);
                    .h(65);
                    font-size: @fs-s;
                    text-align: center;
                }

                ul {
                    li {
                        .w(375);
                        .h(83);
                        padding: 0 20px 20px;
                        display: flex;

                        img {
                            .w(60);
                            .h(60)
                        }

                        div {
                            display: flex;
                            flex-direction: column;
                            padding-left: 20px;
                            .w(255);
                            .h(50);

                            span {
                                display: inline-block;
                                font-size: @fs-s;
                                font-weight: bold;
                                color: #FFFFFF;
                                margin: 0 0 10px;
                            }

                            p {
                                color: rgba(255, 255, 255, 0.3);
                                font-size: @fs-s;
                            }
                        }

                    }
                }
            }
        }
    }
}




</style>