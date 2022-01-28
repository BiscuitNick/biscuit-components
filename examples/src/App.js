import { useState } from "react";
import { DiceClock, Biscuit, Dice } from "biscuit-land-components/dist";

// import { Stage, Layer, Rect } from "react-konva";

function App() {
  const [n, set] = useState(0);

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
        {/* <DiceClock
          margin={20}
          images={[
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
          ]}
          
        /> */}

        <Dice
          n={n}
          onClick={() => set(Math.floor(Math.random() * 6))}
          images={[
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
            "https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png",
          ]}
          size={Math.min(width, height) / 2}
        />
      </div>
    </div>
  );
}

export default App;
