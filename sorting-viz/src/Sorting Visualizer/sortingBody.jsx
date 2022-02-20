import { useGlobalContext } from "./context";

const SortingBody = () => {
  const {
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
  } = useGlobalContext();

  return (
    <main>
      <nav className="navbar">
        <article className="nav-container">
          <article className="nav-header">
            <h1 className="title">Sorting Visualizer</h1>
          </article>

          <article className="nav-links">
            <button className="btn">merge sort</button>
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

export default SortingBody;
