## this

this 机制是  JavaScript 特有的，它是为了解决在对象内部的方法中使用对象内部的属性的需求。

如果不使用 this 来实现对对象内部的属性 JavaScript 可以使用对象.属性访问到：

```javascript
let people = {
	name: 'litangmm',
    logName: function(){
        console.log(people.name)
    }
}
复制代码
```

这种方法，方法与对象强耦合。对象变量变化，方法必须接着改变。如果有一个匿名对象数组，那么对象位置改变，方法就得改。

```javascript
let peoples = [
    {name:'litangmm',logName: function(){console.log(peoples[0].name)}},
    {name:'litangmm1',logName: function(){console.log(peoples[1].name)}},
    {name:'litangmm2',logName: function(){console.log(peoples[2].name)}},
]
复制代码
```

于是，this 出现了。

this 是和执行上下文绑定的。this，是运行时确定的。

1. 在全局环境下，this 指向全局的 window。
2. 作为函数执行时，如果是作为对象的函数执行，则指向该对象本身，否则指向全局的window。
3. 1 2都是非严格模式下的，全局模式下，this 拿不到全局 window 而是 `undefined`。

还有 bind apply call new，它们和this紧密相关。

bind apply call 都是属于**函数的原型方法**，可以改变函数执行的 this 的指向。它们的原理都是：

> 作为函数执行时，如果是作为对象的函数执行，则指向该对象本身。

只不过在一些细节上实现不同。下面，通过手写它们的实现来理解它们的异同。

## call 和 apply

### 执行效果

1. 改变 thisarg
2. 接收函数入参
3. 执行函数

### 说明

1. 对于 thisarg ，在非严格模式下，如果 thisarg 为 null 或 undefined ，thisarg 会为 全局 window。
2. 对于函数入参，call 接收 的是**多个**参数值，apply接收的是**一个**参数列表。

```javascript
// mycall.js
Function.prototype.mycall = function(thisarg,...args){
    let context = thisarg || window
    context.fn = this 
    const res = context.fn(...args)
    delete context.fn
    return res
}
function logNameAndAge(age, sex){
    console.log(this.name,age,sex)
}
logNameAndAge.mycall({name:"litangmm"},21,'man') // litangmm 21 man
复制代码
```

`context.fn = this ` 这里做了一件事，就是在 `context` 上定义了一个属性`fn`，赋值为 `this` 。**`this`是调用`mycall`的函数A。**这样，在下一行，函数A就作为 `context `对象的对象函数被调用，函数A执行的`this`自然指向`context`了。

当然，这代码还是有优化空间的：

1. 判断 this 是否为 函数。
2. 如果传入的 thisarg 上有 fn 属性，那么该属性会被覆盖。

我们考虑这些情况，实现`apply`。

```javascript
// myapply.js
Function.prototype.myapply = function(thisarg,args){
    if(typeof this !== 'function'){
        throw new TypeError('error')
    }
    let context = thisarg || window
    const fn = Symbol()
    context.fn = this 
    const res = context.fn(...args)
    delete context.fn
    return res
}
function logNameAndAge(age, sex){
    console.log(this.name,age,sex)
}
logNameAndAge.myapply({name:"litangmm"},[21,'man'])  // litangmm 21 man
复制代码
```

说明：

1. 通过 `typeof` 判断调用的是否是一个函数。
2. 通过 `Symbol` 来解决属性冲突。

## bind

### 执行效果

1. 改变 thisarg。
2. 接收函数入参。
3. 返回函数。

### 对于返回函数

1. 可以接收入参。
2. 可以作为构造函数使用。
3. 作为构造函数使用时，bind 绑定的 `this` 会被忽略。

### `bind` 实现的难点在于

1. `bind` 执行时接收可以接收参数（类似call接收多个参数），返回的函数还可以接收参数。
2. 判断返回函数是作为构造函数被使用。

```javascript
// mybind.js
Function.prototype.mybind = function(thisarg,...args1){
    if(typeof this !== 'function'){
        throw new TypeError('error');
    }
	const that = this;
    let fBound = function(...args2){
        return that.apply(this instanceof fBound ? this: thisarg,args1.concat(args2));
    }
    let fNop = function(){};
    fNop.prototype = that.prototype;
    fBound.prototype = new fNop();  
    return fBound;
}
复制代码
```

> bind 本质是一个函数装饰器：
>
> 1. 参数拼接。
> 2. 如果是普通调用，使用bind的this。
> 3. 当做返回函数作为构造函数，则使用返回函数的this。

### 说明

之所以可以通过`this instanceof F` 来判断是被当作构造函数被使用的，可以参考[new 的原理](https://juejin.cn/post/6938660174592737287#heading-9)：

1. 创建一个空对象。
2. 指定空对象的`__proto__`为构造函数的`prototype`。
3. 绑定该空对象到构造函数。
4. 执行绑定后的构造函数。
5. 如果构造函数有返回值，则返回返回值，否则返回对象。

！注意2步，因为返回的构造函数 是` fBound`，而，我们希望得到的`that`上的原型，所以，有代码

```javascript
fBound.prototype = that.prototype;	
复制代码
```

这代码是存在问题的，因为`fBound.prototype=== that.prototype === 原型对象地址`，所以操作`fBound.prototype` 修改会改变 `that.prototype`。所以，我们可以使用原型链来实现`fBound` 与 `that` 的连接。

```javascript
let fNop = function(){};
fNop.prototype = that.prototype;
fBound.prototype = new fNop();   
复制代码
```

这样，`fBound.prototype` 就是一个对象，对象的`__proto__`指向`that.prototype`。可以参考[这篇文章](https://juejin.cn/post/6933453900452364302)。

！注意3、4步，构造函数执行的时候，空对象的`__proto__`已经指向了构造函数的`prototype`。所以，绑定后的构造函数的`this` 是可以在原型链上找到构造函数的。


