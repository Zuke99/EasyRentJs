const UserModel = require('../models/user');
console.log('/services/userService.js');

const registerUser = async (data) => {
    const doc = {
        username: data.username,
        password: data.password
    };
    const isUsernamExists = await checkUsernameOrEmailAlreadyExists(doc.username);
    var result = "";
    if(!isUsernamExists) {
        const user = await UserModel.create(doc);
        result = user.save();
    }

    return result;
}

const checkUsernameOrEmailAlreadyExists = async (username) => {
    const user = await UserModel.findOne({ username: username});
    if(user) return true;
    return false;
}

module.exports = {
    registerUser
}
