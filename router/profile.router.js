const express = require('express');
const router = express.Router();
const profileController = require('../controller/profile.controller');

const {updateProfile,createProfile,getProfile} = require('../dto/profile.dto')

// Route: Get all profiles
router.get('/', (req, res) => {
    profileController.getProfiles().then(data => res.json(data));
});

// Route: Get a specific profile
router.get('/:id',(req, res) => {
    profileController.getProfile(req.params.id).then(data => res.json(data));
});

// Route: Create a new profile
router.post('/',(req, res) => {
    console.log("body", req.body);
    profileController.createProfile(req.body).then(data => res.json(data));
});

// Route: Update a profile
router.put('/:id', (req, res) => {
    profileController.updateProfile(req.params.id, req.body).then(data => res.json(data));
});

// Route: Delete a specific profile
router.delete('/:id', (req, res) => {
    profileController.deleteProfile(req.params.id).then(data => res.json(data));
});



module.exports = router;
