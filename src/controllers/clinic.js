const clinicService = require("../service/clinic");


class ClinicController {
    
    async createClinic(req, res) {
        try {
            const user = await clinicService.createClinic(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getAllClinics(req, res) {
        try {
            const users = await clinicService.getAllClinics();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getClinicById(req, res) {
        try {
            const user = await clinicService.getClinicById(req.params.id);
            res.json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

}

module.exports = new ClinicController();