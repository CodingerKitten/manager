const service = require('../services/registration.service');

exports.register = async (req, res, next) => {
    try{
        const result = await service.register(req.body);
        res.status(201).json({success:true, data: result, message: 'User registered successfully'});
    }catch(err){
        next(err);
    }
}