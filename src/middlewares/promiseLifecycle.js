import _ from 'lodash';

export const startSuffix = 'START';
export const endSuffix = 'END';

export const start = actionName => `${actionName}_${startSuffix}`;
export const end = actionName => `${actionName}_${endSuffix}`;

export default store => next => action => {
  if (action.payload && typeof action.payload.then === 'function') {
    store.dispatch({
      ..._.omit(action, 'payload'),
      type: start(action.type)
    });
    return next({ ...action, type: end(action.type) });
  }
  return next(action);
};
