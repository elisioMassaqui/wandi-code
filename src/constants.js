export const LANGUAGE_VERSIONS = {
  c: "10.2.0",               // Ano de criação: 1972
  cpp: "10.2.0",             // Ano de criação: 1985
  python: "3.10.0",      // Ano de criação: 1991
  java: "15.0.2",        // Ano de criação: 1995
  javascript: "18.15.0", // Ano de criação: 1995
  php: "8.2.3",          // Ano de criação: 1995
  csharp: "6.12.0",      // Ano de criação: 2000
  typescript: "5.0.3",   // Ano de criação: 2012
};

export const CODE_SNIPPETS = {
  javascript: `\nconsole.log("Olá, Wandi!");\n`,
  typescript: `\nconsole.log("Olá, Wandi!");\n`,
  python: `\nprint("Olá, Wandi!")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Olá, Wandi!");\n\t}\n}\n`,
  csharp: `\nusing System;\n\npublic class Hello {\n\tpublic static void Main() {\n\t\tConsole.WriteLine("Olá, Wandi in C#!");\n\t}\n}\n`,
  php: `<?php\n\n$name = 'Wandi';\necho $name;\n`,
  c: `#include <stdio.h>

  int main() {
    printf("Olá, Wandi!\\n");
    return 0;
  }`,
  cpp: `#include <iostream>

  int main() {
    std::cout << "Olá Wandi" << std::endl;
    return 0;  
}`,
};
