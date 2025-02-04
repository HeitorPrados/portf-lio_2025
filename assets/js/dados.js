const projetos = [
  {
    nome: "Site Fotografia",
    categoria: ["javascript"],
    imagem: "assets/img/image.png",
    descricao: "Lógica interativa e manipulação dinâmica do DOM.",
    url: "https://github.com/HeitorPrados/site_fotografia.git",
  },
  {
    nome: "Dog Dodói",
    categoria: ["flask", "python"],
    imagem: "assets/img/Dog-Dodooi.jpg",
    descricao: "Efeitos visuais e animações com CSS moderno.",
    url: "https://github.com/FelipeGoncales/ClinicaPython.git",
  },
  {
    nome: "Projeto HTML 1",
    categoria: [],
    imagem: "assets/img/image.png",
    descricao: "Estrutura semântica e otimização com HTML5.",
    url: "https://github.com/felipeggoncales/SistemaControleFinanceiro.git",
  },
  {
    nome: "Meu Bolso",
    categoria: ["flask", "python"],
    imagem: "assets/img/Meu-Bolso.jpg",
    descricao: "Integração de APIs e funcionalidades avançadas.",
    url: "https://github.com/felipeggoncales/SistemaControleFinanceiro.git",
  },
];

function carregarProjetos() {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  projetos.forEach((projeto) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-item");
    projectElement.dataset.categories = projeto.categoria.join(" ");
    projectElement.innerHTML = `
      <img src="${projeto.imagem}" alt="${projeto.nome}">
      <div class="project-info">
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
      </div>
    `;
    projectElement.addEventListener("click", () => window.open(projeto.url, "_blank"));
    container.appendChild(projectElement);
  });
}

document.addEventListener("DOMContentLoaded", carregarProjetos);
