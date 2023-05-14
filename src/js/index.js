var botaoNao = document.getElementById("botao_Nao");
var botaoSim = document.getElementById("botao_Sim");
var contadorDeDor = 1;

botaoNao.onmouseover = function() {
    var valoresAleatorios = [];

    for (var i = 0; i < 2; i++) {
        var valorAleatorio = Math.round(Math.random() * 80);
        valoresAleatorios.push(valorAleatorio + "%");
        console.log(valoresAleatorios[i]);
    }

    console.log("Ela Te Odeia!");
    botaoNao.style.left = valoresAleatorios[0];
    botaoNao.style.bottom = valoresAleatorios[1];

    contadorDeDor = contadorDeDor - 0.01;
    document.getElementById("fundo").style.opacity = contadorDeDor;
};

let segundos = 100;
botaoSim.onmouseover = function() {
    setInterval(function() {
        segundos++;
        const opacidade = segundos / 10; // Define a opacidade com base na contagem de segundos
        document.getElementById("fundo").style.opacity = opacidade;
    }, 800);

    
};


