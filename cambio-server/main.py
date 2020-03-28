from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)
TABLES = {}


if __name__ == "__main__":
    socketio.run(app)
