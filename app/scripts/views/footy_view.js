(function () {

  App.Views.FavoritesView = Backbone.View.extend({

    tagName: 'ol',
    className: 'team_area',

    initialize: function () {
      this.render();

    },

    render: function () {

      // binding 'this' to 'self' for use in nested functions/callbacks
      var self = this;
      // console.log(self);

      // Underscore Template
      var t_template = $('#team_template').html();
      var t_rendered = _.template(t_template);

      // console.log(this.el);


      // Iterating over our models
      _.each(App.all_favorites.models, function (m) {

        // each iteration... appending the data to our element that Backbone created
        self.$el.append(t_rendered(m.attributes));

      });

      // sort collection
        // var sortedByCount = all_favorites.countBy(function (sort) {
        //     return sort.get("team");
        // });
        //
        // console.log(sortedByCount);
        // console.log(" Now sorted ");

      // take the data and append it into a specific element on my page
      $('#team_list').append(this.el);

      return this;
    }

  });

}());
