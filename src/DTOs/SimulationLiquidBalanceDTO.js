class SimulationLiquidBalanceDTO {
    constructor(params) {
        this.cpf = params.cpf;
        this.rate = params.taxa;
        this.table = params.tabela;
        this.installments = params.parcelas; // Installments already grouped
    }

    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = SimulationLiquidBalanceDTO;