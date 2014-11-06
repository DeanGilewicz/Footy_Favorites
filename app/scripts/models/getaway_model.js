(function () {

  App.Models.Getaway = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      name: '',
      destination: '',
      duration: '',
      rating: '',
      comments: ''
    },

    initialize: function () {
      var g = this.get('name');
      //console.log(g + " has been added");
    }

  });



}());
