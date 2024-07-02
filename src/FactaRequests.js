import LoginResource from "./Resources/LoginResource";
import BalanceResource from "./Resources/BalanceResource";
import LiquidBalanceResource from "./Resources/LiquidBalanceResource";
import SimulationResource from "./Resources/SimulationResource";
import UpdatePersonalDataDTO from "./DTOs/UpdatePersonalDataDTO";
import SimulationDTO from "./DTOs/StoreSimulationDTO";
import SimulationLiquidBalanceDTO from "./DTOs/SimulationLiquidBalanceDTO";
import UpdatePersonalDataResource from "./Resources/UpdatePersonalDataResource";

class FactaRequests {
    basicToken;
    apiUrl;

    constructor(basicToken) {
        this.apiUrl = 'ttp://webservice-homol.facta.com.br';
        this.basicToken = basicToken; //usuario:senha (encodar em base 64)
        this.requests = {
            simulationBalanceAllowed: this.simulationBalanceAllowed.bind(this),
            simulationLiquidBalance: this.simulationLiquidBalance.bind(this),
            storeSimulation: this.storeSimulation.bind(this),
            updatePersonalData: this.updatePersonalData.bind(this),
        };
    }

    async login() {
        try {
            const {data} = await axios.get(
                `${this.apiUrl}/gera-token`,
                {
                    headers: {
                        Authorization: `Basic ${this.basicToken}`
                    }
                }
            );
            return new LoginResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async simulationBalanceAllowed(payload) {
        try {
            const cpf = payload.cpf;
            const {data} = await axios.get(
                `${this.apiUrl}/fgts/saldo`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    params: {cpf} // Somente um parâmetro, não farei um DTO
                }
            );
            return new BalanceResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async simulationLiquidBalance(payload) {
        try {
            const cpf = payload.cpf;
            const taxa = payload.taxa;
            const tabela = payload.tabela;

            const {data} = await axios.post(
                `${this.apiUrl}/fgts/calculo`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    data: new SimulationLiquidBalanceDTO(payload).toJson()
                }
            );
            return new LiquidBalanceResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async storeSimulation(payload) {
        try {
            const {data} = await axios.post(
                `${this.apiUrl}/proposta/etapa2-dados-pessoais`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    data: new SimulationDTO(payload).toJson()
                }
            );
            return new SimulationResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async updatePersonalData(payload) {
        try {
            const {data} = await axios.post(
                `${this.apiUrl}/fgts/calculo`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    data: new UpdatePersonalDataDTO(payload).toJson()
                }
            );
            return new UpdatePersonalDataResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }
}