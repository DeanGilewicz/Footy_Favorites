(function () {

  App.Views.SingleGetaway = Parse.View.extend({
    // assigning el to be a ul with a classname
    tagName: 'ul',
    className: 'getawaySingle',

    events: {
      // when form submit (button clicked), will run function
      'submit #updateGetaway' : 'updateGetaway',

      // when delete id clicked (button) will run function
      'click #delete' : 'deleteGetaway',

      'submit #addReview' : 'addReview'
    },

    // dump html from singleTemp script into template
    template: _.template($('#singleTemp').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      // Get our Element On Our Page
      $('#getawayList').html(this.$el);
    },

    render: function () {
      // empty contents of el
      this.$el.empty();

      // add contents to el
      this.$el.html(this.template(this.options.getaway.toJSON()));

      var reviewTemplate = _.template($('#reviewTemp').html());
      var reviews_query = new Parse.Query(App.Models.Review);
      reviews_query.equalTo('parent', this.options.getaway);

      this.$el.append('<h2>Reviews</h2><ul class="reviews"></ul>');

      reviews_query.find({
        success: function (results) {

          _.each(results, function(review) {
            $('ul.reviews').append(reviewTemplate(review.toJSON()));
          })

          }
        })

      },

      addReview: function (e) {
        e.preventDefault();

        var review = new App.Models.Review({

          reviewText: $('#reviewText').val(),
          parent: this.options.getaway
      });

      review.save(null, {
        success: function () {
          App.router.navigate('', {trigger: true});
        }
      });

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

    }

  });

}());
