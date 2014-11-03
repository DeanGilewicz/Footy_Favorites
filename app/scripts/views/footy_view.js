var FavoritesView = Backbone.View.extend({

  tagName: 'ul',
  className: 'favList',

  initialize: function (attrs) {
    this.render(attrs.collection);
  },

  render: function (coll) {

    // binding 'this' to 'self' for use in nested functions/callbacks
    var self = this;
    console.log(self);

    // Underscore Template
    var template = $('#list_template').html();
    var rendered = _.template(template);

    console.log(this.el);

    // Iterating over our models
    _.each(coll.models, function (c) {

      // each iteration... appending the data to our element that Backbone created
      self.$el.append(rendered(c.attributes));

    });

    // console.log(this.el);

    // take the data and append it into a specific element on my page
    $('#list').append(this.el);

    return this;
  }

});
