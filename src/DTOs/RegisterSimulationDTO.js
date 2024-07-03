class RegisterSimulationDTO {
    constructor(payload) {
        this.produto = payload.produto;
        this.tipo_operacao = payload.tipo_operacao;
        this.averbador = payload.averbador;
        this.convenio = payload.convenio;
        this.cpf = payload.cpf;
        this.data_nascimento = payload.data_nascimento;
        this.login_certificado = payload.login_certificado;
        this.simulacao_fgts = payload.simulacao_fgts;
        this.vendedor = payload.vendedor;
    }

    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = RegisterSimulationDTO;