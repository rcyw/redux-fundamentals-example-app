import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'

import './api/server'

import store from './store'
import { fetchTodos } from './features/todos/todosSlice'

store.dispatch(fetchTodos)

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// log: '1'
// log: '2'
// log: '3'
// console.log('State after dispatch: ', store.getState())

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
