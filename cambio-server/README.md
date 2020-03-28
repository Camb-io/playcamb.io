# playcamb.io Server

## Setup
`conda env update --prefix ./env --file environment.yml  --prune`


## Running
`gunicorn -k flask_sockets.worker main:app`


Connect with HTTP using: http://127.0.0.1:8000/
Connect with TCP using: http://127.0.0.1:5000/
