(function () {

  // Add our form
  new App.Views.FavoritesForm();

  // create instance of Favorites Collection
  App.all_favorites = new App.Collections.Favorites();


  // pull all of the favorites entries from our server
  App.all_favorites.fetch().done(function(){

    new App.Views.FavoritesView();

    new App.Views.FavoritesView2();

    new App.Views.FavoritesView3();

    new App.Views.FavoritesView4();

  });

}());
