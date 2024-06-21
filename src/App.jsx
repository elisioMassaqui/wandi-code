import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <ChakraProvider>
      <Flex minHeight="1vh" alignItems="center" justifyContent="center">
        <Box textAlign="center">
      <Text mb={1} fontSize="6xl" fontWeight="bold" color="cyan">
        Wandi-Code
      </Text>
        </Box>
      </Flex>
      <Box p={1}>
        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
}

export default App;
