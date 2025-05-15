// components/Stopwatch.js (TARIXÇƏ FUNKSIYASI VƏ FƏRQLİ "BAŞLA" və "DAYAN")
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementSecond, toggleRunning, resetTime } from '../slices/timeSlice';
import { addResult } from '../slices/resultsSlice';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds, isRunning } = useSelector(state => state.time);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementSecond());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  const formatTime = (h, m, s) =>
    `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

  const handleSave = () => {
    dispatch(addResult({ hours, minutes, seconds }));
    setHistory([...history, formatTime(hours, minutes, seconds)]);
  };

  const handleStart = () => {
    if (!isRunning) {
      dispatch(toggleRunning());
    }
  };

  const handleStop = () => {
    if (isRunning) {
      dispatch(toggleRunning());
    }
  };

  return (
    <div>
      <h2>{formatTime(hours, minutes, seconds)}</h2>
      <button onClick={handleStart} disabled={isRunning}>Başla</button>
      <button onClick={handleStop} disabled={!isRunning}>Dayan</button>
      <button onClick={() => dispatch(resetTime())}>Sıfırla</button>
      <button onClick={handleSave}>Tarixçəyə əlavə et</button>

      <ul>
        {history.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stopwatch;
