"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ApiCallLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  ApiCallLogs.init(
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      endpoint: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      parameters: {
        type: DataTypes.JSON,
      },
      result: {
        type: DataTypes.ENUM('success', 'failed')
      },
      created_at: {
        type: DataTypes.DATE,
      }
    },
    {
      sequelize,
      modelName: "api_call_logs",
      underscored: true,
      timestamps: false,
      hooks: {
        beforeCreate(data) {
          data.created_at = Date.now();
        }
      },
    }
  );

  return ApiCallLogs;
};