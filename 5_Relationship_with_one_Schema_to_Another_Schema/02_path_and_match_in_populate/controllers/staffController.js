const staff = require('../models/staffModel');

module.exports = {
    create: async(req,res) => {
        const {name,email} = req.body;
        const staff = await staff.create({
            name,
            email
        });

        return res.send(staff);
    }
}

// es tarah se api create karte hai