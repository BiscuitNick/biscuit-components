import "./App.css";
import { useState } from "react";

import { Dice } from "./lib";
import { DiceClock } from "./lib/dice/DiceClock";
// const standardDice = {
//   1: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
//   2: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
//   3: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
//   4: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
//   5: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
//   6: "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
// };

const standardDice = [
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
];

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
