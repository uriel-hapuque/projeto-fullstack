# DEPENDÊNCIAS DO PROJETO
    DEPENDENCIAS DO BACKEND:
    cors, @types/cors, bcryptjs, dotenv, express, express-async-errors, jsonwebtoken, reflect-metadata, ts-node, typeorm, zod

    DEPENDENCIAS DO FRONTEND:
    @hookforms/resolvers, axios, react, react-dom, react-hook-form, react-router-dom, react-toastify, styled-components, zod
    

# ROTAS DE USUÁRIOS

## REGISTRO/CRIAÇÃO DE USUÁRIO (EMAIL E NUMBER DEVEM SER ÚNICOS PARA CADA USUÁRIO)

### localhost:3000/users/

ENTRADA:
     
    {
    	"email": "teste@mail.com",
     	"name": "Teste",
    	"password": "teste",
     	"number": "73999999999"
    }

SAÍDA:

    {
    	"id": 1,
    	"name": "Teste",
    	"email": "teste@mail.com",
    	"number": "73999999999",
    	"createdAt": "2023-07-26"
    }

## PEGAR DADOS DO USUÁRIO

### localhost:3000/users/{userId}

    {
    	"id": 1,
    	"name": "Teste",
    	"email": "teste@mail.com",
    	"number": "73999999999",
    	"createdAt": "2023-07-26"
    }

## LOGIN

### localhost:3000/login

ENTRADA:

    {
    	"email": "teste@mail.com",
    	"password": "teste"
    }

SAÍDA:

    {
    	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdGUiLCJpYXQiOjE2OTA3NDEyNDUsImV4cCI6MTY5MDgyNzY0NSwic3ViIjoiMTUifQ.9CcrbkomdJ6927udWfwzrAGQJiM7Ehx5Agu4vNM-3Pc",
    	"userId": 15
    }

## ATUALIZAR DADOS DO USUÁRIO (SOMENTE O USUÁRIO PODE ATUALIZAR OS PRÓPRIOS DADOS | NECESSÁRIO INFORMAR BEARER TOKEN)

### localhost:3000/users/{userId}

ENTRADA: 

    {
	    "name": "Teste",
	    "number": "73999999999"
    }

SAÍDA: 

    {
    	"id": 3,
    	"name": "Teste",
    	"email": "uri@mail.com",
    	"number": "73999999999",
    	"createdAt": "2023-07-25"
    }

## DELETAR DADOS DO USUÁRIO (SOMENTE O USUÁRIO PODE DELETAR OS PRÓPRIOS DADOS | NECESSÁRIO INFORMAR BEARER TOKEN)

### localhost:3000/users/{userId}

SAÍDA: 
    
    {
        STATUS: 204
    }

# ROTAS DOS CONTATOS (TODAS AS ROTAS DE CONTATOS SÃO NECESSÁRIAS INFORMAR BEARER TOKEN DO USUÁRIO CRIADOR DOS CONTATOS)

## CRIAR CONTATO (EMAIL E NUMBER DEVEM SER ÚNICOS PARA CADA CONTATO)

### localhost:3000/contacts

ENTRADA:

    {
    	"name": "Teste da Silva",
    	"email": "teste@mail.com",
    	"number": "73999888999"
    }

SAÍDA:

    {
    	"name": "Teste da Silva",
    	"email": "teste@mail.com",
    	"number": "73999888999"
    	"user": 15,
    	"id": 51,
    	"createdAt": "2023-07-30"
    }

## PEGAR CONTATOS DO USUÁRIO (NECESSÁRIO INFORMAR BEARER TOKEN DO USUÁRIO QUE CRIOU O CONTATO)

### localhost:3000/contacts/

SAÍDA: 

    [
    	{
    		"id": 1,
    		"name": "Contato 1",
    		"email": "contato1@mail.com",
    		"number": "7399887766",
    		"createdAt": "2023-07-30"
    	},
    	{
    		"id": 2,
    		"name": "Contato 2",
    		"email": "contato2@mail.com",
    		"number": "73009987221",
    		"createdAt": "2023-07-30"
    	}
    ]

## ATUALIZAR CONTATO

### localhost:3000/contacts/{contactId}

ENTRADA: 

    {
    	"name": "Teste",
    	"number": "73999777666",
    	"email": "testedasilva@mail.com"
    }

SAÍDA: 

    {
    	"name": "EU",
    	"email": "testedasilva@mail.com",
    	"number": "73999777666",
    	"createdAt": "2023-07-30"
    }

## DELETAR CONTATO

### localhost/contacts/{contactId}

SAÍDA: 

    {
        STATUS: 204
    }
