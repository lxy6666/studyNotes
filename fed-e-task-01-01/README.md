#### 1.答：10
在for循环中通过 i是一个全局变量,执行a[6]时i的值已经循环到10了。

#### 2.答：会报错
引用异常，在if判断的代码块中，使用了let tmp去声明变量产生了块级作用域，导致在打印前tmp没有发生变量提升。

#### 3.答：
var arr = [12, 34, 32, 89, 4];
const arrMin = Math.min(...arr);
console.log(arrMin);

#### 4.答：
var声明的变量可以不存在块级作用域，存在变量提升，可以被修改；
const变量存在块级作用域，不能重复声明，无法变量提升；
let变量存在块级作用域，无法变量提升。

#### 5. 答：20
ES6箭头函数this在调用时指向父级，也就是obj对象。

#### 6. 答：
Symbol是一种全新的数据类型，每个Symbol实例都是唯一的；
Symbol为对象添加独一无二的键，避免对象中包含重复键造成的冲突；
Symbol的for方法可用于创建相同的Symbol数据；
Symbol内置了一些内置的属性，指向语言内部使用的方法;
对象的属性类型为Symbol的无法被for in语句、Object.keys、JSON.Stringfy等遍历,只有通过Object.getOwnPropertySymbols方法才行；
可以通过为对象添加Symbol.iterator方法实现对象的遍历。

#### 7.答：
浅拷贝：修改复杂数据类型时，只拷贝数据的指针，原数据会跟着一起改变；
深拷贝：修改复杂数据类型时，直接拷贝数据本身，不会改变原数据。

#### 8.答
JavaScript异步编程：
针对单线程执行代码导致的请求数据时间过长影响代码执行进度从而影响用户体验问题的改进；
在进行异步请求时，请求回调会被加入到事件队列中，等待执行。不会影响后续代码的执行。

event loop:
event loop是一个执行模型;

宏任务：
一个回调队列。
执行过程中可以临时增加额外需求，可以选择作为一个新的宏任务进到队列中排队；

微任务：
直接在当前任务结束后立即执行的任务（Promise的回调会作为为任务执行），可以提高整体相应能力。

#### 9.答：
function setTimePromise (value) {
    return Promise.resolve(value);	
}

var promise = Promise.all([
    setTimePromise('hello'),
    setTimePromise('lagou'),
    setTimePromise('I心U'),
])

promise.then((value) => {
    console.log(value.join(''));
});

#### 10.答：
Typescript是javascript的超集；
Typescript = javascript + 类型系统 + ES6;
Typescript语言可以编译为JavaScript语言；
任何一种javascript运行环境都支持Typescript；
Typescript语言更加强大，生态更加健全，更加完善。

#### 11.
缺：
1）Typescript语言本身多了很多概念；
2）项目初期Typescript会增加一些成本；
优：
1）Typescript属于渐进式，按照标准即可，可完全按照javascript开发；
2）适合长周期大项目。
