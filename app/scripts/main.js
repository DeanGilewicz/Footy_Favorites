// Model
var Team = Backbone.Model.extend ({

  defaults: {
    name: '',
    location: '',
    division: '',
    stadium: ''
  },

  initialize: function() {

  }

});

// Collection
var Teams = Backbone.Collection.extend ({
  model: Team,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/testft'
});


var all_teams = new Teams();


$('#footy_teams').on('submit', function(e){

  // Prevent the default action of our form submission
  e.preventDefault();

  // Grab the name from the input
  var team_name = $('#team_name').val();

  // Create a new instane of our Team constructor (Backbone.Model)
  var t = new Team({
    name: team_name
  });

  // Access our Collection and add our new instance (Team) to our collection
  all_teams.add(t);

  // Save our Team - this looks for a URL field or a URL field in our Collection
  // and saves it to that URL using a simple POST method
  t.save();

  console.log(t);

  // Clear my form
  $(this)[0].reset();


});
