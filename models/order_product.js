'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_product = sequelize.define(
    'order_product',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER
      }
    },
    {}
  );
  order_product.associate = function(models) {
    order_product.belongsTo(models.order);
    order_product.belongsTo(models.product);
  };
  return order_product;
};
