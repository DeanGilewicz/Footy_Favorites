(function () {

  App.Views.FavoritesView2 = Backbone.View.extend({

    tagName: 'ol',
    className: 'player_area',

    initialize: function () {
      this.render();
    },

    render: function () {

      // binding 'this' to 'self' for use in nested functions/callbacks
      var self = this;
      // console.log(self);

      // Underscore Template
      var p_template = $('#player_template').html();
      var p_rendered = _.template(p_template);

      // console.log(this.el);


      // Iterating over our models
      _.each(App.all_favorites.models, function (m) {

        // each iteration... appending the data to our element that Backbone created
        self.$el.append(p_rendered(m.attributes));

        // sort collection
          // var sortedByTeam = all_favorites.sortBy(function (sort) {
          //     return sort.get("team").toLowerCase();
          // });
          //
          // console.log("- Now sorted: ");
          //
          // sortedByTeam.forEach(function(model){
          //   console.log(model.get('team'));
          // });


      });

      // take the data and append it into a specific element on my page
      $('#player_list').append(this.el);

      return this;
    }

  });

}());
