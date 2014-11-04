(function () {

  App.Views.FavoritesView2 = Backbone.View.extend({

    tagName: 'ol',
    className: 'player_area',

    events: {
      'click li' : 'deleteMyFav'
    },

    initialize: function () {
      this.render();

      App.all_favorites.on('sync', this.render, this);
      App.all_favorites.on('destroy', this.render, this);

    },

    render: function () {

      // binding 'this' to 'self' for use in nested functions/callbacks
      var self = this;

      // Underscore Template
      var p_template = $('#player_template').html();
      var p_rendered = _.template(p_template);

      // Clear our El
      this.$el.empty();

      // Iterating over our models
      _.each(App.all_favorites.models, function (m) {

        // each iteration... appending the data to our element that Backbone created
        self.$el.append(p_rendered(m.attributes));

      });

        // sort collection
          // var sortedByCount = all_favorites.countBy(function (sort) {
          //     return sort.get("team");
          // });
          //
          // console.log(sortedByCount);
          // console.log(" Now sorted ");

      // take the data and append it into a specific element on my page
      $('#player_list').append(this.el);

      return this;

    },

    deleteMyFav: function (e) {

      e.preventDefault();

      // in backbone target element
      $(e.target);

      // Check which fav it is
      var id = $(e.target).attr('id');

      // find that fav in our collection
      var goodbye = App.all_favorites.get(id);

      // Delete that favorite and remove it from our collection
      goodbye.destroy();

    }


  });

}());
