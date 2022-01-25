// import "./dice.css";
import React, { useState } from "react";

const sides = ["front", "back", "left", "right", "top", "bottom"];

const Dice = ({ size = 200, n, handleClick, images }) => {
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
      backgroundImage: images ? `url(${images[6]})` : null,
    },
    back: {
      width,
      height,
      transform: `rotateY(180deg) translateZ(${size / 2}px)`,
      backgroundImage: images ? `url(${images[1]})` : null,
    },
    right: {
      width,
      height,
      transform: `rotateY(90deg) translateZ(${size / 2}px)`,
      backgroundImage: images ? `url(${images[5]})` : null,
    },
    left: {
      width,
      height,
      transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
      backgroundImage: images ? `url(${images[2]})` : null,
    },
    top: {
      width,
      height,
      transform: `rotateX(90deg) translateZ(${size / 2}px)`,
      backgroundImage: images ? `url(${images[3]})` : null,
    },
    bottom: {
      width,
      height,
      transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
      backgroundImage: images ? `url(${images[4]})` : null,
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
        setComplete(Math.floor(Math.random() * 10 - 20) * 720);
        // setArbitrary(Math.floor(Math.random() * 10 - 20) * 360);

        setArbitrary(Math.floor(Math.random() * 1080 - 2160));
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
