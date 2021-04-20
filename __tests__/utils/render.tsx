import React from 'react';
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import weatherReducer from '../../src/store/weather'

export const render = (
  ui,
  {
    initialState = {},
    store = createStore(
      weatherReducer, initialState
    ),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}