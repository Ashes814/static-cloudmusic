<template>
  <div id="app">
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/" style="margin-right:20px">Go to Home</router-link>
      <router-link to="/purchase" style="margin-right:20px">跳转到购物车</router-link>
      <router-link to="/musicList" style="margin-right:20px">跳转到音乐列表</router-link>
      <router-link to="/card">跳转到卡片</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
}

.part {
  margin: 10px 0;
}

.part > span {
  margin-right: 10px;
}
</style>