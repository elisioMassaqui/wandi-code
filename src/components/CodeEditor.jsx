import { Box } from "@chakra-ui/react"; // Importa o componente Box do Chakra UI
import { Editor } from "@monaco-editor/react"; // Importa o componente Editor do Monaco Editor
import { useRef, useState } from "react"; // Importa hooks useRef e useState do React
import LanguageSelector from "./LanguageSelector"; // Importa o componente LanguageSelector
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = () => {
  const [value, setValue] = useState(""); // Estado para o valor do editor
  const editorRef = useRef(null); // Referência mutável para o editor
  const [language, setLanguage] = useState("kotlin"); // Estado para a linguagem de programação

  // Função para selecionar a linguagem
  const onSelect = (language) => {
    setLanguage(language);
    setValue(
      CODE_SNIPPETS[language]
    )
  };

  // Função chamada quando o editor é montado
  const onMount = (editor) => {
    editorRef.current = editor; // Atualiza a referência do editor
    editor.focus(); // Foca no editor ao montar
  };

  return (
    <Box>
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="75vh" // Altura do editor
        theme="vs-dark" // Tema do editor
        language={language} // Linguagem do editor
        defaultValue="// Seja bem-vindo ao Wandi Code 1.0" // Valor inicial do editor
        onMount={onMount} // Callback quando o editor monta
        value={value} // Valor do editor controlado pelo estado
        onChange={(value) => setValue(value)} // Atualiza o estado ao mudar o valor
      />
    </Box>
  );
};

export default CodeEditor; // Exporta o componente CodeEditor
