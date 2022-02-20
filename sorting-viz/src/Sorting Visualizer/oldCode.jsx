import { useState, useEffect, useRef } from "react";
import { bubblesort } from "../Sorting Algorithms/bubbleSort.js";
import { quicksort } from "../Sorting Algorithms/quickSort.js";
import { heapSort as heapsort } from "../Sorting Algorithms/heapsort.js";

const PRIMARY_COLOR = "#f15025";
const SECONDARY_COLOR = "#00ff00";
const MAIN_COLOR = "#0099ff";

let ANIMATION_SPEED = 50;

const SortingViz = () => {
  const [data, setData] = useState([]);
  const refContainer = useRef(null);
  const [size, setSize] = useState(100);
  const [speed, setSpeed] = useState(150);

  const generateRandomNumbers = (size) => {
    const randomNumbers = [];
    for (let i = 1; i <= size; i++) {
      const currentRandomNumber = getRandomNumbers(5, 600);
      randomNumbers.push(currentRandomNumber);
    }
    setData(randomNumbers);
  };

  useEffect(() => {
    generateRandomNumbers(size);
  }, [size]);

  const handleSliderSize = (e) => {
    setSize(e.target.value);
  };

  const handleSliderSpeed = (e) => {
    setSpeed(e.target.value);
    ANIMATION_SPEED = 200 - e.target.value;
    console.log(e.target.value, ANIMATION_SPEED);
  };

  const handleGenerateNewArray = () => {
    generateRandomNumbers(100);
    setSize(100);
    setSpeed(150);
  };

  const sortBars = (animation) => {
    console.log("Speed", ANIMATION_SPEED);
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

  const bubbleSort = () => {
    const animations = bubblesort([...data]);
    sortBars(animations);
  };

  const heapSort = () => {
    const animations = heapsort([...data]);
    sortBars(animations);
    console.log(animations);
  };

  const quickSort = () => {
    const animations = quicksort([...data]);
    sortBars(animations);
  };

  const mergeSort = () => {};

  return (
    <main>
      <nav className="navbar">
        <article className="nav-container">
          <article className="nav-header">
            <h1 className="title">Sorting Visualizer</h1>
          </article>

          <article className="nav-links">
            <button className="btn" onClick={mergeSort}>
              merge sort
            </button>
            <button className="btn" onClick={quickSort}>
              quick sort
            </button>
            <button className="btn" onClick={heapSort}>
              heap sort
            </button>
            <button className="btn" onClick={bubbleSort}>
              bubble sort
            </button>
          </article>

          <article className="helpers">
            <button className="btn" onClick={handleGenerateNewArray}>
              generate new array
            </button>
          </article>
        </article>
      </nav>

      <article className="numbers" ref={refContainer}>
        {data.map((item, index) => {
          return (
            <div
              className="single-number"
              style={{ height: `${item}px` }}
              key={index}
            ></div>
          );
        })}
      </article>

      <article className="range">
        <label htmlFor="size" className="slider-label">
          Change Size
        </label>
        <input
          type="range"
          min="5"
          max="150"
          value={size}
          className="slider slider-size"
          id="size"
          onChange={handleSliderSize}
        />

        <label htmlFor="speed" className="slider-label">
          Change Speed
        </label>
        <input
          type="range"
          min="0"
          max="170"
          step={10}
          value={speed}
          className="slider slider-speed"
          id="speed"
          onChange={handleSliderSpeed}
        />
      </article>
    </main>
  );
};

export default SortingViz;

const getRandomNumbers = (min, max) => {
  return Math.round(Math.random() * (max - min + 1) + min);
};

// useEffect(() => {
//   if (data.length > 0) {
//     const len = data.length;
//     ANIMATION_SPEED =
//       len <= 25
//         ? 500
//         : len <= 45
//         ? 150
//         : len <= 80
//         ? 80
//         : len <= 110
//         ? 50
//         : 30;
//   }
// }, [data]);
