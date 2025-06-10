import { useState } from 'react'
import MultiStepform from './components/MultiStepform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MultiStepform/>
    </>
  )
}

export default App
