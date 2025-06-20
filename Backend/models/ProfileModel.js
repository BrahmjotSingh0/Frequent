const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  profilePhoto: {
    type: String,
    required: [true, 'Profile photo is required'],
    validate: {
      validator: v => !v || v.startsWith('data:image/jpeg') || v.startsWith('data:image/png'),
      message: 'Profile photo must be JPG or PNG',
    },
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    minlength: [4, 'Username must be at least 4 characters'],
    maxlength: [20, 'Username must be at most 20 characters'],
    match: [/^[^\s]+$/, 'Username must not contain spaces'],
  },
  currentPassword: {
    type: String,
    validate: {
      validator: function(v) {
        // Required if newPassword is set
        if (this.newPassword && !v) return false;
        return true;
      },
      message: 'Current password is required if changing password',
    },
  },
  newPassword: {
    type: String,
    validate: {
      validator: v => !v || (v.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(v) && /[0-9]/.test(v)),
      message: 'New password must be 8+ chars, 1 special char, 1 number',
    },
  },
  profession: {
    type: String,
    enum: ['Student', 'Developer', 'Entrepreneur'],
    required: [true, 'Profession is required'],
  },
  companyName: {
    type: String,
    validate: {
      validator: function(v) {
        if (this.profession === 'Entrepreneur' && !v) return false;
        return true;
      },
      message: 'Company name is required if profession is Entrepreneur',
    },
  },
  address1: {
    type: String,
    required: [true, 'Address Line 1 is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  state: {
    type: String,
    required: [true, 'State is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  plan: {
    type: String,
    enum: ['Basic', 'Pro', 'Enterprise'],
    required: [true, 'Subscription plan is required'],
  },
  newsletter: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
