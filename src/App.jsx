import { useState } from 'react'
import MultiStepform from './components/MultiStepform'
import { FormProvider } from './context/FormContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormProvider>
       <MultiStepform/>
      </FormProvider>
    </>
  )
}

export default App
