/*
    FUNÇÃO PARA CONSTRUIR A ESTRUTURA
*/
function construir_estrutura(){
    var tabela = ""; // INICIALIZA A TABELA
    var pos = 0; // CONTADOR PARA COLOCAR AS CARTAS
    var linha = 0; // CONTADOR PARA A LINHA QUE RECEBE AS CARTAS
    cartas_aleatorio(); // GERAR POSIÇÕES ALEATÓRIAS

    for(var i = 0; i<4; i++){
        tabela = tabela+"<div class='row justify-content-center'>"; // INICIO DA LINHA
        for(pos; pos < linha+4; pos++){
            console.log(carta_list[pos]);
            tabela = tabela+"<div onclick='verifica(c"+carta_list[pos].id+")' class='col col-lg-2 align-self-center' style='margin: 1% 1%'> "+carta_list[pos].codigo()+" </div>"; // CARTA
        }
        tabela = tabela+"</div>"; // FIM DA LINHA
        linha = linha+4; // PULA LINHA
    }

    $('#mesa').html(tabela); // CRIA TABELA

    registrar_jogadores();
    tab.jogador(j1); // JOGADOR 1 COMEÇA JOGANDO

    console.log(j1);
    console.log(j2);
}







