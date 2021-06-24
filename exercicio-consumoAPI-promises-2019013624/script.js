$(document).ready(function () {
    $("button").click(buscarInformacoes)
});

buscarCidade = function(cidade) {
    return new Promise(function(resolve, reject) {
        let resultado;
        if(typeof cidade == 'string') {
            resultado = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=f32220c86dbf37908be0eb2721823e3b");
        } else {
            reject();
        }
        
        if(resultado) {
            resolve(resultado);
        } else {
            reject();
        }
    });
}

colocarNoHtml = function(info) {
    const climaAtual = info.weather[0].description;
    const temperaturaAtual = (info.main.temp - 273.15).toFixed(2);
    const temperaturaMinima = (info.main.temp_min - 273.15).toFixed(2);
    const temperaturaMaxima = (info.main.temp_max - 273.15).toFixed(2);
    
    $("#resultado").html(
        `<p>Condição Atual: ${climaAtual}</p>
        <p>Temperatura Atual: ${temperaturaAtual}</p>
        <p>Temperatura máxima: ${temperaturaMaxima}</p>
        <p>Temperatura minima: ${temperaturaMinima}</p>
        `
    );
}

function buscarInformacoes() {
    let cidade = $("input").val();

    buscarCidade(cidade).then(colocarNoHtml).catch((err) => {
        return $("#resultado").html(
            `<p id="error">Cidade não encontrada</p>`
        );
    });
}