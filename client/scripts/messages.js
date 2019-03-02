
var Messages = {

  storage: {},
  
  items: function(){
 
    return _.chain(Object.values(Messages.storage)).sortBy('createdAt');
  },

  update: function(messages, callback = ()=>{}){
    
    let length = Object.values(Messages.storage).length; 

    for(let message of messages) {
      Messages.storage[message.objectId] = Messages.check(message);
    }

    
    if(length !== Object.values(Messages.storage).length ){
      callback(Messages.items());
    }
  },

  add : function(message, callback){

   Messages.storage[message.objectId] = message;
   callback(Messages.items());
  },

  check: function(message) {
    message.text = message.text || ''
    message.username = message.username || 'anonymous'
    message.roomname = message.roomname || ''
    return message
  }


  

};




