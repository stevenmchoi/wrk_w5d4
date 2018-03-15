Array.prototype.bubbleSort = function(){
  let sorted = false;
  while (!sorted) {
    sorted = true;
    let step;
    for (step = 0; step < this.length - 1; step++){
      let num1 = this[step];
      let num2 = this[step + 1];
      if (this[step] > this[step + 1]) {
        sorted = false;
        this[step] = num2;
        this[step + 1] = num1;
      }
    }
  }
  return this;
};

//
// console.log([5,3,7,7,2,1,9,0,3,2,1].bubbleSort());

String.prototype.subStrings = function() {
  let subArray = [];
  let startIdx;
  for (startIdx = 0; startIdx < this.length; startIdx++){
    let endIdx;
    for (endIdx = startIdx + 1; endIdx < this.length + 1; endIdx++){
      subArray.push(this.slice(startIdx, endIdx));
    }
  }

  return subArray;
};

console.log('redrum'.subStrings());
