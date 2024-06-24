# 🌟 Wandi-Code 🌟

## [INICIAR](https://wandi-code.vercel.app/)

## [Design baseado](https://wandi-code-design.vercel.app/)

> **Neste projeto, você aprenderá a construir um editor de código que suporta múltiplas linguagens diretamente no navegador! Utilizaremos a biblioteca Monaco React para o editor de código, Chakra UI para estilizar nossa aplicação e a Piston API para executar o código.**

![Splash Screen](https://github.com/elisioMassaqui/wandi-code/blob/master/Anota%C3%A7%C3%A3o%202024-06-24%20120112.png)

## 🚀 Funcionalidades

- ✍️ **Monaco React Editor**: Um componente de editor de código poderoso para React.
- 🎨 **Chakra UI**: Uma biblioteca de componentes simples, modular e acessível que oferece os blocos de construção para criar suas aplicações React com rapidez.
- ⚙️ **Piston API**: Uma API rica em recursos para executar código em várias linguagens.

## 📖 Introdução

Bem-vindo ao Wandi-Code! Este projeto foi desenvolvido para ensinar como construir um editor de código no navegador que suporta múltiplas linguagens de programação. Utilizamos três tecnologias principais para alcançar isso:

### ✍️ Monaco React Editor

O Monaco Editor é o editor de código usado no Visual Studio Code, um dos editores mais populares e poderosos do mercado. Ao integrá-lo com React usando a biblioteca `@monaco-editor/react`, conseguimos trazer toda a funcionalidade e flexibilidade do VS Code diretamente para nossa aplicação web. Isso inclui destaque de sintaxe, auto-completar, verificação de erros e muito mais, proporcionando uma experiência de codificação rica e eficiente.

### 🎨 Chakra UI

Para a interface do usuário, escolhemos o Chakra UI. Essa biblioteca de componentes para React é conhecida por sua simplicidade e facilidade de uso. O Chakra UI permite que você crie interfaces acessíveis e responsivas rapidamente, com um sistema de temas que facilita a personalização. Além disso, ele vem com uma excelente documentação e uma comunidade ativa, tornando-o uma escolha sólida para estilizar nossa aplicação.

### ⚙️ Piston API

Para executar o código escrito no editor, utilizamos a Piston API. Esta API permite a execução de código em várias linguagens de programação, oferecendo um ambiente seguro e isolado. Com a Piston API, podemos enviar o código do usuário, selecionar a linguagem desejada e obter os resultados da execução em tempo real. Isso adiciona uma funcionalidade crítica ao nosso editor, permitindo que os usuários testem e validem seu código diretamente no navegador.

### Instalar e iniciar

Navegue até o diretório do projeto:

```sh
cd wandi-code
```

Instale as dependências:

```sh
npm install
```

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

🚧 Desenvolvimento com React + Vite
Este projeto utiliza React + Vite para um ambiente de desenvolvimento rápido e eficiente. Aqui estão alguns pontos-chave sobre o uso de React + Vite no Wandi-Code:

📦 Configuração do Vite
Vite é uma ferramenta de construção que oferece um desenvolvimento incrivelmente rápido para projetos React. Ele utiliza uma abordagem de construção moderna, carregando módulos de forma eficiente durante o desenvolvimento.

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

⚛️ Estrutura do Projeto
A estrutura do projeto é organizada para manter o código limpo e modular:

```css
wandi-code/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── vite.config.js
├── package.json
```

🔥 Desenvolvimento Rápido
Com Vite, as mudanças no código são refletidas instantaneamente no navegador, sem necessidade de recarregar a página. Isso acelera significativamente o ciclo de desenvolvimento.

📂 Componentização
Os componentes React são organizados em diretórios dentro de src/components para promover a reutilização e a manutenção do código.

```jsx
// src/components/Editor.jsx
import React from 'react';
import { MonacoEditor } from '@monaco-editor/react';

const Editor = ({ language, value, onChange }) => {
  return (
    <MonacoEditor
      height="90vh"
      language={language}
      value={value}
      onChange={onChange}
    />
  );
};

export default Editor;
```

Utilizando React + Vite, conseguimos um ambiente de desenvolvimento ágil e moderno, que facilita a construção de aplicações web performáticas e responsivas.
