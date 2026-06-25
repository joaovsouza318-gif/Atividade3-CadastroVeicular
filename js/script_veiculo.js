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

    const valorSeguro = funcs.calcularSeguro(valorVeiculo);
    const valorIPVA = funcs.calcularIPVA(valorVeiculo, combustivel, anoFabricacao);

    addVeiculo(veiculo)

    const addVeiculo = (objVeiculo) => {
        veiculos.push(objVeiculo)

        listaVeiculos()
    }

    const listaVeiculos = () => {
        resultado.innerHTML = ''
        veiculos.forEach((elements,i)=>{
            resultado.innerHTML += `
            <br>
                ================ Dados do Veículo ${contador} ================    <br>
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
    }   
})
