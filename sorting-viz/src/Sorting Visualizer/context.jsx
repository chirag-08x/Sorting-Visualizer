import { createContext, useRef, useState, useEffect, useContext } from "react";
import { bubblesort } from "../Sorting Algorithms/bubbleSort.js";
import { quicksort } from "../Sorting Algorithms/quickSort.js";
import { heapSort as heapsort } from "../Sorting Algorithms/heapsort.js";
import { sortBars } from "./sortBars.jsx";
import { randomNums } from "./randomnums.js";

const AppContext = createContext();

let ANIMATION_SPEED = 50;

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const refContainer = useRef(null);
  const [size, setSize] = useState(100);
  const [speed, setSpeed] = useState(150);

  const generateRandomNumbers = (size) => {
    const randomNumbers = randomNums(size);
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
  };

  const handleGenerateNewArray = () => {
    generateRandomNumbers(100);
    setSize(100);
    setSpeed(150);
  };

  const bubbleSort = () => {
    const animations = bubblesort([...data]);
    sortBars(animations, ANIMATION_SPEED, refContainer, data, setData);
  };

  const heapSort = () => {
    const animations = heapsort([...data]);
    sortBars(animations, ANIMATION_SPEED, refContainer, data, setData);
    console.log(animations);
  };

  const quickSort = () => {
    const animations = quicksort([...data]);
    sortBars(animations, ANIMATION_SPEED, refContainer, data, setData);
  };

  return (
    <AppContext.Provider
      value={{
        bubbleSort,
        quickSort,
        heapSort,
        handleGenerateNewArray,
        refContainer,
        data,
        size,
        handleSliderSize,
        speed,
        handleSliderSpeed,
        ANIMATION_SPEED,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
