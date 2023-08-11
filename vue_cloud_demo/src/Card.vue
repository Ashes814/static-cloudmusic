<template>
  <div class="card">
    <!-- header子组件 -->
    <div class="header">
        <!-- 具名插槽 -->
        <slot name="header"></slot>
        <div class="extra">
            <slot name="extra"></slot>
        </div>
    </div>
    <!-- content子组件 -->
    <div class="content">
        <slot name="content"></slot>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style>
    .card{
        border-radius: 4px;
        border: 1px solid #ddd;
        min-width: 400px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
    }

    .card>.header{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
    }

    .extra{
        color: blue;
        font-size: 12px;
    }



    .content{
        flex: 1;
    }
</style>