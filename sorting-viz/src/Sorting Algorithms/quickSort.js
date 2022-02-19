export function quicksort(array) {
  let animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;

  const pivotIdx = startIdx;

  let leftIdx = startIdx + 1;

  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      animations.push([leftIdx, rightIdx]);
      animations.push([leftIdx, rightIdx]);
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  animations.push([pivotIdx, rightIdx]);
  animations.push([pivotIdx, rightIdx]);
  swap(pivotIdx, rightIdx, array);

  const leftSubarrayIsSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);

  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1, animations);

    quickSortHelper(array, rightIdx + 1, endIdx, animations);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx, animations);
    quickSortHelper(array, startIdx, rightIdx - 1, animations);
  }
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
