# Nohtz - Backend

Bem-vindo ao backend do Nohtz, um projeto de backend desenvolvido em Node.js que oferece uma API para uma aplicação de notas. Este backend foi criado com o intuito de fornecer um ambiente para integração com um front-end, utilizando tecnologias como Node.js, MongoDB com Mongoose, e outras ferramentas.

## Principais Recursos e Tecnologias Utilizadas

- Node.js: Plataforma utilizada para desenvolver a lógica do servidor.
- MongoDB: Banco de dados não relacional utilizado para armazenar os dados.
- Mongoose: Biblioteca de modelagem de objetos MongoDB para Node.js, facilitando a interação com o banco de dados.
- Cors: Middleware para permitir solicitações entre diferentes origens na API.
- Dotenv: Módulo para carregar variáveis de ambiente a partir de um arquivo .env.
- Bcrypt: Utilizado para criptografar senhas armazenadas no banco de dados.
- JWT (JSON Web Tokens): Utilizado para autenticação de usuários, garantindo a segurança das rotas.
- Nodemon: Ferramenta utilizada para reiniciar automaticamente o servidor ao detectar alterações no código, facilitando o desenvolvimento.

## Estrutura do Projeto

O projeto está organizado em módulos, incluindo:

- Auth Middleware: Um middleware para a autenticação e segurança das rotas.
- Módulo Note: Contém controllers, models e rotas relacionadas às operações de notas.
- Módulo User: Responsável por gerenciar usuários, com controllers, models e rotas.

## Documentação
Para facilitar o entendimento e uso da API, foi incorporado o Swagger para a documentação. Acesse https://nohtz-api.onrender.com/doc ou `/doc` para explorar os endpoints disponíveis, seus parâmetros e respostas.

![backend-swagger](https://github.com/matheuskiyoshi/Nohtz-API/assets/26641380/998a3297-3995-4dc5-b7e0-420f394f43dc)

## Implantação em produção

- Back end: Render  
- Banco de dados: Mongo db

## Executando o Projeto

```bash
# Clone este repositório
# HTTPS
$ git clone https://github.com/matheuskiyoshi/Nohtz-API.git

# Acesse a pasta do projeto no terminal
$ cd ./Nohtz-API

# Instale as dependências
$ npm install

# Crie um arquivo ".env" com as variáveis necessárias para configurar o ambiente

# Para executar o projeto
$ npm run start

# O servidor iniciará na porta:3000 - acesse <http://localhost:3000/>
```