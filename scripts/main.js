(function () {

  App.Models.Getaway = Backbone.Model.extend({

    idAttribute: '_id',

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

(function () {

  // Collection
  App.Collections.Getaways = Backbone.Collection.extend({
    model: App.Models.Getaway,
    comparator: function (model, modelR) {
      return -model.get('destination').localeCompare(modelR.get('destination'));
    },

    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/getaway1'

  });


}());

(function () {

  App.Views.AddGetaway = Backbone.View.extend({

    events: {
      'submit #addGetaway' : 'addGetaway' // submit form : run this 'addGetaway'
    },

    initialize: function () {

      // calling the render function
      this.render();

      // dumping el content into getaway form div that will display in browser
      $('#getawayList').html(this.$el);
    },

    render: function () {
      // dumping template into el
      this.$el.html($('#addTemp').html());
    },

    // function that is being ran when event occurs (submit form)
    addGetaway: function (e) {
      e.preventDefault();

      // create a new model instance and grab values from form
      var g = new App.Models.Getaway({
        name: $('#name').val(),
        destination: $('#getaway_destination').val(),
        duration: $('#getaway_duration').val(),
        travelDate: $('#getaway_travelDate').val()
      });

      // save model instance to getaways collection (created in main js)
      App.getaways.add(g).save(null, {
        success: function () {
          App.router.navigate('', { trigger: true });
        }
      });

    }

  });

}());

(function () {

  App.Views.ListGetaway = Backbone.View.extend({
    // changing the el to be a ul and giving it a class name
    tagName: 'ul',
    className: 'allGetaways',

    events: {},

    // adding template and dumping html from list temp into it
    template: _.template($('#listTemp').html()),

    initialize: function (options) {

      this.options = options;

      // calling render
      this.render();

      // remove all things bound to collection
      this.collection.off();

      // sync all things to our collection
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#getawayList').html(this.$el);

    },

    render: function () {
      var self = this;

      // Empty out
      this.$el.empty();

    // Sorting On The Fly
    if (this.options.sort != undefined) {

      console.log(this.options.reverse);
      // Setting up a localized collection to sort by our sort param
      var local_collection = this.collection.sortBy( function (model) {
        if (self.options.reverse == true) {
          return -model.get(self.options.sort);
        } else {
          return model.get(self.options.sort);
        }
      });
        _.each(local_collection, function (g) {
        self.$el.append(self.template(g.toJSON()));
      })
    } else {
      // Sort from our default comparator in our collection constructor
      this.collection.sort();
      this.collection.each(function (g) {
        self.$el.append(self.template(g.toJSON()));
      });
    }

      return this;
    }

  });

}());

(function () {

  App.Views.SingleGetaway = Backbone.View.extend({
    // assigning el to be a ul with a classname
    tagName: 'ul',
    className: 'getawaySingle',

    events: {
      // when form submit (button clicked), will run function
      'submit #updateGetaway' : 'updateGetaway',

      // when delete id clicked (button) will run function
      'click #delete' : 'deleteGetaway'
    },

    // dump html from singleTemp script into template
    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();
      // empty contents of button (so it doesn't display) THIS IS FOR SORT BUTTONS
      // $('#sort').empty();

      // Get our Element On Our Page
      $('#getawayList').html(this.$el);
    },

    render: function () {
      // empty contents of el
      this.$el.empty();

      // add contents to el
      this.$el.html(this.template(this.options.getaway.toJSON()));

    },
    // function that runs when submit form
    updateGetaway: function (e) {
      e.preventDefault();

      // Update our Model Instance
      this.options.getaway.set({
        name: $('#update_name').val(),
        destination: $('#update_destination').val(),
        duration: $('#update_duration').val(),
        rating: $('option[name="rating"]:selected').val(),
        comments: $('#update_comments').val(),
        travelDate: $('#update_travelDate').val(),
        img: $('#update_img').val()
      });
      // Save Instance
      this.options.getaway.save();

      // Go back to our home page
      App.router.navigate('', {trigger: true});

    },
    // function that runs when delete id clicked
    deleteGetaway: function (e) {
      e.preventDefault();

      // Remove Coffee
      this.options.getaway.destroy();

      // Go to home page
      App.router.navigate('', {trigger: true});

    },

  });

}());

(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // route the inital URL
      Backbone.history.start();

      // 'route' is event, this.showBtn - callback, this - context
      this.on('route', this.showBtn, this);

    },

    routes: {
      // sets the initial page to 'home'
      '' : 'home',
      // allows function to be ran so url can track unique id of getaways #/edit/id
      'edit/:id' : 'editGetaway',
      'add' : 'addGetaway',
      'sort/:sortby(/:reverse)' : 'home'
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

    showBtn: function(route) {
      if(route === 'home') {
        $('.addNewBtn').removeClass("hide");
      } else {
        $('.addNewBtn').addClass("hide");
      }
    }

  });

}());

(function () {

  // Create Instance of Collection
  App.getaways = new App.Collections.Getaways();

  // Fetch any server-side getaways
  App.getaways.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });


}());
