#### 简答题

###### 1.当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。

let vm = new Vue({
 el: '#el'
 data: {
  o: 'object',
  dog: {}
 },
 method: {
  clickHandler () {
   // 该 name 属性是否是响应式的
   this.dog.name = 'Trump'
  }
 }
})

1. 此处的name属性并不是响应式的;
2. 如果要把新增成员设置成响应式数据的话，需要把name属性在添加在data的数据中：
data: {
    o: 'object',
    dog: {
        name:''
    }
};
或者为Vue实例的setter增加一个监听:this.$set(this.obj,'name','Trump');
3. vue的响应式原理是首先把data中的内容注入到Vue实例里，然后把data的内容变成getter/setter，然后对数据进行监听，当有变动时通知发布者;
*vue2.x使用Object.defineProperty()去实现;
*vue3.x使用Proxy()。

###### 2.请简述Diff算法的执行过程

diff算法的过程:
1. 根据真实DOM生成virtual DOM，当virtual DOM某个节点的数据改变后会生成一个新的Vnode
2. 然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode
所以diff算法就是调用名为patch的函数，比较新旧节点Vnode，一边比较一边更新DOM。


#### 编程题

###### 1、模拟 VueRouter 的 hash 模式的实现，实现思路和 History 模式类似，把 URL 中的 # 后面的内容作为路由的地址，可以通过 hashchange 事件监听路由地址的变化。

见code/03-01-vue-router-code

###### 2、在模拟 Vue.js 响应式源码的基础上实现 v-html 指令，以及 v-on 指令。

见code/03-01-simulate-vue

###### 3、参考 Snabbdom 提供的电影列表的示例，利用Snabbdom 实现类似的效果

见code/03-01-snabbdom-code