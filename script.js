 let tarefas = []

function adicionarTarefa(){
  let inputTarefa = document.getElementById("inputTarefa")
  let inputValor = inputTarefa.value.trim()
  let mensagem = document.getElementById("mensagem")

  if(inputValor === ""){
    mensagem.textContent = "adicione uma tarefa no campo!!!"
  }else{
    tarefas.push(inputValor)
    renderizarTarefa()
    mensagem.textContent = "tarefa adicionada com sucesso!!"
  }

  inputTarefa.value = ""
}

function renderizarTarefa(){
  let lista = document.getElementById("lista")
  lista.innerHTML = ""

  for (let i = 0; i < tarefas.length; i++){
    let item = document.createElement("li")
    item.textContent = tarefas[i]

    let botaoRemover = document.createElement("button")
    botaoRemover.className = "remover"
    botaoRemover.textContent = "remover"
    botaoRemover.onclick = () => removerTarefa(i)

    let botaoEditar = document.createElement("button")
    botaoEditar.className = "editar"
    botaoEditar.textContent = "editar"
    botaoEditar.onclick = () => editarTarefa(i)

    item.appendChild(botaoRemover)
    item.appendChild(botaoEditar)
    lista.appendChild(item)
  }
}

function removerTarefa(i){
  tarefas.splice(i, 1)
  renderizarTarefa()
  document.getElementById("mensagem").textContent = "tarefa removida com sucesso!!!"
}

function editarTarefa(i){
  let tarefaEditada = prompt("Edite sua tarefa:")
  if(tarefaEditada !== null && tarefaEditada.trim() !== ""){
    tarefas[i] = tarefaEditada.trim()
    renderizarTarefa()
  }
}

function limparLista(){
  tarefas.length = 0
  renderizarTarefa()
  document.getElementById("mensagem").textContent = "lista de tarefa limpa com sucesso!!"
}
 