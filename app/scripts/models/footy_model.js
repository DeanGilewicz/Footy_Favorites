(function () {

  // Model
  App.Models.Favorite = Backbone.Model.extend ({

    defaults: {
      name: '',
      team: '',
      player: '',
      stadium: '',
      league: ''
    },

    idAttribute: '_id',

    initialize: function() {
      // var n = this.get('name');
      // var t = this.get('team');
      // var p = this.get('player');
      // var s = this.get('stadium');
      // var l = this.get('league');
      // console.log(n + ' likes ' + t + ', thinks ' + p + ' is really good, ' + s + ' is the best stadium, and ' + l + ' is the best league' );
    }

  });

}());
