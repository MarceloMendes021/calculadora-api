# Calculadora API

![GitHub License](https://img.shields.io/github/license/MarceloMendes021/calculadora-api)
![Node.js](https://img.shields.io/badge/node.js-Express-green)

API REST de uma calculadora, feita com Node.js e Express. Cobre as quatro operações básicas: soma, subtração, multiplicação e divisão.

## Tecnologias

- JavaScript
- Node.js
- Express
- Body-parser

## Como rodar

```bash
git clone https://github.com/MarceloMendes021/calculadora-api
cd calculadora-api
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## Rotas

### Adição — `POST /add`

```json
{ "number1": 13, "number2": 5 }
```

```json
{ "resultado": 18 }
```

### Subtração — `POST /subtract`

```json
{ "number1": 13, "number2": 5 }
```

```json
{ "resultado": 8 }
```

### Multiplicação — `POST /multiply`

```json
{ "number1": 10, "number2": 3 }
```

```json
{ "resultado": 30 }
```

### Divisão — `POST /divide`

```json
{ "number1": 20, "number2": 5 }
```

```json
{ "resultado": 4 }
```

Divisão por zero retorna erro:

```json
{ "error": "Não é possível realizar divisão por 0" }
```

## Testando com cURL

```bash
curl -X POST http://localhost:3000/add \
  -H "Content-Type: application/json" \
  -d '{"number1": 4, "number2": 5}'
```

## Arquitetura

O fluxo de uma requisição segue o padrão Client-Server com camadas separadas por responsabilidade:

![Diagrama de fluxo da aplicação](./docs/architecture-diagram.svg)

**`src/server.js`** — inicia o servidor na porta definida.

**`src/app.js`** — configura o Express, middlewares e rotas.

**`src/routes/`** — define os endpoints e direciona para os controllers.

**`src/controllers/`** — implementa a lógica de cada operação.

## Estrutura

```
calculadora-api/
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
└── README.md
```
