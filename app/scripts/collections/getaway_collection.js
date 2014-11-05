(function () {

  // Collection
  App.Collections.Getaways = Backbone.Collection.extend({
    model: App.Models.Getaway,
    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/getaway1'
  });


}());
