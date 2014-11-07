(function () {

  // Collection
  App.Collections.Getaways = Backbone.Collection.extend({
    model: App.Models.Getaway,
    comparator: function (model) {
      return model.get('travelDate');
    },
    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/getaway1'
  });


}());
