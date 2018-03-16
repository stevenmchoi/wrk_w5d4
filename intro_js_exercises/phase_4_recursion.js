 function range(start, end) {
   if (start === end) {
     return start;
   }

   return [start].concat(range(start + 1, end));
 }

// console.log(range(1, 10));

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumRec(arr.slice(1));
}


// console.log(sumRec([1,2,3,4]));


function exponent1(base, exp) {
    if (exp === 0) {
      return 1;
    }
    return base * exponent1(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0 ) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) ** 2;
  }
  else {
    return base * (exponent2(base, (exp - 1) / 2) ** 2);
  }
}

// console.log(exponent1(3,7));
// console.log(exponent2(3,7));

function fibonacci(num) {
  if (num === 2) {
    return [0, 1];
  }
  if (num === 1) {
    return [0];
  }

  let prevFib = fibonacci(num - 1);

  return prevFib.concat([prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]]);
}

// console.log(fibonacci(3));
// console.log(fibonacci(5));

const getType = function (elem) {
  return Object.prototype.toString.call(elem).slice(8, -1);
};



//
function deepDup(arr) {
  if (!(getType(arr) === 'Array')){
    return arr;
  }
  let copy = [];

  arr.forEach(function(el){
    copy.push(deepDup(el));
  });

    return copy;
}

// let example = [1, 2, [3, 4, 5], [6, [[7, 8], 9]]];
//
// let example2 = deepDup(example);
//
// example[2].push(1000);
//
// example2[3][1][0].push(9999);
// //
// console.log(example);
// console.log(example2);

function bsearch(arr, target) {
  if (arr.length === 0){
    return -1;
  }

  let mid = Math.floor(arr.length/2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    let result = bsearch(arr.slice(mid + 1), target);
    // debugger
    if (result === -1) {
      return result;
    } else {
      return result + mid + 1;
    }
  }
}

let example = [0,1,2,3,4,5,6,7,8,9];
let example2 = [0,1,2,3,4,5,6,8,9];
console.log(bsearch(example, 7));
console.log(bsearch(example2, 7));
