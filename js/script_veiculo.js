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

import * as funcs from "./script_calculo"

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

    funcs.calcularSeguro(valorVeiculo);
    funcs.calcularIPVA(valorVeiculo, combustivel, anoFabricacao);

    resultado.innerHTML = `
        <p>a. Total de pessoas: ${marca}</p>
        <p>b. Média salarial masculina: R$ ${modelo}</p>
        <p>c. Mulheres com renda entre R$ 1000 e R$ 3000: ${placa}</p>
        <p>d. Homens com salário ≥ R$ 2000: ${anoFabricacao}% | Mulheres com salário ≥ R$ 2000: %</p>
        <p>d. Homens com salário ≥ R$ 2000: ${valorVeiculo}% | Mulheres com salário ≥ R$ 2000: %</p>
    `;
})
