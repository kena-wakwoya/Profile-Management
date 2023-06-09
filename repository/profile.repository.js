const { connect, disconnect } = require('../config/db.config');
const { Profile } = require('../model/profile.model');
const Logger = require('../logger/api.logger');

const logger = new Logger();

class ProfileRepository {

    constructor() {
        connect();
    }

    async getProfiles() {
        const profile = await Profile.find({});
        console.log('profiles:::', profile);
        return profile;
    }
    async getProfile(id) {
        const profile = await Profile.find({_id:id});
        console.log('profiles:::', profile);
        return profile;
    }

    async createProfile(p) {
        let data = {};
        try {
            data = await Profile.create(p);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateProfile(id,data) {
       
        let result = {};
        try {
            result = await Profile.findByIdAndUpdate(id, data, { new: true });
            if (!result) {
                return res.status(404).json({ error: 'User profile not found' });
              }
        } catch(err) {
            logger.error('Error::' + err);
        }
        return result;
    }

    async deleteProfile(id) {
        let data = {};
        try {
            data = await Profile.deleteOne({_id : id});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ProfileRepository();