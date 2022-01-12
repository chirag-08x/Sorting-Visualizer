export function bubbleSort(data) {
  const animations = [];
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < data.length - counter - 1; i++) {
      if (data[i] > data[i + 1]) {
        swap(i, i + 1, data);
        isSorted = false;
        animations.push([i, i + 1]);
      }
    }
    counter += 1;
  }
  return animations;
}

function swap(i, j, data) {
  [data[i], data[j]] = [data[j], data[i]];
}
