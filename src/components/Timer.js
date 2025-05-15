import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [input, setInput] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const totalSeconds = input.hours * 3600 + input.minutes * 60 + input.seconds;

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setTimeLeft(totalSeconds);
    setIsRunning(true);
  };

  const format = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Taymer</h2>
      <input type="number" placeholder="Saat" onChange={(e) => setInput({ ...input, hours: +e.target.value })} />
      <input type="number" placeholder="Dəqiqə" onChange={(e) => setInput({ ...input, minutes: +e.target.value })} />
      <input type="number" placeholder="Saniyə" onChange={(e) => setInput({ ...input, seconds: +e.target.value })} />
      <button onClick={handleStart}>Başla</button>

      {timeLeft > 0 && <h3>Qalıq vaxt: {format(timeLeft)}</h3>}
      {timeLeft === 0 && isRunning === false && <h3>Taymer bitdi!</h3>}
    </div>
  );
};

export default Timer;
