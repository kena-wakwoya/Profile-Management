const profileService  = require('../service/profile.service');
const Logger= require('../logger/api.logger');
const logger = new Logger();
class ProfileController {

    async getProfiles() {
        logger.info('Controller: getProfiles')
        return await profileService.getProfiles();
    }

    async getProfile(id) {
        logger.info('Controller: getProfiles')
        return await profileService.getProfile(id);
    }


    async createProfile(p) {
        logger.info('Controller: createProfile', p);
        return await profileService.createProfile(p);
    }

    async updateProfile(id,data) {
       
        logger.info('Controller: updateProfile', data);
        return await profileService.updateProfile(id,data);
    }

    async deleteProfile(pId) {
        logger.info('Controller: delete Profile', pId);
        return await profileService.deleteProfile(pId);
    }
}
module.exports = new ProfileController();