# Claro! Vamos explicar isso de um jeito bem simples!

O que é isso?

Este código é como uma receita para fazer o computador executar programas de computador.
O que ele faz?

Ele usa uma ferramenta chamada Axios para pedir ao computador de outra pessoa para rodar o nosso código.
Como funciona?

Primeiro, configuramos o Axios para saber para onde enviar o nosso pedido.
Depois, temos uma função chamada executeCode que faz o pedido para rodar o código que escrevemos.
O que precisamos para isso?

Precisamos dizer qual é a linguagem do nosso código **(como português ou inglês)**.
E precisamos **dar o próprio código que queremos rodar**.
O que acontece então?

O programa envia o nosso código para o computador que está na internet.
E depois, o computador executa o nosso código e nos dá uma resposta de volta.
Por que é útil?

É útil quando queremos testar ou rodar nosso código em um lugar diferente do nosso próprio computador.
Também é bom quando queremos usar um programa que não temos no nosso computador, mas podemos usar pela internet.
Espero que isso ajude a entender como funciona esse código!

## Exemplos

Esse código faz o computador executar programas escritos em diferentes linguagens, como se fosse um tradutor que faz o computador entender o que foi escrito.
Exemplo de como funciona:

Imagine que você quer dizer "Olá, Mundo!" em diferentes idiomas e pede para um tradutor escrever isso para você.
Configuração inicial:

```javascript
// Configuração para falar com o tradutor (API Piston)
const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});
```

Aqui, configuramos onde encontrar o tradutor na internet ***(https://emkc.org/api/v2/piston)***. Isso é como dizer para onde mandar sua mensagem.
Função para executar código:

```javascript
// Função para pedir ao tradutor para escrever algo
export const executeCode = async (language, sourceCode) => {
  // Mandamos uma mensagem ao tradutor com o idioma e o que queremos escrever
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  // Recebemos a resposta do tradutor
  return response.data;
};
```

Aqui, temos uma função que pede para o tradutor escrever algo. Ela manda o idioma em que você quer escrever **(language)** e o que você quer escrever **(sourceCode)**.
Exemplo de uso:

Agora, vamos pedir ao tradutor para escrever "Olá, Mundo!" em Python.

```javascript
import axios from "axios";
import { executeCode } from "./seuArquivo"; // Substitua pelo caminho certo

// Vamos usar Python como exemplo de idioma
const language = "python";
const sourceCode = "print('Olá, Mundo!')";

// Pedimos ao tradutor para escrever isso
executeCode(language, sourceCode)
  .then(resultado => {
    // O tradutor nos dá a resposta
    console.log("Resultado da execução:", resultado);
  })
  .catch(erro => {
    // Se houver algum problema, o tradutor nos avisa
    console.error("Erro na execução:", erro);
  });
```

![Compiler](https://github.com/elisioMassaqui/wandi-code/blob/master/piston.png)

Nesse exemplo, estamos pedindo para o tradutor escrever "Olá, Mundo!" em Python. O executeCode envia essa mensagem para o ***tradutor (API Piston)***, e ele nos dá uma resposta que imprimimos no console.
Por que isso é útil?

É útil quando você quer testar um programa ou aprender diferentes linguagens de programação sem precisar instalar nada no seu próprio computador.
Também é bom para usar programas que estão disponíveis apenas pela internet.
Espero que isso tenha ficado mais claro! É como pedir para um tradutor escrever algo em um idioma que você escolheu.
