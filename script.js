let tarefas = [];

const input = document.getElementById("tarefaInput");
const botaoAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");

botaoAdicionar.addEventListener("click", function () {
  const texto = input.value.trim();

  if (texto === "") {
    return;
  }

  tarefas.push({
    texto: texto,
    concluida: false
  });

  input.value = "";
  listarTarefas();
});

function listarTarefas() {
  listaTarefas.innerHTML = "";

  tarefas.forEach(function (tarefa, index) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarefa.texto;

    if (tarefa.concluida) {
      span.classList.add("concluida");
    }

    const botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "Concluir";

    botaoConcluir.addEventListener("click", function () {
      tarefas[index].concluida = true;
      listarTarefas();
    });

    li.appendChild(span);
    li.appendChild(botaoConcluir);

    listaTarefas.appendChild(li);
  });

  contador.textContent = `Tarefas: ${tarefas.length}`;
}