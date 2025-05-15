import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  const results = useSelector(state => state.results.results);
  return (
    <div>
      <h2>Son nəticələr</h2>
      <ul>
        {results.map((r, i) => (
          <li key={i}>
            {r.hours.toString().padStart(2, '0')}:
            {r.minutes.toString().padStart(2, '0')}:
            {r.seconds.toString().padStart(2, '0')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
