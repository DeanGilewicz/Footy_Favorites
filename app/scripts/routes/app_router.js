(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {
      // route the inital URL
      Parse.history.start();

      // 'route' is event, this.displayEl - callback, this - context
      this.on('route', this.displayEl, this);

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
    },

    editGetaway: function (trip) {
      var g = App.getaways.get(trip);
      new App.Views.SingleGetaway({ getaway: g });
    },

    addGetaway: function () {
      new App.Views.AddGetaway();
    },

    displayEl: function(route) {
      if(route === 'home') {
        $('.addNewBtn').removeClass("hide");
        $('.sorts').removeClass("hide");
      } else {
        $('.addNewBtn').addClass("hide");
        $('.sorts').addClass("hide");
      }
    },

    reviewGetaway: function () {
      new App.Views.ReviewGetaway();
    }

  });

}());
