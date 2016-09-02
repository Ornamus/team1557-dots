var	grid = true,
	gridMargin = 0,
	gridColor = "#545454";

var renderInterval = 1000 / 30;

function loadImage(url) {
	var img = new Image();
	img.src = "img/" + url;
	return img;
}

var images = {
	"cycle": loadImage("cycle.png"),
	"shield": loadImage("shield.png"),
	"shield_broken": loadImage("shield_broken.png"),
	//"king": loadImage("crown-silver.png"), //Looks better than the black icons?
	"king": loadImage("king.png"),
	"nuke": loadImage("nuke.png"),
	"suicide": loadImage("suicide.png"),
};

function lerp(x, y, a) {
	return x + (y - x) * a;
}

var interpolate = {
	a: 0
};
var tween = new TWEEN.Tween( interpolate )
	.to({ a: 1 }, updateInterval - (updateInterval / 3))
	.easing(TWEEN.Easing.Cubic.InOut);
var tween2 = new TWEEN.Tween( interpolate )
	.to({ a: 1 }, updateInterval / 3)
	.easing(TWEEN.Easing.Linear.None)
	.onComplete(function() {
		// Reset the tween
		interpolate.a = 0;

		// Update, rinse, repeat
		update();
		tween.start();
	});

// Set the waiting tween to go after the visual tween
tween.chain(tween2);

// Start the loop
tween.start();

// Prepare rendering
var ctx = canvas.getContext("2d");


// Prepare grid
var sCtx = $("#scratch")[0].getContext("2d");
sCtx.canvas.width = blockWidth + blockMargin;
sCtx.canvas.height = blockHeight + blockMargin;

sCtx.fillStyle="#111111";
sCtx.fillRect(
	0,
	0,
	blockWidth + blockMargin,
	blockHeight + blockMargin);
sCtx.fillStyle=gridColor;
sCtx.fillRect(
	0,
	0,
	blockWidth,
	blockHeight);

var gridImage = new Image();
gridImage.src = sCtx.canvas.toDataURL();
var pat = ctx.createPattern(gridImage, "repeat");



var prevTitles = {
};

function renderPreUpdate() {
	teams.forEach(function (team) {
		var c = teamCOG[team.name];
		if (c)
			prevTitles[team.name] = {"x":c.x, "y":c.y};
	});
}

// Render
function render() {
	// Clear the board
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	//ctx.rotate(1 * Math.PI/180);
	if (!paused) {
		// Update tween motions
		TWEEN.update();
	} else {
		interpolate.a = 1;
	}

	// Draw the grid
	ctx.fillStyle = pat;
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	/*if (grid) {
		ctx.fillStyle = gridColor;
		for (var x = 0; x < width; x++) {
			for (var y = 0; y < height; y++) {
				ctx.fillRect(
					gridMargin + x * (blockWidth + blockMargin),
					gridMargin + y * (blockHeight + blockMargin),
					blockWidth - gridMargin * 2,
					blockHeight - gridMargin * 2);
			}
		}
	}*/

	teams.forEach(function (team) {
		if (team.render !== undefined) {
			team.render.apply(team);
		}
	});

	dots.forEach(function (dot) {
		// Color to this block's team
		ctx.fillStyle = dot.team.color;

		// Interpolate between the previous position, and the current position
		var x = lerp(dot.oldX, dot.x, interpolate.a),
			y = lerp(dot.oldY, dot.y, interpolate.a);

		// Determine the rendering size
		var sizeX,
			sizeY;
		if (dot.team == dot.oldTeam) {
			// Normal block size
			sizeX = sizeY = blockWidth;
		} else {
			// The block is morphing between teams, make it look small
			sizeX = sizeY = blockWidth * interpolate.a;
		}

		x = x * (blockWidth + blockMargin);
		y = y * (blockHeight + blockMargin);

		ctx.fillRect(
			(blockWidth-sizeX)/2 + x,
			(blockHeight-sizeY)/2 + y,
			sizeX,
			sizeY);

		// Draw dot type image if the dot has a type
		if (dot.type !== undefined && dot.type.image !== undefined) {
			ctx.drawImage(images[dot.type.image], x - 2, y - 1);
		}
	});

	if (showTitles) {
		ctx.font = "12px 'Roboto', sans-serif";
		ctx.shadowBlur = 3;
		ctx.shadowColor = "black";
		ctx.fillStyle = "white";
		teams.forEach(function (team) {
			var count = teamCounts[team.name];
			if (count > 0) {
				var c = teamCOG[team.name],
					prev = prevTitles[team.name];
				if (c !== undefined && prev !== undefined) {
					var x = (blockWidth + blockMargin) * lerp(prev.x, c.x, interpolate.a) - team.name.length*3,
						y = (blockHeight + blockMargin) * lerp(prev.y, c.y, interpolate.a) + 10;
					ctx.fillText(team.name, x, y);
				}
			}
		});
		ctx.shadowBlur=0;
	}

	// Draw highlighted grid spot wherever the mouse is
	ctx.fillStyle = "rgba(225,225,225,0.5)";
	ctx.fillRect(
		mouse.x * (blockWidth + blockMargin),
		mouse.y * (blockHeight + blockMargin),
		blockWidth,
		blockHeight);

	// Draw dot's team name and type description (if it has one) when hovered over by the mouse
	//TODO: If the mouse doesn't move, keep showing the same dot's information even if it has moved out from under the mouse.
	//TODO: Draw the black box from the team list behind the text being rendered here (for readability)
	var hover = get(mouse.x, mouse.y);
	if (hover !== undefined) {
		var h = window.innerHeight - 24;
		var textX = 4;
		ctx.font = "16px 'Roboto', sans-serif";

		ctx.fillStyle = hover.team.color;
		ctx.fillText(hover.team.name, textX, h);
		h -= 16;
		if (hover.type !== undefined && hover.type.description !== undefined) {
			ctx.fillStyle = "white";
			ctx.fillText(hover.type.description, textX, h);
		}
	}

	if (down && selectedTeam !== undefined) {
		if (mouse.y >= 0 && get(mouse.x, mouse.y) === undefined) {
			create(selectedTeam, mouse.x, mouse.y);
		} else {
			setTeam(get(mouse.x, mouse.y), selectedTeam);
		}
	}
}

setInterval(render, renderInterval);

update();
