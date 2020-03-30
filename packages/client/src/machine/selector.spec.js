import { expect } from 'chai';
import { getMachineId } from './selector';
import { STORE } from '../test/mock_data/store';

describe('[machine/selectors]', () => {
  describe('getMachineId', () => {
    it('should return the machine id', () => {
      expect(getMachineId(STORE)).to.equal("123");
    })
  })
})