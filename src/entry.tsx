import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import Hello from "./Hello";

function Entry() {
  const [version, setVersion] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setVersion(v => v + 1)
    }, 1000);
  }, [])

  return <Hello counter={{count: version}}/>;
}

ReactDOM.render(
  <Entry/>,
  document.body
)
