var myServer = 'http://tiy-atl-fe-server.herokuapp.com/collections/testft1';

// Collection
var Favorites = Backbone.Collection.extend ({
  model: Favorite,
  url: myServer
});
