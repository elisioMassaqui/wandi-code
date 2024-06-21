import {
  Box,             // Importa o componente Box do Chakra UI
  Button,          // Importa o componente Button do Chakra UI
  Menu,            // Importa o componente Menu do Chakra UI
  MenuButton,      // Importa o componente MenuButton do Chakra UI
  MenuList,        // Importa o componente MenuList do Chakra UI
  MenuItem,        // Importa o componente MenuItem do Chakra UI
  Text             // Importa o componente Text do Chakra UI
} from '@chakra-ui/react';
import React from 'react'; // Importa React
import { LANGUAGE_VERSIONS } from '../constants'; // Importa as versões de linguagem de um arquivo de constantes

// Converte o objeto de versões de linguagem em um array de entradas
const languages = Object.entries(LANGUAGE_VERSIONS);

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
      <Text mb={2} fontSize="lg">
        Language
      </Text>
      {/* Menu de seleção de linguagem */}
      <Menu>
        {/* Botão que abre o menu */}
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList>
          {languages.map(([language, version]) => ( // Alterado para desestruturar o array corretamente
            <MenuItem 
              key={language} // Chave única para cada item
              onClick={() => onSelect(language)} // Função chamada ao clicar no item
              >
              {language}
              &nbsp;
              <Text as="span" color="gray.500" fontSize="sm">
                {version} {/* Versão da linguagem */}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector; // Exporta o componente LanguageSelector.
