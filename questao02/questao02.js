//chama a função que mostra o header e footer, pra aproveitar código
insereHtml(`../`);

function testaSenha() {

    //Recebe a senha e o nome do usuário
    const senha = document.querySelector("#senha").value;
    const nome = document.querySelector("#nome").value;
    const especiais = "!@#$%^&*()-+";
    const arrayEspeciais = especiais.split('');

    const problemas = {
        tamanho: {
            passou: false,
            mensagem: "Conter no mínimo 6 caracteres!"
        },
        digito: {
            passou: false,
            mensagem: "Conter no mínimo um número!"
        },
        minusculo: {
            passou: false,
            mensagem: "Conter no mínimo uma letra em minúsculo"
        },
        maiusculo: {
            passou: false,
            mensagem: "Conter no mínimo uma letra em maiúsculo!"
        },
        charEspecial: {
            passou: false,
            mensagem: `Conter no mínimo um caractere especial: ${especiais}`
        }
    }

    //Armazena cada caractere da senha em uma posição de um array para ficar mais fácil de trabalhar
    const senhaArray = senha.split("");

    //Testa se tem 6 caracteres
    problemas.tamanho.passou = senhaArray.length >= 6 ? true : false;

    //Testa se existe numero
    problemas.digito.passou = temNumero = senhaArray.some((num) => {
        return !isNaN(parseInt(num));
    })

    //Verifica Minúsculo
    problemas.minusculo.passou = senhaArray.some((char) => {
        if (isNaN(char) && !especiais.includes(char)) {
            return char == char.toLowerCase();
        } else {
            return false
        }
    })

    //Verifica Maiúsculo
    problemas.maiusculo.passou = senhaArray.some((char) => {
        if (isNaN(char) && !especiais.includes(char)) {
            return char == char.toUpperCase();
        } else {
            return false
        }
    })

    //Verifica caractere especial
    problemas.charEspecial.passou = arrayEspeciais.some((especial) => {
        return senhaArray.some((char) => {
            return especial == char
        })
    })

    mostraResultados(problemas);

}

function mostraResultados(problemas) {

    const saida = document.querySelector(".saida");
    const listaDeProblemas = [];

    //Verifica se existe algum problema e o armazena na lista de problemas
    Object.keys(problemas).forEach((item) => {
        if (!problemas[item].passou) {
            listaDeProblemas.push(problemas[item].mensagem)
        }
    });

    //Mostra o resultado
    if (listaDeProblemas.length > 0) {

        let html = `
            <h3 id="recusado">Senha inválida</h3>
            <p>Sua senha deve deve atender ao seguintes quesitos:</p>
            <ul>
        `

        listaDeProblemas.forEach((item) => {
            html += `<li>${item}</li>`
        })

        html += `</ul>`
        saida.innerHTML = html;

    } else {
        saida.innerHTML = `<h3 id="aceito">Usuário cadastrado com sucesso</h3>`
    }
}
