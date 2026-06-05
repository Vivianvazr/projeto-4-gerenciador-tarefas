let tarefas = [];

function adicionarTarefa(texto) {
  if (!texto || texto.trim() === "") {
    return "Não adicionar";
  }

  tarefas.push({
    texto,
    concluida: false
  });

  return "Tarefa adicionada";
}

function concluirTarefa(indice) {
  tarefas[indice].concluida = true;
  return "Status concluído";
}

module.exports = {
  adicionarTarefa,
  concluirTarefa,
  tarefas
};