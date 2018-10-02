function Carta(cor, id, valor) {
    this.largura = 150;
    this.altura = 250;
    this.cor = cor;
    this.id = id;
    this.valor = valor;
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
        return "<div id='"+this.id+"' style='width: "+this.largura+"px; height: "+this.altura+"px; background-color: "+this.cor+"'></div>";
    }

    this.codigo = codigo;
    this.desativar = desativar;
    this.ativar = ativar;
}

var c1 = new Carta("#a7ff49", 1, 1);
var c2 = new Carta("#03a860", 2, 2);
var c3 = new Carta("#0384a8", 3, 3);
var c4 = new Carta("#54d9ff", 4, 4);
var c5 = new Carta("#a954ff", 5, 5);
var c6 = new Carta("#451377", 6, 6);
var c7 = new Carta("#771367", 7, 7);
var c8 = new Carta("#ff00d6", 8, 8);
var c9 = new Carta("#ff00d6", 9, 8);
var c10 = new Carta("#771367", 10, 7);
var c11 = new Carta("#451377", 11, 6);
var c12 = new Carta("#a954ff", 12, 5);
var c13 = new Carta("#54d9ff", 13, 4);
var c14 = new Carta("#0384a8", 14, 3);
var c15 = new Carta("#03a860", 15, 2);
var c16 = new Carta("#a7ff49", 16, 1);
var carta_list = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16];
