const Event = require("../repository/event");
const Error = require("../repository/error");

const logRequest = async (req, res, next) => {
    try {
        const event = new Event({
            date: new Date(),
            route: req.originalUrl,
            userId: req.headers["user-id"] || null, // Идентификатор пользователя (при наличии)
            method: req.method,
            body: req.body,
            params: req.params,
            query: req.query,
        });

        await event.save();
    } catch (err) {
        console.error("Failed to log request:", err);
    }
    next();
};

const logError = async (err, req, res, next) => {
    try {
        const error = new Error({
            date: new Date(),
            text: err.message,
            code: err.status || 500,
            route: req.originalUrl,
        });

        await error.save();
    } catch (saveErr) {
        console.error("Failed to log error:", saveErr);
    }

    // Продолжаем обработку ошибки
    next(err);
};

module.exports = { logRequest, logError };
