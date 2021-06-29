
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Category;
  };
  
  
  