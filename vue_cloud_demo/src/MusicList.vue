<template>
  <div id="music-list">
    <!-- 在子组件中，定义一个自定义动态属性 -->
    <!-- 给动态属性money添加sync修饰符，可以支持，子组件对props的修改 -->
    <MusicItem v-for="item in list" 
    :key="item.name" 
    :musicData="item"
    :money.sync="money"
    @getNum="getNum"/>
  </div>
</template>

<script>
// vue2中引入组件，先import，然后在components中注册
import MusicItem from "./MusicItem.vue";
export default {
  data() {
    return {
      list: [
        {
          url: "http://p1.music.126.net/W1Gmz4zxY7vkmal-6CSCww==/109951167921098817.jpg?param=140y140",
          name: "放到家里",
        },
        {
          url: "http://p1.music.126.net/W1Gmz4zxY7vkmal-6CSCww==/109951167921098817.jpg?param=140y140",
          name: "回到家里",
        },{
          url: "http://p1.music.126.net/W1Gmz4zxY7vkmal-6CSCww==/109951167921098817.jpg?param=140y140",
          name: "溜回家里",
        }
      ],
      money:100
    };
  },
  watch:{
    money(){
        console.log('儿子花我的钱了');
        console.log(this.money);
    }
  },
  components: {
    MusicItem,
  },
  methods:{
    // 这个num是从子组件传过来的
    getNum(num){
        console.log(num);
    }
  }
};
</script>

<style>
#music-list {
  margin: auto;
  width: 600px;
  height: 600px;
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
}
</style>