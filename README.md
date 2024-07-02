# FACTA API | FGTS
**Versão do documento:** 3.0

Este documento descreve a implementação e uso do FACTA API para antecipação de FGTS, implementada em Node.js.

## Arquitetura
A arquitetura do sistema é composta por:

- **DTO** - Padronização de payload
- **Resource** - Padronização de respostas da API
- **[FactaRequests.js](src%2FFactaRequests.js)** - Esta classe é responsável pela execução das requests
---
## Domínios da API
- **Homologação:** http://webservice-homol.facta.com.br
- **Produção:** http://webservice.facta.com.br
--- 
## Progresso do Projeto

### :heavy_check_mark: Implementado
1. **GET | Gera Token**
2. **GET | Simulação:** Consulta de saldo disponível para antecipação FGTS
3. **POST | Simulação:** Valor líquido liberado FGTS
4. **POST | Cadastro:** Simulação
5. **POST | Cadastro:** Dados Pessoais

### :construction: Em Desenvolvimento
6. **POST | Cadastro:** Proposta Cadastro
7. **POST | Formalização:** Envio de link para assinatura