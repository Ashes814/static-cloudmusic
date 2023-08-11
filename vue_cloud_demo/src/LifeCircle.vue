<template>
  <div id="wrapper">
    <input type="text" @keydown.enter="handleEnter">
    <p>{{ msg }}</p>
    <ul>
        <li v-for="(item,index) in bannerData" :key="index">
            <img :src="item" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            msg:'',
            bannerData:[]
        }
    },
    // 组件刚进来的时候，我们走前四个函数
    beforeCreate(){
        console.log('组件创建之前');
    },
    created(){
        console.log('组件创建完毕');
    },  
    beforeMount(){
        console.log('组件挂载之前');
    },
    // 我们一般在mounted函数中，请求服务
    async mounted() {
        const baseUrl = `http://1.15.88.222:3000`;
        // 1.从服务获取轮播图数据
        const bannerData = await axios.get(`${baseUrl}/banner`);
        console.log(bannerData);
        // 2.处理数据
        // 解构，从bannerData中获取状态和轮播图数据
        const {
            status,
            data: { banners },
        } = bannerData;
        if (status === 200) {
            // 处理数据，将轮播图数据，处理为图片的url数组
            const imgList = banners.map((banner) => {
                const { imageUrl } = banner;
                return imageUrl;
            });
            this.bannerData = imgList
        }
    },
    // 组件内元素发生更新，才会走updated逻辑
    beforeUpdate(){
        console.log('组件更新之前');
    },
    updated(){
        console.log('组件更新之后');
    },
    // 组件被销毁，走销毁生命周期
    beforeDestroy(){
        console.log('组件销毁之前');
    }, 
    destroyed(){
        console.log('组件销毁之后');
    },
    methods:{
        handleEnter(e){
            console.log(e);
            this.msg=e.target.value
        }
    }
}
</script>

<style>

</style>