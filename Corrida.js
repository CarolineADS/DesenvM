import Piloto from './Piloto.js'
import Veiculo from './Veiculo.js'
import api from './api.js'

export default class Corrida {
    largada() {
        let arnaldo = new Piloto('Arnaldo', 4, 15)
        // console.log(arnaldo.xp())

        let pedro = new Piloto('Pedro', 2, 30)
        // console.log(pedro.xp())


        let carrango = new Veiculo('carro', 'corsa', 2000, 'cinza', 100)
        let ferrari = new Veiculo('carro', 'ferrari', 2021, 'vermelha', 400)

        let posicao = 0 
        const relatorio = function (obj) {

            api['api/v1/chegada'](obj.piloto).then((respostaDistancia) => {


                if (respostaDistancia.length == Veiculo.totalVeiculosCorrida) {
                    api['api/v1/recorde']().then((resposta) => {
                        console.log(`O recorde é de ${resposta}`)
                    }).catch(erro => console.log(erro))
                }

            }).catch(erro => console.log(erro))
            posicao += 1
            console.log(posicao + 'º lugar: ' + obj.piloto)
            console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km')


        }

        ferrari.acelerando0a100(arnaldo, relatorio)
        ferrari.acelerando0a100(pedro, relatorio)
        // carrango.acelerando0a100(relatorio)

    }
}