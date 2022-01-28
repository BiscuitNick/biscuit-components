import React from "react";
const Konva = require("react-konva"); //requireKonva from "konva";
const { Stage, Layer, Rect } = Konva;
export default function Biscuit({
  width = 50,
  height = 50,
  fill = "red",
  draggable = true,
  //...props
}) {
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect width={width} height={height} fill={fill} draggable={draggable} />
      </Layer>
    </Stage>
  );
}
