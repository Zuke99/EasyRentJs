const UserModel = require('../models/user');
console.log('/services/userService.js');

const registerUser = async (data) => {
    const doc = {
        username: data.username,
        password: data.password
    };
    const user = await UserModel.create(doc);
    const result = user.save();

    return result;
}

module.exports = {
    registerUser
}