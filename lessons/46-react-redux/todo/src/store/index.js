import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage'
import rootReducer from './reducers'

const enhancer = compose(persistState('todos'))

export const store = createStore(rootReducer, composeWithDevTools(enhancer));