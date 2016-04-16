/**
 * BloggerController
 *
 * @description :: Server-side logic for managing Bloggers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Promise = require('q');
module.exports = {
	getPosts: function(req, res) {
		if (req.method == 'GET')
		{
			var idBlogger = req.param('blogger'),
			respuesta = [];
			if (!idBlogger || isNaN(idBlogger))
				return res.badRequest('Your data is invalid');
			return Blogger.findOne({id: idBlogger}).populate('posts').then(function(blogger) {
				if (!blogger)
					return res.badRequest('The blogger does not exist');
				return Promise.all(blogger.posts.map(function(post) {
					return Post.findOne({id:post.id}).populate('comments').then(function(post) {
						respuesta.push(post);
					});
				}));				
			}).then(function() {
				return res.send(respuesta);
			}).catch(function(err) {
				return res.negotiate(err);
			});
		}
		else
			return res.badRequest('Your method is invalid');
	}
};

