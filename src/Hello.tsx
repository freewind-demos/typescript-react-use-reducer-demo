import React, {useContext, useEffect, useReducer} from 'react'

type Counter = {
  count: number;
}

type Action = {
  type: '+1',
} | {
  type: '-1',
} | {
  type: 'reset',
  payload: Counter
}

function reducer(state: Counter, action: Action): Counter {
  switch (action.type) {
    case '+1' :
      return ({count: state.count + 1})
    case '-1':
      return ({count: state.count - 1})
    case 'reset':
      return action.payload
  }
}

type Props = {
  counter: Counter
}
export default function Hello({counter}: Props) {
  console.log("### > Hello", {counter})
  const [state, dispatch] = useReducer(reducer, counter)

  useEffect(() => {
    dispatch({type: 'reset', payload: counter})
  }, [counter])

  return <div>
    <h1>Count: {state.count}</h1>
    <button onClick={() => dispatch({type: '+1'})}>+1</button>
    <button onClick={() => dispatch({type: '-1'})}>-1</button>
  </div>;
};
