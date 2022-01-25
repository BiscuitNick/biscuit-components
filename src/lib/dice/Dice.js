import "./dice.css";

// import d0 from "./images/0.png";
// import d1 from "./images/1.png";
// import d2 from "./images/2.png";
// import d3 from "./images/3.png";
// import d4 from "./images/4.png";
// import d5 from "./images/5.png";
// import d6 from "./images/6.png";
// import d7 from "./images/7.png";
// import d8 from "./images/8.png";
// import d9 from "./images/9.png";

import { useState } from "react";

const sides = ["front", "back", "left", "right", "top", "bottom"];

const Dice = ({ size = 200, n, handleClick }) => {
  const [side, setSide] = useState(sides[n] || "front");
  const width = size;
  const height = size;

  const [completeRotations, setComplete] = useState(
    Math.floor(Math.random() * 10 - 20) * 360
  );
  const [arbitraryRotation, setArbitrary] = useState(
    Math.floor(Math.random() * 10 - 20) * 360
  );

  const faces = {
    front: {
      width,
      height,
      transform: `rotateY(0deg) translateZ(${size / 2}px)`,
      // backgroundImage: `url(${d6})`,
    },
    back: {
      width,
      height,
      transform: `rotateY(180deg) translateZ(${size / 2}px)`,
      // backgroundImage: `url(${d1})`,
    },
    right: {
      width,
      height,
      transform: `rotateY(90deg) translateZ(${size / 2}px)`,
      // backgroundImage: `url(${d5})`,
    },
    left: {
      width,
      height,
      transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
      // backgroundImage: `url(${d2})`,
    },
    top: {
      width,
      height,
      transform: `rotateX(90deg) translateZ(${size / 2}px)`,
      // backgroundImage: `url(${d3})`,
    },
    bottom: {
      width,
      height,
      transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
      // backgroundImage: `url(${d4})`,
    },
  };
  const rotations = {
    front: {
      transform: `translateZ(-${
        size / 2
      }px) rotateY(${completeRotations}deg) rotateZ(${arbitraryRotation}deg) rotateX(${completeRotations}deg)`,
    },
    back: {
      transform: `translateZ(-${size / 2}px) rotateY(${
        completeRotations - 180
      }deg) rotateZ(${arbitraryRotation}deg) rotateX(${completeRotations}deg)`,
    },
    right: {
      transform: `translateZ(-${size / 2}px) rotateY(${
        completeRotations - 90
      }deg) rotateX(${arbitraryRotation}deg) rotateZ(${completeRotations}deg)`,
    },
    left: {
      transform: `translateZ(-${size / 2}px) rotateY(${
        completeRotations + 90
      }deg) rotateX(${arbitraryRotation}deg) rotateZ(${completeRotations}deg)`,
    },
    top: {
      transform: `translateZ(-${size / 2}px) rotateX(${
        completeRotations - 90
      }deg) rotateY(${arbitraryRotation}deg) rotateZ(${completeRotations}deg)`,
    },
    bottom: {
      transform: `translateZ(-${size / 2}px) rotateX(${
        completeRotations + 90
      }deg) rotateY(${arbitraryRotation}deg)`,
    },
  };

  console.log(completeRotations, arbitraryRotation);

  const Cube = (
    <div
      className="scene"
      style={{
        width,
        height,
        perspective: size * 2,
        margin: size * 0.4,
      }}
      onClick={() => {
        const newSide = Math.floor(Math.random() * sides.length);
        setComplete(Math.floor(Math.random() * 10 - 20) * 360);
        setArbitrary(Math.floor(Math.random() * 10 - 20) * 360);

        // setArbitrary(Math.floor(Math.random() * 1080 - 2160));
        console.log(newSide, sides[newSide]);
        setSide(sides[newSide]);
      }}
    >
      <div className={"cube"} style={{ ...rotations[side], width, height }}>
        {Object.keys(faces).map((side, i) => (
          <div key={i} className={"cube__face"} style={faces[side]}></div>
        ))}
        {/* <div class="cube__face cube__face--front"></div>
        <div class="cube__face cube__face--back"></div>
        <div class="cube__face cube__face--right"></div>
        <div class="cube__face cube__face--left"></div>
        <div class="cube__face cube__face--top"></div>
        <div class="cube__face cube__face--bottom"></div> */}
      </div>
    </div>
  );

  return Cube;
};

export default Dice;
