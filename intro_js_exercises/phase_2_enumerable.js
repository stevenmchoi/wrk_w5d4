Array.prototype.myEach = function(callback) {
  let step;
  for (step = 0; step < this.length; step++) {
    callback(this[step]);
  }
};
//
// console.log([1,2,3].myEach(function(num) {
//   console.log(num * 2);
// }));
//
Array.prototype.myMap = function(callback) {
  let answer = [];

  this.myEach(function(num){
    answer.push(callback(num));
  });

  return answer;
};
//
// console.log([1,2,3].myMap(function(num) {
//   return (num * 2);
// }));

Array.prototype.myReduce = function(callback, initialValue = null){
  let newArr = this.slice();

  if (!initialValue) {
    initialValue = newArr.shift();
  }

  let acc = initialValue;

  newArr.myEach(function(num){
    acc = callback(acc, num);
  });

  console.log(this);
  console.log(newArr);

  return acc;
};

// console.log([1,2,3,4].myReduce(function(acc, el) {
//   return acc * el;
// }));
//
// console.log([1,2,3,4].myReduce(function(acc, el) {
//   return acc * el;
// }, 100));
