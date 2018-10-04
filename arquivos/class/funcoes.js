var Verificar = {
    x: false,
    y: false,
    valorX: 10,
    valorY: 5,
    idX: 0,
    idY: 0,
    ponto: function(){
        if(this.x == true && this.y == true){
            setTimeout(ponto, 500);
        }
    },
    fim: function(){
        if(tab.jogo_fim()){
            alert("O JOGO ACABOUUU!!");
            console.log(j1);
            console.log(j2);
        }
    }
}

var Jogador = {
    nome: null,
    id: 0,
    pontos: 0,
    imprimir: function(){
        $("#jogador"+this.id).html("<strong>JOGADOR "+this.id+"</strong>: "+this.nome+" / <strong>PONTOS</strong>: "+this.pontos);
        console.log("#jogador"+this.id);
    }
}

var verificacao = Object.create(Verificar);
var j1 = Object.create(Jogador);
var j2 = Object.create(Jogador);

var jogadores_lista = [j1,j2];

function verifica(obj){

    carta_virar(obj);

    if(obj.ativo == true){
        if(verificacao.x == false){
            verificacao.x = true;
            verificacao.idX = obj.id;
            verificacao.valorX = obj.valor;
            obj.desativar();
        } else if (verificacao.y == false){
            verificacao.y = true;
            verificacao.idY = obj.id;
            verificacao.valorY = obj.valor;
            obj.desativar();
        }
    } else {
        return;
    }

    verificacao.ponto();
    verificacao.fim();
}

function ponto(){
    if(verificacao.valorX == verificacao.valorY){
        alert("PARABÉNSSSSS!!!");
        jogadores_lista.forEach(function(obj){
            obj.imprimir();
        });
        y_ponto();
    } else {
        alert("Não foi dessa vez :c");
        n_ponto();
    }

    reseta_verificar();
}

function y_ponto(){
    //carta_list.forEach(ativar_carta);
    tab.vez_jogador.pontos = tab.vez_jogador.pontos+10;
}

function n_ponto(){
    carta_list.forEach(ativar_carta);
    verifica_vez();
}

function reseta_verificar(){
    verificacao = Object.create(Verificar);
}

function ativar_carta(obj){
    if(verificacao.idX == obj.id || verificacao.idY == obj.id){
        carta_padrao(obj);
        obj.ativar();
    }
}

function verifica_vez(){
    if(tab.vez_jogador.id == j1.id){
        tab.jogador(j2);
    } else if(tab.vez_jogador.id == j2.id){
        tab.jogador(j1);
    }
}

function registrar_jogadores(){

    j1.id = 1;
    j2.id = 2;

    while(j1.nome == null){
        nome = prompt("|###| INSIRA O NOME DO 1° JOGADOR |###|");
        if(nome != ""){
            j1.nome = nome;
            j1.imprimir();
        }
    }

    while(j2.nome == null){
        nome = prompt("|###| INSIRA O NOME DO 2° JOGADOR |###|");
        if(nome != ""){
            j2.nome = nome;
            j2.imprimir();
        }
    }
    

}





