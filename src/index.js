import ReactDOM from "react-dom";
import Index from "./App";
import "./index.css";
import { AppProvider } from "./Sorting Visualizer/context";

const App = () => {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
