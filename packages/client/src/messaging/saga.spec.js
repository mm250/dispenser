import { testSaga } from 'redux-saga-test-plan';
import { reportSuccessMessage, clearMessage} from '../messaging/action';
import { reportMessage } from './saga'

describe('[messaging/saga]', () => {
  describe('reportMessage', () => {
    it('should update store with a given message ' +
      'action, wait 3000ms and then clear message', () => {
      const messageAction = reportSuccessMessage("Success");
      return testSaga(
        reportMessage,
        messageAction
      )
        .next()
        .put(messageAction)
        .next()
        .delay(3000)
        .next()
        .put(clearMessage())
        .next()
        .isDone();
    })
  })
})