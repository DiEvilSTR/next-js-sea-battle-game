import { model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { Schema } from './baseSchema';

const UserSchema = new Schema({
    userId: {
        type: String,
        default: uuidv4,
        unique: [true],
        required: [true]
    },
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    },
});

const User = models.User || model('User', UserSchema);

export default User;