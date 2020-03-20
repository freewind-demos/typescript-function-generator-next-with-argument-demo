function* gen() {
  const x = yield 1
  console.log(x);
}


const g1 = gen();
console.log(g1.next());
g1.next()


const g2 = gen();
console.log(g2.next());
g2.next(100)
