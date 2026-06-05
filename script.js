let lista = [];

function atualizarTela() {

  const ul =
    document.getElementById("lista");

  ul.innerHTML = "";

  lista.forEach((tarefa, i) => {

    const li =
      document.createElement("li");

    li.innerHTML = `
      ${tarefa.texto}
      <button onclick="concluir(${i})">
        Concluir
      </button>
    `;

    if (tarefa.concluida) {
      li.style.textDecoration =
        "line-through";
    }

    ul.appendChild(li);

  });

  document.getElementById("contador")
    .innerText =
      `Tarefas: ${lista.length}`;
}

function adicionar() {

  const input =
    document.getElementById("tarefaInput");

  if (input.value.trim() === "") {
    return;
  }

  lista.push({
    texto: input.value,
    concluida: false
  });

  input.value = "";

  atualizarTela();
}

function concluir(i) {

  lista[i].concluida = true;

  atualizarTela();
}