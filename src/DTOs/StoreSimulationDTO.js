class StoreSimulationDTO {
    constructor(params) {
        this.product = params.produto;
        this.operationType = params.tipo_operacao;
        this.guarantor = params.averbador;
        this.agreement = params.convenio;
        this.cpf = params.cpf;
        this.birthDate = params.data_nascimento;
        this.certificateLogin = params.login_certificado;
        this.fgtsSimulation = params.simulacao_fgts; // LiquidBalanceResource().fgts_simulation
        this.seller = params.vendedor;
    }

    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = StoreSimulationDTO;