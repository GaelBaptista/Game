var carta1 = {
        nome: "Yoda",
        imagem:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6bc5264e-69c8-4ec6-b021-e0c91ce631d3/d1fbi47-68993504-b47e-4971-8997-d39d18873e5d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNmJjNTI2NGUtNjljOC00ZWM2LWIwMjEtZTBjOTFjZTYzMWQzXC9kMWZiaTQ3LTY4OTkzNTA0LWI0N2UtNDk3MS04OTk3LWQzOWQxODg3M2U1ZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.j7qn77FNZ6Lz56lOF75CyS8zolFtfcdezkiUDqBRN_M",
        atributos: {
        ataque: 20,
        defesa:18,
        margia:25
    }
};
var carta2 = {
        nome: "Leia Organa",
        imagem:"https://static.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/51ce6179e4b0d911b44957b7/1288803714957/1000w/Star%20wars%20visions10.jpeg",
        atributos: {
        ataque: 15,
        defesa:15,
        margia:9
    }
};


var carta3 = {
        nome: "Darth Vader",
        imagem:"https://th.bing.com/th/id/R.fdd6c5061ce23db7cb210a4faca3deba?rik=CcFj60Qdj970bA&pid=ImgRaw&r=0",
        atributos: {
        ataque: 20,
        defesa:19,
        margia:22
    }
};
var carta4 = {
        nome: "Darth Maulr",
        imagem:"https://th.bing.com/th/id/R.cfc46dbed53d00a924a65d2fb1275f1a?rik=3WhggZmmPAjG0A&pid=ImgRaw&r=0",
        atributos: {
        ataque: 18,
        defesa:20,
        margia:14
    }
};
var carta5 = {
        nome: "R2-D2",
        imagem:"https://th.bing.com/th/id/R.951f153d3dd36df6a70c5eceacaf7f2b?rik=DdAkzFRQLWwMoQ&pid=ImgRaw&r=0",
        atributos: {
        ataque: 13,
        defesa:10,
        margia:0
    }
};
var carta6 = {
        nome: "C-3PO",
        imagem:"https://th.bing.com/th/id/OIP.KdBPxfv8V1-F_tnEIKZlJAHaFj?pid=ImgDet&rs=1",
        atributos: {
        ataque: 8,
        defesa:10,
        margia:0
    }
};
var carta7 = {
        nome: "Chewbacca",
        imagem:"https://th.bing.com/th/id/OIP.9I6I8I8J7ZA-C_vkaGjQXgHaF7?pid=ImgDet&rs=1",
        atributos: {
        ataque: 12,
        defesa:11,
        margia:0
    }
};
var carta8 = {
        nome: "Qui-Gon Jinn",
        imagem:"https://www.mintinbox.net/wp-content/uploads/2020/09/HT-Qui-Gon-Jinn-09.jpg",
        atributos: {
        ataque: 16,
        defesa:18,
        margia:5
    }
};


var carta9 = {
    nome: "Stormtrooper",
    imagem:"https://th.bing.com/th/id/R.80ce0ee01440e1acab9633687a2461de?rik=pn6l5ldZxmwkgA&pid=ImgRaw&r=0",
    atributos: {
    ataque: 19,
    defesa:18,
    margia:0
}
};

var carta10 = {
    nome: "Aayla Secura",
    imagem:"https://th.bing.com/th/id/OIP.z23lsADFPvUfgTK7Q8XgjwHaFj?pid=ImgDet&rs=1",
    atributos: {
    ataque: 16,
    defesa:18,
    margia:5
}
};

var carta11 = {
    nome: "Shadow Trooper",
    imagem:"https://th.bing.com/th/id/OIP.PP286fAhxVLSpnmUk5OaTAHaFb?pid=ImgDet&rs=1",
    atributos: {
    ataque: 20,
    defesa:18,
    margia:0
}
};

var carta12 = {
    nome: "Cin Drallig",
    imagem:"https://th.bing.com/th/id/R.0c41ff82e0c93e086bc013efd59b6b98?rik=P%2boJZHKaewkTvQ&pid=ImgRaw&r=0",
    atributos: {
    ataque: 12,
    defesa:8,
    margia:3
}
};


var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12];
var cartaMaquina;
var cartaJogador;



function  sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 12);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 12);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 12)
    }

    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
    exibirCartaJogador();
}





function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}


function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado");



    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class = 'resultado-final'>Venceu</p>"
    }  else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class = 'resultado-final'>Perdeu</p>"
        
    } else {
        htmlResultado = "<p class = 'resultado-final'>Empatou</p>"
       
    }

  
    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina()
}


function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = ` <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;"> ` ;
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto ="";

    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";

        var nome =  `<p class="carta-subtitle"  >${cartaJogador.nome}  </p>`

        divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
    }
}



function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = ` <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;"> ` ;
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto ="";

    for (var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p name='atributo' value='" + atributo +"'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";

        var nome =  `<p class="carta-subtitle"  >${cartaMaquina.nome}  </p>`

        divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
    }
}
