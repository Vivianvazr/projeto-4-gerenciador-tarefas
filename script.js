let tarefas = [];

const input = document.getElementById("inputTarefa");
const listaTarefas = document.getElementById("listaTarefas");
const total = document.getElementById("total");
const pendentes = document.getElementById("pendentes");
const concluidas = document.getElementById("concluidas");

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
  tarefas[index].concluida = true;
  renderizarTarefas();
}

function renderizarTarefas() {
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <button class="check ${tarefa.concluida ? "ativo" : ""}" onclick="concluirTarefa(${index})">
        ${tarefa.concluida ? "✓" : ""}
      </button>

      <span class="texto">${tarefa.texto}</span>

      <span class="status ${tarefa.concluida ? "ok" : "pendente"}">
        ${tarefa.concluida ? "Concluída" : "Pendente"}
      </span>

      <button class="lixeira" onclick="excluirTarefa(${index})">
        🗑
      </button>
    `;

    listaTarefas.appendChild(li);
  });

  atualizarResumo();
}

function excluirTarefa(index) {
  tarefas.splice(index, 1);
  renderizarTarefas();
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