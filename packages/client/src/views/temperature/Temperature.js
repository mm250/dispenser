import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { getCurrentTemperature } from "../../temperature/selector";

import './Temperature.css';

function Temperature({ currentTemperature }) {
  return (
    <div className="temperature">
      <div className="temperature-label">Current Temperature: <span className="temperature-label-text">{ currentTemperature.temperature }&#8451;</span></div>
      <div className="temperature-label">Last Submitted:  <span className="temperature-label-text">{ currentTemperature.lastSubmitted }</span></div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentTemperature: getCurrentTemperature
})

export default connect(mapStateToProps)(Temperature);