function heap (A) {
  return function () {
    var a = A;
    a.length = A.length;
    a.heapSize = 0;
    return a;
  }
}
var a = new heap([4,1,3,2,16,9,10,14,8,7]);
buildMaxHeap(a());
console.log(a());
function buildMaxHeap (A) {
  for (var i = Math.floor((A.length - 1) / 2); i >= 0; --i) {
    maxHeapify(A,i);
  }
}
function parent (i) {
  return Math.floor(i / 2);
}
function left (i) {
  return 2 * i;
}
function right (i) {
  return (2 * i) + 1;
}
function swap (A,i,largest) {
  console.log('  - swap(A[%s],i=%s,largest=%s)',A,i,largest);
  var x = A[largest];
  A[largest] = A[i];
  A[i] = x;
  console.log('  - swap(A[%s],i=%s,largest=%s)',A,i,largest);
}
function maxHeapify (A,i) {
  console.log('maxHeapify(A[%s],%s)',A,i)
  var l = left(i) + 1;
  var r = right(i) + 1;
  var largest = 0;
  console.log(' > (if0) l=%s,r=%s,largest=%s,i=%s',l,r,largest,i)
  if ((l <= (A.length - 1)) && (A[l] > A[i])) {
    largest = l;
  } else {
    largest = i;
  }
  console.log(' > l=%s,r=%s,largest=%s,i=%s',l,r,largest,i)
  if ((r <= (A.length - 1)) && (A[r] > A[largest])) {
    largest = r;
    console.log(' > (if1) l=%s,r=%s,largest=%s,i=%s',l,r,largest,i)
  }
  if (largest != i) {
    swap(A,i,largest);
    console.log(' > (if2) l=%s,r=%s,largest=%s,i=%s',l,r,largest,i)
    maxHeapify(A,largest);
  }
}
