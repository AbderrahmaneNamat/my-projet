const famousAnime = [
  {
    animeName: "One Piece",
    title: "One Piece",
    smallDescription: "Monkey D. Luffy and his crew search for the ultimate treasure, the One Piece.",
    categorie: "Adventure, Action, Fantasy",
    studio: "Toei Animation"
  },
  {
    animeName: "Naruto",
    title: "Naruto",
    smallDescription: "A young ninja strives to become the strongest ninja and gain recognition from his village.",
    categorie: "Action, Adventure, Shonen",
    studio: "Studio Pierrot"
  },
  {
    animeName: "Bleach",
    title: "Bleach",
    smallDescription: "Ichigo Kurosaki gains the powers of a Soul Reaper and fights evil spirits called Hollows.",
    categorie: "Action, Supernatural, Shonen",
    studio: "Studio Pierrot"
  },
  {
    animeName: "Dragon Ball",
    title: "Dragon Ball",
    smallDescription: "Follow Goku’s adventures as he trains and searches for the Dragon Balls.",
    categorie: "Action, Adventure, Martial Arts",
    studio: "Toei Animation"
  },
  {
    animeName: "Attack on Titan",
    title: "Shingeki no Kyojin",
    smallDescription: "Humanity fights for survival against giant humanoid Titans.",
    categorie: "Action, Dark Fantasy, Drama",
    studio: "Wit Studio / MAPPA"
  },
  {
    animeName: "My Hero Academia",
    title: "Boku no Hero Academia",
    smallDescription: "In a world of superheroes, Izuku Midoriya trains to become the number one hero.",
    categorie: "Action, Superhero, Shonen",
    studio: "Bones"
  },
  {
    animeName: "Demon Slayer",
    title: "Kimetsu no Yaiba",
    smallDescription: "Tanjiro becomes a demon slayer to save his sister and avenge his family.",
    categorie: "Action, Adventure, Dark Fantasy",
    studio: "Ufotable"
  },
  {
    animeName: "Death Note",
    title: "Death Note",
    smallDescription: "A high school student discovers a notebook that kills anyone whose name is written in it.",
    categorie: "Mystery, Supernatural, Thriller",
    studio: "Madhouse"
  },
  {
    animeName: "Fullmetal Alchemist: Brotherhood",
    title: "Fullmetal Alchemist: Brotherhood",
    smallDescription: "Two brothers use alchemy to restore their bodies after a failed experiment.",
    categorie: "Adventure, Fantasy, Shonen",
    studio: "Bones"
  },
  {
    animeName: "One Punch Man",
    title: "One Punch Man",
    smallDescription: "A superhero who can defeat any opponent with a single punch struggles with boredom.",
    categorie: "Action, Comedy, Superhero",
    studio: "Madhouse / J.C.Staff"
  },
  {
    animeName: "Tokyo Revengers",
    title: "Tokyo Revengers",
    smallDescription: "A man travels back in time to save his ex-girlfriend and change the fate of a gang.",
    categorie: "Action, Drama, Time Travel",
    studio: "Liden Films"
  },
  {
    animeName: "Jujutsu Kaisen",
    title: "Jujutsu Kaisen",
    smallDescription: "Yuji Itadori fights curses with the help of powerful jujutsu sorcerers.",
    categorie: "Action, Supernatural, Shonen",
    studio: "MAPPA"
  },
  {
    animeName: "Hunter x Hunter (2011)",
    title: "Hunter x Hunter",
    smallDescription: "Gon Freecss becomes a Hunter to find his missing father and faces many challenges.",
    categorie: "Adventure, Action, Shonen",
    studio: "Madhouse"
  },
  {
    animeName: "Fairy Tail",
    title: "Fairy Tail",
    smallDescription: "A guild of powerful wizards embark on adventures and face dark enemies.",
    categorie: "Action, Adventure, Fantasy",
    studio: "A-1 Pictures / Satelight"
  },
  {
    animeName: "Black Clover",
    title: "Black Clover",
    smallDescription: "Asta, a boy born without magic, aims to become the Wizard King.",
    categorie: "Action, Fantasy, Shonen",
    studio: "Studio Pierrot"
  },
  {
    animeName: "Sword Art Online",
    title: "Sword Art Online",
    smallDescription: "Players get trapped in a virtual reality game and must clear it to survive.",
    categorie: "Action, Adventure, Fantasy",
    studio: "A-1 Pictures"
  },
  {
    animeName: "Gintama",
    title: "Gintama",
    smallDescription: "A samurai in an alternate-history Edo deals with aliens, odd jobs, and comedy.",
    categorie: "Action, Comedy, Sci-Fi",
    studio: "Sunrise"
  },
  {
    animeName: "Haikyu!!",
    title: "Haikyu!!",
    smallDescription: "Shoyo Hinata strives to become a top volleyball player despite his short stature.",
    categorie: "Sports, Comedy, Shonen",
    studio: "Production I.G"
  },
  {
    animeName: "Kingdom",
    title: "Kingdom",
    smallDescription: "Set in ancient China, a young boy fights to become a great general.",
    categorie: "Action, Historical, Drama",
    studio: "Pierrot / Studio Signpost"
  },
  {
    animeName: "Inuyasha",
    title: "Inuyasha",
    smallDescription: "A modern girl travels back to the Sengoku period and teams up with half-demon Inuyasha.",
    categorie: "Adventure, Fantasy, Romance",
    studio: "Sunrise"
  },
  {
    animeName: "Rurouni Kenshin",
    title: "Rurouni Kenshin",
    smallDescription: "A wandering swordsman seeks redemption for his past as an assassin.",
    categorie: "Action, Historical, Romance",
    studio: "Studio Deen"
  },
  {
    animeName: "Blue Exorcist",
    title: "Ao no Exorcist",
    smallDescription: "A boy discovers he is the son of Satan and trains to become an exorcist.",
    categorie: "Action, Supernatural, Fantasy",
    studio: "A-1 Pictures"
  },
  {
    animeName: "Soul Eater",
    title: "Soul Eater",
    smallDescription: "Students at a school for weapons and meisters fight evil beings called Kishin.",
    categorie: "Action, Supernatural, Shonen",
    studio: "Bones"
  },
  {
    animeName: "Noragami",
    title: "Noragami",
    smallDescription: "A minor god takes odd jobs to gain followers and faces supernatural threats.",
    categorie: "Action, Comedy, Supernatural",
    studio: "Bones"
  },
  {
    animeName: "Vagabond",
    title: "Vagabond",
    smallDescription: "The story of legendary samurai Miyamoto Musashi’s path to becoming the greatest swordsman.",
    categorie: "Historical, Action, Drama",
    studio: "Madhouse"
  },
  {
    animeName: "Bakuman",
    title: "Bakuman",
    smallDescription: "Two young creators aim to become top manga artists while navigating the industry.",
    categorie: "Comedy, Drama, Slice of Life",
    studio: "J.C.Staff"
  },
  {
    animeName: "Shaman King",
    title: "Shaman King",
    smallDescription: "Shamans fight in a tournament to become the Shaman King and reshape the world.",
    categorie: "Action, Adventure, Fantasy",
    studio: "Xebec / Bridge"
  },
  {
    animeName: "Akira",
    title: "Akira",
    smallDescription: "In post-apocalyptic Tokyo, biker gangs and psychic powers collide, shaping the fate of the city.",
    categorie: "Sci-Fi, Action, Cyberpunk",
    studio: "Tokyo Movie Shinsha (TMS)"
  },
  {
    animeName: "JoJo’s Bizarre Adventure",
    title: "JoJo’s Bizarre Adventure",
    smallDescription: "Generations of the Joestar family battle supernatural enemies using unique powers.",
    categorie: "Action, Adventure, Supernatural",
    studio: "David Production"
  }
];
export default famousAnime;