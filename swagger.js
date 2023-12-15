const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

const doc = {
    info: {
      version: '1.0.0',
      title: 'Nohtz API',
      description: 'Documentation for Nohtz API',
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
          name: 'Notes',
          description: 'Endpoints for managing notes',
        },
        {
          name: 'Users',
          description: 'Endpoints for user management (register and login)',
        },
    ],    
    securityDefinitions: {
      api_key: {
        type: 'apiKey',
        name: 'api_key',
        in: 'header',
      },
    },
    definitions: {
      Note: {
        title: 'Shopping list',
        body: 'Bread, eggs, milk',
        done: false,
        deadline: '23/12/2023',
      },
      User: {
        name: 'James',
        email: 'james@email.com',
        password: '123@4',
      },
    },
  };

  swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require("./app");
  });
  