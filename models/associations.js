import User from './user';
import Profile from './profile';

Profile.belongsTo(User, {
    foreignKey: 'userId', // This is the foreign key in the Profile table that references the User table
});

User.hasOne(Profile, {
    foreignKey: 'userId', // This is the foreign key in the Profile table that references the User table
});


// Path: import './associations'; // Import the associations file to set up the associations
