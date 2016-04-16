/**
 * Blogger.js
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
		name: {
			type: 'string',
			required: true
		},
		email:{
			type:'email',
			required: true,
			unique: true
		},
		userName: {
			type: 'string',
			required: true,
			unique: true
		},
		password:{
			type: 'string',
			required: true
		},
		posts: {
			collection: 'Post',
			via: 'blogger'
		}		
	}
};

