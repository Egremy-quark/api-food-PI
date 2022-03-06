const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('recipe', {
  
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    points:{
      type: DataTypes.STRING,
      validate: {
        min:0,
        max: 100
      }
    },
    healthScore:{
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        min: 0,
        max: 100
      }
    },
    steps:{
      type: DataTypes.JSON,
    },
    image:{
      type: DataTypes.TEXT,
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
    },
    MadeOnDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      },
  });
};