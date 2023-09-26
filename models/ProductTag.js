const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {  // new column
      type: DataTypes.INTEGER,
      references: {
        model: 'product',  
        key: 'id'
      }
    },
    tag_id: {  // new column
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',  
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
