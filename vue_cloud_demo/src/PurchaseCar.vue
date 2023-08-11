<template>
  <div class="purchase">
    <div class="header">购物车</div>
    <table border="true" cellspacing="0">
      <!-- 表格头 -->
      <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-if="bookList.length===0">
        <tr>
            <td colspan="5">购物车中没有商品</td>
        </tr>
      </tbody>
      <!-- 表格体 -->
      <tbody v-else>
        <!-- 遍历表格行，将数据填入 -->
        <tr v-for="(item, index) in bookList" :key="item.id"> 
          <td>{{ index + 1 }}</td>
          <td>{{ item.productName }}</td>
          <td>{{ item.productPrice }}</td>
          <td>
            <button @click="controlNum(item,'decrease')">-</button>
            {{ item.productCount }}
            <button @click="controlNum(item,'add')">+</button>
          </td>
          <td><button @click='deleteItem(item)'>移除</button></td>
        </tr>
        <tr>
          <td colspan="5">总价格:￥{{ sum }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      bookList: [],
    };
  },
//   从服务获取书籍列表
  async mounted(){
     const bookList=await axios.get('http://39.103.151.139:8000/cart')
     const {status,data}=bookList
     if(status===200){
        this.bookList=data
     }
  },

  computed: {
    sum() {
      // 第一步，我们将bookList转化为整数的数组
      // 第二步，我们使用reduce求和
      const result = this.bookList
        .map((book) => {
          const { productPrice, productCount } = book;
          return productPrice * productCount;
        })
        .reduce((a, b) => a + b, 0)
        console.log(result);
      return result.toFixed(2);
    },
  },
  methods:{
    // 代码优化
    controlNum(item,type){
       // 使用map修改整个bookList数据
        this.bookList=this.bookList.map(book=>{
            let res=book
            let count=type==='add'? book.productCount+1:book.productCount-1
            // 找到当前我们要修改的项，然后让购买数量-1，购买数量不能为负数
            if(book.id===item.id && count>=0){
                res={
                    ...item,
                    productCount:count
                }
            }
            return res
        }) 
    },
    deleteItem(item){
        this.bookList=this.bookList.filter(book=>{
            return book.id!==item.id
        })
    }
  }
};
</script>


<style scoped>
.purchase {
  margin: auto;
}

table {
  border-color: #ccc;
}

table td,
th {
  padding: 10px 20px;
}

table th {
  background-color: #ddd;
}

/* 添加scoped，不会和其他组件发生样式冲突 */
.header {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>