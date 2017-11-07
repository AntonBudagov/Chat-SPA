var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    nickname: String,
    created: {
        type: Date,
        default: Date.now()
    },
    update: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;