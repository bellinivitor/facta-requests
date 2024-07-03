class LiquidBalanceResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            permitido: this.rawData.permitido,
            simulacao_fgts: this.rawData.simulacao_fgts,
            valor_liquido: this.rawData.valor_liquido,
            iof: this.rawData.iof,
            taxa: this.rawData.taxa,
            parcelas_selecionadas: this.rawData.parcelas_selecionadas,
            tabela: this.rawData.tabela,
            data_solicitacao: this.rawData.data_solicitacao,
        };
    }
}

module.exports = LiquidBalanceResource;

