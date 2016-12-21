'user strict';

module.exports = function(sequalize, DataType) {
  var Vote = sequelize.define('Vote', {
    vote:{
      type: DataType.STRING,
      validate: {
        isIN: [[1, -1]]
      }
    }
  },
  classMethods: {
    associate: function(model) {
      vote.belongsTo(model.Post);
    }
  }
}
