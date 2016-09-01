function start() {
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
}

start();
