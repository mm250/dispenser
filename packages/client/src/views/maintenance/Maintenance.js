import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductLevels from './ProductLevels';
import TemperatureHistory from './TemperatureHistory';

import { getStock } from '../../products/selector';
import { getMachineId } from '../../machine/selector';
import { getTemperatureHistory } from '../../temperature/selector';

import { attemptRetrieveTemperatureReadings } from '../../temperature/action';

import './Maintenance.css';

function Maintenance({ temperatureHistory, stock, machine_id, dispatchAttemptRetrieveTemperatureReadings }) {

  useEffect(() => {

    dispatchAttemptRetrieveTemperatureReadings({ machine_id });

  }, [dispatchAttemptRetrieveTemperatureReadings, machine_id]);

  return (
    <div className="maintenance">
      <div>
        <TemperatureHistory temperatures={temperatureHistory}/>
        <ProductLevels stock={stock} />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  stock: getStock,
  machine_id: getMachineId,
  temperatureHistory: getTemperatureHistory
})

const mapDispatchToProps = dispatch => ({
  dispatchAttemptRetrieveTemperatureReadings: (payload) => dispatch(attemptRetrieveTemperatureReadings(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Maintenance);