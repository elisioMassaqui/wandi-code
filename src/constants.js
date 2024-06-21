export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  c: "11",
  cpp: "20",
  css: "4.0.0",
  html: "6.4.0",
  sql: "3.1.0",
  swift: "5.6.4",
  kotlin: "1.6.10",
  rust: "1.58.1",
  go: "1.18.2",
};

export const CODE_SNIPPETS = {
  javascript: `\nconsole.log("Olá, Wandi!");\n`,
  typescript: `\nconsole.log("Olá, Wandi!");\n`,
  python: `\nprint("Olá, Wandi!")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Olá, Wandi!");\n\t}\n}\n`,
  csharp: `\nusing System;\n\npublic class Hello {\n\tpublic static void Main() {\n\t\tConsole.WriteLine("Olá, Wandi in C#!");\n\t}\n}\n`,
  php: `<?php\n\n$name = 'Wandi';\necho $name;\n`,
  c: `// Código em C para Arduino: Explore a programação no Arduino de maneira divertida e educativa com a Causa-Efeito, SINER.\n\nvoid setup() {
    // Inicializa a comunicação serial
    Serial.begin(9600);
}

void loop() {
    // Imprime uma mensagem especial pela porta serial
    Serial.println("Olá, Wandi! Bem-vindo ao universo do Arduino com a Causa-Efeito, SINER!");
    
    // Aguarda um momento antes da próxima aventura
    delay(1000);
}`,
  cpp: `// Código em C++ para Arduino: Explore a programação no Arduino de maneira divertida e educativa com a Causa-Efeito, SINER.\n\nvoid setup() {
    // Inicializa a comunicação serial
    Serial.begin(9600);
}

void loop() {
    // Imprime uma mensagem especial pela porta serial
    Serial.println("Olá, Wandinho! Bem-vindo ao universo do Arduino com a Causa-Efeito, SINER!");
    
    // Aguarda um momento antes da próxima aventura
    delay(1000);
}`,
  css: `body {\n\tbackground-color: lightblue;\n}`,
  html: `<!DOCTYPE html>\n<html>\n<head>\n\t<title>Page Title</title>\n</head>\n<body>\n\n<h1>Olá, Wandi!</h1>\n\n<p>Paragraph.</p>\n\n</body>\n</html>`,
  sql: `SELECT * FROM Users WHERE Name = 'Wandi';`,
  swift: `import Foundation\n\nfunc greet(name: String) {\n\tprint("Olá, \\(name)")\n}\n\ngreet(name: "Wandi")`,
  kotlin: `fun main() {\n\tprintln("Olá, Wandi")\n}`,
  rust: `fn main() {\n\tprintln!("Olá, Wandi!");\n}`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Olá, Wandi")\n}`,
};
