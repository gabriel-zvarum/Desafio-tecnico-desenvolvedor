//habilita/desabilita o INPUT filter regiao
document.getElementById("filter_regiao").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("filter_uf").addEventListener("input", function(event){
    
  //busca conteúdo do input
    var conteudo = document.getElementById("filter_uf").value;
  
    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("filter_regiao").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("filter_regiao").disabled = true;
    }
});

//habilita/desabilita o INPUT filter cidade
document.getElementById("filter_cidade").disabled = true;


document.getElementById("filter_regiao").addEventListener("input", function(event){
    
  
    var conteudo = document.getElementById("filter_regiao").value;
  
    
    if (conteudo !== null && conteudo !== '') {
      
      document.getElementById("filter_cidade").disabled = false;
    } else {
     
      document.getElementById("filter_cidade").disabled = true;
    }
});