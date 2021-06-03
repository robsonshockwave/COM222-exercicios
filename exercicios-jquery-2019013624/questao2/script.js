$(document).ready(function () {
    $("button").click((e) => {
        e.preventDefault();

        var linha = $("<tr></tr>");

        $("input").each((index, element) => {
            var dado = $("<td></td>");

            dado.html(element.value);
            linha.append(dado);
        });

        $("#feiticos").append(linha);
    });
});