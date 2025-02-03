// Alternador de Tema (Dark/Light Mode)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Filtro de Projetos
  function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
      project.style.display = (category === 'all' || project.dataset.category === category) ? 'block' : 'none';
    });
  }
  
  // Validação do Formulário de Contato
  function validateContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let errorMessage = '';
    
    if (!name.trim()) errorMessage += 'Nome é obrigatório.\n';
    if (!email.trim() || !email.includes('@')) errorMessage += 'Um e-mail válido é obrigatório.\n';
    if (!message.trim()) errorMessage += 'A mensagem não pode ser vazia.\n';
    
    if (errorMessage) {
      alert(errorMessage);
    } else {
      alert('Formulário enviado com sucesso!');
      // Aqui você pode adicionar a lógica para enviar os dados do formulário.
    }
  }

  const textArray = ["Heitor Prado Santos", "Desenvolvedor de Sistemas", "Criador de Soluções", "Apaixonado por Tecnologia"];
  let textIndex = 0;
  let charIndex = 0;
  const dynamicTextElement = document.getElementById("dynamic-text");

  function typeText() {
    if (charIndex < textArray[textIndex].length) {
      dynamicTextElement.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 2000);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      dynamicTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeText, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", typeText);
  
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  }
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });

  // Bubble Generator
function createBubbles() {
  const container = document.querySelector('.bubbles-container');
  
  function generateBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Configurações aleatórias
    const size = Math.random() * 30 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 5;
    const moveX = Math.random() * 0.4 - 0.2; // Movimento horizontal aleatório
    
    bubble.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      --move-x: ${moveX};
      background: radial-gradient(circle at 30% 30%, 
        rgba(255,255,255,0.3), 
        rgba(255,255,255,0.1));
      box-shadow: 0 0 15px rgba(255,255,255,0.2);
    `;
    
    container.appendChild(bubble);
    
    // Remove a bolha após a animação
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }
  
  // Cria bolhas em intervalos aleatórios
  setInterval(() => {
    if (document.body.contains(container)) {
      generateBubble();
    }
  }, Math.random() * 500 + 300);
}

// Inicia o efeito quando a página carrega
window.addEventListener('load', createBubbles);