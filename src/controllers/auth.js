const authService = require("../service/auth");
const passport = require("../config/passport");

class AuthController {
     
    async signUp(req, res) {
        try {
            await authService.signUp(req.body);
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const { user, token } = await authService.login(email, password);
            res.json({ user, token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();