const profileRepository = require('../repository/profile.repository');

class ProfileService {

    constructor() { }

    async getProfiles() {
        return await profileRepository.getProfiles();
    }

    async getProfile(id) {
        return await profileRepository.getProfile(id);
    }


    async createProfile(p) {
        return await profileRepository.createProfile(p);
    }

    async updateProfile(id, data) {
        return await profileRepository.updateProfile(id, data);
    }

    async deleteProfile(id) {
        return await profileRepository.deleteProfile(id);
    }

}

module.exports = new ProfileService();