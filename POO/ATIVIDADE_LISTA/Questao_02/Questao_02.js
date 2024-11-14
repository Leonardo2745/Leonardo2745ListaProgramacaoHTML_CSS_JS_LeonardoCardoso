import Carro from "./classes/Carro.js";
import Pessoa from "./classes/Pessoa.js";

const donoDoCarro = new Pessoa('Leonardo',19);
const carro = new Carro(donoDoCarro, 'Onix', 'Prata',2020,'Chevrollet',12,'Flex', 55)

carro.info()
console.log(`\n`)
carro.acelerar(60)