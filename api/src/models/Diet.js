const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   defaultValue:DataTypes.UUIDV4
    // },
    dietType: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};