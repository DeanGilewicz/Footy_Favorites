(function () {

  App.Views.ListGetaway = Backbone.View.extend({
    // changing the el to be a ul and giving it a class name
    tagName: 'ul',
    className: 'allGetaways',

    events: {},

    // adding template and dumping html from list temp into it
    template: _.template($('#listTemp').html()),

    initialize: function (options) {

      this.options = options;

      // calling render
      this.render();

      // remove all things bound to collection
      this.collection.off();

      // sync all things to our collection
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#getawayList').html(this.$el);

    },

    render: function () {
      var self = this;

      // Empty out
      this.$el.empty();

    // Sorting On The Fly
    if (this.options.sort != undefined) {
      // Setting up a localized collection to sort by our sort param
      var local_collection = this.collection.sortBy( function (model) {
        return model.get(self.options.sort);
      });
        _.each(local_collection, function (c) {
        self.$el.append(self.template(c.toJSON()));
      })
    } else {
      // Sort from our default comparator in our collection constructor
      this.collection.sort();
      this.collection.each(function (c) {
        self.$el.append(self.template(c.toJSON()));
      });
    }

      return this;
    }

  });

}());
