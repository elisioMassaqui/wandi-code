import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <ChakraProvider>
      <Flex minHeight="1vh" alignItems="center" justifyContent="center">
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Wandi Code
          </Text>
        </Box>
      </Flex>
      <Box p={4}>
        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
}

export default App;
