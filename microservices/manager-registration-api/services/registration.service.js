const db = require ('../models/manager.model');
const bcrypt = require ('bcryptjs');

exports.register = async ({email,password}) => {
    const exists = db.findByEmail(email);
    if (exists) {
        throw new Error('Email already exists');
    }
    const hashed = await bcrypt.hash(password, 10);
    const newManager = db.create({
        email,
        password: hashed,
    });
    return {id : newManager.id};
};