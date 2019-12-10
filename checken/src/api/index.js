//api接口
import axios from '../utils/axios'
import jsonp from 'jsonp'
export const getBanner=()=>{
    return new Promise((resolve,reject)=>{

        let url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1'
        jsonp(url,{param:'jsonpCallback'},(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })


    })
}
export const getRecommendList=()=>{
        return new Promise((resolve,reject)=>{
            let url='/hehe/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.7119274199989178'

            axios.get(url).
                then((data)=>{
                    resolve(data)
            }).
                catch((err)=>{
                    reject(err)
            })
        })
}