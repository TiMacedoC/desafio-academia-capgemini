//chama a função que mostra o header e footer, pra aproveitar código
insereHtml(`../`);


function desenharEscada() {

    const valor = document.querySelector("#input").value;

    var result = "";

    //Usei dois laços for, um incrementa e ou outro decrementa
    for (i = 1; i <= valor; i++) {
        for (j = valor; j > 0; j--) {

            if (j > i) {
                result += " ";
            } else {
                result += "*";
            }
        }
        result += "\n"
    }

    //Usa uma Tag <pre> no HTML que recebe e exibe o texto como inserido
    const saida = document.querySelector(".saida");
    saida.innerHTML = result;

}



