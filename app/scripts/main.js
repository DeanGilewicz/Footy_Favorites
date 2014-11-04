// create instance of Favorites Collection
var all_favorites = new Favorites();


// pull all of the favorites entries from our server
all_favorites.fetch().done(function(){

  var favsView1 = new FavoritesView({
    collection: all_favorites
  });

  var favsView2 = new FavoritesView2({
    collection: all_favorites
  });

  var favsView3 = new FavoritesView3({
    collection: all_favorites
  });

  var favsView4 = new FavoritesView4({
    collection: all_favorites
  });


});



$('#add_selections').on('click', function(e){

  // Prevent the default action of our form submission
  e.preventDefault();

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

  // Clear my form
  $('#user_favs')[0].reset();


});
