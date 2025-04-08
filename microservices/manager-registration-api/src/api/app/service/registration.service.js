const {createUser, findUserByEmail} = require('../repository/user.repository');
const {hashPassword} = require('../util/hash');

exports.registerUser = async (userData) => {
    try {
        // Check if user already exists
        const existingUser = await findUserByEmail(userData.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Hash the password
        const hashedPassword = await hashPassword(userData.password);

        // Create new user
        const newUser = await createUser(userData);
        return newUser;
    } catch (error) {
        throw new Error('Error registering user: ' + error.message);
    }
}