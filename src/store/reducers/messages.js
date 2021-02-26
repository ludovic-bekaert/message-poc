import { createAction, handleActions } from 'redux-actions';
import { end } from '../../middlewares/promiseLifecycle';

export const SEND_MESSAGE = 'messages/SEND_MESSAGE';

export const sendMessageAction = createAction(SEND_MESSAGE, () => new Promise((resolve) => setTimeout(resolve('ok'), 1000)));

const defaultState = { list: [] };

export default handleActions({
  [end(SEND_MESSAGE)]: (state, { payload: { error, data } }) => {
    if (error) {
      return state;
    }
    return {
      ...state,
      list: [
        ...states.list,
        data,
      ]
    };
  },
}, defaultState);