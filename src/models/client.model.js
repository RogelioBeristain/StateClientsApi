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
        street:{
            allowNull: false,
            type: DataTypes.STRING, 
        },

        colony:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        zipCode:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        phone:{
            allowNull: false,
            type: DataTypes.STRING, 
        },
        clientStateId:{
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    });
    return Client;
};