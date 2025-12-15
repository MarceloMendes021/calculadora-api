# Calculadora API

![GitHub License](https://img.shields.io/github/license/MarceloMendes021/calculadora-api)

## Descrição

Este projeto é uma **API REST** de uma calculadora, desenvolvida com **Node.js** e **Express**, que permite realizar operações matemáticas básicas: soma, subtração, multiplicação e divisão.  
O foco da aplicação é a simplicidade, clareza e organização do código.

## Tecnologias

- **JavaScript**: Linguagem utilizada na implementação da lógica da aplicação.
- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework para criação de APIs REST.
- **Body-parser**: Middleware para tratamento do corpo das requisições.

## Estrutura de Pastas

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

## Funcionalidades

A API oferece as seguintes operações matemáticas:

- **Adição**: `POST /add`
- **Subtração**: `POST /subtract`
- **Multiplicação**: `POST /multiply`
- **Divisão**: `POST /divide`

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/MarceloMendes021/calculadora-api
```

2. Acesse o diretório do projeto:

```bash
cd calculadora-api
```

3. Instale as dependências:

```bash
npm install
```

## Execução

Para iniciar a aplicação, execute:

```bash
npm start
```

O servidor estará disponível em:

```
http://localhost:3000
```

## Rotas e Exemplos

### Adição

- **Endpoint**: `POST /add`
- **Body**:

```json
{
  "number1": 13,
  "number2": 5
}
```

- **Resposta**:

```json
{
  "resultado": 18
}
```

### Subtração

- **Endpoint**: `POST /subtract`
- **Body**:

```json
{
  "number1": 13,
  "number2": 5
}
```

- **Resposta**:

```json
{
  "resultado": 8
}
```

### Multiplicação

- **Endpoint**: `POST /multiply`
- **Body**:

```json
{
  "number1": 10,
  "number2": 3
}
```

- **Resposta**:

```json
{
  "resultado": 30
}
```

### Divisão

- **Endpoint**: `POST /divide`
- **Body**:

```json
{
  "number1": 20,
  "number2": 5
}
```

- **Resposta**:

```json
{
  "resultado": 4
}
```

- **Erro para divisão por zero**:

```json
{
  "error": "Não é possível realizar divisão por 0"
}
```

## Testes

A API pode ser testada utilizando ferramentas como **Postman** ou via terminal com **cURL**.

### Exemplo com cURL

```bash
curl -X POST http://localhost:3000/add \
  -H "Content-Type: application/json" \
  -d '{"number1": 4, "number2": 5}'
```

## Arquitetura

Para mais detalhes sobre a arquitetura e decisões técnicas do projeto, consulte o arquivo [ARCHITECTURE.md](./ARCHITECTURE.md).
