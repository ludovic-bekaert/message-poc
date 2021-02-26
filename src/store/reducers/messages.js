import { createAction, handleActions } from 'redux-actions';
import { end } from '../../middlewares/promiseLifecycle';
import { getMessagesList, postMessage } from '../../resources/messages';

export const SEND_MESSAGE = 'messages/SEND_MESSAGE';
export const GET_MESSAGES = 'messages/GET_MESSAGES';

export const getMessagesActions = createAction(GET_MESSAGES, () => getMessagesList());
export const sendMessageAction = createAction(SEND_MESSAGE, (data) => postMessage(data));

const defaultState = { list: null };

export default handleActions({
  [end(GET_MESSAGES)]: (state, { payload: { data } }) => ({
    ...state,
    list: data,
  }),
  [end(SEND_MESSAGE)]: (state, { payload: { error, data } }) => {
    if (error) {
      return state;
    }
    return {
      ...state,
      list: [
        ...state.list,
        data,
      ]
    };
  },
}, defaultState);