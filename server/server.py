from flask import Flask, render_template
from websocket_server import WebsocketServer
import thread
import teams
from teams import Team

debug_mode = False
# Called for every client connecting (after handshake)
def new_client(client, server):
	# print("New client connecting...")
	print("New client connected and was given id %d." % client['id'])
	# server.send_message_to_all("Hey all, a new client has joined us")


# Called for every client disconnecting
def client_left(client, server):
	# print("A client disconnected.")
	print("Client %d disconnected" % client['id'])


# Called when a client sends a message
def message_received(client, server, message):
	print("wClient %d said: %s" % (client['id'], message))
	if message.find("get_team_list") != -1:
		print("Sending team list...")
		response = "team_list:"
		for t in teams.teams:
			response = response + t.to_string() + "\n"
		server.send_message(client, response)
		print("Sent team list.")
	# server.send_message(client, "runCode:alert('Eat a potato')")

PORT=9001
server = WebsocketServer(PORT)
server.set_fn_new_client(new_client)
server.set_fn_client_left(client_left)
server.set_fn_message_received(message_received)
thread.start_new_thread(server.run_forever, ())
print("Started websocket server on port %d." % PORT);

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('manage_teams.html', my_list=[0,1,2,3,4,5], team_list=[]) #TODO: Make the main page different (stats page?)

@app.route("/teams/")
def teamList():
    return render_template('manage_teams.html', team_list=teams.teams)

@app.route("/game/")
def goToGame():
	return redirect("https://ornamus.github.io/team1557-dots/", code=302)

if __name__ == '__main__':
	if debug_mode:
		app.run(debug=True)
	else:
		app.run(host='0.0.0.0')
