import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Current Time</h1>
      <div className="time-display">{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;