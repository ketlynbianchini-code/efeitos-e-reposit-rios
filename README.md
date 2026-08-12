# 🚀 Feed de Postagens com CSS Flexbox & Interações

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CSS3: Flexbox](https://img.shields.io/badge/CSS3-Flexbox-blue.svg)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout)
[![Responsive: Yes](https://img.shields.io/badge/Responsive-Yes-brightgreen.svg)]()

Projeto desenvolvido para colocar em prática conceitos avançados de **CSS Flexbox**, **microinterações (`:hover`)** e **suporte a Dark Mode**, criando uma lista de cards horizontais limpa e responsiva para o GitHub.

---

## 🎯 Desafios Resolvidos

### 🔹 Desafio 1: Estrutura em Linha e Largura Total
1. **`flex-direction: row` no `<article>`:** Exibe o conteúdo (imagem e informações) lado a lado na horizontal.
2. **`flex: 1 1 100%` na `.card`:** Garante que cada postagem ocupe 100% da largura do container principal.
3. **`align-self: flex-start` na imagem:** Quebra o alinhamento central padrão (`align-items: center`), fixando a imagem no topo do card.

### 🔹 Desafio 2: Microinterações & Profundidade
1. **Destaque no Hover (`transform: scale(1.02)`):** Aplica um suave aumento no cartão quando o cursor passa por cima.
2. **Sombra Dinâmica (`box-shadow`):** Intensifica a sombra no estado `:hover`, criando sensação de elevação.
3. **Adaptação ao Dark Mode:** Utiliza a media query `@media (prefers-color-scheme: dark)` para aplicar sombras azuladas/translúcidas em temas escuros, mantendo o efeito de profundidade nítido.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Marcação semântica (`article`, `header`, `footer`, `section`).
- **CSS3:** Variáveis CSS, Flexbox, Transitions, Transform e Dark Mode.
- **JavaScript (ES6):** Manipulação de eventos no DOM.

---

## 📁 Estrutura do Repositório

```text
.
├── index.html   # Estrutura principal semântica
├── style.css    # Regras do Flexbox, :hover e Dark Mode
├── script.js     # Interatividade nos botões
└── README.md    # Documentação completa do projeto
