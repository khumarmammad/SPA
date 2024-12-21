import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleStopwatch = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime(prev => prev + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="time-display">{time}s</div>
      <button onClick={toggleStopwatch} className={isRunning ? 'pause' : 'start'}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default Stopwatch;