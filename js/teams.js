function shuffle(o){for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); return o;};

addTeam({"number":1523,"name": "Mars", "color": "rgb(255, 0,  0)",	"ai": mainAI});
addTeam({"number":1557,"name": "12VoltBolt",				"color": "rgb(191, 63, 63)",	"ai": mainAI});
addTeam({"number":4451,"name": "Robot'z Garage",		"color": "rgb(169, 56,  18)",	"ai": mainAI});
addTeam({"number":180, "name": "S.P.A.M.",					"color": "rgb(169, 105,  86)",	"ai": mainAI});
addTeam({"number":3556,"name": "GetSmart",				"color": "rgb(255, 128, 0)",	"ai": mainAI});
addTeam({"number":1902,"name": "Exploding Bacon",	"color": "orange",	"ai": mainAI});
addTeam({"number":1592,"name": "Bionic Tigers",			"color": "rgb(255, 121, 70)",	"ai": mainAI});

var ninjas = addTeam({"number":2383,"name": "Ninjineers",				"ai": mainAI, 
"render": function() {
		ninjaT += ninjaD * 0.01;
		if (ninjaT > 0.8 || ninjaT <= 0) {
			ninjaD *= -1;
			if (ninjaT < 0)
				ninjaT = 0;
		}
}}),
	ninjaT = 0
	ninjaD = 1;
Object.defineProperty(ninjas, "color", {
	"get": function () {
		return "rgba(242, 168,  13, "+ninjaT+")";
	}
});

addTeam({"number":386, "name": "Voltage",					"color": "rgb(253, 197,  28)",	"ai": mainAI});
addTeam({"number":945, "name": "Banana",					"color": "rgb(255, 255, 0)",	"ai": mainAI});
addTeam({"number":4769,"name": "Nerdvana",				"color": "rgb(238, 214, 138)",	"ai": mainAI});
addTeam({"number":4064,"name": "InZombiacs",			"color": "white",	"ai": mainAI});
addTeam({"number":4091,"name": "Drift",						"color": "rgb(143, 237,  18)",	"ai": mainAI});
addTeam({"number":3627,"name": "Jungle Robotics",		"color": "rgb(21, 176,  75)",	"ai": mainAI});
addTeam({"number":4065,"name": "NerdsOfPrey",			"color": "rgb(0,128, 0)",	"ai": mainAI});
addTeam({"number":179, "name": "Children O' Swamp",	"color": "rgb(3, 86, 16)",	"ai": mainAI});
addTeam({"number":1604,"name": "MekHeads",				"color": "rgb(14, 122,  101)",	"ai": mainAI});
addTeam({"number":744, "name": "Shark Attack",			"color": "rgb(153, 217, 234)",	"ai": mainAI});
addTeam({"number":4118,"name": "Roaring Riptide",		"color": "rgb(129, 197,  284)",	"ai": mainAI});
addTeam({"number":79,  "name": "Krunch",						"color": "rgb(63, 115, 191)",	"ai": mainAI});
addTeam({"number":5145,"name": "Wolfbotics",				"color": "rgb(30, 30,  255 )",	"ai": mainAI});
addTeam({"number":3932,"name": "DirtyMechanics",		"color": "blue",	"ai": mainAI});
addTeam({"number":4592,"name": "M3",						"color": "rgb(0, 1,  36)",	"ai": mainAI});
addTeam({"number":3502,"name": "Octopirates",		"color": "rgb(64, 0, 128)",	"ai": mainAI});
addTeam({"number":2797,"name": "Knights And Nerdy",	"color": "rgb(173, 77,  232)",	"ai": mainAI});
addTeam({"number":233, "name": "Pink",						"color": "rgb(255, 0, 255)",	"ai": mainAI});
addTeam({"number":3652,"name": "Botcats",				"color": "rgb(173, 173,  173)",	"ai": mainAI});
addTeam({"number":1251,"name": "Tech Tigers",			"color": "rgb(56, 55,  52)",	"ai": mainAI});
addTeam({"number":624, "name": "Cryptonite",				"color": "rgb(29, 29,  29)",	"ai": mainAI});
addTeam({"number":4833, "name": "Bangarang",				"color": "rgb(99, 38,  153)",	"ai": mainAI});
addTeam({"number":3242, "name": "IllumiCats",				"color": "rgb(88, 31,  3)",	"ai": mainAI});
addTeam({"number":2425, "name": "Hydra",				"color": "rgb(255, 100,  100)",	"ai": mainAI});
addTeam({"number":1369, "name": "Minotaur",				"color": "rgb(83, 0,  0)",	"ai": mainAI});
var br = addTeam({"number":383, "name": "Brazilian machine",					"ai": mainAI});
var colorI = 0;
Object.defineProperty(br, "color", {get: function() {
	colorI += 0.1;
	colorI = colorI % 360;
	return "hsl(" + colorI + ",50%,50%)";
}});
addTeam({"number":1872, "name": "Yellow Fever",				"color": "rgb(183, 137,  0)",	"ai": mainAI});
addTeam({"number":86, "name": "Ohmer",				"color": "rgb(150, 231,  1)",	"ai": mainAI});
addTeam({"number":2556, "name": "Radioactive Roaches",				"color": "rgb(99, 33,  152)",	"ai": mainAI});
addTeam({"number":2152, "name": "S.M.A.S.H.",				"color": "rgb(174,222,  251)",	"ai": mainAI});
addTeam({"number":1649, "name": "E.M.S.",				"color": "rgb(252, 250,  173)",	"ai": mainAI});
addTeam({"number":2916, "name": "Bionic Bears",				"color": "rgb(89, 247,  196)",	"ai": mainAI});
addTeam({"number":1772, "name": "Trail Blazers",				"color": "rgb(95, 150,  241)",	"ai": mainAI});
addTeam({"number":1876, "name": "BeachBotics",				"color": "rgb(164, 0,  139)",	"ai": mainAI});
addTeam({"number": 4471, "name": "Spartrons",				"color": "rgb(204, 102,  0)",	"ai": mainAI});
addTeam({"number": 1065, "name": "Moose",				"color": "rgb(35, 39,  97)",	"ai": mainAI});

teams = shuffle(teams);