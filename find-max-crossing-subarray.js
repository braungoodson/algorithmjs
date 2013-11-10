var negativeInfinity = -65000;
// returns tuple of indexes into the array
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
