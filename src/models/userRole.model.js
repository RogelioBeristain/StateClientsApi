module.exports = (sequelize, Sequelize, DataTypes) => {
    const UserRole = sequelize.define("user_role", {
        id:{
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        roleName:{
            allowNull: false,
            type: DataTypes.STRING,
        },
    });
    return UserRole;
};