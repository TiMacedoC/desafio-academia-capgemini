const footerInit = document.querySelector("footer");
const headerInit = document.querySelector("header");
const modalInit = document.querySelector(".modal-wrapper")


// HTML para o HEADER, FOOTER e MODAL no fim do documento os dados são adicionados ou HTML

function insereHtml(prefix) {

    const header = `
    <a class="links" href="${prefix}index.html">
        <h1>Academia Capgemini</h1>
    </a>
    <h2>Desafio de programação</h2>
    `;

    const footer = `
    <a class="links" href="${prefix}index.html">Home</a>
    <a class="links" href="#" onclick="openContactModal()">Contato</a>
    `;

    const modal = `
    <div class="modal-contato">
    <img onclick="closeContactModal()" class="close-button" src="${prefix}assets/close.svg" alt="close button">

    <div class="image-field">
        <img src="${prefix}assets/perfil-600-600.jpg" alt="profile" class="profile-picture">
    </div>

    <div class="contact-field">

        <ul>
            <li>
                <a href="https://www.linkedin.com/in/timacedoc/" target="_blank">
                    <img class="logo-image" src="${prefix}assets/linkedin-cinza.png" alt="linkedin logo">
                </a>
            </li>

            <li>
                <a href="https://github.com/TiMacedoC" target="_blank">
                    <img class="logo-image" src="${prefix}assets/github-cinza.png" alt="github logo">
                </a>
            </li>

            <li>
                <a href="https://www.twitter.com/timacedoc/" target="_blank">
                    <img class="logo-image" src="${prefix}assets/twitter-cinza.png" alt="twitter logo">
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/timacedoc/" target="_blank">
                    <img class="logo-image" src="${prefix}assets/instagram-cinza.png" alt="instagram logo">
                </a>
            </li>
        </ul>


    </div>

    </div>
    `;

    // Insere os elementos na tela
    headerInit.innerHTML = header;
    footerInit.innerHTML = footer;
    modalInit.innerHTML = modal;

    setTimeout(() => { console.clear() }, 500)

}
