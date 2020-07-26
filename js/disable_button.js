//habilita/desabilita INPUT uf
document.getElementById("uf").disabled = true;


document.getElementById("ibge").addEventListener("input", function(event){
    
  
    var conteudo = document.getElementById("ibge").value;
  
    
    if (conteudo !== null && conteudo !== '') {
      
      document.getElementById("uf").disabled = false;
    } else {
     
      document.getElementById("uf").disabled = true;
    }
});

//habilita/desabilita INPUT longitude

document.getElementById("longitude").disabled = true;


document.getElementById("uf").addEventListener("input", function(event){
    
  
    var conteudo = document.getElementById("uf").value;
  
    
    if (conteudo !== null && conteudo !== '') {
      
      document.getElementById("longitude").disabled = false;
    } else {
     
      document.getElementById("longitude").disabled = true;
    }
});

//habilita/desabilita INPUT latitude

document.getElementById("latitude").disabled = true;


document.getElementById("longitude").addEventListener("input", function(event){
    
  
    var conteudo = document.getElementById("longitude").value;
  
    
    if (conteudo !== null && conteudo !== '') {
      
      document.getElementById("latitude").disabled = false;
    } else {
     
      document.getElementById("latitude").disabled = true;
    }
});

//habilita/desabilita INPUT cidade

document.getElementById("cidade").disabled = true;


document.getElementById("latitude").addEventListener("input", function(event){
    
  
    var conteudo = document.getElementById("latitude").value;
  
    
    if (conteudo !== null && conteudo !== '') {
      
      document.getElementById("cidade").disabled = false;
    } else {
     
      document.getElementById("cidade").disabled = true;
    }
});

//habilita/desabilita INPUT regiao

document.getElementById("regiao").disabled = true;


document.getElementById("cidade").addEventListener("input", function(event){
    
  
    var conteudo = document.getElementById("cidade").value;
  
    
    if (conteudo !== null && conteudo !== '') {
      
      document.getElementById("regiao").disabled = false;
    } else {
     
      document.getElementById("regiao").disabled = true;
    }
});

//habilita/desabilita botao gravar

document.getElementById("btn-salvar").disabled = true;


document.getElementById("regiao").addEventListener("input", function(event){
    
  
    var conteudo = document.getElementById("regiao").value;
  
    
    if (conteudo !== null && conteudo !== '') {
        
        document.getElementById("btn-salvar").disabled = false;

    } else {
    
        document.getElementById("btn-salvar").disabled = true;
    }
});



