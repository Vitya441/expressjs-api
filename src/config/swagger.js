const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Clinic Appointment API',
            version: '1.0.0',
            description: 'API для управления клиниками, пользователями и талонами.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server',
            },
        ],
    },

    apis: ['./routes/*.js'], // Обновите путь, если ваш файл маршрута находится здесь
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger Docs доступен по адресу: http://localhost:3000/api-docs`);
};

module.exports = setupSwaggerDocs;
