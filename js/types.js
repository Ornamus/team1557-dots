var types = {
	"king": {
		"image": "king",
		"name": "King",
		"description": "Hail to the king, baby!"
	},
	"shield": {
		"image": "shield",
		"name": "Knight",
		"description": "The knight's shield can protect him from two infections before temporarily breaking.",
		"infected": function() {
			this.shieldHealth = (this.shieldHealth || 2) - 1;
			if (this.shieldHealth == 0) {
				this.shieldHealth = undefined; //Reset for when this later gets its shield back
				this.type = types.broken_shield;
			}
			return false;
		}
	},
	"broken_shield": { //These should never be spawned or used directly. This is just a subtype of types.shield.
		"image": "shield_broken",
		"name": "Shieldless Knight",
		"description": "The knight is left unprotected without his shield.",
		"update": function() {
			this.shieldRepair = (this.shieldRepair || 0) + 1;

			if (this.shieldRepair > 50) {
				this.shieldRepair = 0;
				this.type = types.shield;
				//console.log("A knight has repaired his shield.");
			}
		},
		"infected": function() {
				//this.shieldRepair = 0; // Don't delete current repair status
				//this.type = types.shield; // Don't auto-repair the shield when infected
				return true;
		}
	},
	"shapeshifter": { //TODO: Fix black flashing caused by this
		"image": "cycle",
		"name": "Shapeshifter",
		"description": "The shapeshifter occasionally changes itself and it's neighbors to a random team.",
		"update": function() {
			this.type.cycle = (this.type.cycle || 0) + 1;

			if (this.type.cycle > 20) {
				this.team = teams[random(0, teams.length-1)];
				ai.infect(this, get(this.x, this.y - 1));
				ai.infect(this, get(this.x, this.y + 1));
				ai.infect(this, get(this.x - 1, this.y));
				ai.infect(this, get(this.x + 1, this.y));
				this.type.cycle = 0;
			}
		}
	},
	"nuke": {
		"image": "nuke",
		"name": "Bomber",
		"description": "The bomber is a ticking time-bomb.",
		"update": function() { //TODO: explosion effect
			if (Math.random() < 0.01) {
				var attacks = 0;
				for (var x = -2; x <= 2; x++) {
					for (var y = -2; y <= 2; y++) {
						var targetDot = get(this.x - x, this.y - y);
						if (targetDot !== undefined) {
							ai.attack(this, targetDot, 1);
							attacks++;
						}
					}
				}

				kill(this);
				//console.log("Bomber went boom. Explosion attacked " + attacks + " dots.");
			}
		}
	},
	"suicide": {
		"image": "suicide",
		"name": "Suicide",
		"description": "The Suicide will explode and spread it's team when infected.",
		"infected": function() { //TODO: explosion/corruption effect
			var infects = 0;
			for (var x = -2; x <= 2; x++) {
				for (var y = -2; y <= 2; y++) {
					var targetDot = get(this.x - x, this.y - y);
					if (targetDot !== undefined) {
						ai.infect(this, targetDot, 1);
						infects++;
					}
					//ai.infect(this, get(this.x - x, this.y - y));
					//infects++;
				}
			}
			kill(this);
			//console.log("Suicide killed itself. It infected " + infects + " dots.");
		}
	}
};
