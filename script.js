const tarefas = [];

const input = document.getElementById("tarefaInput");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

botao.addEventListener("click", adicionar);

function adicionar() {
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  tarefas.push({
    texto: texto,
    concluida: false
  });

  input.value = "";
  renderizar();
}

function concluir(indice) {
  tarefas[indice].concluida = true;
  renderizar();
}

function renderizar() {
  lista.innerHTML = "";

  tarefas.forEach((tarefa, indice) => {
    const item = document.createElement("li");

    if (tarefa.concluida) {
      item.classList.add("concluida");
    }

    item.innerHTML = `
      <span>${tarefa.texto}</span>
      <button onclick="concluir(${indice})">Concluir</button>
    `;

    lista.appendChild(item);
  });

  contador.textContent = `Tarefas: ${tarefas.length}`;
}