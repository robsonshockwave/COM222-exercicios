$(document).ready(() => {
    $("#formulario").submit((e) => {
        e.preventDefault();
        var lista = [];

        $("input").each((index, element) => {
            lista[index] = "<li>" + element.value +"</li>";
            //lista.push("<li>" + element.value +"</li>");
            element.value = "";
        });

        $("ol").html(lista);
    });
});