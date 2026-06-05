const input = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

const total = document.getElementById("total");
const pendentes = document.getElementById("pendentes");
const concluidas = document.getElementById("concluidas");

let tarefas = [
  { texto: "Estudar JavaScript", concluida: false },
  { texto: "Fazer exercícios de lógica", concluida: true },
  { texto: "Criar projeto com CRUD", concluida: false },
  { texto: "Ler documentação do React", concluida: true }
];

btnAdicionar.addEventListener("click", adicionarTarefa);

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  const texto = input.value.trim();

  if (texto === "") {
    return;
  }

  tarefas.push({
    texto: texto,
    concluida: false
  });

  input.value = "";
  renderizarTarefas();
}

function concluirTarefa(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  renderizarTarefas();
}

function excluirTarefa(index) {
  tarefas.splice(index, 1);
  renderizarTarefas();
}

function renderizarTarefas() {
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const item = document.createElement("li");

    item.innerHTML = `
      <button class="check ${tarefa.concluida ? "ativo" : ""}" onclick="concluirTarefa(${index})">
        ${tarefa.concluida ? "✓" : ""}
      </button>

      <span class="texto ${tarefa.concluida ? "finalizada" : ""}">
        ${tarefa.texto}
      </span>

      <span class="status ${tarefa.concluida ? "ok" : "pendente"}">
        ${tarefa.concluida ? "Concluída" : "Pendente"}
      </span>

      <button class="lixeira" onclick="excluirTarefa(${index})">
        🗑
      </button>
    `;

    listaTarefas.appendChild(item);
  });

  atualizarResumo();
}

function atualizarResumo() {
  const qtdTotal = tarefas.length;
  const qtdConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
  const qtdPendentes = qtdTotal - qtdConcluidas;

  total.textContent = qtdTotal;
  pendentes.textContent = qtdPendentes;
  concluidas.textContent = qtdConcluidas;
}

renderizarTarefas();