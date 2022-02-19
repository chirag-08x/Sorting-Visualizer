const animations = [];
export function mainMergeSort(array) {
  mergesort(array);
  return animations;
}

function mergesort(array) {
  if (array.length <= 1) return array;
  const middleIdx = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIdx);
  const rightHalf = array.slice(middleIdx);
  return mergeSortedArrays(mergesort(leftHalf), mergesort(rightHalf));
}

function mergeSortedArrays(leftHalf, rightHalf) {
  const sortedArray = new Array(leftHalf.length + rightHalf.length);
  let k = 0;
  let i = 0;
  let j = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      animations.push([i, j]);
      sortedArray[k++] = leftHalf[i++];
    } else {
      animations.push([i, j]);
      sortedArray[k++] = rightHalf[j++];
    }
  }

  while (i < leftHalf.length) {
    animations.push([k, i]);
    sortedArray[k++] = leftHalf[i++];
  }

  while (j < rightHalf.length) {
    animations.push([k, j]);
    sortedArray[k++] = rightHalf[j++];
  }

  return sortedArray;
}

// a = mergesort([
//   544, -578, 556, 713, -655, -359, -810, -731, 194, -531, -685, 689, -279, -738,
//   886, -54, -320, -500, 738, 445, -401, 993, -753, 329, -396, -924, -975, 376,
//   748, -356, 972, 459, 399, 669, -488, 568, -702, 551, 763, -90, -249, -45, 452,
//   -917, 394, 195, -877, 153, 153, 788, 844, 867, 266, -739, 904, -154, -947,
//   464, 343, -312, 150, -656, 528, 61, 94, -581,
// ]);

// console.log(a);
// console.log(animations);

// export default mergesort;
