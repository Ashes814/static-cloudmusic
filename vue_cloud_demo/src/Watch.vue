<template>
    <div id="wrapper">
        <input type="text" v-model="lists">
    </div>
</template>

<script>
export default {
    data(){
        return {
            lists:''
        }
    },
    // watch用来监听data中数据的变化
    watch:{
        lists(){
            console.log(`监听lists的变化${this.lists}`);
        }
    }
}
</script>

<style>

</style>