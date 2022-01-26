import React from "react";

import { useState, useEffect } from "react";
import { Dice } from "../index";

const hoursToDice = {
  0: [6, 6],
  1: [0, 1],
  2: [1, 1],
  3: [1, 2],
  4: [2, 2],
  5: [2, 3],
  6: [3, 3],
  7: [3, 4],
  8: [4, 4],
  9: [4, 5],
  10: [5, 5],
  11: [5, 6],
};

const zeroToFive = [
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/0.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
];
const sixToNine = [
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/7.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/8.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/9.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/0.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
];

const sixToFive = [
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
];

const oneToSix = [
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/1.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/2.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/3.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/4.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/5.png",
  "https://raw.githubusercontent.com/BiscuitNick/biscuit-components/master/public/images/6.png",
];

export const DiceClock = (props) => {
  const { hourStyle, minuteStyle, secondStyle } = props;
  //   const { width, height } = useWindowSize();
  const [hourDice, setHours] = useState([6, 6]);
  const [minuteDice, setMinutes] = useState([5, 9]);
  const [secondDice, setSeconds] = useState([5, 9]);

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date();
      let h = now.getHours() % 12;
      let m = now.getMinutes();
      let s = now.getSeconds();

      setHours(hoursToDice[h]);
      setMinutes([Math.floor(m / 10), m % 10]);
      setSeconds([Math.floor(s / 10), s % 10]);
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);

  console.log(hourDice, minuteDice, secondDice);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          ...hourStyle,
        }}
      >
        <Dice
          {...props}
          n={hourDice[0]}
          images={hourDice[0] > 5 ? sixToFive : zeroToFive}
        />
        <Dice {...props} n={hourDice[1]} images={sixToFive} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          ...minuteStyle,
        }}
      >
        <Dice {...props} n={minuteDice[0]} images={zeroToFive} />
        <Dice
          {...props}
          n={minuteDice[1]}
          images={minuteDice[1] > 5 ? sixToNine : zeroToFive}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          ...secondStyle,
        }}
      >
        <Dice {...props} n={secondDice[0]} />
        <Dice
          {...props}
          n={secondDice[1]}
          images={secondDice[1] > 5 ? sixToNine : zeroToFive}
        />
      </div>
    </>
  );
};
