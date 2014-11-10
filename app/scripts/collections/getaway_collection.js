(function () {

  // Collection
  App.Collections.Getaways = Parse.Collection.extend({
    model: App.Models.Getaway,
    comparator: function (model) {
      var timestamp = new Date(model.get('travelDate')).getTime();
      return timestamp;
    }

  });


}());
