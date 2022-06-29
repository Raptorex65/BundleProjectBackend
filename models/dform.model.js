module.exports = (sequelize, DataTypes) => {
  const DForm = sequelize.define("dform", {
// {itemName, category, description, address, canton, city, postal_code, email, phone} = data

id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
itemName: {
      type: DataTypes.STRING,
    },
category: {
      type: DataTypes.INTEGER,
    },
description: {
    type: DataTypes.STRING,
  },
address: {
    type: DataTypes.STRING,
  },
canton: {
      type: DataTypes.INTEGER,
  },
city: {
      type: DataTypes.INTEGER,
  },
Postal_code: {
      type: DataTypes.INTEGER,
  },
email: {
    type: DataTypes.STRING,
  },
phone: {
      type: DataTypes.INTEGER,
  }
});
  return DForm;
};


