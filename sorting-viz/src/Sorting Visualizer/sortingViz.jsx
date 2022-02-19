import { useState, useEffect, useRef } from "react";
import { bubblesort } from "../Sorting Algorithms/bubbleSort.js";
import { mainMergeSort } from "../Sorting Algorithms/mergeSort.js";
import { quicksort } from "../Sorting Algorithms/quickSort.js";

const PRIMARY_COLOR = "#f15025";
const SECONDARY_COLOR = "#00ff00";
const MAIN_COLOR = "#0099ff";

let ANIMATION_SPEED = "50";

const SortingViz = () => {
  const [data, setData] = useState([]);
  const refContainer = useRef(null);
  const [value, setValue] = useState(5);

  const generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 1; i <= 60; i++) {
      const currentRandomNumber = getRandomNumbers(5, 600);
      randomNumbers.push(currentRandomNumber);
    }
    setData(randomNumbers);
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const len = data.length;
      ANIMATION_SPEED =
        len <= 25
          ? "500"
          : len <= 45
          ? "150"
          : len <= 80
          ? "80"
          : len <= 110
          ? "50"
          : "40";
      console.log(ANIMATION_SPEED);
    }
  }, [data]);

  const sortBars = (animation) => {
    console.log(ANIMATION_SPEED);
    for (let item = 0; item < animation.length; item++) {
      const bars = [...refContainer.current.childNodes];
      const changeColor = item % 2 == 0;
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

  const heapSort = () => {};

  const quickSort = () => {
    const animations = quicksort([...data]);
    sortBars(animations);
  };

  const mergeSort = () => {
    // const animations = mainMergeSort([...data]);
    // sortBars(animations);
  };

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
            <button className="btn">heap sort</button>
            <button className="btn" onClick={bubbleSort}>
              bubble sort
            </button>
          </article>

          <article className="helpers">
            <button className="btn" onClick={generateRandomNumbers}>
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
        <input
          type="range"
          min="5"
          max="150"
          // value="50"
          value={value}
          className="slider"
          id="myRange"
          onChange={(e) => setValue(e.target.value)}
        />
      </article>
    </main>
  );
};

export default SortingViz;

const getRandomNumbers = (min, max) => {
  return Math.round(Math.random() * (max - min + 1) + min);
};
