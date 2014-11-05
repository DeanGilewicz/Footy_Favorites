(function () {

  // Create Instance of Collection
  App.getaways = new App.Collections.Getaways();

  // Fetch any server-side getaways
  App.getaways.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });


}());
