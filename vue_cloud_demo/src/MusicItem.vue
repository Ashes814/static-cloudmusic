<template>
  <!-- 子组件 -->
  <div id="music-item">
    <img :src="musicData.url" alt="" @click="handleClick" style="cursor:pointer"/>
    <p>{{ musicData.name }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
        num:0
    }
  },
  props:{
    // 在子组件中，设置一个叫做props的属性，在props中设置我们自己定义的属性
    musicData:{
        type:Object,
        default:{}
    },
    money:{
        type:Number
    },
  },
  methods:{
    handleClick(){
        this.num++
        // 禁止直接改props的属性
        const newMoney=this.money-20
        // vue不支持，子组件直接修改父组件的值，
        //子组件对props中的数据，只有使用权，没有修改的权力
        // this.money--

        // 使用update:props变量名称的事件，支持子组件修改父组件的值
        this.$emit('update:money',newMoney)
        // this.$emit() 通知父亲，我要传值了 一个函数名，我要给爸爸的数据
        this.$emit('getNum',this.num)
    }
  }
};
</script>

<style scoped>
#music-item {
  width: 33%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#music-item>img{
    width: 120px;
    height: 120px;
}
#music-item>p{
    font-size: 14px;
    margin-top: 10px;
}
</style>