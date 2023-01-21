const SocketIO = require('socket.io');

const {trigger, reply, alternative, coronavirus} = require('./data');

function proccessMessage(input) {
    let output;
  
    //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    // For example 'tell me a story' becomes 'tell me story'
    // Or 'i feel happy' -> 'happy'
    text = text
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");
  
    // Searches for an exact match with the 'trigger' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
    const match = compare(trigger, reply, text)
    if (match) {
      output = match;
    } else if (text.match(/coronavirus/gi)) {
      output = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      output = alternative[Math.floor(Math.random() * alternative.length)];
    }
    return output
 }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

function setSocketInstance (server) {
const io = SocketIO(server);
  io.on('connection', (socket) => {
      socket.on('message', (data) => {
        const output = proccessMessage(data.message);
        const replyData = {
            outputMessage : output
        }
        socket.emit('reply', replyData);
      });
  });

};

module.exports = { setSocketInstance };
