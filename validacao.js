document.getElementById('formCadastro').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome   = document.getElementById('nome').value.trim();
  const email  = document.getElementById('email').value.trim();
  const curso  = document.getElementById('curso').value.trim();
  const periodo = document.getElementById('periodo').value.trim();
  const mensagem = document.getElementById('mensagem');

  if (!nome || !email || !curso || !periodo) {
    mensagem.style.color = 'red';
    mensagem.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  if (periodo < 1 || periodo > 10) {
    mensagem.style.color = 'red';
    mensagem.textContent = 'O período deve ser entre 1 e 10.';
    return;
  }

  mensagem.style.color = 'green';
  mensagem.textContent = `Aluno "${nome}" cadastrado com sucesso!`;

  document.getElementById('formCadastro').reset();
});
