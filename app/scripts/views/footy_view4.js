var FavoritesView4 = Backbone.View.extend({

  tagName: 'ol',
  className: 'league_area',

  initialize: function (attrs) {
    this.render(attrs.collection);
  },

  render: function (coll) {

    // binding 'this' to 'self' for use in nested functions/callbacks
    var self = this;
    console.log(self);

    // Underscore Template
    var l_template = $('#league_template').html();
    var l_rendered = _.template(l_template);

    console.log(this.el);


    // Iterating over our models
    _.each(coll.models, function (m) {

      // each iteration... appending the data to our element that Backbone created
      self.$el.append(l_rendered(m.attributes));

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

    // console.log(this.el);

    // take the data and append it into a specific element on my page
    $('#stadium_list').append(this.el);

    return this;
  }

});
