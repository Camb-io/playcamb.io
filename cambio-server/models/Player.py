class Player:
    def __init__(self, pid, name="Cambio Player"):
        self.name = name
        self.player_id = pid
        self.score = 0
        self.hand = {}

    def __dict__(self):
        return {
            "name": self.name,
            "player_id": self.player_id,
            "score": self.score,
            "hand": self.hand,
        }
