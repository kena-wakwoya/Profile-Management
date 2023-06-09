
const Logger = require('../logger/api.logger');
const logger = new Logger();

  const updateProfile = (req, _, next) =>{
    let id = req?.body.id;
    if (!id) {
        return logger.error('Id required');
    }
    req.validatedInput = {
        ...(req?.validatedInput ?? {}),
        body: {
            id: id,
        },
    };
    return next();
}


 const createProfile = (req, _, next)=> {
    let { hero_id } = req?.body;
    if (!hero_id) {
        return next(new ApplicationResponseException('VALIDATION_ERROR', 'Hero id is required', 400));
    }
    req.validatedInput = {
        ...(req?.validatedInput ?? {}),
        body: {
            hero_id: hero_id,
        },
    };
    return next();
}

 const getProfile = (req, _, next)=> {
    let { hero_id } = req?.body;
    if (!hero_id) {
        return next(new ApplicationResponseException('VALIDATION_ERROR', 'Hero id is required', 400));
    }
    req.validatedInput = {
        ...(req?.validatedInput ?? {}),
        body: {
            hero_id: hero_id,
        },
    };
    return next();
}


module.exports = {
    updateProfile,
    getProfile,
    createProfile,

}