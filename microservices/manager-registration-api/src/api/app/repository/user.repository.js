const User = require('../model/User');

exports.createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}

exports.findUserByEmail = async (email) => {
    try{
        return User.findOne({ email });
    }catch (error) {
        throw new Error('Error finding user by email: ' + error.message);
    }
}