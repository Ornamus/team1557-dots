var connected_to_server = false;

function connectToServer() {
  websocket = new WebSocket("ws://localhost:9001");
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt) {
  connected_to_server = true;
  console.log("Connected to server.");
  //doSend("Hi server!")
}

function onClose(evt) {
  connected_to_server = false;
  console.log("Disconnected from server.");
}

function onMessage(evt) {
  var commands = evt.data.split("_NEWCOMMAND_");
  for (var i = 0; i < commands.length; i++) {
    var string = commands[i];
    if (string.indexOf("runCode:") == 0) {
      string = string.replace("runCode:", "");
      eval(string);
      console.log("Got a command from the server to run the following code: " + string)
    } else if (string.indexOf("team_list:") == 0) {
      string = string.replace("team_list:", "");
      server_team_list_string = string;
      waiting_for_server_team_list = false;
      console.log("Got team list from server.");
    }
  }
}

function onError(evt) {
  //alert('error: ' + evt.data + '\n');
	websocket.close();
}

function doSend(message) {
  //alert("Sent message: " + message + '\n');
  websocket.send(message);
}

function doDisconnect() {
	websocket.close();
}
