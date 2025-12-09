import React, { useEffect, useState } from "react";
import "../css/Timer.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(343196);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        return prevTimeLeft - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [timeLeft]);

  function formateTime(second, what) {
    const d = Math.floor(second / 86400);
    const h = Math.floor((second % 86400) / 3600);
    const m = Math.floor(((second % 86400) % 3600) / 60);
    const s = ((second % 86400) % 3600) % 60;

    if (what == "day") return `${d.toString().padStart(2, "0")}`;
    if (what == "hour") return `${h.toString().padEnd(2, "0")}`;
    if (what == "minute") return `${m.toString().padEnd(2, "0")}`;
    if (what == "second") return `${s.toString().padEnd(2, "0")}`;
  }

  return (
    <>
      <div className="time">
        <div className="timeComponent">
          <p>Days</p>
          <div className="timeDay">
            <p>{formateTime(timeLeft, "day")} </p>
          </div>
          
        </div><p>:</p>
        <div className="timeComponent">
          <p>Hours</p>
          <div>{formateTime(timeLeft, "hour")}</div>
        </div><p>:</p>
        <div className="timeComponent">
          <p>Minutes</p>
          <div>{formateTime(timeLeft, "minute")}</div>
        </div><p>:</p>
        <div className="timeComponent">
          <p>Seconds</p>
          <div>{formateTime(timeLeft, "second")}</div>
        </div>
      </div>
    </>
  );
};

export default Timer;
