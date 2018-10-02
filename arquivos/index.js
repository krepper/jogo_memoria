function construir_estrutura(){

    //var carta1 = "<div onclick='verifica(c1)'> "+c1.codigo()+"</div>";
    //var carta2 = "<div onclick='verifica(c2)'> "+c2.codigo()+"</div>";
    //var carta3 = "<div onclick='verifica(c3)'> "+c3.codigo()+"</div>";
    //var carta4 = "<div onclick='verifica(c4)'> "+c4.codigo()+"</div>";


    //var l1 = "<div class='row'> <div class='col col-lg-2'> "+carta1+" </div> <div class='col col-lg-2'> "+carta2+" </div> </div>";
    //var l2 = "<div class='row'> <div class='col col-lg-2'> "+carta3+" </div> <div class='col col-lg-2'> "+carta4+" </div> </div>";

    var tabela = "";
    var pos = 0;
    var linha = 0;

    for(var i=0; i<3; i++){
        console.log("Linha"+linha);
        tabela = tabela+"<div class='row'>";
        for(pos; pos < linha+6; pos++){
            console.log("Pos"+pos);
            tabela = tabela+"<div onclick='verifica(c"+carta_list[pos].id+")' class='col col-lg-2'> "+carta_list[pos].codigo()+" </div>";
        }
        linha = linha+6;
        tabela = tabela+"</div>";
    }

    $('#mesa').html(tabela);

    j1.nome = prompt("Insira o nome do jogador 1");
    j2.nome = prompt("Insira o nome do jogador 2");
    j1.id = 1;
    j2.id = 2;
    tab.jogador(j1);

    console.log(j1);
    console.log(j2);
}







