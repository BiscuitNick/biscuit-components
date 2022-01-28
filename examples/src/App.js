import { DiceClock, Biscuit } from "biscuit-land-components/dist";

// import { Stage, Layer, Rect } from "react-konva";

function App() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const wide = width > height;
  const size = Math.floor(wide ? width / 7 : Math.min(width / 3, height / 4));

  console.log("wtf?", height, width);
  return (
    <div
      style={{
        display: "grid",
        height,
        width,
        background: "black",
      }}
    >
      <div
        style={{
          margin: "auto",
          display: "grid",
          gridAutoFlow: wide ? "column" : "row",
          justifyContent: "space-around",
        }}
      >
        <DiceClock />
        <Biscuit fill={"orange"} width={500} height={500} draggable={true} />
      </div>
    </div>
  );
}

export default App;
