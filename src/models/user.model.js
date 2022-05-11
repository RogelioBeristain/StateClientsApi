module.exports = (sequelize, Sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id:{
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        roleId:{
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    });
    return User;
};