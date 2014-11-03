// Underscore Template
var favTemplate = $('#resTemplate').html();
var favRenderer = _.template(favTemplate);


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
    var p = this.get('player');
    var s = this.get('stadium');
    var l = this.get('league');
    console.log(n + ' likes ' + t + ', thinks ' + p + ' is really good, ' + s + 'is the best stadium, and ' + l + ' is the best league' );
  }

});

var favList;
var myServer = 'http://tiy-atl-fe-server.herokuapp.com/collections/testft';

// Collection
var Favorites = Backbone.Collection.extend ({
  model: Favorite,
  url: myServer
});


var all_favorites = new Favorites();


// shows all entries made in the console
all_favorites.fetch().done(function(){
  console.log(all_favorites);
});

//add all the current favorites to show in browser
$.getJSON(myServer).done(function(data){
          favList = data;
          _.each(favList, function(favs) {
              $('#result_list').append(favRenderer(favs));
          });
        });


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

  // Save our Favorites - this looks for a URL field in our Collection
  // and saves it to that URL using a simple POST method
  f.save();

  console.log(f);

  // Clear my form
  $('#user_favs')[0].reset();


});

// Display data in the browser
