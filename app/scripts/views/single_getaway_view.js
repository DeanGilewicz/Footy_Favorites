(function () {

  App.Views.SingleGetaway = Backbone.View.extend({
    // assigning el to be a ul with a classname
    tagName: 'ul',
    className: 'coffeeSingle',

    events: {
      // when form submit (button clicked), will run function
      'submit #updateCoffee' : 'updateCoffee',

      // when delete id clicked will run function
      'click #delete' : 'deleteCoffee'
    },

    // dump html from singleTemp script into template
    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      // empty contents of form
      $('#coffeeForm').empty();

      // Get our Element On Our Page
      $('#coffeeList').html(this.$el);
    },

    render: function () {
      // empty contents of el
      this.$el.empty();

      // add contents to el
      this.$el.html(this.template(this.options.coffee.toJSON()));

    },
    // function that runs when submit form
    updateCoffee: function (e) {
      e.preventDefault();

      // Update our Model Instance
      this.options.coffee.set({
        name: $('#update_name').val(),
        brand: $('#update_brand').val(),
        comments: $('#update_comments').val()
      });

      // Save Instance
      this.options.coffee.save();

      // Go back to our home page
      App.router.navigate('', {trigger: true});

    },
    // function that runs when delete id clicked
    deleteCoffee: function (e) {
      e.preventDefault();

      // Remove Coffee
      this.options.coffee.destroy();

      // Go to home page
      App.router.navigate('', {trigger: true});

    }

  });

}());
