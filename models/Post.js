'use strict';

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      validate : {
        len : [1,200]
      }
    },
    body: {
      type :DataTypes.STRING(2000),
    },
    classMethods: {
      associate: function(models) {
        Post.belongsToMany(models.Comment);
        Post.belongsToMany(models.Vote);
      }
    }
  });
  return Post;
};

