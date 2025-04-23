document.addEventListener('DOMContentLoaded', () => {
  // ======= Validação do formulário de contato =======
  const form = document.getElementById('contatoForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    const mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
    mensagemConfirmacao.textContent = 'Mensagem enviada com sucesso!';
    mensagemConfirmacao.style.display = 'block';

    form.reset();

    setTimeout(() => {
      mensagemConfirmacao.style.display = 'none';
    }, 5000);
  });

  // ======= Ocultação e exibição de seções =======
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main section');

  function ocultarTodasSecoes() {
    sections.forEach(secao => secao.style.display = 'none');
  }

  function mostrarSecao(id) {
    const secaoAlvo = document.querySelector(id);
    if (secaoAlvo) {
      secaoAlvo.style.display = 'block';
      secaoAlvo.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');

      ocultarTodasSecoes();
      mostrarSecao(id);
    });
  });

  // Mostrar apenas a seção de apresentação ao carregar
  ocultarTodasSecoes();
  mostrarSecao('#apresentacao');

  console.log('validacao.js carregado');

});
