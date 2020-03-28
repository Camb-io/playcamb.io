import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import boardReducer from './board/reducer'
import playersReducer from './player/reducer'

const rootReducer = combineReducers({
  board: boardReducer,
  players: playersReducer
})

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))


export default store 