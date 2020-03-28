class CambioTable:
    id: str = ""
    players: list = []

    def __init__(self, table_id, table_admin, player_id, url_suffix):
        self.active_game = True
        self.id = table_id
        self.admin_id = table_admin
        self.active_player_id = player_id
        self.table_url_suffix = url_suffix
        self.sockets = '???'
        self.scores = {}
