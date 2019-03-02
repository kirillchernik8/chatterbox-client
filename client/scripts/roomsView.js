// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick)
    RoomsView.$select.on('click', RoomsView.handleChange)
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  handleChange: function(){ 
    // TODO: Handle a user selecting a different room . 
  }, 

  handleClick: function(){ 
    // TODO: Handle the user clicking the "Add Room" button.
  }, 

};
















