class RegisterPersonalDataResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            codigo_cliente: this.rawData.codigo_cliente
        };
    }
}

module.exports = RegisterPersonalDataResource;