
(function () {

  App.Views.FavoritesForm = Backbone.View.extend ({

    el: '#add_favs',

    events: {
      // must be inside of whatever you declare el to be in the index.html
      // #feelsAdd (form) is inside of #feelsAdder (div) since render dumbs the html there
      'submit #favsAdd' : 'addNewFav'
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      var form_html = $('#user_favs').html();
      this.$el.html(form_html);
    },

    addNewFav: function (e) {
      e.preventDefault();

      // // Grab the values from my form inputs
      var user_name = $('#user_name').val();
      var team_name = $('#team_name').val();
      var player_name = $('#player_name').val();
      var stadium_name = $('#stadium_name').val();
      var league_name = $('#league_name').val();

      // Create a new instane of our Favorite constructor (Backbone.Model)
      var fav = new App.Models.Favorite({
        name: user_name,
        team: team_name,
        player: player_name,
        stadium: stadium_name,
        league: league_name
      });

      // Add to our collection & save to server
      App.all_favorites.add(fav).save();

      // Clear my form
      $('#favsAdd')[0].reset();

    }

  });


}());
