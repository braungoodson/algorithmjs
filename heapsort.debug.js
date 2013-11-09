var a = [0,16,4,10,14,7,9,3,2,8,1];
maxHeapify(a,2);
console.log(a);
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
  console.log(A,i,largest);
  var x = A[largest];
  A[largest] = A[i];
  A[i] = x;
  console.log(A,i,largest);
}
function maxHeapify (A,i) {
  console.log('maxHeapify(A[%s],%s)',A,i)
  var l = left(i);
  var r = right(i);
  var largest = 0;
  console.log(' - (if0) l=%s,r=%s,largest=%s,i=%s',l,r,largest,i)
  if ((l <= (A.length - 1)) && (A[l] > A[i])) {
    largest = l;
  } else {
    largest = i;
  }
  console.log(' - l=%s,r=%s,largest=%s,i=%s',l,r,largest,i)
  if ((r <= (A.length - 1)) && (A[r] > A[largest])) {
    largest = r;
    console.log(' - (if1) l=%s,r=%s,largest=%s,i=%s',l,r,largest,i)
  }
  if (largest != i) {
    swap(A,i,largest);
    console.log(' - (if2) l=%s,r=%s,largest=%s,i=%s',l,r,largest,i)
    maxHeapify(A,largest);
  }
}
