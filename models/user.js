import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres', // Specify the database dialect (in this case, PostgreSQL)
});         

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
        is: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    },
    },
    image: {
        type: DataTypes.STRING,
    },
});

export default User;