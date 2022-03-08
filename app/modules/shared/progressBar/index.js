import React from 'react';

import './styles.css';

const ProgressBar = ({ max, min = 0, current, color }) => {
  return (
    // key for rerender and triggering animation
    <div key={Math.random()} className="progress-bar">
      <div className="progress">
        <div
          style={{ maxWidth: `${(current * 100) / (max - min)}%`, backgroundColor: color }}
          className="filler"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
