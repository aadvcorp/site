// Verifica se o dispositivo é móvel (com base na largura da tela)
function isMobile() {
    return window.innerWidth <= 768;
}

// Se o dispositivo for móvel, ativa o efeito de movimento
if (isMobile()) {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then(response => {
            if (response == 'granted') {
                enableOrientation();
            } else {
                console.log('Permissão negada para acessar o sensor de orientação.');
            }
        }).catch(err => {
            console.error("Erro ao solicitar permissão:", err);
        });
    } else {
        enableOrientation(); // Se não for necessário solicitar permissão
    }
}

function enableOrientation() {
    const dynamicBg = document.getElementById("dynamic-bg");

    window.addEventListener('deviceorientation', function(event) {
        const gamma = event.gamma || 0; // Rotação em torno do eixo Y
        const beta = event.beta || 0;   // Rotação em torno do eixo X

        // Ajusta a posição do fundo com base na rotação
        const bgX = gamma / 10; // Sensibilidade horizontal
        const bgY = beta / 10;  // Sensibilidade vertical

        dynamicBg.style.backgroundPosition = `${50 + bgX}% ${50 - bgY}%`;
    });
}
