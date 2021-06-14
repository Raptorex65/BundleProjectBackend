
module.exports = (sequelize, DataTypes) => {
    const Bundle = sequelize.define("bundle", {
      bundle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //primaryKey: true
      },
    });
    return Bundle;
  };
  
  
  