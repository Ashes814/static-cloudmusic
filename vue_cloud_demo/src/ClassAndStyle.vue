<template>
    <div id="wrapper">
        <!-- 第一种写法 -->
        <div :class="active?'rect':'red'"></div>
        <!-- 第二种写法 class中加对象 -->
        <div :class="{
            'rect':active,
            'red':!active
        }"></div>

        <div :class="['rect','gray']"></div>

        <button @click="changeColor">点击改变方块颜色</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:true
        }
    }, 

    methods:{
        changeColor(){
            // 原生写法
            // const rect=document.querySelector('.rect')
            // rect.style.backgroundColor='red'

            // vue写法
            this.active=!this.active
        }
    }
}
</script>

<style scoped>
    .rect{
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        background-color: blue;
    }

    .red{
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        background-color: red;
    }

    .gray{
        border-radius: 10px;
    }
</style>