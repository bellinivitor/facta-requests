class RegisterPersonalDataDTO {
    constructor(payload) {
        this.id_simulador = payload.id_simulador
        this.cpf = payload.cpf;
        this.nome = payload.nome;
        this.sexo = payload.sexo;
        this.estado_civil = payload.estado_civil;
        this.data_nascimento = payload.data_nascimento;
        this.rg = payload.rg;
        this.estado_rg = payload.estado_rg;
        this.orgao_emissor = payload.orgao_emissor;
        this.data_expidicao = payload.data_expidicao;
        this.estado_natural = payload.estado_natural;
        this.cidade_natural = payload.cidade_natural;
        this.nacionalidade = payload.nacionalidade;
        this.pais_origem = payload.pais_origem;
        this.celular = payload.celular;
        this.renda = payload.renda;
        this.cep = payload.cep;
        this.endereco = payload.endereco;
        this.numero = payload.numero;
        this.complemento = payload.complemento;
        this.bairro = payload.bairro;
        this.cidade = payload.cidade;
        this.estado = payload.estado;
        this.nome_mae = payload.nome_mae;
        this.nome_pai = payload.nome_pai;
        this.valor_patrimonio = payload.valor_patrimonio;
        this.cliente_iletrado_impossibilitado = payload.cliente_iletrado_impossibilitado;
        this.banco = payload.banco;
        this.agencia = payload.agencia;
        this.conta = payload.conta;
        this.tipo_conta = payload.tipo_conta;
    }

    toJson() {
        return JSON.stringify(this);
    }
}

module.exports = RegisterPersonalDataDTO;