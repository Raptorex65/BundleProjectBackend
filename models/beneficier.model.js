
module.exports = (sequelize, DataTypes) => {
  const Beneficier = sequelize.define("beneficier", {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bundleTotalPoints: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Beneficier;
};



