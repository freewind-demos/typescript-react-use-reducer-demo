import React, {useContext, useReducer} from 'react'

type Counter = {
  count: number;
}

function reducer(state: Counter, action: '+1' | '-1'): Counter {
  switch (action) {
    case '+1' :
      return ({count: state.count + 1})
    case '-1':
      return ({count: state.count - 1})
  }
}

export default function Hello() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  return <div>
    <h1>Count: {state.count}</h1>
    <button onClick={() => dispatch('+1')}>+1</button>
    <button onClick={() => dispatch('-1')}>-1</button>
  </div>;
};
