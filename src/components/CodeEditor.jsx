import { Box } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react"
import { useRef, useState } from "react"
import { LanguageSelector } from "./LanguageSelector"

const CodeEditor = () => {

    const [value, setValue] = useState('')  // Declaração de estado usando useState. 'value' é o estado atual, 'setValue' é a função para atualizar o estado.
    const editorRef = useRef()  // Cria uma referência mutável que será utilizada para acessar o editor.

    const onMount = (editor) => {
        editorRef.current = editor;  // Quando o editor é montado, atualiza a referência para o editor atual.
        editor.focus();  // Foca no editor quando ele é montado.
    }

    return (
        // Área onde o código será digitado.
        <Box>
        <LanguageSelector></LanguageSelector>
            <Editor
                height="75vh"  // Altura do editor definida como 75% da altura da viewport.
                theme="vs-dark"  // Tema do editor (dark mode).
                defaultLanguage="javascript"  // Linguagem de programação padrão para o editor (JavaScript neste caso).
                defaultValue="// Seja bem vindo ao Wandi Code"  // Valor inicial do conteúdo do editor.
                onMount={onMount}  // Callback chamado quando o editor é montado.
                value={value}  // Propriedade 'value' do editor, que é controlada pelo estado 'value'.
                onChange={(value) => setValue(value)}  // Função de callback chamada sempre que o conteúdo do editor é alterado, atualizando o estado 'value'.
            />
        </Box>
    )
}
export default CodeEditor  // Exporta o componente CodeEditor para uso em outros arquivos.
