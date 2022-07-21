// const arr = [11,22,333,3]

function minMax(arr) {
  const res = [];
  const sorted = arr.sort(function (a, b) {
    return a - b;
  });
  res[0] = sorted[0];
  res[1] = sorted[sorted.length-1];
  console.log(res);
}

minMax([11, 2,55, 3, 34, 4]);

function toArray(obj1) {
	// const res1 = Object.entries(obj1)
  const res1 = () => {

  }
  // var i;
	// for( i in Object.entries(obj)){
  //   res1.push(i)
  // }
  // // for(j in Object.values(obj)){
  // //   res1.push(j)
  // // }
	console.log("res1", res1);
}
// Object.entries(obj)/
toArray({ a: 1, b: 2 })
// toArray({as:"sss", sd:"dddd"});

