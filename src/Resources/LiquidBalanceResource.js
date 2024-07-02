class LiquidBalanceResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            allowed: this.rawData.permitido,
            fgtsSimulation: this.rawData.simulacao_fgts,
            netValue: this.rawData.valor_liquido,
            iof: this.rawData.iof,
            rate: this.rawData.taxa,
            selectedPlots: this.rawData.parcelas_selecionadas,
            table: this.rawData.tabela,
            requestDate: this.rawData.data_solicitacao,
        };
    }
}

module.exports = LiquidBalanceResource;

