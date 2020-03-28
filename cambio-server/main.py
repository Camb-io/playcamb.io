from flask import Flask, Blueprint, jsonify, request
from flask_sockets import Sockets
from models import Player, CambioTable
import uuid


html = Blueprint(r"html", __name__)
ws = Blueprint(r"ws", __name__)
TABLES = {}


@html.route("/")
def hello():
    return "Try and add a table id to connect to this server!"


@html.route("/create-cambio-table", methods=["POST"])
def create_new_table():
    player_name = request.get_json("name")
    table_id = str(uuid.uuid4().hex)
    player_id = str(uuid.uuid4().hex)
    table_admin = player_id
    table = CambioTable(
        table_id, table_admin, player_id, url_suffix=f"table-{table_id}"
    )
    if table_id not in TABLES:
        TABLES[table_id] = table
    player = Player(name=player_name, pid=player_id)
    return jsonify(table_id, table_admin, player.__dict__())


@ws.route("/echo")
def echo_socket(socket):
    while not socket.closed:
        message = socket.receive()
        socket.send(message)


app = Flask(__name__)
sockets = Sockets(app)

app.register_blueprint(html, url_prefix=r"/")
sockets.register_blueprint(ws, url_prefix=r"/")

if __name__ == "__main__":
    from gevent import pywsgi
    from geventwebsocket.handler import WebSocketHandler

    server = pywsgi.WSGIServer(("", 5000), app, handler_class=WebSocketHandler)
    server.serve_forever()
