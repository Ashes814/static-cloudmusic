<template>
    <div id="wrapper">
        <!-- v-for就是用来，循环一个标签 -->
        <ul style="display:flex;margin-bottom: 50px;">
            <li v-for="item in dataList" :key="item">{{ item }}</li>
        </ul>
        <ul>
            <li v-for="(item,index) in bookList" :key="index">
                <!-- 在属性中，嵌入变量，需要在前面加上:将其变为动态属性 -->
                <img :src="item.url" alt="" style="width: 40px; height: 40px;">
                <span>{{ item.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [1, 2, 3, 4, 5, 6, 7],
            bookList: [
                {
                    title: "vue",
                    url: "https://p1.music.126.net/S607Z3GzyOrtGELZh377Mw==/109951166575494657.jpg?imageView&quality=89",
                },
                {
                    title: "react",
                    url: "https://p1.music.126.net/wrs0csPtv86AXooTem3aPw==/109951166575508031.jpg?imageView&quality=89",
                },
                {
                    title: "angular",
                    url: "https://p1.music.126.net/Lp7cNHJo8urAGw-aZ_TqFA==/109951166575499997.jpg?imageView&quality=89",
                },
            ]
        }
    }
}
</script>

<style></style>