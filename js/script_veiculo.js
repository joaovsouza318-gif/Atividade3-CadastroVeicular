/*
O Seguro do carro corresponde a 10% do valor do veículo
O IPVA é calculado com base no combustível utilizado:
20% de taxa para gasolina
15% de taxa para etanol
10% para biocombustíveis
8% para híbridos
2% para elétricos
Caso o ano de fabricação do veículo seja maior que 20 anos, ele está isento de ipva.

*/

import * as funcs from "./script_calculo.js"
let contador = 1;

const formVeiculo = document.querySelector("#form-veiculo");
const resultado = document.querySelector("#divResultado");

formVeiculo.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const dados = new FormData(formVeiculo);

    const marca = dados.get("marca");
    const modelo = dados.get("modelo");
    const placa = dados.get("placa");
    const anoFabricacao = dados.get("anoFabricacao");
    const valorVeiculo = dados.get("valorVeiculo");
    
    const combustivel = dados.get("combustivel");

    const valorSeguro = funcs.calcularSeguro(valorVeiculo);
    
    const valorIPVA = funcs.calcularIPVA(valorVeiculo, combustivel, anoFabricacao);

    contador ++
    resultado.innerHTML += `
    <br>
        ================ Dados do Veículo${contador} ================    <br>
        Marca do Carro: ${marca} <br>
        Modelo do Veículo: ${modelo} <br>
        Placa do Veículo: ${placa} <br>
        Tipo de Combustível: ${combustivel} <br>
        Ano de Fabricação: ${anoFabricacao} <br>
        Valor do Veículo: R$ ${valorVeiculo} <br>
        <br><br>
        ================ Cálculo do Seguro e IPVA ================ <br>
        Valor do Seguro: R$ ${valorSeguro} <br>
        Valor do IPVA: R$ ${valorIPVA} <br>
        <br><br>
    `;
})
