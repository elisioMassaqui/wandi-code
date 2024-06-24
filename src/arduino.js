export const LANGUAGE_VERSIONS_ARDUINO = {
    python: "3.10.0",      // Ano de criação: 1991
    c: "10.2.0",               // Ano de criação: 1972
    cpp: "10.2.0",             // Ano de criação: 1985
  };
  
  export const CODE_SNIPPETS_ARDUINO = {
    python: `\nprint("Olá, Wandi!")\n`,
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
  };
  