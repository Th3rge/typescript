var multiplicarPor15 = function (num) { return num * 15; };
var mustang = {
    marca: "Ford",
    volumeDoTanque: 61,
    temMotorFlex: false,
    CalcularAutonomia: multiplicarPor15
};
var gol = {
    marca: "Volkswagen",
    volumeDoTanque: 55,
    temMotorFlex: true,
    CalcularAutonomia: multiplicarPor15
};
var fusca = {
    marca: "Volkswagen",
    volumeDoTanque: 55,
    temMotorFlex: false,
    CalcularAutonomia: multiplicarPor15
};
var arrayCarros = [mustang, gol, fusca];
var marcaCarro = process.argv[2];
console.log(arrayCarros);
function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    return frota.filter(function (carro) {
        return carro.marca === marca;
    });
}
console.log(buscarCarrosPorMarca(arrayCarros, marcaCarro));
