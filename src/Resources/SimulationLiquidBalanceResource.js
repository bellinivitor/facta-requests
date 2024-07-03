class SimulationLiquidBalanceResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            retorno: this.groupResponse(this.rawData.retorno)
        };
    }

    groupResponse(requestData) {
        const group = [];
        const keys = Object.keys(requestData);

        for (let i = 1; i <= ((keys.length - 3) / 2); i++) {
            const dataRepasse = `dataRepasse_${i}`;
            const valor = `valor_${i}`;
            const floatVal = parseFloat(requestData[valor]);

            group.push({
                [dataRepasse]: requestData[dataRepasse],
                [valor]: floatVal >= 10 ? floatVal : 0,
            });
        }

        return group;
    }
}

module.exports = SimulationLiquidBalanceResource;