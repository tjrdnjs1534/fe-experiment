import { Box } from './components/private/Box/Box'
import './styles/global.css'
import { Button } from '@components/Button/Button'

function App() {
  return (
    <>
      <Box as="button" backgroundColor="blue300" color="black" padding="m" href="sss">
        Desktop
      </Box>
      <Button>
        <p>버튼</p>
      </Button>
    </>
  )
}

export default App
