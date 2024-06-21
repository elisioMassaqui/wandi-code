import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react'
import React, { version } from 'react'
import { LANGUAGE_VERSIONS } from '../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)

export const LanguageSelector = () => {
  return (
    <Box>
        <Text mb={2} fontSize="lg">
          Language
        </Text>

  <Menu>
  <MenuButton as={Button}>Javascript</MenuButton>
  <MenuList>
    {
      languages.map(([language, version]) => (
          <MenuItem key={language}>
          {language}
          &nbsp;
          <Text as="span" color="gray.500" fontSize="sm"></Text>
          {version}
          </MenuItem>
      ))
    }
  </MenuList>
  </Menu>

    </Box>
  )
}
