import React, { useRef, useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector"; // Importa o componente ThemeSelector
import { CODE_SNIPPETS } from "../constants";
import { parseTmTheme } from "monaco-themes";

const CodeEditor = () => {
  const [value, setValue] = useState(""); // Estado para o valor do editor
  const editorRef = useRef(null); // Referência mutável para o editor
  const [language, setLanguage] = useState("kotlin"); // Estado para a linguagem de programação
  const [theme, setTheme] = useState("vs-dark"); // Estado para o tema do editor

  // Definição das cores de fundo para cada tema
  const themeBackgroundColors = {
    "vs-dark": "#1e1e1e",
    "vs-light": "#ffffff",
    "hc-black": "#000000",
  };

  // Estado para a cor de fundo da Box principal
  const [backgroundColor, setBackgroundColor] = useState(themeBackgroundColors[theme]);

  // Função para selecionar a linguagem
  const onSelectLanguage = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  // Função para selecionar o tema
  const onSelectTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  // Atualiza a cor de fundo quando o tema é alterado
  useEffect(() => {
    setBackgroundColor(themeBackgroundColors[theme]);
  }, [theme]);

  // Função chamada quando o editor é montado
  const onMount = (editor) => {
    editorRef.current = editor; // Atualiza a referência do editor
    editor.focus(); // Foca no editor ao montar
  };

  return (
    <Box
      bgColor={backgroundColor} // Define a cor de fundo com base no estado backgroundColor
      mr="350px" // Afastamento à direita com 350 pixels
      p="4" // Padding de 4 unidades
      borderWidth="1px" // Borda de 1 pixel
      borderRadius="lg" // Borda arredondada
      boxShadow="md" // Sombra média
      mb="4" // Margem inferior de 4 unidades
      transition="all 0.4s" // Transição suave de 0.4 segundos
      _hover={{
        outline: "2px solid cyan", // Apenas altera a borda para cyan ao passar o mouse
      }}
    >
      <Flex justify="space-between" mb="4"> {/* Espaçamento entre os seletores e margem inferior */}
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
