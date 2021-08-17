module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("item", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
    Address: {
        type: DataTypes.STRING,
        allowNull: false
      },
    City: {
        type: DataTypes.STRING,
        allowNull: false
      },
    Canton: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
    BundleItemPoint: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
        type: DataTypes.DATE
      },
    updatedAt: {
      allowNull: false,
        type: DataTypes.DATE
      }
    });

  return Item;
};


