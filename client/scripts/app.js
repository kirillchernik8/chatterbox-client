// This App object represents the entire Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.startSpinner();
    // Fetch initial batch of messages.
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    // interval on 3 sec method of fetch
    setInterval(App.fetch, 3000)
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // Examine the response from the server request:
      console.log(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

     // update rooms

     // update messages pass the results array and run render on each
     Messages.update(data.results, MessagesView.render) // changed to messageSView
     

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};





