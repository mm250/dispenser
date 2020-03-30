import { expect } from 'chai';
import {
  getTemperatureHistory,
  getCurrentTemperature,
  getCurrentTemperatureRequest
} from './selector';

import { STORE } from '../test/mock_data/store';

describe('[temperature/selectors]', () => {

  describe('getTemperatureHistory', () => {
    it('should return an array containing temperature history', () => {
      expect(getTemperatureHistory(STORE)).to.eql([{
        temperature: 99.0,
        timestamp: "1585321181"
      }]);
    })
  })

  describe('getCurrentTemperature', () => {
    it('should return an object containing the current temperature', () => {
      expect(getCurrentTemperature(STORE)).to.eql({
        temperature: 30, lastSubmitted: "11/30/2011, 12:00:00 AM"
      })
    })
  })

  describe('getCurrentTemperatureRequest', () => {
    it('should return the machine id', () => {
      const temp = getCurrentTemperatureRequest(STORE);
      expect(temp.machine_id).to.equal("123");
      expect(temp.temperature).to.equal(30);
    })
  })

})


