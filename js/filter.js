/*
Adiciona filtro de regiao na tabela
*/
function filter_regiao() {
    var input, filter, table, tr, td, i, txtValue, Td2;
    
    input = document.getElementById("filter_regiao");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];;
     
      if (td) {
        txtValue = td.textContent || td.innerText;
       
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

/*
Adiciona filtro de uf na tabela
*/

  function filter_uf() {
    var input, filter, table, tr, td, i, txtValue, Td2;
    
    input = document.getElementById("filter_uf");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];;
     
      if (td) {
        txtValue = td.textContent || td.innerText;
       
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

/*
Adiciona filtro de cidade na tabela
*/

  function filter_cidade() {
    var input, filter, table, tr, td, i, txtValue, Td2;
    
    input = document.getElementById("filter_cidade");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];;
     
      if (td) {
        txtValue = td.textContent || td.innerText;
       
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }