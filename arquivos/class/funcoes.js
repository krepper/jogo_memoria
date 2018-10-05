/*
 * VERIFICAÇÕES 
 */

/*
@@ 8
*/
var Verificar = {
    x: false,
    y: false,
    valorX: 10,
    valorY: 5,
    idX: 0,
    idY: 0,
    status: true,
    ponto: function(){
        if(this.x == true && this.y == true){
            this.status = false;
            setTimeout(ponto, 500);
        }
    },
    fim: function(){
        if(tab.jogo_fim()){
           if(j1.pontos > j2.pontos){
                alert(j1.nome+" GANHOU O JOGO!!! :D");
                $("#jogador"+j1.id).css({ "color": "#3b00ff"});
           } else if(j2.pontos > j1.pontos){
                alert(j2.nome+" GANHOU O JOGO!!! :D");
                $("#jogador"+j2.id).css({ "color": "#3b00ff"});
           } else if(j2.pontos == j1.pontos){
               alert("O JOGO EMPATOU!!! QUE TAL JOGAR NOVAMENTE? ;D");
           }
        }
    }
}

var verificacao = Object.create(Verificar);

/*
@@ 9
*/
function verifica(obj){
    if(!(verificacao.status)){
        return;
    }

    obj.carta_virar();

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

/*
@@ 10
*/
function reseta_verificar(){
    verificacao = Object.create(Verificar);
}

/*
@@ 11
*/
function verifica_vez(){
    if(tab.vez_jogador.id == j1.id){
        tab.jogador(j2);
    } else if(tab.vez_jogador.id == j2.id){
        tab.jogador(j1);
    }
}

/*
 * JOGADORES 
 */

/*
@@ 12
*/
var Jogador = {
    nome: null,
    id: 0,
    pontos: 0,
    imprimir: function(){
        $("#jogador"+this.id).html("<strong>JOGADOR "+this.id+"</strong>: "+this.nome+" / <strong>PONTOS</strong>: "+this.pontos);
    }
}

var j1 = Object.create(Jogador);
var j2 = Object.create(Jogador);

var jogadores_lista = [j1,j2];

/*
@@ 13
*/
function registrar_jogadores(){
    j1.id = 1;
    j2.id = 2;

    while(j1.nome == null){
        nome = prompt("INSIRA O NOME DO 1° JOGADOR");
        if(nome != ""){
            j1.nome = nome;
            j1.imprimir();
        }
    }

    while(j2.nome == null){
        nome = prompt("INSIRA O NOME DO 2° JOGADOR");
        if(nome != ""){
            j2.nome = nome;
            j2.imprimir();
        }
    }
}

/*
 * PONTOS 
 */


/*
@@ 14
*/
function ponto(){
    if(verificacao.valorX == verificacao.valorY){
        y_ponto();
        jogadores_lista.forEach(function(obj){
            obj.imprimir();
        });
    } else {
        n_ponto();
    }

    reseta_verificar();
}

/*
@@ 15
*/
function y_ponto(){
    tab.vez_jogador.pontos = tab.vez_jogador.pontos+10;
}

/*
@@ 16
*/
function n_ponto(){
    carta_list.forEach(ativar_carta);
    verifica_vez();
}




