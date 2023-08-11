<template>
    <!-- 插槽，用来规定，组件内部的内容，在组件内部哪个位置展示 -->
    <div>
        <span>展示卡片</span>
        <Card>
            <!-- 在这个template中输入的内容，将展示在卡片的头部 -->
            <template v-slot:header>
                Default size card
            </template>
            <!-- 下面的template中的内容，将展示在卡片的内容部分 -->
            <template v-slot:content>
                <p>card content</p>
                <p>card content</p>
            </template>
            <template v-slot:extra>
                <a href="">more</a>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from '../Card.vue'
export default {
    components:{
        Card
    }
}
</script>

<style>

</style>