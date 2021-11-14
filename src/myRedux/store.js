import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { cakeReducer } from './cakeRedux'
import { iceCreamReducer } from './iceCreamRedux'
import { userReducer } from './userRedux'


//combine multiple reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

const store = createStore(
  rootReducer,
  //applyMiddleware(logger),
  composeWithDevTools(applyMiddleware(logger, thunk))
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store