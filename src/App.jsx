import { useState } from 'react'

import Warframes from './components/Warframes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    Hello
      <Warframes />
    </>
  )
}

export default App
