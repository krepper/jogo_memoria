/*
@@ 3
*/
function Carta(id) {
    this.largura = 120;
    this.altura = 150;
    this.img = "../JOGO_MEMORIA/arquivos/img/capa.jpg";
    this.id = id;
    this.valor = 0;
    this.ativo = true;
    
    function desativar(){
        if(this.ativo == false){
            return;
        }
        this.ativo = false;
        tab.carta_rem();
    }

    function ativar(){
        if(this.ativo == true){
            return;
        }
        this.ativo = true;
        tab.carta_add();
    }

    function codigo(){
        return "<img id='"+this.id+"' onclick='verifica(c"+this.id+")' style='width: "+this.largura+"px; height: "+this.altura+"px; background: url(../JOGO_MEMORIA/arquivos/img/capa.jpg)'></img>";
    }

    function carta_virar(){
        $("#"+this.id).css({"background": "url("+this.img+")"});
    }

    function carta_desvirar(){
        $("#"+this.id).css({"background": "url(../JOGO_MEMORIA/arquivos/img/capa.jpg)"});
    }

    this.codigo = codigo;
    this.desativar = desativar;
    this.carta_virar = carta_virar;
    this.carta_desvirar = carta_desvirar;
    this.ativar = ativar;
}

var c0 = new Carta(0);
var c1 = new Carta(1);
var c2 = new Carta(2);
var c3 = new Carta(3);
var c4 = new Carta(4);
var c5 = new Carta(5);
var c6 = new Carta(6);
var c7 = new Carta(7);
var c8 = new Carta(8);
var c9 = new Carta(9);
var c10 = new Carta(10);
var c11 = new Carta(11);
var c12 = new Carta(12);
var c13 = new Carta(13);
var c14 = new Carta(14);
var c15 = new Carta(15);
var carta_list = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15];

/*
@@ 4
*/
function cartas_aleatorio(){
    var valores = [1,2,3,4,5,6,7,8];
    var imagens = ["../jogo_memoria/arquivos/img/1.jpg","../jogo_memoria/arquivos/img/2.jpg","../jogo_memoria/arquivos/img/3.jpg","../jogo_memoria/arquivos/img/4.jpg","../jogo_memoria/arquivos/img/5.jpg","../jogo_memoria/arquivos/img/6.jpg","../jogo_memoria/arquivos/img/7.jpg","../jogo_memoria/arquivos/img/8.jpg"];
    var cartas = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15];
    select_values(valores, imagens, cartas);
}

/*
@@ 5
*/
function select_values(valores, imagens, cartas){
    var select_valor;
    var select_carta;
    for(var i = 0; i<8; i++){
        select_valor = Math.floor(Math.random() * valores.length);  
        for(var i2 = 0; i2<2; i2++){
            select_carta = Math.floor(Math.random() * cartas.length);
            cartas[select_carta].valor = valores[select_valor];
            cartas[select_carta].img = imagens[select_valor];
            cartas[select_carta].ativo = true;
            cartas.splice(select_carta, 1);
        }
        valores.splice(select_valor, 1);
        imagens.splice(select_valor, 1);
    }
}

/*
@@ 6
*/
function cartas_imprimir(){
    for(var i = 0; i<carta_list.length; i++){
        console.log(carta_list[i]);
    }
}

/*
@@ 7
*/
function ativar_carta(carta){
    if(verificacao.idX == carta.id || verificacao.idY == carta.id){
        carta.carta_desvirar();
        carta.ativar();
    }
}