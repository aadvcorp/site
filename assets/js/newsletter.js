// Função que ativa/desativa o botão com base no estado do checkbox
document.getElementById('consent').addEventListener('change', function() {
    var submitButton = document.getElementById('submit-button');
    submitButton.disabled = !this.checked;  // Se o checkbox não estiver marcado, o botão ficará desabilitado
});

// Função que será chamada quando o formulário for enviado
function sendEmail(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Obter o valor do campo de e-mail
    const email = document.getElementById('email').value;

    // URL do seu webhook no Make
    const webhookUrl = 'https://hook.us2.make.com/736sncof7ymov8hk8xubtwrugzznq9uy';

    // Dados que serão enviados para o webhook
    const payload = {
        email: email
    };

    // Envia os dados para o webhook via Fetch API
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        // Verifique se a resposta foi bem-sucedida
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            document.getElementById('newsletter-form').reset(); // Limpa o formulário após o envio
        } else {
            // Se a resposta não for ok, registre o status e o texto da resposta
            return response.text().then(text => {
                console.error('Erro ao enviar para o webhook:', text);
                alert('Houve um erro ao cadastrar seu e-mail. Tente novamente.');
            });
        }
    })
    .catch(error => {
        // Log do erro caso ocorra algum problema com a requisição
        console.error('Erro ao enviar o e-mail para o webhook:', error);
        alert('Erro ao enviar seu e-mail. Tente novamente.');
    });
}
