(function () {

  App.Models.Getaway = Parse.Object.extend({

    className: 'getaway',

    idAttribute: 'objectId',

    defaults: {
      name: '',
      destination: '',
      duration: '',
      rating: '',
      comments: '',
      travelDate: '',
      img: ''
    },

    initialize: function () {
      var g = this.get('name');
      //console.log(g + " has been added");
    }

  });

}());
