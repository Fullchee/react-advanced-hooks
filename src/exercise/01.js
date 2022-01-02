// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function counterReducer(state, step) {
  return state + step
}

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(counterReducer, initialCount)
  const increment = () => setCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter step={3}/>
}

export default App
