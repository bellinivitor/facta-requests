class UpdatePersonalDataResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            customerCode: this.rawData.codigo_cliente
        };
    }
}

module.exports = UpdatePersonalDataResource;