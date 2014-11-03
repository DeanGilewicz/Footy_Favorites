var myServer = 'http://tiy-atl-fe-server.herokuapp.com/collections/testft';

// Collection
var Favorites = Backbone.Collection.extend ({
  model: Favorite,
  url: myServer
});
