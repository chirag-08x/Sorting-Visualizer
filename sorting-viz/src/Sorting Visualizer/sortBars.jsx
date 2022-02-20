const PRIMARY_COLOR = "#f15025";
const SECONDARY_COLOR = "#00ff00";
const MAIN_COLOR = "#0099ff";

export const sortBars = (
  animation,
  ANIMATION_SPEED,
  refContainer,
  data,
  setData
) => {
  for (let item = 0; item < animation.length; item++) {
    const bars = [...refContainer.current.childNodes];
    const changeColor = item % 2 === 0;
    const [barOne, barTwo] = animation[item];
    if (changeColor) {
      setTimeout(() => {
        bars[barOne].style.backgroundColor = PRIMARY_COLOR;
        bars[barTwo].style.backgroundColor = SECONDARY_COLOR;
      }, item * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        bars[barOne].style.backgroundColor = MAIN_COLOR;
        bars[barTwo].style.backgroundColor = MAIN_COLOR;
        [data[barOne], data[barTwo]] = [data[barTwo], data[barOne]];
        setData([...data]);
      }, item * ANIMATION_SPEED);
    }
  }
};
