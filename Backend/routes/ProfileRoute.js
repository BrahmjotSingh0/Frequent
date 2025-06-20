const express = require('express');
const router = express.Router();
const ProfileController = require('../controller/ProfileController');

// Create new profile
router.post('/', ProfileController.createProfile);
// Get all profiles
router.get('/', ProfileController.getProfiles);
// Get profile by username
router.get('/:username', ProfileController.getProfileByUsername);
// Update profile by username
router.put('/:username', ProfileController.updateProfile);
// Delete profile by username
router.delete('/:username', ProfileController.deleteProfile);

module.exports = router;
