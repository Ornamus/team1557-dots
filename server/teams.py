import operator

class Team:

    def __init__(self, num, nam, col):
        self.number = num;
        self.name = nam;
        self.color = col;

    def to_string(self):
        return "TeamObject:" + str(self.number) + ":" + self.name + ":" + self.color

teams=[

Team(5557, "BB-R8ERS", "rgb(85, 85, 255)"),
Team(233, "The Pink Team", "rgb(255, 0, 255)"),
Team(801, "Horsepower", "rgb(221, 153, 51)"),
Team(744, "Shark Attack", "rgb(0, 191, 255)"),
Team(2916, "Bionic Bears", "rgb(89, 247,  196)"),
Team(2797, "Knights And Nerdy", "rgb(173, 77,  232)"),
Team(4118, "Roaring Riptide", "rgb(129, 197,  284)"),
Team(1592, "Bionic Tigers", "rgb(255, 121, 70)"),
Team(4065, "Nerds Of Prey", "rgb(0,128, 0)"),
Team(1065, "The Moose", "rgb(35, 39,  97)"),
Team(79, "Krunch", "rgb(63, 115, 191)"),
Team(3242, "ILLUMICATS", "rgb(88, 31,  3)"),
Team(383, "Brazilian Machine", "hsl(0.1,50%,50%)"),
Team(179, "Children O' Swamp", "rgb(3, 86, 16)"),
Team(5412, "Impossible Robotics", "rgb(195, 195,  195)"),
Team(1872, "Steel Lions", "rgb(228, 206,  0)"),
Team(86, "Resistance", "rgb(150, 231,  1)"),
Team(1876, "Beachbotics", "rgb(164, 0,  139)"),
Team(4471, "Spartrons", "rgb(204, 102,  0)"),
Team(4769, "Nerdvana", "rgb(238, 214, 138)"),
Team(1251, "TechTigers", "rgb(56, 55,  52)"),
Team(2383, "Ninjineers", "rgb(242, 168,  13)"),
Team(3932, "Dirty Mechanics", "rgb(128, 64, 64)"),
Team(4064, "InZombiacs", "white"),
Team(2556, "Radioactive Roaches", "rgb(99, 33, 152)"),
Team(4451, "Robotz Garage", "rgb(169, 56, 18)"),
Team(4592, "M3", "rgb(0, 1, 36)"),
Team(1649, "Lakerbotics", "rgb(252, 250, 173)"),
Team(1523, "MARS", "rgb(255, 0, 0)"),
Team(180, "S.P.A.M.", "rgb(169, 105, 86)"),
Team(5145, "WolfBotics", "rgb(30, 30, 255 )"),
Team(945, "Team Banana", "rgb(255, 255, 0)"),
Team(3652, "BotCats", "rgb(173, 173, 173)"),
Team(3556, "GET SMART", "rgb(255, 128, 0)"),
Team(2152, "S*M*A*S*H*", "rgb(174,222, 251)"),
Team(1902, "Exploding Bacon", "rgb(238, 77, 36)"),
Team(5816, "GRA-V", "rgb(36, 120, 52)"),
Team(386, "Voltage", "rgb(253, 197, 28)"),
Team(3502, "Octo(PI)Rates", "rgb(64, 0, 128)"),
Team(624, "Cryptonite", "rgb(29, 29, 29)"),
Team(3627, "Jungle Robotics", "rgb(21, 176, 75)"),
Team(1369, "Minotaur", "rgb(83, 0, 0)"),
Team(1557, "12 Volt Bolt", "rgb(191, 63, 63)")

# Retired Teams. These are teams that were added in past years, but weren't present at the 2016 Orlando Regional.
# If they attend again, they'll be re-added.

# Team(4091, "Drift", "rgb(143, 237, 18)"),
# Team(1604, "MekHeads", "rgb(14, 122, 101)"),
# Team(4833, "Bangarang", "rgb(14, 122, 101)"),
# Team(2425, "Hydra", "rgb(255, 100, 100)"),
# Team(1772, "Trail Blazers", "rgb(95, 150, 241)")
]

teams.sort(key = operator.attrgetter('number'))
