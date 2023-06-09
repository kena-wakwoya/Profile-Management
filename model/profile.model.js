const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user profile schema
const profileSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        password: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other']
        },
        phoneNumber: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            trim: true
        },
        bio: {
            type: String,
            default: '',
            trim: true
        },
        profilePicture: {
            type: String,
            default: ''
        },
        socialMediaLinks: {
            type: [String],
            default: []
        },
        interests: {
            type: [String],
            default: []
        },
        website: {
            type: String,
            trim: true
        },
        privacySettings: {
            type: Object
        },
        lastLogin: {
            type: Date
        },
        accountStatus: {
            type: String,
            enum: ['Active', 'Suspended', 'Deleted'],
            default: 'Active'
        },
        additionalContactInfo: {
            type: Map,
            of: String
        }
    });



// Hash and salt the password before saving the user profile
profileSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

// Create the user profile model

const Profile = mongoose.model('Profile', profileSchema);
module.exports = {
    Profile
}