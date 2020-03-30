import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import Header from './views/header/Header';
import Temperature from './views/temperature/Temperature';
import Dispenser from './views/dispenser/Dispenser';
import Maintenance from './views/maintenance/Maintenance';

import Toast from './compoments/toast/Toast';

import { pollingSubmitTemperatureReading, endPollingSubmitTemperatureReading } from './temperature/action';

import { getMessage } from "./messaging/selector";

import './App.css';

function App (
  {
    message,
    dispatchPollingSubmitTemperature,
    dispatchEndPollingSubmitTemperature
  }) {

    const [view, setView] = useState("drinks");

    useEffect(() => {
      dispatchPollingSubmitTemperature();
      return dispatchEndPollingSubmitTemperature;
    }, [dispatchPollingSubmitTemperature, dispatchEndPollingSubmitTemperature]);

    return (
      <div className="App">
        {
          message && <Toast message={message.text} type={message.type} />
        }


        <Header
          onDrinks={() => setView("drinks")}
          onMaintenance={() => setView("maintenance")}
          view={ view }
        />
        <Temperature />
        { view === "maintenance" && <Maintenance /> }
        { view === "drinks" && <Dispenser /> }
      </div>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatchPollingSubmitTemperature: () => dispatch(pollingSubmitTemperatureReading()),
  dispatchEndPollingSubmitTemperature: () => dispatch(endPollingSubmitTemperatureReading())
})

const mapStateToProps = createStructuredSelector({
  message: getMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
