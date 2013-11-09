var negativeInfinity = -65000;
var a = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7];
var l = 0;
var m = Math.floor((a.length-1)/2);
var h = a.length-1;
console.log(
  findMaxCrossingSubarray(a,l,m,h)
);
// returns indexes into the array
function findMaxCrossingSubarray (A,low,mid,high) {
  var leftSum = negativeInfinity;
  var sum = 0;
  var maxLeft = null;
  for (var i = mid; i >= low; --i) {
    sum = sum + A[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }
  var rightSum = negativeInfinity;
  sum = 0;
  for (var j = mid + 1; j <= high; ++j) {
    sum = sum + A[j];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }
  return {
    maxLeft: maxLeft,
    maxRight: maxRight,
    leftSumPlusRightSum: leftSum + rightSum
  };
}
