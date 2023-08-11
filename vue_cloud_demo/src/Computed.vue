<template>
  <div id="wrapper">
    <div>
      <span>{{ num }}</span>
      <button @click="addNum">+1num</button>
    </div>
    <div>
      <span>{{ count }}</span>
      <button @click="addCount">+1count</button>
    </div>
    <div>
      <span>{{ double }}</span>
      <span>{{ numDouble() }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      count: 0,
    };
  },
  computed: {
    // computed属性只有在引用的数据发生变化的时候，才会执行
    double() {
      console.log("computed执行了");
      return this.count * 2;
    },
  },
  methods: {
    addNum() {
      this.num++;
    },
    addCount() {
      this.count++;
    },
    // countDouble 跟count没有任何的关系，
    //但是count变化的时候，numDouble也执行了
    numDouble() {
      console.log("methods执行了");
      return this.num * 2;
    },
  },
};
</script>

<style>
#wrapper span {
  margin-right: 20px;
}
</style>