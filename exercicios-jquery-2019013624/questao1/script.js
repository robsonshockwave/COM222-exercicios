$(document).ready(() => {
    $("#formulario").submit((e) => {
        e.preventDefault();
        var lista = [];

        $("input").each((index, element) => {
            lista.push("<li>" + element.value +"</li>");
            element.value = "";
        });

        $("ol").html(lista);
        $("input").each((index, element) => {
            lista.push("<li>" + element.value +"</li>");
        })
    });
});