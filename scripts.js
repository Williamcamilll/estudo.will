// Alternância de Modo Escuro com Animação 3D no Ícone
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    toggleThemeBtn.textContent = isDarkTheme ? 'Modo Claro' : 'Modo Escuro';
    const icon = toggleThemeBtn.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-sun', isDarkTheme);
        icon.classList.toggle('fa-moon', !isDarkTheme);

        // Animação 3D no ícone
        icon.style.animation = 'flip 1s ease'; 
        setTimeout(() => icon.style.animation = '', 1000); 
    }
});

// Função de Pesquisa com Animação de Destaque e Scroll Suave
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('main section');
    let found = false;

    sections.forEach(section => {
        const sectionContent = section.textContent.toLowerCase();
        if (sectionContent.includes(query)) {
            section.style.display = 'block';
            found = true;

            const regex = new RegExp(query, 'gi');
            section.innerHTML = section.innerHTML.replace(regex, match => `<mark class="highlight">${match}</mark>`);

            const highlights = section.querySelectorAll('.highlight');
            highlights.forEach(highlight => {
                highlight.style.animation = 'highlightAnimation 0.5s ease';
                setTimeout(() => highlight.style.animation = '', 500); 
            });

            // Scroll suave para a seção encontrada
            section.scrollIntoView({ behavior: 'smooth' }); 

        } else {
            section.style.display = 'none';
        }
    });

    if (!found) {
        alert('Nenhum resultado encontrado.');
    }
});

// Exibição de Hora e Data em Tempo Real com Animação de Rotação
function updateTime() {
    const now = new Date();
    const datetime = now.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = datetime;

    // Adiciona animação de rotação sutil ao elemento de data e hora
    datetimeElement.style.animation = 'rotate3D 5s linear infinite'; 
}

setInterval(updateTime, 1000);
updateTime();

// Interatividade e Curiosidades com Animação de Fade e Rolagem Automática
const curiosidades = [
    // ... (mesmas curiosidades)
];

let curiosidadeAtual = 0;
const curiosidadeElemento = document.querySelector('#curiosidades ul');
const curiosidadeLista = document.querySelector('#curiosidades ul');

setInterval(() => {
    curiosidadeElemento.style.opacity = 0; 
    setTimeout(() => {
        curiosidadeAtual = (curiosidadeAtual + 1) % curiosidades.length;
        curiosidadeElemento.innerHTML = `<li>${curiosidades[curiosidadeAtual]}</li>`;
        curiosidadeElemento.style.opacity = 1; 

        // Rola a lista de curiosidades automaticamente
        curiosidadeLista.scrollTop += curiosidadeElemento.offsetHeight; 
        if (curiosidadeLista.scrollTop >= curiosidadeLista.scrollHeight - curiosidadeLista.clientHeight) {
            curiosidadeLista.scrollTop = 0; 
        }
    }, 500); 
}, 5000); 

// Lógica do Formulário de Contato (Exemplo Simples) com Validação Básica
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica dos campos (você pode adicionar mais validações)
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Lógica para enviar os dados do formulário (você precisará implementar isso)

    alert('Mensagem enviada com sucesso!');
    contactForm.reset();
});

// Adiciona animações 3D ao passar o mouse sobre os elementos do menu
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.animation = 'scaleUp 0.3s ease';
    });
    link.addEventListener('mouseout', () => {
        link.style.animation = 'scaleDown 0.3s ease';
    });
});


























