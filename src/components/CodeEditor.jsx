import { Box } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { LanguageSelector } from "./LanguageSelector"

const CodeEditor = () => {
    const [value, setValue] = useState('')  // Declaração de estado usando useState. 'value' é o estado atual, 'setValue' é a função para atualizar o estado.
    return (
        //Área onde o código será digitado.
        <Box>
        <LanguageSelector/>
            <Editor
                height="75vh"  // Altura do editor definida como 75% da altura da viewport.
                theme="vs-dark"  // Tema do editor (dark mode).
                defaultLanguage="javascript"  // Linguagem de programação padrão para o editor (JavaScript neste caso).
                defaultValue="// some comment"  // Valor inicial do conteúdo do editor.
                value={value}  // Propriedade 'value' do editor, que é controlada pelo estado 'value'.
                onChange={(value) => setValue(value)}  // Função de callback chamada sempre que o conteúdo do editor é alterado, atualizando o estado 'value'
            />
        </Box>
    )
}
export default CodeEditor  // Exporta o componente CodeEditor para uso em outros arquivos.
