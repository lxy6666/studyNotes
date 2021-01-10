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

