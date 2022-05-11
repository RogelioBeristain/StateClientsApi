module.exports = (sequelize, Sequelize, DataTypes) => {
    const ClientState = sequelize.define("client_state", {
        id:{
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        statusName: {
            type: Sequelize.STRING,
        },
        comment: {
            type: Sequelize.STRING,
        },
    });
    return ClientState;
};