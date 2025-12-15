# Arquitetura da Aplicação

## Visão geral

Este projeto consiste em uma **API REST de calculadora**, desenvolvida com **Node.js** e **Express**, com o objetivo de disponibilizar operações matemáticas básicas por meio de endpoints HTTP.

A aplicação foi pensada para ser simples, clara e bem organizada, seguindo práticas comuns em projetos reais de pequeno porte.

## Estilo arquitetural

A aplicação adota o modelo **Client–Server**, utilizando uma **API REST** como camada de comunicação entre o cliente (Postman, frontend ou qualquer outro consumidor) e a lógica da aplicação.

Internamente, foi utilizada uma **arquitetura em camadas simples**, separando responsabilidades entre inicialização do servidor, configuração da aplicação, definição de rotas e implementação da lógica de negócio.

Essa separação facilita a leitura do código e a manutenção da aplicação.

## Fluxo de funcionamento da aplicação

O fluxo de uma requisição segue a seguinte sequência:

1. O cliente realiza uma requisição HTTP (`POST`) para um endpoint da API.
2. A requisição é recebida pelo **Express Router**.
3. A rota direciona a chamada para o **controller responsável**.
4. O controller executa a operação matemática solicitada.
5. A resposta é retornada ao cliente no formato JSON.

## Diagrama de fluxo da aplicação

![Diagrama de fluxo da aplicação](./docs/architecture-diagram.svg)

## Estrutura de pastas

A estrutura do projeto está organizada da seguinte forma:

```
calculadora-api/
├── README.md
├── ARCHITECTURE.md
├── docs/
│   └── architecture-diagram.svg
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   │   └── calculatorRoutes.js
│   └── controllers/
│       ├── calculatorAddController.js
│       ├── calculatorSubtractController.js
│       ├── calculatorMultiplyController.js
│       └── calculatorDivideController.js
├── package.json
└── package-lock.json
```

## Responsabilidade de cada camada

- **src/server.js**  
  Responsável por iniciar o servidor e definir a porta de execução da aplicação.

- **src/app.js**  
  Centraliza as configurações do Express, middlewares e o registro das rotas.

- **src/routes/**  
  Define os endpoints da API e direciona as requisições para os controllers.

- **src/controllers/**  
  Implementam a lógica das operações matemáticas e o tratamento das requisições.

## Decisões técnicas

As decisões técnicas adotadas neste projeto priorizam simplicidade e clareza:

- **Node.js + Express**  
  Escolhidos por serem leves, amplamente utilizados no mercado e adequados para APIs REST simples.

- **Separação por controllers**  
  Cada operação matemática possui seu próprio controller, facilitando a organização e a leitura do código.

- **Comunicação via JSON**  
  Utilizada como padrão de troca de informações entre cliente e servidor.

## Considerações finais

A arquitetura adotada atende ao escopo atual da aplicação, mantendo o código organizado, legível e fácil de entender.

A estrutura apresentada serve como base para projetos simples de API e pode ser reaproveitada ou expandida conforme novas necessidades surgirem.
