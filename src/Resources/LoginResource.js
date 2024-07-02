class LoginResource {
    constructor(rawData) {
        this.rawData = rawData;
    }

    toJson() {
        return {
            token: this.rawData.token,
            expireAt: this.rawData.expira
        };
    }
}

module.exports = LoginResource;