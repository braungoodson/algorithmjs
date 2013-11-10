var input = [4,7,5,2,3,3,3,7,0,0,0,0,];
insertionSort(input);
console.log(input)
function insertionSort (A) { console.log(A)
  for (var j = 1; j < A.length; ++j) { console.log(j,A.length)
    var key = A[j]; console.log(key,A[j])
    var i = j - 1; console.log(i);
    while ((i >= 0) && (A[i] > key)) {
      A[i + 1] = A[i];
      i = i - 1;
    }
    A[i + 1] = key;
  }
}
