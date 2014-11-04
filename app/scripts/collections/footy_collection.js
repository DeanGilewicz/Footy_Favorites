(function () {

  myServer = 'http://tiy-atl-fe-server.herokuapp.com/collections/testft1';

  // Collection
  App.Collections.Favorites = Backbone.Collection.extend ({
    model: App.Models.Favorite,
    url: myServer
  });


}());
