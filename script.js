// Dados para popular as seções dinamicamente
const stats = [
  { label: "Anos de Tradição", value: "45+" },
  { label: "Fazendas Parceiras", value: "120" },
  { label: "Redução de CO2", value: "30%" }
];

const gallery = [
  { img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=400", title: "O Campo" },
  { img: "https://images.unsplash.com/photo-1564419320408-38e24e038739?q=80&w=400", title: "A Maltagem" },
  { img: "https://images.unsplash.com/photo-1532634710-c035728a2729?q=80&w=400", title: "O Destino" }
];

const technologies = [
  { icon: "🛰️", name: "Drones IoT", desc: "Monitoramento por satélite 24/7." },
  { icon: "💧", name: "Hidro-Sustentável", desc: "Economia de 40% no ciclo hídrico." },
  { icon: "🚜", name: "Plantio Direto", desc: "Tecnologia de preservação do solo." }
];

// Funções de Renderização
const renderContent = () => {
  // Renderizar Stats
  const statsContainer = document.getElementById('stats-container');
  statsContainer.innerHTML = stats.map(s => `
    <div style="margin-top:20px">
      <h3 style="color:var(--accent); font-size: 2rem">${s.value}</h3>
      <p>${s.label}</p>
    </div>
  `).join('');

  // Renderizar Galeria
  const galleryContainer = document.getElementById('gallery-container');
  galleryContainer.innerHTML = gallery.map(item => `
    <div class="gallery-item reveal" style="background-image: url('${item.img}')">
      <div style="padding: 20px; background: rgba(0,0,0,0.3); height:100%; color: white">
        <h3>${item.title}</h3>
      </div>
    </div>
  `).join('');

  // Renderizar Tech
  const techContainer = document.getElementById('tech-container');
  techContainer.innerHTML = `
    <div class="grid-2">
      ${technologies.map(t => `
        <div class="reveal" style="padding: 30px; border: 1px solid #ddd; border-radius: 8px">
          <div style="font-size: 2.5rem">${t.icon}</div>
          <h3>${t.name}</h3>
          <p>${t.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
};

// Lógica de Scroll e Estilo do Header
window.onscroll = () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  
  handleReveal();
};

const handleReveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add('visible');
  });
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderContent();
  handleReveal();
});

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}
