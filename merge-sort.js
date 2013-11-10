function mergeSort (A,p,r) {
  if (p < r) {
    var q = Math.floor((p + r) / 2);
    mergeSort(A,p,q);
    mergeSort(A,q + 1,r);
    merge(A,p,q,r);
  }
}
function merge (A,p,q,r) {
  var n = q - p + 1;
  var m = r - q;
  var L = [];
  var R = [];
  for (var i = 0; i < n; ++i) {
    L[i] = A[p + i];
  }
  for (var j = 0; j < m; ++j) {
    R[j] = A[q + j + 1];
  }
  L[n] = infinity;
  R[m] = infinity;
  i = 0;
  j = 0;
  for (var k = p; k <= r; ++k) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i = i + 1;
    } else {
      A[k] = R[j];
      j = j + 1;
    }
  }
}
