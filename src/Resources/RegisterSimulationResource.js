class RegisterSimulationResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            id_simulador: this.rawData.id_simulador
        };
    }
}

module.exports = RegisterSimulationResource;