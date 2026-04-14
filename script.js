// Conteúdo dinâmico para os cards de ajuda
const dadosAjuda = [
    {
        titulo: "Para Instituições",
        texto: "Cadastre sua ONG ou banco de alimentos para receber doações validadas.",
        acao: "Cadastrar"
    },
    {
        titulo: "Para Produtores",
        texto: "Doe seu excedente e tenha incentivos fiscais, além de ajudar quem precisa.",
        acao: "Doar Agora"
    },
    {
        titulo: "Para Voluntários",
        texto: "Ajude na logística e no transporte dos alimentos do campo para a cidade.",
        acao: "Participar"
    }
];

// Função para renderizar os cards
function carregarCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = dadosAjuda.map(item => `
        <div class="card reveal">
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
            <a href="#" class="tag" style="display:block; margin-top:15px; text-decoration:none">${item.acao} →</a>
        </div>
    `).join('');
}

// Efeito de revelação no scroll
function revelar() {
    const elementos = document.querySelectorAll('.reveal');
    elementos.forEach(el => {
        const topo = el.getBoundingClientRect().top;
        if (topo < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarCards();
    window.addEventListener('scroll', revelar);
    revelar(); // Checa se há algo visível ao carregar
});
