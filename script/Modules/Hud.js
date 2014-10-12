app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");
    this.renderScore(player.score);

  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);
  },

  renderScore: function(score) {
    app.layer.fillStyle("#fff")
             .font("32px Arial")
             .textAlign("left")
             .fillText("Score: " + score.value, score.x, score.y);
  }

};
