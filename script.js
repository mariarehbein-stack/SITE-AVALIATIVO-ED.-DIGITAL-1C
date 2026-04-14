// Dados das "Páginas" de Ajuda
const helpData = [
  {
    title: "Seja um Voluntário",
    text: "Ajude na triagem e distribuição de alimentos em sua região local.",
    icon: "🤝"
  },
  {
    title: "Doação de Excedentes",
    text: "Produtor, doe aquela parte da colheita que não será comercializada.",
    icon: "🌾"
  },
  {
    title: "Apoio Financeiro",
    text: "Contribua com qualquer valor para custearmos o frete logístico social.",
    icon: "💳"
  }
];

// 1. Renderização dos Cards de Ajuda
function renderHelpCards() {
  const container = document.getElementById('help-cards');
  container.innerHTML = helpData.map(item => `
    <article class="help-card reveal">
      <div style="font-size: 3rem; margin-bottom: 20px;">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

// 2. Lógica de Scroll (Header & Reveal)
function handleScrollEffects() {
  const header = document.querySelector('.navbar');
  const reveals = document.querySelectorAll('.reveal');

  // Troca estilo do header
  header.classList.toggle('scrolled', window.scrollY > 80);

  // Ativa animações
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// 3. Inicialização e Eventos
document.addEventListener('DOMContentLoaded', () => {
  renderHelpCards();
  handleScrollEffects();
  window.addEventListener('scroll', handleScrollEffects);
});

// 4. Toggle de Contraste
document.getElementById('contrast-toggle').onclick = () => {
  document.body.classList.toggle('high-contrast');
};
