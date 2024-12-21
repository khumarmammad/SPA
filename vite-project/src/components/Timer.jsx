import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const increaseTime = () => {
    if (!isRunning) setTime(prev => prev + 60); 
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime(prev => prev - 1), 1000);
    } else if (time === 0) {
      clearInterval(interval);
      if (isRunning) alert('Time is up!');
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div className="container">
      <h1>Timer</h1>
      <div className="time-display">
        {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
      </div>
      {!isRunning && <button onClick={increaseTime}>Add Minute</button>}
      <button onClick={startTimer} className="start" disabled={isRunning}>
        Start
      </button>
    </div>
  );
};

export default Timer;
