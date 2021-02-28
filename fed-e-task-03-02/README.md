#### 简答题
###### 1.请简述 Vue 首次渲染的过程

1. 初始化：
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
2. 执行this.init()方法
调用initGlobalAPI()函数初始化vue中的静态成员
为vue的原型挂载patch/$mount方法
重写$mount方法


###### 2.请简述 Vue 响应式原理。

答：在初始化 Vue 实例的过程中的 _init 方法中会调用 initState(vm)
###### initState(vm)：
调用 initData() 把 data 属性注入到 Vue 实例上，并且调用 observe(data) 将 data 对象转化成响应式的对象。

###### observe(value):
判断value是否是对象，如果不是对象直接返回;
判断value对象是否有ob，如果有直接返回;
如果没有，创建observer对象(new Observer(value));
返回observer对象

###### Observe类的作用是：
给 value 对象定义不可枚举的ob属性，记录当前的observer对象
数组的响应式处理
对象的响应式处理，调用walk方法，walk方法就是遍历对象的每一个属性，对每个属性调用defineReactive方法

###### defineReactive 的作用是：
为每一个属性创建dep对象
如果当前属性的值是对象，调用observe
1. 定义getter
收集依赖
返回属性的值
2. 定义setter
保存新值
如果新值是对象，调用observe
派发更新(发送通知)，调用dep.notify()

###### 依赖收集：
在watcher对象的get方法中调用pushTarget记录Dep.target 属性
访问data中的成员的时候收集依赖，defineReactive的getter中收集依赖
把属性对应的watcher对象添加到dep的subs数组中
给childOb收集依赖，目的是子对象添加和删除成员时发送通知

###### Watcher：
dep.notify()在调用watcher对象的 update() 方法
queueWatcher()判断watcher是否被处理，如果没有的话添加到queue队列中，被调用flushSchedulerQueue()
# flushSchedulerQueue():
触发beforeUpdate钩子函数
# 调用watcher.run():
run()-->get()-->getter()-->updateComponent
清空上一次的依赖
触发actived钩子函数
触发updated钩子函数


###### 3.请简述虚拟 DOM 中 Key 的作用和好处。

key的作用和好处是给虚拟Dom提供索引，进行删除、添加等操作时更加快捷。通过设置不同的key，可以完整地触发组件的生命周期钩子和触发过渡，减少diff和渲染所需要的时间，提升了性能。


###### 4.请简述 Vue 中模板编译的过程

1. 编译的入口函数会从compileToFunctions开始，寻找缓存中的编译结果，若有缓存直接返回
没有则调用 compile()，将模板编译为对象将编译的字符串形式的js代码转为函数形式，然后缓存并返回。
2. 在compile中合并选项，调用baseCompile编译，记录错误返回编译好的对象
3. baseCompile作为核心内容：调用parse()将模板字符串转为抽象语法树（AST）
调用optimize()优化抽象语法树，标记静态节点& 静态根节点，使得patch中可跳过；调用generate把抽象语法树转为字符串形式的js代码

