/*
Exporta dados da tabela para excel

-- Jquery --
*/
$("#btnExport").click(function(e) {
    var a = document.createElement('a');
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('dvData');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');
    a.href = data_type + ', ' + table_html;
    a.download = 'Relatório_Cidade.xls';
    a.click();
    e.preventDefault();
  });