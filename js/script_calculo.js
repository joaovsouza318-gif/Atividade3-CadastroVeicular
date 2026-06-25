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

export function calcularSeguro(valorVeiculo) {
    return valorVeiculo * 0.10;
}

export function calcularIPVA(valorVeiculo, combustivel, anoFabricacao) {
    if (anoFabricacao < 2004) {
        return 0;
    }

    let taxa = 0;

    switch (combustivel.toLowerCase()) {
        case 'gasolina':
            taxa = 0.20;
            break;
        case 'etanol':
            taxa = 0.15;
            break;
        case 'biocombustivel':
            taxa = 0.10;
            break;
        case 'hibrido':
            taxa = 0.08;
            break;
        case 'eletrico':
            taxa = 0.02;
            break;
        default:
            throw new Error('Tipo de combustível inválido');
    }

    return valorVeiculo * taxa;
}