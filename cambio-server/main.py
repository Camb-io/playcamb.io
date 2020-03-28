from flask import Flask 
from flask_socketio import SocketIO, send

from models.Player import *

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app, cors_allowed_origins='*')

players = []

@socketio.on('join table')
def join_table(name):
	player = Player(name)
	print(player.name)
	players.append(player)
	print(players)

if __name__ == '__main__':
	socketio.run(app, debug=True)
