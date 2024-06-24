import React, { useRef, useState } from "react";
import { Box, Flex, Text, Button, useToast, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

const ACTIVE_COLOR = "cyan.400";

function App() {
  const editorRef = useRef();
  const toast = useToast();
  const [value, setValue] = useState(CODE_SNIPPETS.python);
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const executeCode = async (language, sourceCode) => {
    try {
      const response = await API.post("/execute", {
        language: language,
        version: LANGUAGE_VERSIONS[language],
        files: [
          {
            content: sourceCode,
          },
        ],
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Unable to execute code");
    }
  };

  const onSelectLanguage = async (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage]);
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
      console.error(error);
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

  return (
    <ChakraProvider>
      <Flex flexDirection="column" height="100vh">
        {/* Top Bar */}
        <Flex p={3} bg="blue.500" alignItems="center" justifyContent="space-between">
          <Text fontFamily="cursive" fontSize="25px" color="white">
            Wandi-Code
          </Text>
          <Button size="md" colorScheme="green" isLoading={isLoading} onClick={runCode}>
            <FaPlay />
          </Button>
        </Flex>

        {/* Toolbar */}
        <Flex h="8%" alignItems="center" bg="gray.800">
          <Text fontSize="80%" color="white">
            A Barra de ferramentas é um componente utilizado pelos softwares com interface gráfica com a finalidade de permitir uma ação rápida por parte do usuário, facilitando o acesso a funções do programa.
          </Text>
        </Flex>

        <Flex flex="1" overflow="hidden">
          {/* Sidebar */}
          <Box width={{ base: "100px", md: "100px" }} bg="gray.900" boxShadow="0 0 10px rgba(0,0,0,0.5)">
            {/* Language Selector */}
            <Menu isLazy>
              <MenuButton as={Button} color="white" bg="blue.800" _hover={{ bg: "blue.700" }} _active={{ bg: "blue.700" }}>
                {language}
              </MenuButton>
              <MenuList bg="blue.700">
                {Object.entries(LANGUAGE_VERSIONS).map(([lang, version]) => (
                  <MenuItem
                    key={lang}
                    color={lang === language ? ACTIVE_COLOR : ""}
                    bg={lang === language ? "gray.900" : "transparent"}
                    _hover={{ color: "cyan.400", bg: "cyan.700" }}
                    onClick={() => onSelectLanguage(lang)}
                  >
                    {lang}&nbsp;
                    <Text as="span" color="white" fontSize="sm">
                      {version}
                    </Text>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>

          <Flex flex="1" direction={{ base: "column", md: "row" }} bgColor="gray.800">
            {/* Editor */}
            <Box flex="1" width={{ base: "95%", md: "50%" }} height={{ base: "50%", md: "100%" }} bgColor="gray.800">
              <Editor
                theme="vs-dark"
                language={language}
                defaultValue={value}
                onMount={(editor) => (editorRef.current = editor)}
                value={value}
                onChange={setValue}
                options={{ minimap: { enabled: false } }}
              />
            </Box>

            {/* Output Panel */}
            <Box
              width={{ base: "95%", md: "25%" }}
              height={{ base: "20%", md: "100%" }}
              bgColor={isError ? "red.100" : "gray.800"}
              overflowY="auto"
              border="1px solid"
              borderRadius="1"
              borderColor={isError ? "red.500" : "#333"}
              p={2}
              fontSize="sm"
              color={isError ? "red.800" : "white"}
            >
              {output ? output.map((line, i) => <div key={i}>{line}</div>) : 'Click "Run Code" to see the output here'}
            </Box>
          </Flex>
        </Flex>

        {/* Footer */}
        <Box as="footer" p="1.5" bg="blue.900" textAlign="center">
          <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} Wandi Code. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
