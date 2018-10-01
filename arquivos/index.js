function Carta(cor, id, valor) {
    this.largura = 150;
    this.altura = 250;
    this.cor = cor;
    this.id = id;
    this.valor = valor;
    this.ativo = true;
    
    function desativar(){
        this.ativo = false;
    }

    function codigo(){
        return "<div style='width: "+this.largura+"px; height: "+this.altura+"px; background-color: "+this.cor+"'></div>";
    }

    this.codigo = codigo;
    this.desativar = desativar;
}

var c1 = new Carta("#444444", 1, 1);
var c2 = new Carta("#a54242", 2, 1);
var c3 = new Carta("#ff0000", 3, 2);
var c4 = new Carta("#300303", 4, 2);

function construir_estrutura(c1,c2,c3,c4){

    var carta1 = "<div onclick='verifica(c1)'> "+c1.codigo()+"</div>";
    var carta2 = "<div onclick='verifica(c2)'> "+c2.codigo()+"</div>";
    var carta3 = "<div onclick='verifica(c3)'> "+c3.codigo()+"</div>";
    var carta4 = "<div onclick='verifica(c4)'> "+c4.codigo()+"</div>";


    var l1 = "<div class='row'> <div class='col col-lg-2'> "+carta1+" </div> <div class='col col-lg-2'> "+carta2+" </div> </div>";
    var l2 = "<div class='row'> <div class='col col-lg-2'> "+carta3+" </div> <div class='col col-lg-2'> "+carta4+" </div> </div>";

    $('#mesa').html(l1+l2);
}

var Verificar = {
    x: false,
    y: false,
    valorX: 10,
    valorY: 5
}

var verificacao = Object.create(Verificar);

function verifica(obj){
    console.log(obj);

    if(verificacao.x == false){
        verificacao.x = true;
        verificacao.valorX = obj.valor;
    } else if (verificacao.y == false){
        verificacao.y = true;
        verificacao.valorY = obj.valor;
    }

    console.log(verificacao);

    if(verificacao.x == true && verificacao.y == true){
        ponto();
    }

    
}

function ponto(){
    if(verificacao.valorX == verificacao.valorY){
        alert("PARABÉNSSSSS!!!");
    } else {
        alert("Não foi dessa vez :c");
    }

    reseta_verificar();
}

function reseta_verificar(){
    verificacao = Object.create(Verificar);
}



