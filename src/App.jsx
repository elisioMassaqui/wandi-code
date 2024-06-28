import React, { useRef, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Select,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { FaPlay, FaFileAlt, FaPlus, FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "./constants";
import { CODE_SNIPPETS_ARDUINO, LANGUAGE_VERSIONS_ARDUINO } from "./arduino";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

const ACTIVE_COLOR = "cyan.400";

// Mapeamento de cores para cada linguagem
const LANGUAGE_COLORS = {
  python: "blue.300",
  javascript: "yellow.300",
  java: "red.300",
  c: "green.300",
  cpp: "orange.300",
  go: "teal.300",
  ruby: "purple.300",
  // Adicione outras linguagens e cores conforme necessário
};

function App() {
  const editorRef = useRef();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState(CODE_SNIPPETS.python);
  const [language, setLanguage] = useState("python");
  const [fileName, setFileName] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [files, setFiles] = useState([]);

  const executeCode = async (language, sourceCode) => {
    try {
      const response = await API.post("/execute", {
        language: language,
        version: LANGUAGE_VERSIONS_ARDUINO[language],
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

  const createNewFile = () => {
    if (!fileName || !language) {
      toast({
        title: "Nome do arquivo e linguagem são obrigatórios.",
        status: "error",
        duration: 3000,
      });
      return;
    }
    const newFile = { name: fileName, language: language, content: CODE_SNIPPETS_ARDUINO[language] };
    setFiles([...files, newFile]);
    setFileName("");
    setLanguage("python");
    onClose();
  };

  const selectFile = (file) => {
    setValue(file.content);
    setLanguage(file.language);
    toast({
      title: `Arquivo ${file.name} selecionado.`,
      status: "info",
      duration: 2000,
    });
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
        title: "Ocorreu um erro.",
        description: error.message || "Não foi possível executar o código",
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
        {/* Barra Superior */}
        <Flex p={3} bg="blue.500" alignItems="center" justifyContent="space-between">
          <Text fontFamily="cursive" fontSize="25px" color="white">
            Wandi-Code
          </Text>
          {/* Botões */}
        <Flex p={3} minWidth='max-content' alignItems='center' gap='2' bg="blue.500">
          {/* Botões */}
        <Button onClick={onOpen}>
            <FaPlusCircle/>
          </Button>
          <Button colorScheme="green" isLoading={isLoading} onClick={runCode}>
            <FaPlay/>
          </Button>
        </Flex>
      </Flex>



          {/* Main */}
        <Flex flex="1" direction="row" overflow="hidden">
          <Box flex="1" bgColor="gray.800" w={"50%"}>
          {/* Lista de Arquivos */}
          <Flex overflowX="auto" whiteSpace="nowrap">
            {files.map((file, index) => (
              <Box
                key={index}
                bg={LANGUAGE_COLORS[file.language] || "gray.600"}
                p={1}
                m={2}
                borderRadius="3px"
                _hover={{ bg: "gray.500", cursor: "pointer" }}
                onClick={() => selectFile(file)}
                display="inline-block"
              >
                <Text color="white">{file.name}</Text>
              </Box>
            ))}
          </Flex>
        {/* Editor */}
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

          {/* Painel de Saída */}
          <Box
            w={"30%"}
            h={"100%"}
            bgColor={isError ? "red.100" : "gray.800"}
            overflowY="auto"
            border="1px solid"
            borderRadius="1"
            borderColor={isError ? "red.500" : "#333"}
            p={2}
            fontSize="sm"
            color={isError ? "red.800" : "white"}
          >
            {output ? output.map((line, i) => <div key={i}>{line}</div>) : 'Clique em "Executar Código" para ver a saída aqui'}
          </Box>
        </Flex>

        {/* Modal para criar novo arquivo */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color={"cyan"}>
            <ModalHeader>Criar Novo Wandi-Code</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Nome do wandi-code"
                value={fileName}
                variant='filled'
                onChange={(e) => setFileName(e.target.value)}
              />
              <Select
                placeholder="Selecionar linguagem"
                variant='filled'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                mt={4}
              >
                {Object.entries(LANGUAGE_VERSIONS_ARDUINO).map(([lang, version]) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Select>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createNewFile}>
                Criar
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Rodapé */}
        <Box as="footer" p="1.5" bg="blue.900" textAlign="center">
          <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} Wandi Code. Todos os direitos reservados.
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
