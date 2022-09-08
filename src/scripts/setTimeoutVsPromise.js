// What is the expected output?
console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
});
Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });
console.log('script end');
