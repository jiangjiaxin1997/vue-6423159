<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="(item,index) in data"
                 @click="lianjie(index)"
                 :key="index"
            >

                 <img :src="item" alt=""
                        :a="index"
                 >

            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    export default{
        props:{
            data:{
                type:Array,
                default:[4,5,6]
            },
            das:{
                type:Array,
                default:[4,5,6]
            }
        },

        methods:{
            initBanner(){
                // console.log(this.$props)
                let arrr = this.$props.das
                new Swiper('.swiper-container',{
                    autoplay:true,
                    loop:true,
                    on: {
                        touchStart: function(event){
                            // console.log(event.changedTouches[0].target.attributes[2])
                            let a=event.changedTouches[0].target.attributes[2].value
                            // console.log(a.value)
                            // console.log(arrr[a])
                            window.location.href=arrr[a]
                        },
                    },
                })
            },
            lianjie(a){
                console.log('我被点击了')
                window.location.href=this.das[a]

            }
        },
        watch:{
            data(newValue,oldValue){
                this.$nextTick(()=>{
                    this.initBanner()
                })

            }
        }
    }
</script>
<style lang="less">
@import "../style/index.less";
    .swiper-container{
        .w(375);
        .h(150);
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>