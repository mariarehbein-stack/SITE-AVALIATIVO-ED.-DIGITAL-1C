// 1. GESTÃO DE DADOS (Content Data)
const techData = [
  { title: "Irrigação Inteligente", desc: "Sensores que reduzem o consumo de água em 30%." },
  { title: "Energia Limpa", desc: "Uso de biomassa da cevada para gerar energia na malteria." },
  { title: "Rastreabilidade", desc: "Blockchain para acompanhar o grão da fazenda ao copo." }
];

const carouselItems = [
  { src: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800", title: "O Plantio", desc: "Cevada selecionada com alto padrão genético." },
  { src: "https://images.unsplash.com/photo-1564419320408-38e24e038739?q=80&w=800", title: "A Malteria", desc: "Transformação do grão com controle térmico preciso." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function renderComponents() {
  const container = document.getElementById('expandable-container');
  techData.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'expandable-card';
    card.innerHTML = `
      <button class="card-toggle" onclick="this.parentElement.classList.toggle('open')">
        ${item.title} <span>+</span>
      </button>
      <div class="card-content"><p>${item.desc}</p></div>
    `;
    container.appendChild(card);
  });
}

// 3. ACESSIBILIDADE: CONTROLE DE FONTE
let fontSize = 16;
function increaseFont() {
  if (fontSize < 24) { fontSize += 2; document.documentElement.style.fontSize = fontSize + "px"; }
}
function decreaseFont() {
  if (fontSize > 12) { fontSize -= 2; document.documentElement.style.fontSize = fontSize + "px"; }
}

// 4. CARROSSEL LÓGICA
let currentIdx = 0;
function updateCarousel() {
  const img = document.getElementById('carousel-image');
  const title = document.getElementById('carousel-title');
  const desc = document.getElementById('carousel-description');
  img.src = carouselItems[currentIdx].src;
  title.textContent = carouselItems[currentIdx].title;
  desc.textContent = carouselItems[currentIdx].desc;
}

function changeSlide(dir) {
  currentIdx = (currentIdx + dir + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

// 5. SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderComponents();
  updateCarousel();
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
  // Menu de acessibilidade toggle
  document.getElementById('accessibility-btn').onclick = () => {
    document.getElementById('accessibility-menu').classList.toggle('hidden');
  };
});

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}
