import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'
import {
  includeMeaningOfLife,
  sayHiOnDispatch,
} from './exampleAddons/enhancers'

// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/README.md
const composedEnhancer = composeWithDevTools({
  trace: true,
  traceLimit: 25,
})

const store = createStore(
  rootReducer,
  composedEnhancer(
    // Add whatever middleware you actually want to use here
    applyMiddleware(print1, print2, print3),
    // other store enhancers if any
    sayHiOnDispatch,
    includeMeaningOfLife
  )
)
export default store
