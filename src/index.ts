const multiplicarPor15 = (num: number) => num * 15

enum Marcas {
    FIAT = "Fiat",
    VOLKSWAGEN = "Volkswagen",
    FORD = "Ford",
    NISSAN = "Nissan"
}





type Carros = {
    marca: Marcas,
    volumeDoTanque: number,
    temMotorFlex: boolean,
    CalcularAutonomia?: (combustivelRestante: number) => number

}




const mustang: Carros = {
    marca: Marcas.FORD,
    volumeDoTanque: 61,
    temMotorFlex: false,
    CalcularAutonomia: multiplicarPor15
}

const gol: Carros = {
    marca: Marcas.VOLKSWAGEN,
    volumeDoTanque: 55,
    temMotorFlex: true,
    CalcularAutonomia: multiplicarPor15
}

const fusca: Carros = {
    marca: Marcas.VOLKSWAGEN,
    volumeDoTanque: 55,
    temMotorFlex: false,
    CalcularAutonomia: multiplicarPor15
}


const arrayCarros: Carros[] = [mustang, gol, fusca]
const marcaCarro: string = process.argv[2]


console.log(arrayCarros)





function buscarCarrosPorMarca (frota: Carros[], marca: string): Carros[] {
    if(marca === undefined){
        return frota
    }

    return frota.filter(
        (carro: Carros) => {
            return carro.marca === marca
        }
    )
}

console.log(buscarCarrosPorMarca(arrayCarros, marcaCarro)
)