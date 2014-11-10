Parse.initialize("YXzkIaVJzLJW5RjZ9YjYl5BPgBPt1BcGyMV6YwlM", "uTsPzUN92IKZsAjm3CstEnQLb8eghMMjxFM0EMWU");

(function () {

  // Create Instance of Collection
  App.getaways = new App.Collections.Getaways();

  // Fetch any server-side getaways
  App.getaways.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });

  $("#sorting").change(function() {
    document.location.href = $(this).val();
  });

}());
