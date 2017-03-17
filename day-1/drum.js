

function tocar(event) {

    //achando o audio que possue o mesmo keyCode da letra pressionada
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    //achando o div que possue o mesmo keyCode da letra pressionada
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // se não existir , já para
    if (!audio) return;

    //Reinicia o audio, quando ele for pressionado novamente, ele reinicia rapidamente
    audio.currentTime = 0;

    //Toca o audio
    audio.play();

    //adicionando ao div selecionado, a classe tocando, que vai dar o destaque em amarelo
    key.classList.add("tocando");
}

function removeTransition(event) {
    //caso o evento não for o transform, cai fora
    if (event.propertyName !== "transform") return;

    //remove a classe do This(div selecionado, pois é ele que chama essa function, por isso ele se encontra no ponteiro this)
    this.classList.remove("tocando");
}

// criei essa função porque esses comandos não são executados sem nenhuma function ou algo assim
// dai minha ideia mais rápida foi acrescenta-los quando o documento for carregado
function load() {
    // seleciona todos os elementos que possuirem a classe .caixa
    const keys = document.querySelectorAll(".caixa");

    // para cada elemento desse array, será adicionada um eventListening
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
}

//dispara um evento quando for apertado uma tecla
window.addEventListener("keydown", tocar);