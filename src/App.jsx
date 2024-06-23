import { useRef, useState } from "react";
import { Box, ChakraProvider, Flex, Text, Button, IconButton, useToast } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./components/LanguageSelector";
import { CODE_SNIPPETS } from "./constants";
import { executeCode } from "./api";
import { FaPlay } from "react-icons/fa";

function App() {
  const editorRef = useRef();
  const toast = useToast();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const geraTheme = ("gray.800");
  const topBarColor = ("blue.900");
  const toolbarBarColor = (geraTheme);
  const sidebarBarColor = ("gray.900");
  const footerBarColor = ("blue.900");

  return (
    <ChakraProvider>
      <Flex flexDirection="column" height="100vh">
        {/* Top Bar */}
        <Flex p={1} bg={topBarColor} alignItems="center" justifyContent="space-between">
          <Text fontFamily={"cursive"} fontSize={"large"} fontWeight="bold" color="white">
            Wandi-Code
          </Text>
          <Button
              size="md"
              colorScheme="green"
              isLoading={isLoading}
              onClick={runCode}
            >
              <FaPlay></FaPlay>
            </Button>
        </Flex>

        {/* Toolbar */}
        <Flex p={1} alignItems="center" bg={toolbarBarColor}>
          <Text fontSize="lg" fontWeight="bold" color="white">
              TOOOOOOOOOOLLLLLLLBBBBBBAAARRRRR
          </Text>
        </Flex>

        {/* Main Content */}
        <Flex flex="1" overflow="hidden">
          {/* Sidebar */}
          <Box width="200px" bg={sidebarBarColor} color="white" boxShadow="0 0 10px rgba(0,0,0,0.5)">
            {/* Language Selector */}
            <Box p={2}>
              <LanguageSelector language={language} onSelect={onSelect} />
            </Box>
          </Box>

          {/* Main Content Area */}
          <Flex flex="1" flexDirection="column">
            {/* Editor */}
            <Box flex="1" position="relative" height="100%" bgColor={geraTheme}>

            <Box
                height="90%"
                overflowY="auto"
                border="1px solid"
                borderRadius="3"
                borderColor={isError ? "red.500" : "#333"}
                fontSize="sm"
                p={1}
                bg={isError ? "red.100" : "gray.800"}
                color={isError ? "red.800" : "white"}
              >
               <Editor
                height="100%"
                width="85%"
                theme="vs-dark"
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                onMount={onMount}
                value={value}
                onChange={(value) => setValue(value)}
                options={{
                  minimap: { enabled: false },
                }}
              />
            </Box>
              </Box>
            {/* Output Panel */}
            <Box h={"25%"} p={1} bgColor={geraTheme}>
              <Box
                height="100%"
                overflowY="auto"
                border="1px solid"
                borderRadius="3"
                borderColor={isError ? "red.500" : "#333"}
                p={2}
                fontSize="sm"
                bg={isError ? "red.100" : "gray.800"}
                color={isError ? "red.800" : "white"}
              >
                {output
                  ? output.map((line, i) => <div key={i}>{line}</div>)
                  : 'Click "Run Code" to see the output here'}
              </Box>
            </Box>
          </Flex>
        </Flex>
            {/* Footer */}
            <Box as="footer" p="1" bg={footerBarColor} textAlign="center">
          <Text fontSize="sm" color={"white"}>&copy; {new Date().getFullYear()} Wandi Code. All rights reserved.</Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
