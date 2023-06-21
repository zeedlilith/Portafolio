const text = document.getElementById('texto');

let idx = 1;
let text_reload = "Desarrollador Web";

WriteText();

function WriteText() {
    text.innerText = text_reload.slice(0, idx);

    idx++;

    if (idx > text_reload.length) {
        idx = 1
    }

    setTimeout(WriteText, 250)
}