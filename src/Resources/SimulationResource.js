class SimulationResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            simulationId: this.rawData.id_simulador
        };
    }
}

module.exports = SimulationResource;