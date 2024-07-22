const userService = require('../services/userService');
console.log('controllers/userController.js')

const registerUser = async (req, res) => {
    let data = req.body;
    try {
        let results = await userService.registerUser(data);
        if(results.success)
        return res.status(200).json({ status: 'success', message: results.data });
        else
        return res.status(400).json({ status: 'success', message: results.data });
    } catch (err) {
        console.log("Error creating User entry.",err)
        return res.status(500).json({ status: 'error', message: 'Error creating User entry.' });
    }
}

const loginUser = async (req, res) => {
    let data = req.body;
    try {
        let results = await userService.loginUser(data);
        if(results.success)
        return res.status(200).json({ status: 'success', message: results.data });
        else
        return res.status(400).json({ status: 'success', message: results.data });
    } catch (err) {
        console.log("Error creating User entry.",err)
        return res.status(500).json({ status: 'error', message: 'Error creating User entry.' });
    }
} 

module.exports = {
    registerUser,
    loginUser
}

