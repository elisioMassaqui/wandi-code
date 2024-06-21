import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";

const CodeEditor = () => {
  const [value, setValue] = useState(""); // Estado para o valor do editor
  const editorRef = useRef(null); // Referência mutável para o editor
  const [language, setLanguage] = useState("javascript"); // Estado para a linguagem de programação

  const onSelect = (language) => {
    setLanguage(language);
  };

  const onMount = (editor) => {
    editorRef.current = editor; // Atualiza a referência do editor ao montar
    editor.focus(); // Foca no editor ao montar
  };

  return (
    <Box>
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="75vh" // Altura do editor
        theme="vs-dark" // Tema do editor
        language={language} // Linguagem do editor
        defaultValue="// Seja bem-vindo ao Wandi Code" // Valor inicial do editor
        onMount={onMount} // Callback quando o editor monta
        value={value} // Valor do editor controlado pelo estado
        onChange={(value) => setValue(value)} // Atualiza o estado ao mudar o valor
      />
    </Box>
  );
};

export default CodeEditor;
