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
  const [sorting, setSorting] = useState(false);

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
    generateRandomNumbers(data.length);
    // generateRandomNumbers(100);
    // setSize(100);
    // setSpeed(150);
  };

  const sortingStarted = () => {
    setSorting(true);
  };

  const sortingEnded = () => {
    setSorting(false);
  };

  const sortingArgs = (animations) => {
    return sortBars(
      animations,
      ANIMATION_SPEED,
      refContainer,
      data,
      setData,
      sortingStarted,
      sortingEnded
    );
  };

  const bubbleSort = () => {
    const animations = bubblesort([...data]);
    sortingArgs(animations);
  };

  const heapSort = () => {
    const animations = heapsort([...data]);
    sortingArgs(animations);
  };

  const quickSort = () => {
    const animations = quicksort([...data]);
    sortingArgs(animations);
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
        sorting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
