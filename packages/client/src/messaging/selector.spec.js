import { expect } from 'chai';
import { getMessage } from './selector';
import { STORE } from '../test/mock_data/store';

describe('[messaging/selectors]', () => {
  describe('getMessage', () => {
    it('should return given message', () => {

      expect(getMessage(STORE)).to.eql({
        type: 'error',
        text: 'This is a error'
      });

    });
  });
});