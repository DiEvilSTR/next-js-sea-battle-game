import { DataTypes, Sequelize } from 'sequelize';
import { v4 as userIdGeneratorV4 } from 'uuid';

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres', // Specify the database dialect (in this case, PostgreSQL)
});

const UserProfile = sequelize.define('UserProfile', {
    id: {
        type: DataTypes.UUID,
        defaultValue: userIdGeneratorV4,
        primaryKey: true,
    },
    gamePlayed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    gameWon: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    gameLost: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    experience: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

export default UserProfile;