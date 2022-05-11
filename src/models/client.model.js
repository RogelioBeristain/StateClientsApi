module.exports = (sequelize, Sequelize, DataTypes) => {
    const Client = sequelize.define("client", {
        id:{
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        firstSurname:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        secondSurname:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        zipCodeAddress:{
            allowNull: false,
            type: DataTypes.STRING, 
        },

        streetAddress:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        colonyAddress:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        phoneNumber:{
            allowNull: false,
            type: DataTypes.STRING, 
        },

        rfc:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        
        clientStateId:{
            allowNull: true,
            type: DataTypes.INTEGER,
        }
    });
    return Client;
};