(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {
      // route the inital URL
      Parse.history.start();

      // 'route' is event, this.displayEl - callback, this - context
      // This is not supported in backbone version that parse uses
      // this.on('route', this.displayEl, this);

    },

    routes: {
      // sets the initial page to 'home'
      '' : 'home',
      // allows function to be ran so url can track unique id of getaways #/edit/id
      'edit/:id' : 'editGetaway',
      'add' : 'addGetaway',
      'sort/:sortby(/:reverse)' : 'home',
      'review/:id' : 'reviewGetaway'
    },

    home: function (sortby, reverse) {
      var sort_check = (reverse == undefined) ? false : true;
      new App.Views.ListGetaway({ collection: App.getaways, sort: sortby, reverse: sort_check });

      $('.addNewBtn').removeClass("hide");
      $('.sorts').removeClass("hide");

    },

    editGetaway: function (trip) {
      var g = App.getaways.get(trip);
      new App.Views.SingleGetaway({ getaway: g });

      $('.addNewBtn').addClass("hide");
      $('.sorts').addClass("hide");

    },

    addGetaway: function () {
      new App.Views.AddGetaway();

      $('.addNewBtn').addClass("hide");
      $('.sorts').addClass("hide");

    },

    reviewGetaway: function () {
      new App.Views.ReviewGetaway();

      $('.addNewBtn').addClass("hide");
      $('.sorts').addClass("hide");

    }

  });

}());
