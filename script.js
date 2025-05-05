function gerarSorte() {
  const mensagens = [
    "Hoje é um bom dia para recomeçar.",
    "Você atrairá boas energias se sorrir mais.",
    "O inesperado trará alegrias.",
    "Algo simples vai te surpreender.",
    "Seu brilho vai inspirar outras pessoas.",
    "Seja leve, mas firme. A sorte vem de equilíbrio.",
    "A resposta que você procura chegará em breve."
  ];

  const cores = ["Azul", "Roxo", "Dourado", "Verde", "Prata", "Vermelho", "Lilás"];
  const simbolos = ["☀️", "🌙", "🌟", "🔮", "✨", "🍀", "🦋"];
  const numero = Math.floor(Math.random() * 99) + 1;

  const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  const cor = cores[Math.floor(Math.random() * cores.length)];
  const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <p><strong>${mensagemAleatoria}</strong></p>
    <p>Cor do dia: <span style="color:${cor.toLowerCase()}">${cor}</span></p>
    <p>Número da sorte: <strong>${numero}</strong></p>
    <p>Símbolo místico: ${simbolo}</p>
  `;
}
