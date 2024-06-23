import React, { useRef, useState } from "react";
import { Box, ChakraProvider, Flex, Text, Button, Menu, MenuButton, MenuList, MenuItem, useToast } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "./constants";
import { executeCode } from "./api";
import theme from "./theme";

const languages = Object.keys(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "cyan.400";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={1} fontSize="lg" fontWeight="bold" color="cyan.500">
        Selecione uma linguagem:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button} color="white" bg="blue.800" _hover={{ bg: "blue.700" }} _active={{ bg: "blue.700" }}>
          {language}
        </MenuButton>
        <MenuList bg="blue.700">
          {languages.map((lang) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{ color: "cyan.400", bg: "cyan.700" }}
              onClick={() => onSelect(lang)}
            >
              {lang}&nbsp;
              <Text as="span" color="white" fontSize="sm">
                {LANGUAGE_VERSIONS[lang]}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelectLanguage = (lang) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  return (
    <Box>
      <Flex>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelectLanguage} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </Flex>
    </Box>
  );
};

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex minHeight="100vh" alignItems="center" justifyContent="center" flexDirection="column">
        <Box textAlign="center">
          <Text mb={1} fontSize="6xl" fontWeight="bold" color="cyan">
            Wandi-Code
          </Text>
        </Box>
        <Box width="80%" mt={8}>
          <CodeEditor />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
