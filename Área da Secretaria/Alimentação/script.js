const btn = document.querySelector("#enviar");

var selecionadas = [];
var opcoes = document.querySelector('#opcoes');
opcoes.addEventListener('change',    function(ev){
   var selectedOptions = ev.target.selectedOptions;
   selecionadas = []
   for (var i = 0; i < selectedOptions.length; i++){
      selecionadas.push(selectedOptions[i].value);
   }
});


btn.addEventListener("click", function(e){
    e.preventDefault();

    const empregador = document.querySelector("#empregador")
    const empregadorValue = empregador.value;

    const funcaoValue = selecionadas.toString()

    const quantidadeVA = document.querySelector("#quantidadeVA")
    const quantidadeVAValue = quantidadeVA.value;

    let valorrecebido = quantidadeVAValue * 20
    valorrecebido = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valorrecebido)

    const quantidadeVAextenso = document.querySelector("#quantidadeVAextenso")
    const quantidadeVAextensoValue = quantidadeVAextenso.value;

    const dataInicial = document.querySelector("#dataInicial")
    let dataInicialValue = dataInicial.value;
    dataInicialValue = dataInicialValue.replace(/-/g,"/")
    dataInicialValue = dataInicialValue.split('/');
    dataInicialValue = dataInicialValue[2]+ "/" + dataInicialValue[1] + "/" + dataInicialValue[0]

    const dataFinal = document.querySelector("#dataFinal")
    let dataFinalValue = dataFinal.value;
    dataFinalValue = dataFinalValue.replace(/-/g,"/")
    dataFinalValue = dataFinalValue.split('/');
    dataFinalValue = dataFinalValue[2]+ "/" + dataFinalValue[1] + "/" + dataFinalValue[0]

    var doc = new jsPDF()

    // Titulo
    doc.setFontSize("20")
    doc.text("RECIBO DE ENTREGA DE", 60, 30)
    doc.text("VALE-ALIMENTAÇÃO", 67, 40)

    // Informções sobre a empresa
    doc.setFontSize("13")
    doc.text("Empregador: PINHO COMÉRCIO DE LIVROS E CURSOS LTDA\nCNPJ: 19.205.066/0001-46", 15, 60)
    
    // Informações do funcionario
    doc.text("Empregado: "+ empregadorValue+ "\nFunção: " + funcaoValue, 15, 75)
    
    //  Valor recebido e datas
    doc.text("Recebi "+ quantidadeVAValue + "(" + quantidadeVAextensoValue + ")" +  " vales-alimentação, referente ao período de " + dataInicialValue + " até\n" + dataFinalValue + ", pelo que firmo o presente.", 15, 90)
    
    // Data e local
    doc.text("Local: Curitiba-PR\nData:________________ 2023.", 15, 105)
    
    // Assinatura
    doc.text("__________________________________________", 15, 125)
    doc.text("Assinatura do (a) empregado(a).", 15, 131)
    
    // Divisão
    doc.text("_______________________________________________________________________", 15, 150)

    // Titulo
    doc.setFontSize("20")
    doc.text("RECIBO DE ENTREGA DE", 60, 180)
    doc.text("VALE-ALIMENTAÇÃO", 67, 190)

    // Informções sobre a empresa
    doc.setFontSize("13")
    doc.text("Empregador: PINHO COMÉRCIO DE LIVROS E CURSOS LTDA\nCNPJ: 19.205.066/0001-46", 15, 210)
    
    // Informações do funcionario
    doc.text("Empregado: "+ empregadorValue+ "\nFunção: " + funcaoValue, 15, 225)
    
    //  Valor recebido e datas
    doc.text("Recebi o valor de "+ valorrecebido + " sendo " + quantidadeVAValue + "(" + quantidadeVAextensoValue + ")" +  " vales-alimentação, referente ao \nperíodo de " + dataInicialValue + " até " + dataFinalValue + ", pelo que firmo o presente.", 15, 240)
    
    // Data e local
    doc.text("Local: Curitiba-PR\nData:________________ 2023.", 15, 255)
    
    // Assinatura
    doc.text("__________________________________________", 15, 275)
    doc.text("Assinatura do (a) empregado(a).", 15, 281)
    

    // var linha = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABOYAAAAHCAYAAACsq0IeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7dgxAQAgDAOwgX+jVQEu1ieRkZPkDQAAAACw6g4AAAAAsE7MAQAAAECBmAMAAACAAjEHAAAAAAViDgAAAAAKxBwAAAAAFHyXWQPI2hZK+wAAAABJRU5ErkJggg=='
    // doc.addImage(linha, 'JPEG', 5, 30, 200, 1)
    
    doc.output("dataurlnewwindow")
})


    // doc.setFontStyle("bold")
    // doc.setFontSize("11")
    // doc.setTextColor (225,67,67)
    // doc.addPage()
    // doc.setPage(2)   
    // doc.save('contrato.pdf')
    // var linha = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABOYAAAAHCAYAAACsq0IeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7dgxAQAgDAOwgX+jVQEu1ieRkZPkDQAAAACw6g4AAAAAsE7MAQAAAECBmAMAAACAAjEHAAAAAAViDgAAAAAKxBwAAAAAFHyXWQPI2hZK+wAAAABJRU5ErkJggg=='
    // doc.addImage(linha, 'JPEG', 5, 30, 200, 1)