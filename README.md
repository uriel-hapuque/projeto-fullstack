# ROTAS DE USUÁRIOS 

## REGISTRO/CRIAÇÃO DE USUÁRIO

### localhost:3000/users/register

ENTRADA:

	{
		"email": "teste@mail.com",
	 	"name": "Teste", 
		"password": "teste",
	 	"number": "7399921653515"
	}	

SAÍDA:

	{
		"id": 6,
		"name": "Teste",
		"email": "teste@mail.com",
		"number": "7399921653515",
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
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdGUiLCJpYXQiOjE2OTA0Njg4MzcsImV4cCI6MTY5MDU1NTIzNywic3ViIjoiNiJ9.xbYcaowq0_ZNemdhfiruPVv3uM2ewwenJsJVoHwSVGs"
	}
