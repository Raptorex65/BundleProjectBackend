
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("item", {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    bundleItemPoint: DataTypes.INTEGER,
  });
  return Item;
};


