Array.prototype.uniq = function() {
    let uniqArray = [];

    this.forEach(function(num) {
        if (!uniqArray.includes(num)) {
            uniqArray.push(num);
        }
    });

    return uniqArray;
};


console.log([1,2,3,4,4].uniq());

Array.prototype.twoSum = function() {
  let pairs = [];

  let step1;
  for (step1 = 0; step1 < this.length - 1; step1++){
    let step2;
    for (step2 = step1 + 1; step2 < this.length; step2++) {
      if (this[step1] + this[step2] === 0 ){
        pairs.push([step1, step2]);
      }
    }
  }
  return pairs;
};

console.log([-5,2,5,3,-2,0].twoSum());

//transpase with foreach on second iteration
Array.prototype.transpose = function() {
  let transposed = [];
  // [1,2,3] [4.5.6] [7.8.9]
  let step1;
  for (step1 = 0; step1 < this.length; step1++){
    let step2;
    let newRow = [];
    for (step2 = 0; step2 < this.length; step2++) {
      newRow.push(this[step2][step1]);
    }
    transposed.push(newRow);
  }
  return transposed;
};

console.log([[1,2,3],[4,5,6],[7,8,9]].transpose());
