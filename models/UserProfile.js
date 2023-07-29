import { model, models } from 'mongoose';

import { Schema } from './Schema';

const UserProfileSchema = new Schema({
    gamePlayed: {
        type: Number,
        default: 0
    },
    gameWon: {
        type: Number,
        default: 0
    },
    gameLost: {
        type: Number,
        default: 0
    },
    experience: {
        type: Number,
        default: 0,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    }
});

const UserProfile = models.UserProfile || model('UserProfile', UserProfileSchema);

export default UserProfile;