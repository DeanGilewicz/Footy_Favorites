(function () {

  App.Views.AddGetaway = Backbone.View.extend({

    events: {
      'submit #addCoffee' : 'addCoffee' // submit form then : run this
    },

    initialize: function () {
      // calling the render function
      this.render();

      // dumping el content into form
      $('#coffeeForm').html(this.$el);
    },

    render: function () {
      // dumping template into el
      this.$el.html($('#addTemp').html());
    },

    // function that is being ran when event occurs (submit form)
    addCoffee: function (e) {
      e.preventDefault();

      // create a new model instance and grab values from form
      var g = new App.Models.Getaway({
        name: $('#coffee_name').val(),
        brand: $('#coffee_brand').val()
      });

      // save model instance to getaways collection
      App.getaways.add(g).save();

    }

  });

}());
