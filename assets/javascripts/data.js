var baseUrl = "https://www.imdb.com";

var show = {
  name: "Game of Thrones"
};

var episodes = [
  {
    id: "S1E1",
    rating: "9.0",
    name: "Winter Is Coming",
    url: "/title/tt1480055/"
  },
  {
    id: "S1E2",
    rating: "8.8",
    name: "The Kingsroad",
    url: "/title/tt1668746/"
  },
  {
    id: "S1E3",
    rating: "8.7",
    name: "Lord Snow",
    url: "/title/tt1829962/"
  },
  {
    id: "S1E4",
    rating: "8.8",
    name: "Cripples, Bastards, and Broken Things",
    url: "/title/tt1829963/"
  },
  {
    id: "S1E5",
    rating: "9.1",
    name: "The Wolf and the Lion",
    url: "/title/tt1829964/"
  },
  {
    id: "S1E6",
    rating: "9.2",
    name: "A Golden Crown",
    url: "/title/tt1837862/"
  },
  {
    id: "S1E7",
    rating: "9.3",
    name: "You Win or You Die",
    url: "/title/tt1837863/"
  },
  {
    id: "S1E8",
    rating: "9.1",
    name: "The Pointy End",
    url: "/title/tt1837864/"
  },
  {
    id: "S1E9",
    rating: "9.6",
    name: "Baelor",
    url: "/title/tt1851398/"
  },
  {
    id: "S1E10",
    rating: "9.5",
    name: "Fire and Blood",
    url: "/title/tt1851397/"
  },
  {
    id: "S2E1",
    rating: "8.9",
    name: "The North Remembers",
    url: "/title/tt1971833/"
  },
  {
    id: "S2E2",
    rating: "8.6",
    name: "The Night Lands",
    url: "/title/tt2069318/"
  },
  {
    id: "S2E3",
    rating: "8.9",
    name: "What Is Dead May Never Die",
    url: "/title/tt2070135/"
  },
  {
    id: "S2E4",
    rating: "8.9",
    name: "Garden of Bones",
    url: "/title/tt2069319/"
  },
  {
    id: "S2E5",
    rating: "8.9",
    name: "The Ghost of Harrenhal",
    url: "/title/tt2074658/"
  },
  {
    id: "S2E6",
    rating: "9.1",
    name: "The Old Gods and the New",
    url: "/title/tt2085238/"
  },
  {
    id: "S2E7",
    rating: "9.0",
    name: "A Man Without Honor",
    url: "/title/tt2085239/"
  },
  {
    id: "S2E8",
    rating: "8.9",
    name: "The Prince of Winterfell",
    url: "/title/tt2085240/"
  },
  {
    id: "S2E9",
    rating: "9.7",
    name: "Blackwater",
    url: "/title/tt2084342/"
  },
  {
    id: "S2E10",
    rating: "9.4",
    name: "Valar Morghulis",
    url: "/title/tt2112510/"
  },
  {
    id: "S3E1",
    rating: "8.9",
    name: "Valar Dohaeris",
    url: "/title/tt2178782/"
  },
  {
    id: "S3E2",
    rating: "8.6",
    name: "Dark Wings, Dark Words",
    url: "/title/tt2178772/"
  },
  {
    id: "S3E3",
    rating: "8.9",
    name: "Walk of Punishment",
    url: "/title/tt2178802/"
  },
  {
    id: "S3E4",
    rating: "9.6",
    name: "And Now His Watch Is Ended",
    url: "/title/tt2178798/"
  },
  {
    id: "S3E5",
    rating: "9.0",
    name: "Kissed by Fire",
    url: "/title/tt2178788/"
  },
  {
    id: "S3E6",
    rating: "8.9",
    name: "The Climb",
    url: "/title/tt2178812/"
  },
  {
    id: "S3E7",
    rating: "8.8",
    name: "The Bear and the Maiden Fair",
    url: "/title/tt2178814/"
  },
  {
    id: "S3E8",
    rating: "9.1",
    name: "Second Sons",
    url: "/title/tt2178806/"
  },
  {
    id: "S3E9",
    rating: "9.9",
    name: "The Rains of Castamere",
    url: "/title/tt2178784/"
  },
  {
    id: "S3E10",
    rating: "9.2",
    name: "Mhysa",
    url: "/title/tt2178796/"
  },
  {
    id: "S4E01",
    rating: "9.1",
    name: "Two Swords",
    url: "/title/tt2816136/"
  },
  {
    id: "S4E02",
    rating: "9.7",
    name: "The Lion and the Rose",
    url: "/title/tt2832378/"
  },
  {
    id: "S4E03",
    rating: "8.9",
    name: "Breaker of Chains",
    url: "/title/tt2972426/"
  },
  {
    id: "S4E04",
    rating: "8.9",
    name: "Oathkeeper",
    url: "/title/tt2972428/"
  },
  {
    id: "S4E05",
    rating: "8.8",
    name: "First of His Name",
    url: "/title/tt3060856/"
  },
  {
    id: "S4E06",
    rating: "9.7",
    name: "The Laws of Gods and Men",
    url: "/title/tt3060910/"
  },
  {
    id: "S4E07",
    rating: "9.2",
    name: "Mockingbird",
    url: "/title/tt3060876/"
  },
  {
    id: "S4E08",
    rating: "9.7",
    name: "The Mountain and the Viper",
    url: "/title/tt3060782/"
  },
  {
    id: "S4E09",
    rating: "9.6",
    name: "The Watchers on the Wall",
    url: "/title/tt3060858/"
  },
  {
    id: "S4E10",
    rating: "9.7",
    name: "The Children",
    url: "/title/tt3060860/"
  },
  {
    id: "S5E01",
    rating: "8.6",
    name: "The Wars to Come",
    url: "/title/tt3658012/"
  },
  {
    id: "S5E02",
    rating: "8.6",
    name: "The House of Black and White",
    url: "/title/tt3846626/"
  },
  {
    id: "S5E03",
    rating: "8.6",
    name: "High Sparrow",
    url: "/title/tt3866836/"
  },
  {
    id: "S5E04",
    rating: "8.8",
    name: "Sons of the Harpy",
    url: "/title/tt3866838/"
  },
  {
    id: "S5E05",
    rating: "8.7",
    name: "Kill the Boy",
    url: "/title/tt3866840/"
  },
  {
    id: "S5E06",
    rating: "8.1",
    name: "Unbowed, Unbent, Unbroken",
    url: "/title/tt3866842/"
  },
  {
    id: "S5E07",
    rating: "9.1",
    name: "The Gift",
    url: "/title/tt3866846/"
  },
  {
    id: "S5E08",
    rating: "9.9",
    name: "Hardhome",
    url: "/title/tt3866850/"
  },
  {
    id: "S5E09",
    rating: "9.5",
    name: "The Dance of Dragons",
    url: "/title/tt3866826/"
  },
  {
    id: "S5E10",
    rating: "9.0",
    name: "Mother's Mercy",
    url: "/title/tt3866862/"
  },
  {
    id: "S6E01",
    rating: "8.6",
    name: "The Red Woman",
    url: "/title/tt3658014/"
  },
  {
    id: "S6E02",
    rating: "9.5",
    name: "Home",
    url: "/title/tt4077554/"
  },
  {
    id: "S6E03",
    rating: "8.8",
    name: "Oathbreaker",
    url: "/title/tt4131606/"
  },
  {
    id: "S6E04",
    rating: "9.2",
    name: "Book of the Stranger",
    url: "/title/tt4283016/"
  },
  {
    id: "S6E05",
    rating: "9.7",
    name: "The Door",
    url: "/title/tt4283028/"
  },
  {
    id: "S6E06",
    rating: "8.5",
    name: "Blood of My Blood",
    url: "/title/tt4283054/"
  },
  {
    id: "S6E07",
    rating: "8.6",
    name: "The Broken Man",
    url: "/title/tt4283060/"
  },
  {
    id: "S6E08",
    rating: "8.4",
    name: "No One",
    url: "/title/tt4283074/"
  },
  {
    id: "S6E09",
    rating: "9.9",
    name: "Battle of the Bastards",
    url: "/title/tt4283088/"
  },
  {
    id: "S6E10",
    rating: "9.9",
    name: "The Winds of Winter",
    url: "/title/tt4283094/"
  },
  {
    id: "S7E01",
    rating: "8.7",
    name: "Dragonstone",
    url: "/title/tt5654088/"
  },
  {
    id: "S7E02",
    rating: "9.0",
    name: "Stormborn",
    url: "/title/tt5655178/"
  },
  {
    id: "S7E03",
    rating: "9.3",
    name: "The Queen's Justice",
    url: "/title/tt5775840/"
  },
  {
    id: "S7E04",
    rating: "9.8",
    name: "The Spoils of War",
    url: "/title/tt5775846/"
  },
  {
    id: "S7E05",
    rating: "9.0",
    name: "Eastwatch",
    url: "/title/tt5775854/"
  },
  {
    id: "S7E06",
    rating: "9.2",
    name: "Beyond the Wall",
    url: "/title/tt5775864/"
  },
  {
    id: "S7E07",
    rating: "9.6",
    name: "The Dragon and the Wolf",
    url: "/title/tt5775874/"
  }
];
