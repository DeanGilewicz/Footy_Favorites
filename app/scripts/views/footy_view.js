var FavoritesView = Backbone.View.extend({

  tagName 'ul',
  className: 'feels',

  initialize: function (attrs) {

  },

  render: function (coll) {

    // binding 'this' to 'self' for use in nested functions/callbacks
    var self = this;

    // Underscore Template
    var favTemplate = $('#resTemplate').html();
    var favRenderer = _.template(favTemplate);

    console.log(this.el);

    // Iterating over our models
    _.each(coll.models, function (c) {

      // console.log(c.get('name'));

      // each iteration... appending the data to our element that Backbone created
      self.$el.append(rendered(c.attributes));

    });

    // console.log(this.el);

    // take the data and append it into a specific element on my page
    $('#result_list').html(this.el);

    return this;
  }

});
