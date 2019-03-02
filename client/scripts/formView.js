// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.
var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the _browser_ from submitting the form.
    // More info: https://mdn.io/preventDefault.
    event.preventDefault();

   // create an instance of the message  with user text and room
   let message = {
     username:  App.username ||'Me',
     text: FormView.$form.find('#message').val(),
     roomname: 'lobby'
   }
    
   Parse.create(message, () => {
     Messages.add(message, MessagesView.render)
   })
  },
  

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

