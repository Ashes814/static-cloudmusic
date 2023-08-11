<template>
    <div id="wrapper">
        <!-- v-if 控制元素是否在页面中 直接删除元素 类似于remove -->
        <div v-if="isShow">hello world</div>
        <button @click="toggleShow" style="margin-bottom: 100px;">改变显隐</button>

        <!-- v-else-if使用 -->
        <p v-if="value===0">零分</p>
        <p v-else-if="value===1">1分</p>
        <p v-else-if="value===2">2分</p>
        <p v-else-if="value===3">3分</p>
        <p v-else>其他情况</p>
        <button @click="increaseMark" style="margin-bottom:100px">增加分数</button>

        <!-- v-show 通过添加元素display:none样式来控制显示隐藏-->
        <!-- v-pre v-on v-for v-if v-else-if v-show -->
        <div v-show="isDisplay">我是v-show控制的元素</div>
        <button @click="controlShow">控制v-show</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:true,
            value:0,
            isDisplay:true
        }
    },
    methods:{
        toggleShow(){
            this.isShow=!this.isShow
        },
        increaseMark(){
            this.value++
        },
        controlShow(){
            this.isDisplay=!this.isDisplay
        }
    }
}
</script>

<!-- style中添加scoped，让样式只在当前组件中生效 -->
<style>
    #wrapper{
        margin: auto;
        font-size: 30px;
    }
</style>