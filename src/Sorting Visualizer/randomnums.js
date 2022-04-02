export const randomNums = (size) => {
  const randomNumbers = [];
  for (let i = 1; i <= size; i++) {
    const currentRandomNumber = getRandomNumbers(20, 600);
    randomNumbers.push(currentRandomNumber);
  }
  return randomNumbers;
};

const getRandomNumbers = (min, max) => {
  return Math.round(Math.random() * (max - min + 1) + min);
};
