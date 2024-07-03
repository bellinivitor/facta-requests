class RegistrationProposalResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            url_formalizacao: this.rawData.url_formalizacao,
            codigo: this.rawData.codigo
        };
    }
}

module.exports = RegistrationProposalResource;