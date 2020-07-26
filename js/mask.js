/*
Coloca mascará de numeros
*/
function somenteNumeros(num) {
        var er = /[^0-9.-]/;
        er.lastIndex = 0;
        var campo = num;
        
        if (er.test(campo.value)) {
          campo.value = "";
        }
    }

/*
Coloca mascará de letras
*/
    function somente_letras(campo){
      var digits="abcdefghijklmnopqrstuvwyxz";
      var campo_temp;
         for (var i=0;i<campo.value.length;i++){
            campo_temp=campo.value.substring(i,i+1);
                if (digits.indexOf(campo_temp)==-1){
                  campo.value = campo.value.substring(0,i);
                  return false;
                }
          }
  }