import "./App.css";

import { Dice } from "./lib";
import { diceImages } from "./lib";

function App() {
  return (
    <div className="App">
      <Dice images={diceImages} />
    </div>
  );
}

export default App;
