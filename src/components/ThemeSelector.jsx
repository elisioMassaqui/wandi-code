import React from "react";
import { Box, Select, Text } from "@chakra-ui/react"; // Importa o componente Box, Select e Text do Chakra UI
import { parseTmTheme } from "monaco-themes";

const ThemeSelector = ({ onSelectTheme, currentTheme }) => {
  const themes = [
    { name: "vs-dark", label: "Dark Theme" },
    { name: "vs-light", label: "Light Theme" },
    { name: "hc-black", label: "High Contrast Theme" },
    // Adicione outros temas conforme necessário
  ];

  return (
    <Box>
      <Text mb={2} fontSize="lg" fontWeight="bold" color="cyan.200">
        Selecione um tema:
      </Text>
      <Select
        value={currentTheme}
        onChange={(e) => onSelectTheme(e.target.value)}
        color="white"
        bg="blue.800"
        borderColor="blue.800"
        _hover={{ bg: "blue.700" }}
        _focus={{ bg: "blue.700", borderColor: "blue.700" }}
      >
        {themes.map((theme) => (
          <option key={theme.name} value={theme.name}>
            {theme.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default ThemeSelector;
