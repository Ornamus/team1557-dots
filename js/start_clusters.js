function start() {
	if (onlineMode) connectToServer();
	var askedForList = false;
	var waitFunction = function() {
		setTimeout(function() {
			if (connected_to_server || !onlineMode) {
				if (onlineMode) {
					if (!askedForList) {
						waiting_for_server_team_list = true;
						doSend("get_team_list");
						askedForList = true;
					}
				}
				if ((onlineMode && !waiting_for_server_team_list) || (!onlineMode)) {
					initTeamList();
					setupScoreboard();

					var o = (random(0, teams.length));
					var eradius = Math.min(width, height) / 3,
						radius = 2; // radius = teams.length > 8 ? 1 : 2;
					for (var i = 0; i < teams.length; i++) {
						var r = (Math.PI * 2 ) * ((o + i) / teams.length);

						var dX = Math.cos(r) * eradius,
							dY = Math.sin(r) * eradius;
						for (var x = -radius; x <= radius; x++) {
							for (var y = -radius; y <= radius; y++) {
								if (Math.random() > 0.1)
									create(teams[i], Math.floor(width / 2 + dX + x), Math.floor(height / 2 + dY + y));
							}
						}
					}
				} else {
					waitFunction();
				}
			} else {
				waitFunction();
			}
		}, 1000)
	}

	waitFunction();
}

start();
