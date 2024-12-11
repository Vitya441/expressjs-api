const authService = require("../service/auth");

class AuthController {
     
    async signUp(req, res) {
        try {
            const user = await authService.signUp(req.body);
            res.status(201).json({message: "User registered successfully"});
        } catch (error) {
            res.status(500).json({message: "Failed to sign up", error: error.message})
        }
    }
}

module.exports = new AuthController();