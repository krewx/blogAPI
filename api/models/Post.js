/**
 * Post.js
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
		title: {
			type: 'string',
			required: true
		},
		text:{
			type: 'string',
			required: true
		},
		date: {
			type: 'datetime',
			require: true
		},
		blogger:{
			model: 'Blogger',
			required: true
		},
		comments: {
			collection: 'Comment',
			via: 'post'
		}		
	}
};

