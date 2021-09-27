// import Piloto from './Piloto.js'
// import Veiculo from './Veiculo.js'
// import api from './api.js'



// let arnaldo = new Piloto('Arnaldo',4,15)
// // console.log(arnaldo.xp())

// let pedro = new Piloto('Pedro',2,30)
// // console.log(pedro.xp())


// let carrango = new Veiculo('carro','corsa',2000,'cinza',100)
// let ferrari = new Veiculo('carro','ferrari',2021,'vermelha',400)


// const relatorio = function(obj){

//       api['api/v1/chegada'](obj.piloto).then((respostaDistancia) => {
    

//       if (respostaDistancia.length == Veiculo.totalVeiculosCorrida){
//             api['api/v1/recorde']().then((resposta) => {
//               console.log(`O recorde é de ${resposta}`)
//             }).catch(erro => console.log(erro))
//       }

//     }).catch(erro => console.log(erro))
  
//     console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km' )


// }

// ferrari.acelerando0a100(arnaldo,relatorio)
// ferrari.acelerando0a100(pedro,relatorio)
// // carrango.acelerando0a100(relatorio)

import Corrida from "./Corrida.js";
const CorridaMaluca = new Corrida()
CorridaMaluca.largada()

 