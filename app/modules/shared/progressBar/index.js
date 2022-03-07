import React from 'react';

import './styles.css';

const ProgressBar = ({ max, min = 0, current, color }) => {
  return (
    <div className="progress-bar">
      <div className="progress">
        <div
          style={{ maxWidth: `${(current * 100) / (max - min)}%`, backgroundColor: color }}
          className="filler"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
