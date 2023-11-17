// Classe Observer
class Observer {
  update() {}
}

// Classe Subject
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }
}

// Classe Editor (Subject)
class Editor extends Subject {
  constructor() {
    super();
    this.content = "";
  }

  setContent(content) {
    this.content = content;
    this.notify();
  }

  getContent() {
    return this.content;
  }
}

// Subclasse TextEditor
class TextEditor extends Editor {
  insertLine(lineNumber, text) {
    const lines = this.content.split('\n');
    lines.splice(lineNumber - 1, 0, text);
    this.setContent(lines.join('\n'));
  }

  removeLine(lineNumber) {
    const lines = this.content.split('\n');
    lines.splice(lineNumber - 1, 1);
    this.setContent(lines.join('\n'));
  }
}

// Classe para interação com o usuário
class UserInterface {
  static getUserInput() {
    return prompt("Digite uma linha de texto (ou 'EOF' para encerrar):");
  }
}

// Programa principal
const textEditor = new TextEditor();

textEditor.addObserver(new class extends Observer {
  update() {
    console.log("Conteúdo atualizado:", textEditor.getContent());
  }
});

console.log("Digite linhas de texto. Digite 'EOF' para encerrar.");

let lineNumber = 1;
while (true) {
  const input = UserInterface.getUserInput();
  if (input.toUpperCase() === 'EOF') {
    textEditor.notify();
    break;
  }
  textEditor.insertLine(lineNumber, input);
  lineNumber++;
}

console.log("Conteúdo salvo:");
console.log(textEditor.getContent());
