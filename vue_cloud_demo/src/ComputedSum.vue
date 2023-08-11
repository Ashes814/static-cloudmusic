<template>
  <div id="wrapper">
    <!-- 求和 -->
    <div>{{sum}}</div>
    <!-- 字符串反转 -->
    <div>{{reverse}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
             list:[1,2,3,5],
             msg:'vue'  //EUV
        }
    },
    computed:{
        sum(){
            const result=this.list.reduce((pre,now)=>pre+now,0)
            return result
        },
        reverse(){
            // msg变数组，然后翻转数组，将数组变为字符串，将字符串变为大写
            return this.msg.split('').reverse().join("").toUpperCase()
        }
    }
}
</script>

<style>

</style>