# Calculadora API

![GitHub License](https://img.shields.io/github/license/MarceloMendes021/calculadora-api)

## Descrição

Este projeto é uma **API REST** de uma calculadora, desenvolvida com **Node.js** e **Express**, que permite realizar operações matemáticas básicas: soma, subtração, multiplicação e divisão. O foco é a simplicidade e a funcionalidade.

## Tecnologias

- **JavaScript**: Usado para o desenvolvimento da lógica da calculadora e na configuração da API.
- **Node.js**: Ambiente de execução para a API.
- **Express**: Framework para criação de APIs REST.
- **Body-parser**: Middleware para parsing do corpo das requisições.

## Estrutura de Pastas

A estrutura do projeto está organizada da seguinte forma:

```
calculadora-api/
├── README.md
├── ARCHITECTURE.md
├── docs/
│   └── architecture-diagram.svg
├── server.js
├── app.js
├── routes/
│   └── calculatorRoutes.js
└── controllers/
    ├── calculatorAddController.js
    ├── calculatorSubtractController.js
    ├── calculatorMultiplyController.js
    └── calculatorDivideController.js
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

2. Navegue até o diretório do projeto:

```bash
cd calculadora-api
```

3. Instale as dependências:

```bash
npm install
```

## Execução

1. Inicie o servidor:

```bash
npm start
```

O servidor estará disponível em: `http://localhost:3000`.

## Rotas e Exemplos

### 1. Adição

- **Endpoint**: `POST /add`
- **Descrição**: Soma dois números fornecidos.
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

---

### 2. Subtração

- **Endpoint**: `POST /subtract`
- **Descrição**: Subtrai o segundo número do primeiro.
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

---

### 3. Multiplicação

- **Endpoint**: `POST /multiply`
- **Descrição**: Multiplica dois números fornecidos.
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

---

### 4. Divisão

- **Endpoint**: `POST /divide`
- **Descrição**: Divide o primeiro número pelo segundo.
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

---

## Testes

Você pode testar a API utilizando ferramentas como [Postman](https://www.postman.com/) ou via terminal com cURL:

### Exemplo com cURL

```bash
curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d '{"number1": 4, "number2": 5}'
```

## Arquitetura

Para mais detalhes sobre a arquitetura do projeto e decisões técnicas, consulte o arquivo [ARCHITECTURE.md](./ARCHITECTURE.md).
