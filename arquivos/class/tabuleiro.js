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

        jogadores_lista.forEach(function(obj){

            if(obj.id != tab.vez_jogador.id){
                $("#jogador"+obj.id).css({ "color": "#000"});
            }

        });

        alert("|###| SUA VEZ, "+obj.nome+" |###|");
        $("#jogador"+obj.id).css({ "color": "#ff0000"});
    }
}

var tab = Object.create(Tabuleiro);