import { BitTimer } from "react-icons/bi";
import { useState, useEffect } from "react";

const Timer = () => {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  //   const [millisec, setMillisec] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(mins, secs);
      setSecs(secs + 1);
      if (secs === 59) {
        setMins(mins + 1);
        setSecs(0);
      }
    }, 1000);
  }, [secs]);

  return null;
};

export default Timer;
