class FormalizationLinkSubscriptionDTO {
    constructor(payload) {
        this.codifo_af = payload.codifo_af; // UpdatePersonalDataResource().customerCode - step 5
        this.tipo_envio = payload.tipo_envio // SimulationResource().simulationId - step 4
    }

    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = FormalizationLinkSubscriptionDTO;