// Model
var Favorite = Backbone.Model.extend ({

  defaults: {
    name: '',
    team: 'test',
    player: '',
    stadium: '',
    league: ''
  },

  initialize: function() {
    var n = this.get('name');
    var t = this.get('team');
    console.log(n + ' has been added');
    console.log(t + ' is the fav team');
  }

});

// Collection
var Favorites = Backbone.Collection.extend ({
  model: Favorite,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/testft'
});


var all_favorites = new Favorites();


$('#add_selections').on('click', function(e){

  // Prevent the default action of our form submission
  e.preventDefault();

  console.log('button clicked');

  // Grab the name (value) from each of the inputs
  var user_name = $('#user_name').val();
  var team_name = $('#team_name').val();
  var player_name = $('#player_name').val();
  var stadium_name = $('#stadium_name').val();
  var league_name = $('#league_name').val();

  // Create a new instane of our Favorite constructor (Backbone.Model)
  var f = new Favorite({
    name: user_name,
    team: team_name,
    player: player_name,
    stadium: stadium_name,
    league: league_name
  });

  // Access our Collection and add our new instance (Favorites) to our collection
  all_favorites.add(f);

  // Save our Favorites - this looks for a URL field or a URL field in our Collection
  // and saves it to that URL using a simple POST method
  f.save();

  console.log(f);

  // Clear my form
  $('#user_favs')[0].reset();

});

// Display data in the browser
