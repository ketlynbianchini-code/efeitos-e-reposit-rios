// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  initPostCards();
});

function initPostCards() {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    // Evento ao clicar no botão do card
    const button = card.querySelector('.btn-primary');
    
    if (button) {
      button.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede disparo duplo de eventos
        const title = card.querySelector('.post-title').innerText;
        alert(`📖 Você abriu o artigo:\n"${title}"`);
      });
    }
  });
}
