window.addEventListener('load', carregado);

var db = openDatabase("banco_desafio", "2.0", "banco", 2 * 1024 * 1024);



function carregado(){
    document.getElementById('btn-salvar').addEventListener('click', salvar);
    document.getElementById('btn-deletar').addEventListener('click', deletar);
    document.getElementById('btn-update').addEventListener('click', update);

    db.transaction(function(criar){ 

        criar.executeSql("CREATE TABLE IF NOT EXISTS cidade (id INTEGER PRIMARY KEY, ibge TEXT, uf TEXT, cidade TEXT, longitude TEXT, latitude TEXT, regiao TEXT)");
   
    });

    mostrar();
}

/*
    SALVA DA DADOS
*/

function salvar(){

    var ibge = document.getElementById('ibge').value;
    var uf = document.getElementById('uf').value;
    var cidade = document.getElementById('cidade').value;
    var longitude = document.getElementById('longitude').value;
    var latitude = document.getElementById('latitude').value;
    var regiao = document.getElementById('regiao').value;

    db.transaction(function(tx) {

        tx.executeSql('SELECT * FROM cidade', [], function (tx, resultado) {
            var tamanho = resultado.rows.length;
            var i = 0;
            var condition = true;

/*
 Verifica ibge
*/

                for(var i = 0; i < tamanho; i++){

                 var test_ibge = resultado.rows.item(i).ibge;

                    if(test_ibge == ibge){
 
                        condition = false; 
                        alert("IBGE JA REGISTRADO");

                    }
                }
/*
 Verifica cidade e uf
*/
                for(var i = 0; i < tamanho; i++){

                 var test_cidade = resultado.rows.item(i).cidade;
                 var test_uf = resultado.rows.item(i).uf;

                    if(test_cidade == cidade){
 
                     if(test_uf == uf){

                        condition = false;
                        alert("NÃO PODE CONTER CIDADE COM NOMES IGUAIS NO MESMO UF");

                    }    

                    }
                }

            if(condition == true){

                tx.executeSql("INSERT INTO cidade (ibge, uf, cidade, longitude, latitude, regiao) VALUES (?, ?, ?, ?, ?, ?)",[ibge, uf, cidade, longitude, latitude, regiao],null);
            }

        }, null);           
        
    });

    mostrar();
    
}

/*
INCREMENTA DADOS NA TABELA
*/ 

function mostrar(){        
    var table = document.getElementById('tbody-register');

    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM cidade', [], function (tx, resultado) {
            var rows = resultado.rows;
            var tr = '';
            for(var i = 0; i < rows.length; i++){
                    tr += '<tr>';
                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].ibge + '</td>';
                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].uf + '</td>';
                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].cidade + '</td>';
                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].longitude + '</td>';
                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].latitude + '</td>';
                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].regiao + '</td>';
                    tr += '</tr>';                   
            }
                table.innerHTML = tr; 

        }, null);
    });
}

/*
Seleciona dados e coloca no input
*/

function atualizar(_id){   
    
    var id = document.getElementById('field-id');
    var ibge = document.getElementById('ibge');
    var uf = document.getElementById('uf');
    var cidade = document.getElementById('cidade');
    var longitude = document.getElementById('longitude');
    var latitude = document.getElementById('latitude');
    var regiao = document.getElementById('regiao');

    
    id.value = _id;
    
    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM cidade WHERE id=?', [_id], function (tx, resultado) {
            var rows = resultado.rows[0];

            ibge.value = rows.ibge ;
            uf.value = rows.uf ;
            cidade.value = rows.cidade ;
            longitude.value = rows.longitude ;
            latitude.value = rows.latitude ;
            regiao.value = rows.regiao ;

        });
    });
    
}

/*
Deleta dado selcionado
*/

function deletar(){
    
    var id = document.getElementById('field-id').value;
    
    db.transaction(function(tx) {
        tx.executeSql("DELETE FROM cidade WHERE id=?", [id]);
    });

    mostrar();
}

/*
Faz update das informações
*/

function update(){

    var id = document.getElementById('field-id').value;
    var ibge = document.getElementById('ibge').value;
    var uf = document.getElementById('uf').value;
    var cidade = document.getElementById('cidade').value;
    var longitude = document.getElementById('longitude').value;
    var latitude = document.getElementById('latitude').value;
    var regiao = document.getElementById('regiao').value;

    db.transaction(function(tx){
        
            tx.executeSql('UPDATE cidade SET ibge=?, uf=?, cidade=?, longitude=?, latitude=?, regiao=? WHERE id=?', [ibge, uf, cidade, longitude, latitude, regiao,id],null);

       });

    mostrar();
    
}

