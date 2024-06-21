// App.js
import { Box, ChakraProvider } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
}

export default App;
