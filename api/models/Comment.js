/**
 * Comment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		id:{
			type: 'integer',
			autoIncrement: true,
			primaryKey: true
		},
		text: {
			type: 'string',
			required: true
		},
		name:{
			type: 'string',
			required: true
		},
		email: {
			type: 'email',
			require: true
		},
		date:{
			type: 'datetime',
			required: true
		},
		post: {
			model: 'Post',
			required: true
		}
	}
};

