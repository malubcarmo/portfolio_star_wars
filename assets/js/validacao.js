// Espera o carregamento completo do DOM antes de executar o código
// garantindo que todos os elementos da página estejam disponíveis
// antes de serem manipulados.
document.addEventListener('DOMContentLoaded', () => {
  
  // ======= Validação do formulário de contato =======
  // Obtém o formulário com o ID "contatoForm"
  const form = document.getElementById('contatoForm');

  // Adiciona um ouvinte de evento ao formulário para interceptar o envio (submit)
  form.addEventListener('submit', function (e) {
    // Previne o comportamento padrão do envio do formulário (recarregar a página)
    e.preventDefault();

    // Coleta e remove espaços em branco dos valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verifica se algum campo está vazio
    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return; // Interrompe o envio se houver campos vazios, foi adionado no html um request
    }

    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Testa o e-mail com a expressão
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return; // Interrompe o envio se o e-mail for inválido
    }

    // Exibe a mensagem de confirmação de envio
    const mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
    mensagemConfirmacao.textContent = 'Mensagem enviada com sucesso!';
    mensagemConfirmacao.style.display = 'block';

    // Limpa os campos do formulário
    form.reset();

    // Oculta a mensagem de confirmação após 5 segundos
    setTimeout(() => {
      mensagemConfirmacao.style.display = 'none';
    }, 5000);
  });

  // ======= Ocultação e exibição de seções =======
  // Seleciona todos os links de navegação dentro do elemento com a classe "nav-links"
  const navLinks = document.querySelectorAll('.nav-links a');
  // Seleciona todas as seções dentro da tag <main>
  const sections = document.querySelectorAll('main section');

  // Esconde todas as seções da página
  function ocultarTodasSecoes() {
    sections.forEach(secao => secao.style.display = 'none');
  }

  // Exibe uma seção específica com base no id
  function mostrarSecao(id) {
    const secaoAlvo = document.querySelector(id);
    if (secaoAlvo) {
      secaoAlvo.style.display = 'block';
      // Rola suavemente até a seção visível
      secaoAlvo.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Adiciona evento de clique para cada link de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do link
      const id = this.getAttribute('href'); // Pega o valor do href

      ocultarTodasSecoes(); // Oculta todas as seções primeiro
      mostrarSecao(id);     // Exibe apenas a seção correspondente ao link clicado
    });
  });

  // Ao carregar a página, mostra somente a seção de apresentação
  ocultarTodasSecoes();
  mostrarSecao('#apresentacao');

  // Mensagem de log para indicar que o script foi carregado corretamente
  console.log('validacao.js carregado');

});
