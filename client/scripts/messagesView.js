// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.
var MessagesView = {

  // Reference to the #chats div on the page.
  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    //handle click 
    MessagesView.render()
  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('')
    Messages
        .items()
        .each(message => MessagesView.renderMessage(message))
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //prepernd the message
    // run template html
    let $message = MessageView.render(message)
    MessagesView.$chats.prepend($message)
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message 
    // (this should add the sender to the user's friend list).
  }
};
