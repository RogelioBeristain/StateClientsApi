module.exports = (sequelize, Sequelize, DataTypes) => {
    const ClientFile = sequelize.define("client_file", {
        id:{
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        fileName:{
            allowNull: false,
            type: DataTypes.STRING,
        },

        fileUrl:{
            allowNull: false,
            type: DataTypes.STRING,
        },

        clientId:{
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    });
    return ClientFile;
};