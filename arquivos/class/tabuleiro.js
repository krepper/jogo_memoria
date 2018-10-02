var Tabuleiro = {
    vez_jogador: 0,
    cartas_ON: carta_list.length,
    cartas_OFF: 0,
    cartas_TOTAL: carta_list.length, 
    carta_add: function(){
        if(this.cartas_OFF != 0){
            this.cartas_OFF--;
        }
        this.cartas_ON++;
    }, 
    carta_rem: function(){
        if(this.cartas_ON != 0){
            this.cartas_ON--;
        }
        this.cartas_OFF++;
    },
    jogo_fim: function(){
        if(this.cartas_ON == 0){
            return true;
        } else {
            return false;
        }
    },
    jogador: function(obj){
        this.vez_jogador = obj;
        alert("JOGA -->"+obj.nome+" | Total: "+obj.pontos+" | :)");
    }
}

var tab = Object.create(Tabuleiro);