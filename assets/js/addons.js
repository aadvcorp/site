function sendEmail(e) {
  e.preventDefault();
  const t = { email: document.getElementById("email").value };
  fetch("https://hook.us2.make.com/736sncof7ymov8hk8xubtwrugzznq9uy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t),
  })
    .then((e) => {
      if (!e.ok)
        return e.text().then((e) => {
          alert("Houve um erro ao cadastrar seu e-mail. Tente novamente.");
        });
      alert("Cadastro realizado com sucesso!"),
        document.getElementById("newsletter-form").reset();
    })
    .catch((e) => {
      alert("Erro ao enviar seu e-mail. Tente novamente.");
    });
}
document.getElementById("consent").addEventListener("change", function () {
  document.getElementById("submit-button").disabled = !this.checked;
});


document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o usuário já aceitou os cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Cria o popup
        const popup = document.createElement('div');
        popup.id = 'cookie-popup';
        popup.innerHTML = `
            <div style="position: fixed; display: grid; bottom: 20px; right: 20px; left: 20px; background: white; border: 2px solid #001d3d; padding: 20px; z-index: 1000;">
                <p>Este site utiliza cookies para melhorar a sua experiência. <a href="politica-de-privacidade.html">Saiba mais</a>.</p>
                <button id="accept-cookies">Aceitar</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Adiciona o evento de clique no botão "Aceito"
        document.getElementById('accept-cookies').addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            document.body.removeChild(popup); // Remove o popup
        });
    }
});
