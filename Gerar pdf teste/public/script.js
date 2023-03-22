const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        if (!inputTarefa.value) return
        criarTarefa(inputTarefa.value)
    }
})

function limparInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li){
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criarTarefa(textoInput){
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limparInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return
    criarTarefa(inputTarefa.value)
})

document.addEventListener('click', function (e){
    const el= e.target;

    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const ListaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        ListaDeTarefas.push(tarefaTexto)
    }
    const tarefaJSON = JSON.stringify(ListaDeTarefas)
    localStorage.setItem('tarefas', tarefaJSON)
}

function adicionarTarefaSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa)
    }
}
adicionarTarefaSalvas()