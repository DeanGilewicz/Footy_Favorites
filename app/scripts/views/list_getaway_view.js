(function () {

  App.Views.ListGetaways = Backbone.View.extend({
    // changing the el to be a ul and giving it a class name
    tagName: 'ul',
    className: 'allGetaways',

    events: {},

    // adding template and dumping html from list temp into it
    template: _.template($('#listTemp').html()),

    initialize: function () {
      // calling render
      this.render();

      // ??
      this.collection.off();

      // ??
      this.collection.on('sync', this.render, this);

      // Get our Element On Our Page
      $('#getawayList').html(this.$el);

    },

    render: function () {
      var self = this;

      // Empty out
      this.$el.empty();

      // ??
      this.collection.each(function (g) {
        self.$el.append(self.template(g.toJSON()));
      });

      return this;
    }

  });

}());
