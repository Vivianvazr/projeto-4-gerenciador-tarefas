const {
  adicionarTarefa,
  concluirTarefa
} = require("../tarefas");

describe("Sistema de tarefas", () => {

  test("Adicionar tarefa válida", () => {
    expect(
      adicionarTarefa("Estudar")
    ).toBe("Tarefa adicionada");
  });

  test("Adicionar tarefa vazia", () => {
    expect(
      adicionarTarefa("")
    ).toBe("Não adicionar");
  });

  test("Concluir tarefa", () => {
    adicionarTarefa("Projeto");

    expect(
      concluirTarefa(1)
    ).toBe("Status concluído");
  });

});