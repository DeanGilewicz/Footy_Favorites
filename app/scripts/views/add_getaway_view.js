(function () {

  App.Views.AddGetaway = Backbone.View.extend({

    events: {
      'submit #addGetaway' : 'addGetaway' // submit form : run this 'addGetaway'
    },

    initialize: function () {
      // calling the render function
      this.render();

      // dumping el content into getaway form div that will display in browser
      $('#getawayForm').html(this.$el);
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
        duration: $('#getaway_duration').val()
      });

      // save model instance to getaways collection (created in main js)
      App.getaways.add(g).save();

    }

  });

}());
