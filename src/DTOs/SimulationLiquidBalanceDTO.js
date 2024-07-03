class SimulationLiquidBalanceDTO {
    constructor(payload) {
        this.cpf = payload.cpf;
        this.taxa = payload.taxa;
        this.tabela = payload.tabela;
        this.parcelas = payload.parcelas; // Installments already grouped
    }

    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = SimulationLiquidBalanceDTO;