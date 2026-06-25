import * as funcs from "./script_calculo.js"

const veiculos = []
const formVeiculo = document.querySelector("#form-veiculo");
const resultado = document.querySelector("#divResultado");

formVeiculo.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const dados = new FormData(formVeiculo);

    const veiculo = {
        marca: dados.get("marca"),
        modelo: dados.get("modelo"),
        placa: dados.get("placa"),
        anoFabricacao: dados.get("anoFabricacao"),
        valorVeiculo: dados.get("valorVeiculo"),
        combustivel: dados.get("combustivel")
    }

    const valorSeguro = funcs.calcularSeguro(veiculo.valorVeiculo);
    const valorIPVA = funcs.calcularIPVA(veiculo.valorVeiculo, veiculo.combustivel, veiculo.anoFabricacao);

    const listaVeiculos = () => {
        resultado.innerHTML = ''
        veiculos.forEach((elem, i) => {

            resultado.innerHTML += `
            <br>
                ================ Dados do Veículo ${i+1} ================    <br>
                Marca do Carro: ${elem.marca} <br>
                Modelo do Veículo: ${elem.modelo} <br>
                Placa do Veículo: ${elem.placa} <br>
                Tipo de Combustível: ${elem.combustivel} <br>
                Ano de Fabricação: ${elem.anoFabricacao} <br>
                Valor do Veículo: R$ ${elem.valorVeiculo} <br>
                <br>
                Valor do Seguro: R$ ${valorSeguro} <br>
                Valor do IPVA: R$ ${valorIPVA} <br>
                <br>
            `;
        })
    }

    const addVeiculo = (objVeiculo) => {
        veiculos.push(objVeiculo)

        listaVeiculos()
    }

    addVeiculo(veiculo)
})
