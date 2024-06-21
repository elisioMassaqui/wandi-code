import React, { useRef, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector"; // Importa o componente ThemeSelector
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = () => {
  const [value, setValue] = useState(""); // Estado para o valor do editor
  const editorRef = useRef(null); // Referência mutável para o editor
  const [language, setLanguage] = useState("kotlin"); // Estado para a linguagem de programação
  const [theme, setTheme] = useState("vs-dark"); // Estado para o tema do editor

  // Função para selecionar a linguagem
  const onSelectLanguage = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  // Função para selecionar o tema
  const onSelectTheme = (theme) => {
    setTheme(theme);
  };

  // Função chamada quando o editor é montado
  const onMount = (editor) => {
    editorRef.current = editor; // Atualiza a referência do editor
    editor.focus(); // Foca no editor ao montar
  };

  return (
    <Box
      mr="300px" // Margem direita de 20 pixels
      p="4" // Padding de 4 unidades
      borderWidth="1px" // Borda de 1 pixel
      borderRadius="lg" // Borda arredondada
      boxShadow="md" // Sombra média
      mb="4" // Margem inferior de 4 unidades
      transition="all 0.2s" // Transição suave de 0.2 segundos para hover
      _hover={{
        boxShadow: "xl", // Aumenta a sombra ao passar o mouse
      }}
    >
      <Flex justify="space-between" mb="1"> {/* Espaçamento entre os seletores e margem inferior */}
        <LanguageSelector language={language} onSelect={onSelectLanguage} />
        <ThemeSelector onSelectTheme={onSelectTheme} currentTheme={theme} />
      </Flex>

      <Editor
        height="70vh" // Altura do editor
        theme={theme} // Tema do editor
        language={language} // Linguagem do editor
        defaultValue="// Seja bem-vindo ao Wandi Code 1.0" // Valor inicial do editor
        onMount={onMount} // Callback quando o editor monta
        value={value} // Valor do editor controlado pelo estado
        onChange={(value) => setValue(value)} // Atualiza o estado ao mudar o valor
        maxWidth="800px" // Limita o comprimento do editor
        mx="auto" // Centraliza o editor horizontalmente
      />
    </Box>
  );
};

export default CodeEditor; // Exporta o componente CodeEditor
