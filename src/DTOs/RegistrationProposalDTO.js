class RegistrationProposalDTO {
    constructor(payload) {
        this.codigo_cliente = payload.codigo_cliente
        this.id_simulador = payload.id_simulador
    }

    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = RegistrationProposalDTO;