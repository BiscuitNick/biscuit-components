import "./App.css";
import { useState } from "react";

import { Dice } from "./lib";
import { DiceClock } from "./lib/dice/DiceClock";

function App() {
  //const [n, set] = useState(Math.floor(Math.random() * 6));

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <DiceClock
          size={150}
          margin={10}
          border={`2px solid black`}
          // maxRotation={0}

          minRotation={true}
        />
      </div>
    </div>
  );
}

export default App;
