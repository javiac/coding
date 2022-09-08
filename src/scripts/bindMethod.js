class Foo {
  get value() {
    return 42;
  }
  constructor() {
    const fn1 = () => {
      console.log(this.value);
    };
    const fn2 = function () {
      console.log(this.value);
    };
    fn1(); // output expected?
    fn2(); // output expected?
  }
}
new Foo();
