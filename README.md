TypeScript Function Generator Demo
=================================

Function generator通过yield关键字，可以把一个函数的执行过程变成可暂停的多段，
每次调用.next()就会向前执行完下一个yield后暂停。

可以实现很强大的功能，比如异步、批处理、暂停/继续，等等，但是由于功能太强大且难以掌握，
所以在实际项目中很少使用，多数情况使用async/await

```
npm install
npm run demo
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

