const projetos = [
    {
      nome: "Projeto JavaScript 1",
      categoria: "javascript",
      imagem: "assets/img/image.png",
      descricao: "Lógica interativa e manipulação dinâmica do DOM."
    },
    {
      nome: "Projeto CSS 1",
      categoria: "css",
      imagem: "https://source.unsplash.com/300x200/?design",
      descricao: "Efeitos visuais e animações com CSS moderno."
    },
    {
      nome: "Projeto HTML 1",
      categoria: "html",
      imagem: "https://source.unsplash.com/300x200/?web",
      descricao: "Estrutura semântica e otimização com HTML5."
    },
    {
      nome: "Projeto JavaScript 2",
      categoria: "javascript",
      imagem: "https://source.unsplash.com/300x200/?programming",
      descricao: "Integração de APIs e funcionalidades avançadas."
    }
  ];
  
  function carregarProjetos() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";
    
    projetos.forEach(projeto => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project-item");
      projectElement.setAttribute("data-category", projeto.categoria);
      
      projectElement.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.nome}">
        <div class="project-info">
          <h3>${projeto.nome}</h3>
          <p>${projeto.descricao}</p>
        </div>
      `;
      
      container.appendChild(projectElement);
    });
  }
  
  document.addEventListener("DOMContentLoaded", carregarProjetos);
  