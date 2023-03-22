const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e){
    e.preventDefault();

    let nome = document.querySelector("#nome")
    nome = nome.value;
    
    let nacionalidade = document.querySelector("#nacionalidade")
    nacionalidade = nacionalidade.value;
    
    let estadoCivil = document.querySelector("#estadoCivil")
    estadoCivil = estadoCivil.value;
    
    let idade = document.querySelector("#idade")
    idade = idade.value;

    let email = document.querySelector("#email")
    email = email.value;

    let contato = document.querySelector("#contato")
    contato = contato.value;
    
    let endereco = document.querySelector("#endereco")
    endereco = endereco.value;
    
    let objetivo = document.querySelector("#objetivo")
    objetivo = objetivo.value;

    let formacao = document.querySelector("#formacao")
    formacao = formacao.value;
    
    let curso = document.querySelector("#curso")
    curso = curso.value;
    
    let experiencia = document.querySelector("#experiencia")
    experiencia = experiencia.value;

    var doc = new jsPDF()

    doc.setFontSize("40")
    doc.text(nome, 15, 25)

    doc.setFontSize("15")
    doc.text(nacionalidade + ", " + estadoCivil + ", " + idade, 15, 40)

    doc.text("Email: " + email, 15, 47)
    doc.text("Contato: " + contato, 15, 54)
    doc.text("Endereço: " + endereco, 15, 61)

    doc.setFontSize("25")
    doc.text("Objetivo", 15, 81)
    doc.setFontSize("15")
    doc.text(objetivo, 15, 91)

    doc.setFontSize("25")
    doc.text("Formação", 15, 116)
    doc.setFontSize("15")
    doc.text(formacao, 15, 126)

    doc.setFontSize("25")
    doc.text("Cursos complementares", 15, 170)
    doc.setFontSize("15")
    doc.text(curso, 15, 180)

    doc.setFontSize("25")
    doc.text("Experiência", 15, 230)
    doc.setFontSize("15")
    doc.text(experiencia, 15, 240)

    
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