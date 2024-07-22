const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
console.log('/services/userService.js');

const registerUser = async (data) => {
    const doc = {
        username: data.username,
        password: data.password
    };
    const isUsernamExists = await checkUsernameOrEmailAlreadyExists(doc.username);
    var result = {};
    if(!isUsernamExists) {
        const user = await UserModel.create(doc);
        result = {
            data: user,
            status: true
        }
    } else {
        return result = {
            data: 'Username or Email already exists',
            status: false
        }
    }

    return result;
}

const loginUser = async (data) => {
    try {
        const { username, password } = data;
        const user = await UserModel.findOne ({ username: username });
        console.log(`username= ${JSON.stringify(username)}`);
        if (!user) {
            console.log("incorrect", user)
        return {
            success: false,
            data: 'Username or Password incorrect'
        }
        
        }
        const passwordMatch = password === user.password;
        if (!passwordMatch) {
            return {
                success: false,
                data: 'Username or Password incorrect'
            }
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
        });
        console.log("token", token)
        return {
            success: true,
            data: token
        };
        } catch (error) {
            return error;
        }
}

const checkUsernameOrEmailAlreadyExists = async (username) => {
    const user = await UserModel.findOne({ username: username});
    if(user) return true;
    return false;
}

module.exports = {
    registerUser,
    loginUser
}
