TypeScript Function Generator Next with Argument Demo
=====================================================

Function generator中有一个非常迷惑人的语法：

```
const x = yield a+b
```

看起来似乎是把`a+b`的值赋给了`x`，实际上它们之间没有一毛钱关系。

当我们调用`.next()`的时候，代码会执行到`const x = yield a+b`的右段`yield a+b`，并且把值当作`.next()`的返回值返回给调用者，
然后代码就停在那里了。

直到下一次调用`.next`，才会继续执行`const x =`。但是`x`的值从哪里来呢？是从`.next(???)`的参数`???`传进来的，`x = ???`,
然后继续执行到下一个`yield`，把它后面的值返回出去。

这一处是我之前一直没有理解的地方。

```
npm install
npm run demo
```
