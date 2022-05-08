const animations = [];
export function mergesort(array) {
  mainMergeSort(array);
  return animations;
}

function mainMergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middleIdx = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIdx);
  const rightHalf = array.slice(middleIdx);
  return mergerSortHelper(
    array,
    mainMergeSort(leftHalf),
    mainMergeSort(rightHalf)
  );
}

function mergerSortHelper(array, leftHalf, rightHalf) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      array[k++] = leftHalf[i++];
    } else {
      array[k++] = rightHalf[j++];
    }
  }
  while (i < leftHalf.length) {
    array[k++] = leftHalf[i++];
    animations.push([k, i]);
    animations.push([k, i]);
  }
  while (j < rightHalf.length) {
    array[k++] = rightHalf[j++];
    animations.push([k, j]);
    animations.push([k, j]);
  }
  return array;
}
