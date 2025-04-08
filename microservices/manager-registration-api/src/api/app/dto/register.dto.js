module.exports = function validateRegisterDTO({name,email,password}){
    const errors = {};
    if(!name || typeof name !== 'string' || name.trim().length < 3){
        errors.name = 'Name is required and should be at least 3 characters long';
    }
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        errors.email = 'Email is required and should be a valid email address';
    }
    if(!password || password.length < 6){
        errors.password = 'Password is required and should be at least 6 characters long';
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}