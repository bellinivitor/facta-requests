class UpdatePersonalDataDTO {
    constructor(payload) {
        this.simulatorID = params.id_simulador // SimulationResource().simulationId
        this.cpf = params.cpf;
        this.name = payload.nome;
        this.sex = payload.sexo;
        this.civilStatus = payload.estado_civil;
        this.birthDate = payload.data_nascimento;
        this.rg = payload.rg;
        this.rgState = payload.estado_rg;
        this.issuingAgency = payload.orgao_emissor;
        this.issueDate = payload.data_expidicao;
        this.birthState = payload.estado_natural;
        this.birthCity = payload.cidade_natural;
        this.nationality = payload.nacionalidade;
        this.originCountry = payload.pais_origem;
        this.cellphone = payload.celular;
        this.income = payload.renda;
        this.zipCode = payload.cep;
        this.address = payload.endereco;
        this.number = payload.numero;
        this.complement = payload.complemento;
        this.neighborhood = payload.bairro;
        this.city = payload.cidade;
        this.state = payload.estado;
        this.motherName = payload.nome_mae;
        this.fatherName = payload.nome_pai;
        this.patrimonyValue = payload.valor_patrimonio;
        this.illiterateOrUnableClient = payload.cliente_iletrado_impossibilitado;
        this.bank = payload.banco;
        this.agency = payload.agencia;
        this.account = payload.conta;
        this.accountType = payload.tipo_conta;
    }

    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = UpdatePersonalDataDTO;