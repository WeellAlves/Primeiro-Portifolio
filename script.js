document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Exibe a mensagem de agradecimento
    document.getElementById('thankYouMessage').style.display = 'block';

    // Limpa o formulário
    document.getElementById('contactForm').reset();
});