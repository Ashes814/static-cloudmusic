<template>
    <div id="wrapper">
        <!-- v-model示例1 -->
        <!-- v-model 双向数据绑定 数据会影响视图，视图影响数据 -->
        <!-- input当中，改变了value的数据 -->
        <!-- <input type="text" v-model="value"> -->
        <!-- p中是我们的视图 -->
        <!-- <p>{{ value }}</p> -->

        <!-- v-model 示例2 todolist复杂示例-->
        <!-- <input type="text" placeholder="请输入你要做的事情" v-model="message" @keyup.13="handleEnter"> -->
        <!-- <ul>
            <li v-for="(item, index) in todos" :key="index">
                {{ item }}
                可以将item也传入事件函数中
                <button @click="handleDelete(item,$event)" style="margin-left:30px">删除</button>
            </li>
        </ul> -->

        <!-- 自己实现v-model -->
        <input type="text" @input="handleChange($event)">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            message: '',
            todos: [],
            msg:''
        }
    },
    methods: {
        // event target keyCode
        handleEnter(e) {
            // 不用e.target.value去获取input中的数据，因为vue已经帮我们绑定好了
            console.log(this.message)
            this.todos.push(this.message)
            this.message = ''
        },
        // 事件，可以同时获取到我们传入的值和event参数
        handleDelete(item,event){
            console.log(item);
            console.log(event);
            const index=this.todos.indexOf(item)
            if(index>=0){
                this.todos.splice(index,1)
            }
        },
        handleChange($event){
            console.log($event.target.value)
            this.msg=$event.target.value
        }
    }
}
</script>

<style></style>