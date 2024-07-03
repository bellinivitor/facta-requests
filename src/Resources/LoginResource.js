class LoginResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            token: this.rawData.token,
            expira: this.rawData.expira
        };
    }
}

module.exports = LoginResource;