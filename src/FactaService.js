import LoginResource from "./Resources/LoginResource";
import SimulationBalanceResource from "./Resources/SimulationLiquidBalanceResource";
import SimulationLiquidBalanceResource from "./Resources/SimulationLiquidBalanceResource";
import SimulationLiquidBalanceDTO from "./DTOs/SimulationLiquidBalanceDTO";
import RegisterSimulationDTO from "./DTOs/RegisterSimulationDTO";
import RegisterSimulationResource from "./Resources/RegisterSimulationResource";
import RegisterPersonalDataDTO from "./DTOs/RegisterPersonalDataDTO";
import RegisterPersonalDataResource from "./Resources/RegisterPersonalDataResource";
import RegistrationProposalDTO from "./DTOs/RegistrationProposalDTO";
import RegistrationProposalResource from "./Resources/RegistrationProposalResource";
import FormalizationLinkSubscriptionDTO from "./DTOs/FormalizationLinkSubscriptionDTO";
import axios from "axios";

class FactaService {
    basicToken;
    apiUrl;

    constructor(basicToken) {
        this.apiUrl = 'ttp://webservice-homol.facta.com.br';
        this.basicToken = basicToken; //usuario:senha (encodar em base 64)

        this.simulations = {
            simulationBalanceAllowed: this.simulationBalanceAllowed.bind(this),
            simulationLiquidBalance: this.simulationLiquidBalance.bind(this),
        }
        this.register = {
            registerSimulation: this.registerSimulation.bind(this),
            registerPersonalData: this.registerPersonalData.bind(this),
            registerProposal: this.registerProposal.bind(this),
        }
        this.formalization = {
            formalizationLinkSubscription: this.formalizationLinkSubscription(this),
        }
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
            return new SimulationBalanceResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async simulationLiquidBalance(payload) {
        try {
            const {data} = await axios.post(
                `${this.apiUrl}/fgts/calculo`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    data: new SimulationLiquidBalanceDTO(payload).toJson()
                }
            );
            return new SimulationLiquidBalanceResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async registerSimulation(payload) {
        try {
            const {data} = await axios.post(
                `${this.apiUrl}/proposta/etapa1-simulador`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    data: new RegisterSimulationDTO(payload).toJson()
                }
            );
            return new RegisterSimulationResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async registerPersonalData(payload) {
        try {
            const {data} = await axios.post(
                `${this.apiUrl}/proposta/etapa2-dados-pessoais`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    data: new RegisterPersonalDataDTO(payload).toJson()
                }
            );
            return new RegisterPersonalDataResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async registerProposal(payload) {
        try {
            const {data} = await axios.post(
                `${this.apiUrl}/proposta/etapa3-proposta-cadastro`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    data: new RegistrationProposalDTO(payload).toJson()
                }
            );
            return new RegistrationProposalResource(data).toJson();
        } catch (error) {
            throw error;
        }
    }

    async formalizationLinkSubscription(payload) {
        try {
            await axios.post(
                `${this.apiUrl}/proposta/envio-link`,
                {
                    headers: {Authorization: `Bearer ${await this.login().token}`},
                    data: new FormalizationLinkSubscriptionDTO(payload).toJson()
                }
            );
        } catch (error) {
            throw error;
        }
    }
}