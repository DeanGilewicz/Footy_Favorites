var FavoritesView = Backbone.View.extend({

  tagName: 'ul',
  className: 'team_area',

  initialize: function (attrs) {
    this.render(attrs.collection);
  },

  render: function (coll) {

    // binding 'this' to 'self' for use in nested functions/callbacks
    var self = this;
    console.log(self);

    // Underscore Template
    var t_template = $('#team_template').html();
    var t_rendered = _.template(t_template);

    console.log(this.el);


    // Iterating over our models
    _.each(coll.models, function (m) {

      // each iteration... appending the data to our element that Backbone created
      self.$el.append(t_rendered(m.attributes));

    });

    // sort collection
      var sortedByCount = all_favorites.countBy(function (sort) {
          return sort.get("team");
      });

      $('team_score').append(sortedByCount);
      console.log(sortedByCount);
      console.log(" Now sorted ");

    // take the data and append it into a specific element on my page
    $('#team_list').append(this.el);

    return this;
  }

});
