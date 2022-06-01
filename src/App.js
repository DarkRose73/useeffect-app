import React, { useState } from "react";
import FetchCard from "./components/FetchCard";
import LifeCycle from "./components/LifeCycle";
import ResizeApp from "./components/ResizeApp";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <LifeCycle />
      {/* <FetchCard /> */}
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      {show && <ResizeApp />} */}
    </div>
  );
}

export default App;
