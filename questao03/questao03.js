//chama a função que mostra o header e footer da página 
insereHtml(`../`);

function testaAnagramas() {

    //Recebe a palavra inserida pelo usuário e transforma para minusculo
    //Transformando em minusculo diminui as chances de erro ao comparar

    var palavra = document.querySelector("#input").value.toLowerCase();

    //Variáveis de apoio
    var tam = palavra.length;
    var dataBase = [];
    var resultados = [];
    var quantidade = 0;

    //Armazena essas strings em um vetor

    //O laço vai pegar cada substring possível, e armazenar em um array com todas as palavras 
    for (i = 1; i < tam; i++) {
        for (j = 0; j < tam; j++) {
            if ((palavra.substring(j, j + i)).length == i) {
                dataBase.push(palavra.substring(j, j + i))
            }
        }
    }

    //Nesse laço a gente compara cada palavra
    for (i = 0; i < dataBase.length; i++) {
        for (j = i + 1; j < dataBase.length; j++) {

            //Se a palavra tem o mesmo tamanho a gente vai trabalhar com ela
            if (dataBase[i].length == dataBase[j].length) {

                //Transforma para array para ficar mais fácil de compara
                //Já coloca na ordem
                let string1 = dataBase[i].split("").sort();
                let string2 = dataBase[j].split("").sort(); ""

                //Compara se são iguais
                const iguais = string1.every((letra, index) => {
                    return letra === string2[index]
                })

                //Armazena os resultados positivos
                if (iguais) {
                    let parDePalavras = [dataBase[i], dataBase[j]];

                    //Aqui eu repito praticamente o mesmo teste anterior, dessa vez pra ver se a palavra ja foi adicionada como anagrama
                    // Ex: "ovoo" sem esse teste iria mostrar na saída: [o, o], [o, o] são a mesma palavra so que aparecem mais de uma vez
                    let jaInserida = resultados.some((jaSalvo) => {
                        return (parDePalavras.length == jaSalvo.length) && jaSalvo.every((letra, index) => {
                            return letra === parDePalavras[index];
                        });
                    })

                    //Armazena os resultados positivos
                    if (!jaInserida) {
                        resultados.push(parDePalavras)
                        quantidade++;
                    }

                }
            }
        }
    }

    //Chama a função que vai tratar esses resultados e mostra-los na tela
    mostraResultados(resultados, quantidade);
}

function mostraResultados(resultados, quantidade) {

    const saida = document.querySelector(".saida");

    var htmlFinal = `
        <h3>${quantidade} anagramas foram encontrados: </h3>
        <p>
    `

    resultados.forEach(result => {
        htmlFinal += ` [${result[0]}, ${result[1]}] -`
    });

    htmlFinal = htmlFinal.slice(0, -1);

    htmlFinal += "</p>"

    saida.innerHTML = htmlFinal;
}

