// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux'
// Import your own reducer
import { createStore } from 'redux';
import createReducer from '../store/reducers';

function render(
  ui,
  {
    initialState,
    store = createStore(
      createReducer(),
      initialState,
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }