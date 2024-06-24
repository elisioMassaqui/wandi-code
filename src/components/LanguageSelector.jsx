import React from "react";
import { Box, Button, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react"; // Importa os componentes necessários do Chakra UI
import { LANGUAGE_VERSIONS } from '../constants'; // Importa as versões de linguagem de um arquivo de constantes

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "cyan.400";

/**
 * Componente LanguageSelector
 * @param {Object} props - Propriedades do componente
 * @param {string} props.language - A linguagem selecionada atualmente
 * @param {Function} props.onSelect - Função chamada ao selecionar uma linguagem
 */
const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box>
      {/* Título da seção de seleção de linguagem */}
      
      {/* Menu de seleção de linguagem */}
      <Menu isLazy>
        {/* Botão que abre o menu */}
        <MenuButton as={Button} color="white" bg="blue.800" _hover={{ bg: "blue.700" }} _active={{ bg: "blue.700" }}>
          {language}
        </MenuButton>
        <MenuList bg="blue.700">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{ color: "cyan.400", bg: "cyan.700" }}
              onClick={() => onSelect(lang)}
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
  );
};

export default LanguageSelector;
