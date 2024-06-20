import { Box } from '@chakra-ui/react'
import React from 'react'
import { LANGUAGE_VERSIONS } from '../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)

export const LanguageSelector = () => {
  return (
    <Box>
        
        <Text mb={2} fontSize="lg">LanguageSelector</Text>

    <Menu>
  <MenuButton as={Button}>
    Javascript
  </MenuButton>
  <MenuList>

  </MenuList>
</Menu>

    </Box>
  )
}
