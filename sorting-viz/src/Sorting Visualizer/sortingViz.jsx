import { useState, useEffect, useRef } from "react";
import { bubbleSort } from "../Sorting Algorithms/bubbleSort";

const SortingViz = () => {
  const [data, setData] = useState([]);
  const refContainer = useRef(null);

  useEffect(() => {
    const randomNumbers = [];
    for (let i = 1; i <= 100; i++) {
      const currentRandomNumber = getRandomNumbers(5, 600);
      randomNumbers.push(currentRandomNumber);
    }
    setData(randomNumbers);
  }, []);

  const startSorting = () => {
    const animation = bubbleSort([...data]);
    animation.forEach((item) => {
      setTimeout(() => {
        const childElements = [...refContainer.current.childNodes];
        const [i, j] = item;
        [data[i], data[j]] = [data[j], data[i]];
        setData([...data]);
      }, 1000);
    });
  };

  return (
    <main>
      <nav className="navbar">
        <article className="nav-container">
          <article className="nav-header">
            <h1 className="title">Sorting Visualizer</h1>
          </article>

          <article className="nav-links">
            <button className="btn">MergeSort</button>
            <button className="btn">quicksort</button>
            <button className="btn">heap sort</button>
            <button className="btn" onClick={startSorting}>
              bubble sort
            </button>
          </article>
        </article>
      </nav>
      <div className="numbers" ref={refContainer}>
        {data.map((item, index) => {
          return (
            <div
              className="single-number"
              style={{ height: `${item}px` }}
              key={index}
            ></div>
          );
        })}
      </div>
    </main>
  );
};

export default SortingViz;

const getRandomNumbers = (min, max) => {
  return Math.round(Math.random() * (max - min + 1) + min);
};
