
insereHtml("");

function openContactModal() {
    document.querySelector(".contact").id = "active";
};

function closeContactModal() {
    document.querySelector(".contact").id = "";
};


// Fechar modal com ESC
window.addEventListener('keydown', (e) => {
    if (e.code == "Escape") {
        closeContactModal();
    }
});

//Fechar modal clicando fora
window.onclick = function (event) {
    if (event.target.id == "active") {
        closeContactModal();
    }
};


