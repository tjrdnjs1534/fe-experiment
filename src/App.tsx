import { useRef } from 'react'
import { Box } from './components/private/Box/Box'
import './styles/global.css'

function App() {
  return (
    <>
      <Box as="button" backgroundColor="blue300" color="black" padding="m" href="sss" ref={ref}>
        Desktop
      </Box>
    </>
  )
}

export default App
