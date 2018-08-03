// this是 JavaScript 语言的一个关键字。
//
// 它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。
// 函数的不同使用场合，this有不同的值。总的来说，this就是函数运行时所在的环境对象。下面分四种情况，详细讨论this的用法。

const thisTest = () => {
	this.name = 'thisName';
};
console.log(thisTest.name); // thisName


// 情况一、纯粹的函数调用
//
// 这是函数的最通常用法，属于全局性调用，因此this就代表全局对象。请看下面这段代码，它的运行结果是1。
var x = 1;
function test1() {
	console.log('一：', this.x);
}
test1();  // 1

// 情况二、作为对象方法的调用
//
// 函数还可以作为某个对象的方法调用，这时this就指这个上级对象。

function test2() {
	console.log('二：', this.x);
}

var obj = {};
obj.x = 1;
obj.m = test2;

obj.m(); // 1

// 情况三 作为构造函数调用
//
// 所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，this就指这个新对象。

var x3 = 3;
function test3() {
	this.x3 = 1;
}

var obj3 = new test3();
console.log('三：obj3', obj3);  // 2
console.log('三：x3', x3);  // 2


// 情况四 apply 调用
//
// apply()是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时this指的就是这第一个参数。

var x4 = 0;
function test4() {
	console.log(this.x4);
}

var obj4 = {};
obj4.x4 = 1;
obj4.m4 = test4;
// obj4.m4.apply();// 0
console.log('四：obj4', obj4);  // 2
obj4.m4.apply(obj4);
console.log('四：obj4', obj4);  // 1


// node js 中的this 和js中的this存在一定的出入

// this关键字是在真正被执行到的时候才会发挥作用。this对象仍然是指代函数被执行时执行该函数的对象。
//
// 当我把object.getNameFunc()赋值给myf是，实际等价于将函数function (){ return this.name; }

// 赋值给myf，当myf被调用的时候，this由执行确定指向了对象obj。


var xErr = 1;
function testErr(){
	this.xErr = 0;
}
testErr();
console.log('Err', xErr);
