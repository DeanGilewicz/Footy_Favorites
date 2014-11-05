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

      // empty contents of form
      $('#getawayForm').empty();

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
        rating: $('#update_rating').val(),
        comments: $('#update_comments').val()
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

    }

  });

}());
