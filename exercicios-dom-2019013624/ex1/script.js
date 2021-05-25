const livros = document.getElementsByClassName("livro");
const paginas = document.getElementsByClassName("paginas");

function mudarCorLivro() {
    for(let i=1; i<livros.length; i++) {
        livros[i].style.backgroundColor = "blue";
        paginas[i].style.backgroundColor = "transparent";
    }
}

function mudarCorPaginas() {
    for(let i=1; i<livros.length; i++) {
        livros[i].style.backgroundColor = "transparent";
        paginas[i].style.backgroundColor = "green";
    }
}

livros[0].addEventListener("click", mudarCorLivro);
paginas[0].addEventListener("click", mudarCorPaginas);