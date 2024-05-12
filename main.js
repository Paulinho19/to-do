const adicionarTarefa = () => {
  const lista  = document.getElementById("minha-lista")

  const novoItem = document.createElement("li")


  texto = document.getElementById("tasks").value
  
  novoItem.textContent = texto

  if(texto === "") {
    alert("Por favor, insira informações no campo")

    return
  } else {
    lista.appendChild(novoItem)
    document.getElementById("tasks").value = ""
  }
}

const written = document.getElementById("tasks")

written.onkeyup = function (e) {
  if (e.keyCode === 13) {
    adicionarTarefa()
  }
}