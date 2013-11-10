var infinity = 65000;
var a = [5,2,4,7,1,3,2,6];
/*
var a = {
  9:2,
  10:4,
  11:5,
  12:7,
  13:1,
  14:2,
  15:3,
  16:6,
  17:100
};
*/
mergeSort(a,0,a.length - 1);
//merge(a,9,12,16);
console.log(a);
function mergeSort (A,p,r) { console.log('mergSort(A=[%s],p=%s,r=%s)',A,p,r)
  if (p < r) {
    var q = Math.floor((p + r) / 2);
    mergeSort(A,p,q);
    mergeSort(A,q + 1,r);
    merge(A,p,q,r);
  }
}
function merge (A,p,q,r) { console.log('merge(A=[%s],p=%s,q=%s,r=%s)',A,p,q,r)
  var n = q - p + 1;
  var m = r - q;
  var L = [];
  var R = [];
  for (var i = 0; i < n; ++i) {
    L[i] = A[p + i]; console.log(A[p+i])
  }
  for (var j = 0; j < m; ++j) {
    R[j] = A[q + j + 1];
  }
  L[n] = infinity;
  R[m] = infinity;
  console.log('L[%s],R[%s]',L,R)
  i = 0;
  j = 0;
  for (var k = p; k <= r; ++k) {
    if (L[i] <= R[j]) { console.log('L[%s] <= R[%s]',L[i],R[j])
      A[k] = L[i];
      i = i + 1;
    } else {
      A[k] = R[j];
      j = j + 1;
    }
  }
}
