// which server we are going to connect
let wsURI = "ws://echo.websocket.org";

//create a nwe web socket connection to given uri
let webSocket = new WebSocket(wsURI);

//send message

webSocket.send("hello world!");

//handle events: onmessage, onerror, onopen

//what to do when we get a message
webSocket.onmessage = (event) => {
  console.log("event:\n", event);
  console.log("event data:\n", event.data);
};

//what to do when we get an error
webSocket.onerror = (event) => {
  console.log("event error:\n", event);
};

//what to do when web socket is opened
webSocket.onopen = (event) => {
  console.log("event open:\n", event);
  console.log("websocket opened");
};

//what do to when web socket is closed
webSocket.onclose = (event) => {
  console.log("event close:\n", event);
  console.log("webSocket is closed");
};


//close the connection
webSocket.close();