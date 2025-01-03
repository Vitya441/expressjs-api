const express = require('express');
const { sequelize } = require('./models'); 

const mongoose = require("mongoose");
// const mongoLogger = require('./helpers/logging');
const { logRequest, logError } = require("./helpers/logging");

const seedRoles = require('./config/seedRoles');

const passport = require('./config/passport'); 
const setupSwaggerDocs = require('./config/swagger');

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const clinicRoutes = require('./routes/clinic');
const ticketRoutes = require('./routes/ticket');


const app = express();

app.use(express.json()); // Для парсинга JSON-тел запросов

app.use(passport.initialize());  // Initialize Passport

// app.use(mongoLogger.storeEvent);

app.use(logRequest);

app.use(logError)


setupSwaggerDocs(app);

// Mapping
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/clinics', clinicRoutes);
app.use('/tickets', ticketRoutes);

mongoose.connect("mongodb://localhost:27017/log_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: "root", // Замените на имя пользователя
    pass: "12345678", // Замените на пароль
    authSource: "admin",  // Укажите базу данных для аутентификации (обычно "admin")
})
    .then(() => {
        console.log("Connected to MongoDB with authentication!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });



const PORT = process.env.PORT || 3000;
(async () => {
    try {
        // Подключение к базе данных
        await sequelize.authenticate();
        console.log('Database connected successfully!');

        // Синхронизация таблиц
        await sequelize.sync({ force: false }); // Используйте { force: true } для удаления и пересоздания таблиц
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


