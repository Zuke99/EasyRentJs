const userService = require('../services/userService');
console.log('controllers/userController.js')

const registerUser = async (req, res) => {
    let data = req.body;
    try {
        let results = await userService.registerUser(data);
        return res.status(200).json({ status: 'success', message: results });
    } catch (err) {
        console.log("Error creating User entry.",err)
        return res.status(500).json({ status: 'error', message: 'Error creating User entry.' });
    }
}

module.exports = {
    registerUser
}

