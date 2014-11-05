(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // route the inital URL
      Backbone.history.start();
    },

    routes: {
      // sets the initial page to 'home'
      '' : 'home',
      // allows function to be ran so url can track unique id of getaways #/edit/id
      'edit/:id' : 'editGetaway'
    },

    home: function () {
      // ??
      new App.Views.AddGetaway();

      // ??
      new App.Views.ListGetaway({ collection: App.getaways });
    },

    editCoffee: function (trip) {

      var g = App.getaways.get(trip);

      new App.Views.SingleGetaway({ getaway: g });
    }

  });

}());
