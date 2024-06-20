import { Box, ChakraProvider } from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor';

function App() {
 return <Box Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
  Wandi Code
  <CodeEditor></CodeEditor>
  </Box>;
}

export default App
