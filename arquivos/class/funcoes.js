var Verificar = {
    x: false,
    y: false,
    valorX: 10,
    valorY: 5,
    idX: 0,
    idY: 0
}

var Jogador = {
    nome: "UNKNOW",
    id: 0,
    pontos: 0
}

var verificacao = Object.create(Verificar);
var j1 = Object.create(Jogador);
var j2 = Object.create(Jogador);

function verifica(obj){

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

    if(verificacao.x == true && verificacao.y == true){
        ponto();
    }

    if(tab.jogo_fim()){
        alert("O JOGO ACABOUUU!!");
        console.log(j1);
        console.log(j2);
    }
    console.log(tab);
}

function ponto(){
    if(verificacao.valorX == verificacao.valorY){
        alert("PARABÉNSSSSS!!!");
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





