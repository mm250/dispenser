import React from 'react';

import './TemperatureHistory.css';

function TemperatureHistory({ temperatures }) {
  return (
    <div className="temperature-history">
      <div className="temperature-history-heading">Temperature History</div>
      <div className="temperature-history-container">
      {
        temperatures.map((item, key) =>
          <div className="temperature-history-item" key={key}>{item.temperature}&#8451; {item.timestamp}</div>
        )
      }
      </div>
    </div>
  );
}

export default TemperatureHistory;