(function () {

  // Collection
  App.Collections.Getaways = Backbone.Collection.extend({
    model: App.Models.Getaway,
    comparator: function (model) {
      var timestamp = new Date(model.get('travelDate')).getTime();
      return timestamp;

      // return -model.get('destination').localeCompare(modelR.get('destination'));
    },

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/getaway1'

  });


}());
