/*
@@ 1 
*/
function construir_estrutura(){
    restaurar_variaveis();
    var tabela = ""; // INICIALIZA A TABELA
    var pos = 0; // CONTADOR PARA COLOCAR AS CARTAS
    var linha = 0; // CONTADOR PARA A LINHA QUE RECEBE AS CARTAS
    

    for(var i = 0; i<4; i++){
        tabela = tabela+"<div>"; // INICIO DA LINHA
        for(pos; pos < linha+4; pos++){
            tabela = tabela+carta_list[pos].codigo(); // CARTA
        }
        tabela = tabela+"</div>"; // FIM DA LINHA
        linha = linha+4; // PULA LINHA
    }

    $('#mesa').html(tabela); // CRIA TABELA
    tab.jogador(j1); // JOGADOR 1 COMEÇA JOGANDO

}

/*
@@ 2
*/
function restaurar_variaveis(){
    tab = Object.create(Tabuleiro);
    verificacao = Object.create(Verificar);
    j1.pontos = 0; j1.nome = null;
    j2.pontos = 0; j2.nome = null;
    cartas_aleatorio(); 
    registrar_jogadores();
}






