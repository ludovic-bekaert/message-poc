import { combineReducers } from 'redux';
import messages from './messages';
export default function createReducer() {
  const rootReducer = combineReducers({
    messages,
  });
  return (state, action) => rootReducer(state, action);
}