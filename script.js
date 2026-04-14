// Dados para as "Páginas" dinâmicas
const journeyData = [
  { step: "01", title: "Plantio Sustentável", text: "Uso de sementes certificadas e regeneração de solo." },
  { step: "02", title: "Colheita Tecnológica", text: "Sensores IoT determinam o momento exato da colheita." },
  { step: "03", title: "Maltagem Pura", text: "Processamento sem aditivos químicos para manter o sabor." }
];

const techAccordion = [
  { title: "Drones de Monitoramento", content: "Acompanham a saúde da planta via infravermelho." },
  { title: "Gestão Hídrica", content: "Sistemas de irrigação que reaproveitam água da chuva." }
];

// 1. Renderizar Jornada
const renderJornada = () => {
  const grid = document.getElementById('jornada-grid');
  grid.innerHTML = journeyData.map(item => `
    <article class="jornada-card reveal">
      <span style="color: var(--accent); font-weight: bold;">${item.step}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
};

// 2. Renderizar Acordeão de Tecnologia
const renderTech = () => {
  const container = document.getElementById('accordion-tech');
  container.innerHTML = techAccordion.map((item, index) => `
    <div class="accordion-item">
      <button class="accordion-header" onclick="toggleAccordion(${index})">
        ${item.title}
      </button>
      <div class="accordion-content" id="content-${index}">
        <p>${item.content}</p>
      </div>
    </div>
  `).join('');
};

// 3. Efeito de Scroll no Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  header.classList.toggle('scrolled', window.scrollY > 50);
  revealOnScroll();
});

// 4. Acessibilidade: Fonte Global
let currentSize = 100;
function changeFontSize(dir) {
  currentSize += (dir * 10);
  document.documentElement.style.fontSize = `${currentSize}%`;
}

// 5. Scroll Reveal Logic
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add('visible');
  });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  renderJornada();
  renderTech();
  revealOnScroll();
});

// Toggle Contraste
document.getElementById('contrast-toggle').onclick = () => {
  document.body.classList.toggle('high-contrast');
};
