document.addEventListener('DOMContentLoaded', () => {
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
  
      // Mostra mensagem de sucesso na tela
      const mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
      mensagemConfirmacao.textContent = 'Mensagem enviada com sucesso!';
      mensagemConfirmacao.style.display = 'block';
  
      // Limpa o formulário
      form.reset();
  
      // Oculta a mensagem depois de 5 segundos
      setTimeout(() => {
        mensagemConfirmacao.style.display = 'none';
      }, 5000);
    });
  });
  