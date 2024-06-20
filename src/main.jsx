import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, theme } from '@chakra-ui/react'
import tema from './theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={tema}>

      

    </ChakraProvider>
    <App />
  </React.StrictMode>,
)
