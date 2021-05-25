const botao = document.getElementById("botao");

function adicionarItens(event) {
    event.preventDefault();
    const itens = document.getElementsByTagName("input");
    const novoForm = document.createElement("ol");

    for (let i=0; i<itens.length; i++) {
        let novoDado = document.createElement("li");
        novoDado.innerHTML = itens[i].value;
        novoForm.appendChild(novoDado);
        itens[i].value = "";
    }

    const lista = document.getElementById("lista");
    lista.appendChild(novoForm);
}

botao.addEventListener("click", adicionarItens);