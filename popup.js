// popup.css é vinculado diretamente no <head> de login.html.

function injectPopup() {
    const popupHTML = `
        <div class="popup-janela" id="popup">
            <div class="popup-titulo">
                <div><span id="popt">Mensagem</span></div>
                <div class="popup-fechar branco" onclick="closePopup()"> &#11197; </div>
            </div>
            <div class="popup-texto">
                <p id="popm"> </p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function wait(ms) { return new Promise(resolve => setTimeout(resolve, (ms * 1000))); };

/* USO:
 (async () => { console.log("Esperando 30 segundos..."); await wait(30); console.log("30 segundos se passaram!");
})();
*/

function openPopup(titulo, mensagem) {

	var popup = document.getElementById('popup');
	var popt = document.getElementById('popt');
	var popm = document.getElementById('popm');

	if (titulo) { popt.innerHTML=titulo; };
	if (mensagem) { popm.innerHTML=""; popm.innerHTML=mensagem; };

	popup.style.display = 'block';

	return false;
}

function closePopup() { 

	var popup = document.getElementById('popup');

	popup.style.display = 'none';
	document.getElementById('popt').innerHTML="Mensagem";
	document.getElementById('popm').innerHTML="Padrão";

	return true;
}

document.addEventListener('DOMContentLoaded', () => {
    injectPopup();
});

