(function () {

  App.Views.AddGetaway = Backbone.View.extend({

    events: {
      'submit #addGetaway' : 'addGetaway' // submit form : run this 'addGetaway'
    },

    initialize: function () {

      var date = new Date();
      console.log(date);
      var day = date.getDate();
      console.log(day);
      var month = date.getMonth() + 1;
      console.log(month);
      var year = date.getFullYear();
      console.log(year);

      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;

      var today = year + "-" + month + "-" + day;

      // document.getElementById('getaway_postDate').value = today;
      // calling the render function
      this.render();

      // dumping el content into getaway form div that will display in browser
      $('#getawayList').html(this.$el);
    },

    render: function () {
      // dumping template into el
      this.$el.html($('#addTemp').html());
    },

    // function that is being ran when event occurs (submit form)
    addGetaway: function (e) {
      e.preventDefault();

      // create a new model instance and grab values from form
      var g = new App.Models.Getaway({
        name: $('#name').val(),
        destination: $('#getaway_destination').val(),
        duration: $('#getaway_duration').val(),
        postDate: $('#getaway_postDate').val()
      });

      // save model instance to getaways collection (created in main js)
      App.getaways.add(g).save(null, {
        success: function () {
          App.router.navigate('', { trigger: true });
        }
      });

    }

  });

}());
