import { useGlobalContext } from "./context";

const SortingBody = () => {
  const {
    bubbleSort,
    quickSort,
    heapSort,
    mergeSort,
    handleGenerateNewArray,
    refContainer,
    data,
    size,
    handleSliderSize,
    speed,
    handleSliderSpeed,
    sorting,
  } = useGlobalContext();

  const isBtnDisabled = () => {
    return sorting === true;
  };

  return (
    <main>
      <nav className="navbar">
        <article className="nav-container">
          <article className="nav-header">
            <h1 className="title">Sorting Visualizer</h1>
          </article>

          <article className="nav-links">
            <button
              className="btn"
              onClick={quickSort}
              disabled={isBtnDisabled()}
            >
              quick sort
            </button>
            <button
              className="btn"
              onClick={heapSort}
              disabled={isBtnDisabled()}
            >
              heap sort
            </button>
            <button
              className="btn"
              onClick={bubbleSort}
              disabled={isBtnDisabled()}
            >
              bubble sort
            </button>
            <button
              className="btn"
              onClick={mergeSort}
              // disabled={isBtnDisabled()}
              disabled
            >
              merge sort
            </button>
          </article>

          <article className="helpers">
            <button
              className="btn"
              onClick={handleGenerateNewArray}
              disabled={isBtnDisabled()}
            >
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
            >
              {data.length <= 20 && <p className="num">{item}</p>}
            </div>
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
          disabled={isBtnDisabled()}
        />

        <label htmlFor="speed" className="slider-label">
          Change Speed
        </label>
        <input
          type="range"
          min="0"
          // max="170"
          max="180"
          step={10}
          value={speed}
          className="slider slider-speed"
          id="speed"
          onChange={handleSliderSpeed}
          disabled={isBtnDisabled()}
        />
      </article>
    </main>
  );
};

export default SortingBody;
