from flask import Flask, Blueprint
from flask_sockets import Sockets

html = Blueprint(r"html", __name__)
ws = Blueprint(r"ws", __name__)
TABLES = {}


@html.route("/")
def hello():
    return "Try and add a table id to connect to this server!"


@html.route("/create-cambio-table", methods=["POST"])
def create_new_table():
    pass



@ws.route("/chat")
def echo_socket(socket):
    while not socket.closed:
        message = socket.receive()
        new_message = message
        print(message)
        if new_message:
          for client in socket.handler.server.clients.values():
            print(f"Sending Message {new_message}")
            client.ws.send(new_message)
        else:
          print(f"WARNING, CLIENT SENT NONE")


@ws.route("/<cambio_table_id>/chat")
def echo_socket(socket, cambio_table_id):
    while not socket.closed:
        message = socket.receive()
        new_message = message + cambio_table_id
        socket.send(new_message)


app = Flask(__name__)
sockets = Sockets(app)

app.register_blueprint(html, url_prefix=r"/")
sockets.register_blueprint(ws, url_prefix=r"/")

if __name__ == "__main__":
    from gevent import pywsgi
    from geventwebsocket.handler import WebSocketHandler

    server = pywsgi.WSGIServer(("", 5000), app, handler_class=WebSocketHandler)
    server.serve_forever()
