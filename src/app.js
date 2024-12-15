const express = require('express');
// прописал там export чтобы все подтягивалось
const { sequelize } = require('./models'); 
// Заполнить таблицу ролями User, Admin, Manager!!!
const seedRoles = require('./config/seedRoles');


const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const clinicRoutes = require('./routes/clinic');
const ticketRoutes = require('./routes/ticket');



const app = express();

app.use(express.json()); // Для парсинга JSON-тел запросов

// Mapping
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/clinics', clinicRoutes);
app.use('/tickets', ticketRoutes);



const PORT = process.env.PORT || 3000;
(async () => {
    try {
        // Подключение к базе данных
        await sequelize.authenticate();
        console.log('Database connected successfully!');

        // Синхронизация таблиц
        await sequelize.sync({ force: true }); // Используйте { force: true } для удаления и пересоздания таблиц
        console.log('Tables synchronized!');

        await seedRoles();

        // Запуск сервера
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
})();


