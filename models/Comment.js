'use strict'

module.exports = function(sequelize, DataTypes) {
	var Comment = sequelize.define('Comment', {
		comment: {
			type: DataTypes.STRING(2000)
		},
		classMethods: {
		  associate: function(models) {
		    Comment.belongsTo(models.Post)
		  }
		}
	})
	return Comment;
}