// ============================================
// NEO ARCADE - GAMES DATA & RENDERING
// ============================================

// ============================================
// GAMES DATABASE
// ============================================

const gamesData = [
  {
    id: 1,
    slug: "subway-surfers",
    title: "SUBWAY SURFERS",
    description: "Experience the ultimate endless running adventure in Subway Surfers! Dash through bustling subway tracks, dodge speeding trains, and leap over challenging obstacles in this fast-paced urban adventure. Guide your character through colorful city environments while collecting coins, power-ups, and special items that boost your performance. Master the art of quick reflexes as you surf through subway systems, grind on train tops, and navigate through increasingly difficult obstacles. With smooth swipe controls, stunning 3D graphics, and addictive gameplay mechanics, Subway Surfers delivers an exciting endless runner experience that keeps you coming back for more. Can you achieve the highest score and become the ultimate subway surfer?",
    shortDescription: "Run through subway tracks, dodge trains and obstacles!",
    category: "action",
    thumbnail: "assets/images/subway-surfers.jpg",
    iframeUrl: "https://www.miniplay.com/embed/subway-surfers",
    instructions: [
      "Swipe left/right to change lanes",
      "Swipe up to jump over obstacles", 
      "Swipe down to slide under barriers",
      "Collect coins and power-ups",
      "Avoid trains and obstacles",
      "Use hoverboards for protection"
    ],
    rating: 4.8,
    likes: 1250,
    tags: ["running", "endless", "action", "3D", "urban", "coins", "power-ups"],
    keywords: ["subway surfers game", "endless runner online", "train dodging game", "urban running game"],
    dateAdded: "2024-01-15",
    featured: true
  },
  {
    id: 2,
    slug: "space-invaders",
    title: "Space Invaders",
    description: "Defend Earth from alien invasion in this classic arcade-style space shooter! Experience the nostalgic thrill of retro gaming with modern enhancements in Retro Space. Command your powerful spaceship through waves of increasingly challenging alien enemies, each with unique attack patterns and defensive capabilities. Master precision shooting mechanics while dodging enemy fire in this fast-paced cosmic battle. Collect power-ups to upgrade your weapons, unlock special abilities, and boost your firepower against massive boss enemies. With retro pixel art graphics, synthesizer soundtrack, and classic arcade gameplay, Retro Space delivers an authentic vintage gaming experience with contemporary polish. Can you save humanity from the alien threat?",
    shortDescription: "Classic space shooter game with retro style remake!",
    category: "shooter",
    thumbnail: "assets/images/space-invaders.jpg",
    iframeUrl: "https://www.miniplay.com/embed/space-invaders",
    instructions: [
      "Use arrow keys to move your ship",
      "Press spacebar to shoot lasers",
      "Destroy all alien invaders",
      "Collect power-ups for upgrades",
      "Avoid enemy projectiles",
      "Defeat boss enemies for bonuses"
    ],
    rating: 4.6,
    likes: 980,
    tags: ["shooting", "space", "retro", "aliens", "arcade", "classic", "pixel-art"],
    keywords: ["space invaders game", "retro arcade shooter", "alien shooting game", "classic space game"],
    dateAdded: "2024-01-12",
    featured: true
  },
  {
    id: 3,
    slug: "moto-x3m",
    title: "Moto X3M",
    description: "Enter the future of high-speed racing in Cyber Racing 3D! Experience adrenaline-pumping races through neon-lit cyberpunk cities with cutting-edge vehicles and futuristic tracks. Navigate through challenging circuits filled with sharp turns, boost pads, and dynamic obstacles while competing against skilled AI opponents. Customize your cyber vehicle with advanced upgrades, nitro systems, and performance enhancements to gain the competitive edge. Master drift techniques, perfect your racing lines, and utilize strategic boost timing to dominate the leaderboards. With stunning visual effects, electronic soundtrack, and realistic physics, Cyber Racing delivers an immersive futuristic racing experience that pushes your driving skills to the limit.",
    shortDescription: "Experience high-speed racing thrills in futuristic cities!",
    category: "racing",
    thumbnail: "assets/images/moto-x3m.webp",
    iframeUrl: "https://www.miniplay.com/embed/moto-x3m",
    instructions: [
      "Use arrow keys or WASD to steer",
      "Press spacebar for nitro boost",
      "Navigate through checkpoints",
      "Avoid obstacles and barriers",
      "Use drift for sharp corners",
      "Collect boost pads for speed"
    ],
    rating: 4.7,
    likes: 1105,
    tags: ["racing", "3D", "cyberpunk", "speed", "cars", "futuristic", "nitro"],
    keywords: ["cyber racing game", "futuristic car racing", "3D racing online", "cyberpunk racing"],
    dateAdded: "2024-01-10",
    featured: false
  },
  {
    id: 4,
    slug: "pixel-shooter",
    title: "Pixel Shooter",
    description: "Experience intense pixel-style shooting action in this retro-inspired combat game! Battle through waves of enemies in classic 8-bit environments with smooth pixel art graphics and challenging gameplay. Master various weapons including pistols, rifles, and special power-ups while navigating through multiple levels filled with dangerous foes. Test your reflexes and shooting skills as you face increasingly difficult enemy patterns and boss battles. With nostalgic pixel graphics, energetic chiptune soundtrack, and tight responsive controls, Pixel Shooter delivers an authentic retro shooting experience that combines classic arcade action with modern game design. Can you survive all the levels and defeat the final boss?",
    shortDescription: "Retro pixel-style shooter with intense combat action!",
    category: "shooter",
    thumbnail: "assets/images/pixel-shooter.avif",
    iframeUrl: "https://www.crazygames.com/embed/pixel-shooter",
    instructions: [
      "Use arrow keys to move character",
      "Press spacebar to shoot",
      "Z key for special weapons",
      "X key to use power-ups",
      "Collect ammo and health packs",
      "Defeat all enemies to advance"
    ],
    rating: 4.5,
    likes: 875,
    tags: ["shooter", "pixel", "retro", "action", "combat", "arcade", "8-bit"],
    keywords: ["pixel shooter game", "retro shooter online", "pixel combat game", "8-bit shooting"],
    dateAdded: "2025-06-27",
    featured: false
  },
  {
    id: 5,
    slug: "colortris",
    title: "ColorTris",
    description: "Experience the classic block puzzle with a vibrant color twist in ColorTris! This innovative take on the beloved puzzle game combines traditional tetromino mechanics with exciting color-matching elements. Arrange falling colored blocks to create complete lines while strategically matching colors for bonus points and special effects. Master the art of color coordination as you clear multiple lines simultaneously and trigger spectacular color cascades. With smooth animations, dynamic color schemes, and increasingly challenging levels, ColorTris offers a fresh and engaging puzzle experience that tests both your spatial reasoning and color matching skills. Can you achieve the perfect color harmony and reach the highest score?",
    shortDescription: "Color-matching puzzle game with classic block mechanics!",
    category: "puzzle",
    thumbnail: "assets/images/colortris-demo.avif",
    iframeUrl: "https://www.crazygames.com/embed/colortris-demo",
    instructions: [
      "Use arrow keys to move pieces",
      "Up arrow to rotate pieces",
      "Down arrow for soft drop",
      "Spacebar for hard drop",
      "Match colors for bonus points",
      "Clear lines to prevent stack overflow"
    ],
    rating: 4.9,
    likes: 1580,
    tags: ["puzzle", "tetris", "color", "blocks", "strategy", "matching", "brain-teaser"],
    keywords: ["colortris game", "color tetris online", "color block puzzle", "tetris color matching"],
    dateAdded: "2025-06-25",
    featured: true
  },
  {
    id: 6,
    slug: "street-fighter-2",
    title: "Street Fighter 2",
    description: "Step into the neon-soaked world of Synthwave Fighter, where classic fighting game mechanics meet retro-futuristic aesthetics! Engage in intense one-on-one combat with unique fighters, each possessing distinctive fighting styles, special moves, and devastating combo attacks. Master complex input combinations to execute powerful special attacks, counter enemy moves, and chain together impressive combo sequences. Battle through arcade mode, survive challenging survival rounds, or compete in tournament brackets against increasingly skilled opponents. With authentic retro-inspired visuals, synthesizer soundtrack, and responsive controls, Synthwave Fighter delivers a nostalgic fighting game experience that captures the essence of classic arcade fighters while adding modern polish and depth.",
    shortDescription: "Retro style fighting game with synthwave music!",
    category: "fighting",
    thumbnail: "assets/images/street-fighter2.avif",
    iframeUrl: "https://www.crazygames.com/embed/street-fighter-2",
    instructions: [
      "Arrow keys for movement",
      "A, S, D keys for attacks",
      "Combine directions + attack for specials",
      "Block with down + back",
      "Build up super meter for ultimates",
      "Master combo timing for maximum damage"
    ],
    rating: 4.4,
    likes: 756,
    tags: ["fighting", "2D", "synthwave", "combos", "arcade", "retro", "martial-arts"],
    keywords: ["synthwave fighter game", "2D fighting game", "retro fighter online", "arcade fighting"],
    dateAdded: "2024-01-03",
    featured: false
  },
  {
    id: 7,
    slug: "tower-swap",
    title: "Tower Swap",
    description: "Challenge your mind with Tower Swap, an innovative puzzle game that combines strategic thinking with spatial reasoning! Move and swap colorful tower blocks to create matching patterns, clear objectives, and solve increasingly complex puzzles. Each level presents unique challenges where you must carefully plan your moves to arrange towers in the correct configuration. Master the art of strategic swapping as you navigate through hundreds of brain-teasing levels with different tower arrangements, color combinations, and special power-ups. With smooth animations, satisfying puzzle mechanics, and progressively challenging gameplay, Tower Swap offers hours of engaging mental exercise that will test your logic skills and pattern recognition abilities. Can you become the ultimate tower master?",
    shortDescription: "Strategic puzzle game with tower swapping mechanics!",
    category: "puzzle",
    thumbnail: "assets/images/tower-swap.avif",
    iframeUrl: "https://www.crazygames.com/embed/tower-swap",
    instructions: [
      "Click and drag to move towers",
      "Swap towers to create patterns",
      "Match colors and shapes",
      "Complete level objectives",
      "Plan moves strategically",
      "Use power-ups wisely"
    ],
    rating: 4.4,
    likes: 987,
    tags: ["puzzle", "strategy", "tower", "swap", "logic", "brain-teaser", "matching"],
    keywords: ["tower swap game", "tower puzzle online", "strategic puzzle game", "tower matching"],
    dateAdded: "2025-06-28",
    featured: false
  },
  {
    id: 8,
    slug: "ball-block-maze",
    title: "Ball Block Maze",
    description: "Navigate your ball through challenging block mazes in this addictive puzzle game! Guide the rolling ball through intricate maze structures filled with movable blocks, switches, and clever obstacles. Each level presents unique challenges that require strategic thinking and precise movement to solve. Push and pull blocks to create pathways, activate pressure plates, and unlock new routes through the maze. Master the physics of ball movement as you roll through narrow passages, around corners, and over ramps to reach the target destination. With increasingly complex maze designs, interactive block mechanics, and satisfying puzzle solutions, Ball Block Maze offers hours of brain-teasing entertainment that tests your spatial reasoning and problem-solving abilities. Can you roll your way to victory?",
    shortDescription: "Roll your ball through challenging block mazes!",
    category: "puzzle",
    thumbnail: "assets/images/ball-block-maze.avif",
    iframeUrl: "https://www.crazygames.com/embed/ball-block-maze",
    instructions: [
      "Use arrow keys to roll the ball",
      "Push blocks to create pathways",
      "Activate switches and pressure plates",
      "Navigate through maze obstacles",
      "Reach the target to complete level",
      "Plan your moves strategically"
    ],
    rating: 4.3,
    likes: 876,
    tags: ["puzzle", "maze", "ball", "blocks", "physics", "strategy", "brain-teaser"],
    keywords: ["ball block maze game", "ball maze puzzle", "block puzzle maze", "rolling ball game"],
    dateAdded: "2025-06-30",
    featured: false
  },
  {
    id: 9,
    slug: "firestone-idle-rpg",
    title: "FIRESTONE IDLE RPG",
    description: "Build your ultimate RPG adventure in this epic idle game! Collect heroes, upgrade equipment, and battle through countless dungeons while your party continues fighting even when offline.",
    shortDescription: "Epic idle RPG with heroes and dungeons!",
    category: "action",
    thumbnail: "assets/images/firestone-idle-rpg.webp",
    iframeUrl: "https://www.miniplay.com/embed/firestone-idle-rpg",
    instructions: ["Click to attack enemies", "Recruit and upgrade heroes", "Collect loot and rewards", "Progress through dungeons", "Manage your party composition"],
    rating: 4.7,
    likes: 892,
    tags: ["action", "RPG", "idle", "heroes", "dungeons", "adventure"],
    keywords: ["firestone idle rpg", "idle action game", "rpg adventure"],
    dateAdded: "2024-01-20",
    featured: true
  },
  {
    id: 10,
    slug: "heroes-of-war",
    title: "HEROES OF WAR",
    description: "Command your army in epic strategic battles! Lead heroic warriors against enemy forces in this action-packed military strategy game with real-time combat.",
    shortDescription: "Strategic warfare with heroic commanders!",
    category: "action",
    thumbnail: "assets/images/heroes-of-war.jpg",
    iframeUrl: "https://www.miniplay.com/embed/heroes-of-war",
    instructions: ["Deploy troops strategically", "Use special hero abilities", "Capture enemy territories", "Upgrade your army", "Complete campaign missions"],
    rating: 4.5,
    likes: 756,
    tags: ["action", "strategy", "war", "heroes", "military", "tactical"],
    keywords: ["heroes of war game", "war strategy action", "military heroes"],
    dateAdded: "2024-01-18",
    featured: false
  },
  {
    id: 11,
    slug: "sandbox-city",
    title: "Sandbox City",
    description: "Build and destroy in the ultimate urban sandbox playground! Create chaos in a realistic city environment filled with cars, zombies, ragdolls, and endless destruction possibilities. Experience realistic physics as you spawn vehicles, unleash zombie hordes, and watch ragdoll characters interact with your creations. Experiment with different scenarios - crash cars into buildings, create zombie apocalypse scenes, or simply enjoy the satisfying physics-based destruction. With a vast array of objects, weapons, vehicles, and characters at your disposal, Sandbox City offers unlimited creative freedom in an urban setting. Design your own action sequences, test explosive scenarios, and share your most creative destruction scenes. The city is your playground - what chaos will you create?",
    shortDescription: "Urban sandbox with cars, zombies and ragdolls!",
    category: "action",
    thumbnail: "assets/images/sandbox-city.avif",
    iframeUrl: "https://www.crazygames.com/embed/sandbox-city---cars-zombies-ragdolls",
    instructions: ["Spawn cars and vehicles", "Create zombie scenarios", "Experiment with ragdoll physics", "Use destruction tools", "Build urban scenes", "Share your creations"],
    rating: 4.6,
    likes: 1234,
    tags: ["action", "sandbox", "physics", "cars", "zombies", "ragdolls", "destruction", "urban"],
    keywords: ["sandbox city game", "urban sandbox physics", "cars zombies ragdolls", "city destruction game"],
    dateAdded: "2025-07-01",
    featured: true
  },
  {
    id: 12,
    slug: "gridpunk-3v3-battle-royale",
    title: "Gridpunk - 3v3 Battle Royale",
    description: "Enter the cyberpunk grid arena for intense 3v3 team battles! Experience fast-paced tactical combat in a futuristic digital battlefield where strategy meets action. Form your squad of three players and engage in thrilling team-based combat against rival squads in various game modes. Master unique character abilities, coordinate tactical maneuvers, and dominate the neon-lit grid environments. Each match features dynamic gameplay with power-ups, strategic positioning, and team coordination being key to victory. With its distinctive cyberpunk aesthetic, smooth multiplayer mechanics, and competitive 3v3 format, Gridpunk delivers an adrenaline-pumping battle royale experience that emphasizes teamwork and skill. Can your squad rise to the top of the digital arena and claim victory in the grid?",
    shortDescription: "Cyberpunk 3v3 team battle royale action!",
    category: "action",
    thumbnail: "assets/images/gridpunk---3v3-battle.avif",
    iframeUrl: "https://www.crazygames.com/embed/gridpunk---3v3-battle-royale",
    instructions: ["Form a team of 3 players", "Coordinate with teammates", "Use character abilities strategically", "Control key map areas", "Eliminate enemy squads", "Work together to win"],
    rating: 4.4,
    likes: 687,
    tags: ["action", "battle royale", "3v3", "multiplayer", "cyberpunk", "team", "strategy", "grid"],
    keywords: ["gridpunk 3v3 battle royale", "cyberpunk team battle", "3v3 multiplayer action", "grid battle arena"],
    dateAdded: "2025-07-02",
    featured: false
  },
  {
    id: 13,
    slug: "heroes-assemble",
    title: "Heroes Assemble",
    description: "Unite the greatest heroes from across the multiverse in this epic action-adventure game! Assemble your ultimate team of legendary champions, each with unique powers, abilities, and fighting styles. Lead your assembled heroes through challenging missions, epic boss battles, and cooperative team-based combat scenarios. Strategically combine different hero abilities to create devastating combo attacks and overcome seemingly impossible odds. Recruit iconic heroes from various universes, upgrade their powers, and unlock new abilities as you progress through an engaging storyline filled with action, adventure, and heroic moments. With dynamic team-based gameplay, stunning visual effects, and an ever-expanding roster of heroes, Heroes Assemble delivers an unforgettable superhero experience that celebrates the power of teamwork and heroism. Can you bring together the ultimate hero team and save the multiverse?",
    shortDescription: "Assemble legendary heroes for epic team battles!",
    category: "action",
    thumbnail: "assets/images/heroes-assemble.avif",
    iframeUrl: "https://www.crazygames.com/embed/heroes-assemble",
    instructions: ["Recruit legendary heroes", "Form your ultimate team", "Combine hero abilities strategically", "Complete epic missions", "Upgrade hero powers", "Master team-based combat"],
    rating: 4.3,
    likes: 543,
    tags: ["action", "heroes", "team", "multiverse", "adventure", "superhero", "cooperative", "strategy"],
    keywords: ["heroes assemble game", "superhero team action", "hero collection game", "multiverse heroes"],
    dateAdded: "2025-07-03",
    featured: false
  },
  {
    id: 14,
    slug: "call-of-war",
    title: "CALL OF WAR",
    description: "Command nations in World War II strategy! Lead your country through historical battles in this massive multiplayer strategy game with real-time warfare.",
    shortDescription: "WWII strategy with real-time combat!",
    category: "action",
    thumbnail: "assets/images/call-of-war.webp",
    iframeUrl: "https://www.miniplay.com/embed/call-of-war",
    instructions: ["Manage your nation's resources", "Research military technologies", "Form alliances with players", "Conquer enemy territories", "Win the global war"],
    rating: 4.5,
    likes: 823,
    tags: ["action", "strategy", "war", "WWII", "multiplayer", "historical"],
    keywords: ["call of war game", "wwii strategy action", "world war 2 game"],
    dateAdded: "2024-01-10",
    featured: false
  },
  {
    id: 15,
    slug: "age-of-tanks-warriors-td-war",
    title: "Age of Tanks Warriors: TD War",
    description: "Command powerful tank armies in this epic tower defense warfare game! Deploy strategic tank units, build defensive positions, and engage in massive armored battles across various battlefields. Experience intense tactical combat as you manage resources, upgrade your tank arsenal, and defend against waves of enemy forces. Master different tank classes including heavy artillery, fast scouts, and armored destroyers, each with unique abilities and strategic roles. Plan your defensive strategies, position your tanks wisely, and coordinate attacks to dominate the battlefield. With realistic tank combat mechanics, strategic depth, and challenging campaign missions, Age of Tanks Warriors delivers an immersive military strategy experience that tests your tactical skills and strategic thinking. Can you lead your tank warriors to ultimate victory?",
    shortDescription: "Strategic tank warfare with tower defense mechanics!",
    category: "action",
    thumbnail: "assets/images/age-of-tanks-warriors-td-war.avif",
    iframeUrl: "https://www.crazygames.com/embed/age-of-tanks-warriors-td-war",
    instructions: ["Deploy tank units strategically", "Build defensive positions", "Upgrade tank weapons and armor", "Manage battlefield resources", "Coordinate tank formations", "Defeat enemy waves"],
    rating: 4.2,
    likes: 456,
    tags: ["action", "strategy", "tanks", "tower defense", "warfare", "military", "tactical"],
    keywords: ["age of tanks warriors", "tank tower defense", "military strategy game", "tank warfare"],
    dateAdded: "2025-07-04",
    featured: false
  },
  {
    id: 16,
    slug: "raid-heroes-total-war",
    title: "Raid Heroes: Total War",
    description: "Lead massive armies in epic total war campaigns! Command legendary heroes and vast military forces in large-scale strategic battles across multiple theaters of war. Assemble diverse armies including infantry, cavalry, siege engines, and powerful hero units, each with unique abilities and tactical advantages. Engage in complex campaign management, diplomatic negotiations, and resource allocation while planning massive military operations. Experience epic battles with hundreds of units, realistic combat mechanics, and strategic depth that rewards tactical thinking and military leadership. Conquer territories, forge alliances, and build your empire through conquest and diplomacy. With stunning battle visuals, deep strategic gameplay, and engaging campaign progression, Raid Heroes: Total War delivers the ultimate military strategy experience for commanders seeking epic warfare challenges.",
    shortDescription: "Epic total war strategy with massive armies!",
    category: "action",
    thumbnail: "assets/images/raid-heroes-total-war.avif",
    iframeUrl: "https://www.crazygames.com/embed/raid-heroes-total-war-czb",
    instructions: ["Command massive armies", "Deploy hero units strategically", "Manage campaign resources", "Engage in diplomatic relations", "Conquer enemy territories", "Build your empire"],
    rating: 4.6,
    likes: 934,
    tags: ["action", "strategy", "total war", "heroes", "armies", "campaign", "empire"],
    keywords: ["raid heroes total war", "total war strategy", "epic army battles", "military campaign"],
    dateAdded: "2025-07-05",
    featured: true
  },
  {
    id: 17,
    slug: "fortzone-battle-royale",
    title: "Fortzone Battle Royale",
    description: "Drop into the ultimate battle royale arena in Fortzone! Experience intense last-player-standing combat in a dynamic fortress environment where building and shooting skills determine survival. Gather resources, construct defensive fortifications, and engage in fast-paced combat against up to 100 players in an ever-shrinking battlefield. Master the unique building mechanics to create tactical advantages, construct protective barriers, and gain strategic high ground over your opponents. Collect powerful weapons, rare equipment, and valuable resources while navigating through diverse terrain and urban environments. With dynamic weather systems, destructible environments, and constantly evolving gameplay mechanics, Fortzone Battle Royale offers an adrenaline-pumping survival experience that combines strategic building with intense combat action. Can you outlast all opponents and claim victory in the fortzone?",
    shortDescription: "Build, fight, and survive in fortress battle royale!",
    category: "action",
    thumbnail: "assets/images/fortzone-battle-royale.avif",
    iframeUrl: "https://www.crazygames.com/embed/fortzone-battle-royale-xkd",
    instructions: ["Gather building materials", "Construct defensive fortifications", "Collect weapons and equipment", "Stay within the safe zone", "Build tactical advantages", "Eliminate all opponents"],
    rating: 4.7,
    likes: 1567,
    tags: ["action", "battle royale", "building", "survival", "fortress", "multiplayer", "competitive"],
    keywords: ["fortzone battle royale", "building battle royale", "fortress survival game", "construction combat"],
    dateAdded: "2025-07-06",
    featured: true
  },
  {
    id: 18,
    slug: "the-unfair-platformer",
    title: "The Unfair Platformer",
    description: "Prepare for the most challenging and deliberately unfair platforming experience ever created! Navigate through deviously designed levels filled with hidden traps, misleading visual cues, and intentionally frustrating obstacles that will test your patience and determination. Experience a unique blend of humor and difficulty as you encounter unexpected deaths, fake platforms, invisible barriers, and cleverly disguised hazards. Each level is crafted to subvert your expectations and challenge conventional platforming logic with creative and often hilarious death traps. Master precise timing, develop pattern recognition skills, and learn from countless failures as you progress through increasingly diabolical level designs. With retro pixel graphics, sarcastic humor, and genuinely challenging gameplay mechanics, The Unfair Platformer delivers a memorable gaming experience that celebrates the art of creative difficulty and player perseverance. Can you overcome the ultimate unfair challenge?",
    shortDescription: "Deliberately challenging platformer with creative traps!",
    category: "action",
    thumbnail: "assets/images/the-unfair-platformer.avif",
    iframeUrl: "https://www.crazygames.com/embed/the-unfair-platformer",
    instructions: ["Expect the unexpected", "Learn from every death", "Question everything you see", "Master precise timing", "Persevere through frustration", "Embrace the challenge"],
    rating: 4.4,
    likes: 789,
    tags: ["action", "platformer", "challenging", "traps", "difficulty", "humor", "retro"],
    keywords: ["unfair platformer game", "challenging platform game", "difficult platformer", "trap platformer"],
    dateAdded: "2025-07-07",
    featured: false
  },
  {
    id: 19,
    slug: "street-fighter-simulator",
    title: "Street Fighter Simulator",
    description: "Experience the ultimate street fighting simulation with realistic combat mechanics and authentic martial arts techniques! Train in various fighting disciplines, master complex combo systems, and compete against skilled opponents in dynamic street fighting environments. Learn traditional martial arts moves, special techniques, and devastating finishing combinations while developing your own unique fighting style. Engage in intense one-on-one battles with responsive controls, fluid animations, and realistic impact physics that capture the essence of street fighting culture. Customize your fighter's appearance, abilities, and fighting techniques as you progress through challenging tournaments and street fight scenarios. With detailed character progression, multiple fighting styles, and authentic street fighting atmosphere, Street Fighter Simulator delivers an immersive combat experience that celebrates martial arts mastery and competitive fighting spirit. Can you become the ultimate street fighting champion?",
    shortDescription: "Realistic street fighting simulation with martial arts!",
    category: "action",
    thumbnail: "assets/images/street-fighter-simulator.avif",
    iframeUrl: "https://www.crazygames.com/embed/street-fighter-simulator",
    instructions: ["Master martial arts techniques", "Practice combo combinations", "Train different fighting styles", "Compete in tournaments", "Customize your fighter", "Become the street champion"],
    rating: 4.8,
    likes: 2134,
    tags: ["action", "fighting", "simulation", "martial arts", "street", "combat", "competitive"],
    keywords: ["street fighter simulator", "fighting simulation game", "martial arts simulator", "street combat game"],
    dateAdded: "2025-07-08",
    featured: true
  },
  {
    id: 20,
    slug: "hazmob-fps-shooter",
    title: "HAZMOB FPS SHOOTER",
    description: "Intense first-person multiplayer combat! Engage in tactical warfare with realistic weapons and strategic gameplay in various battle maps.",
    shortDescription: "Tactical FPS with realistic combat!",
    category: "shooter",
    thumbnail: "assets/images/hazmob-fps.jpg",
    iframeUrl: "https://www.miniplay.com/embed/hazmob-fps-online-pvp-shooter",
    instructions: ["WASD to move", "Mouse to aim and shoot", "R to reload weapons", "Use cover strategically", "Complete mission objectives"],
    rating: 4.5,
    likes: 1245,
    tags: ["shooter", "FPS", "multiplayer", "tactical", "weapons", "combat"],
    keywords: ["hazmob fps shooter", "first person shooter", "tactical fps game"],
    dateAdded: "2024-01-20",
    featured: false
  },
  {
    id: 21,
    slug: "shell-shockers",
    title: "SHELL SHOCKERS",
    description: "Egg-cellent multiplayer shooter! Control armed eggs in hilarious combat scenarios with various weapons and game modes.",
    shortDescription: "Multiplayer egg shooter with humor!",
    category: "shooter",
    thumbnail: "assets/images/shell-shockers.jpg",
    iframeUrl: "https://www.miniplay.com/embed/shellshock-io",
    instructions: ["Move with WASD", "Aim and shoot with mouse", "Choose different weapons", "Play various game modes", "Crack enemy eggs!"],
    rating: 4.6,
    likes: 1876,
    tags: ["shooter", "multiplayer", "funny", "eggs", "combat", "weapons"],
    keywords: ["shell shockers game", "egg shooter multiplayer", "funny fps game"],
    dateAdded: "2024-01-18",
    featured: true
  },
  {
    id: 22,
    slug: "fps-toy-realism",
    title: "FPS TOY REALISM",
    description: "Experience realistic toy warfare! Battle with detailed toy soldiers in immersive combat scenarios with authentic military equipment.",
    shortDescription: "Realistic toy soldier combat simulator!",
    category: "shooter",
    thumbnail: "assets/images/fps-toy-realism.webp",
    iframeUrl: "https://www.miniplay.com/embed/fps-toy-realism",
    instructions: ["Standard FPS controls", "Use realistic weapons", "Take cover behind objects", "Complete military objectives", "Work with your squad"],
    rating: 4.3,
    likes: 567,
    tags: ["shooter", "FPS", "realistic", "military", "toy", "simulation"],
    keywords: ["fps toy realism", "toy soldier shooter", "realistic fps"],
    dateAdded: "2024-01-16",
    featured: false
  },
  {
    id: 23,
    slug: "rail-hunt",
    title: "RAIL HUNT",
    description: "On-rails shooting adventure! Travel through various environments while taking down enemies in this classic arcade-style shooter.",
    shortDescription: "Classic on-rails shooting adventure!",
    category: "shooter",
    thumbnail: "assets/images/rail-hunt.webp",
    iframeUrl: "https://www.miniplay.com/embed/rail-hunt",
    instructions: ["Aim with mouse cursor", "Click to shoot enemies", "Reload when necessary", "Hit bonus targets", "Survive all levels"],
    rating: 4.2,
    likes: 432,
    tags: ["shooter", "arcade", "on-rails", "adventure", "classic", "targets"],
    keywords: ["rail hunt game", "on rails shooter", "arcade shooting"],
    dateAdded: "2024-01-14",
    featured: false
  },
  {
    id: 24,
    slug: "mario-kart-64",
    title: "MARIO KART 64",
    description: "Classic kart racing with Nintendo's beloved characters! Race through iconic tracks with power-ups, shortcuts, and competitive multiplayer action.",
    shortDescription: "Classic Nintendo kart racing adventure!",
    category: "racing",
    thumbnail: "assets/images/mario-kart-64.jpg",
    iframeUrl: "https://www.miniplay.com/embed/mario-kart-64",
    instructions: ["Arrow keys to steer and accelerate", "Use items strategically", "Find shortcuts on tracks", "Drift around corners", "Race to the finish line"],
    rating: 4.9,
    likes: 2987,
    tags: ["racing", "kart", "nintendo", "mario", "multiplayer", "classic"],
    keywords: ["mario kart 64", "nintendo racing game", "classic kart racing"],
    dateAdded: "2024-01-22",
    featured: true
  },
  {
    id: 25,
    slug: "super-mario-kart",
    title: "SUPER MARIO KART",
    description: "The original kart racing experience! Play as Mario and friends in the game that started the beloved kart racing franchise.",
    shortDescription: "Original Mario kart racing classic!",
    category: "racing",
    thumbnail: "assets/images/super-mario-kart.jpg",
    iframeUrl: "https://www.miniplay.com/embed/super-mario-kart",
    instructions: ["Control with arrow keys", "Use power-ups wisely", "Master the racing lines", "Compete in championships", "Unlock new characters"],
    rating: 4.8,
    likes: 2456,
    tags: ["racing", "kart", "mario", "classic", "retro", "nintendo"],
    keywords: ["super mario kart", "original mario racing", "retro kart game"],
    dateAdded: "2024-01-20",
    featured: true
  },
  {
    id: 26,
    slug: "cars-3d",
    title: "CARS 3D",
    description: "High-speed 3D racing action! Experience realistic car physics and stunning graphics in this immersive racing simulation.",
    shortDescription: "Realistic 3D car racing simulation!",
    category: "racing",
    thumbnail: "assets/images/cars-3d.jpg",
    iframeUrl: "https://www.miniplay.com/embed/cars-3d",
    instructions: ["WASD or arrow keys to drive", "Space for handbrake", "Shift for nitro boost", "Master realistic physics", "Win races to unlock cars"],
    rating: 4.4,
    likes: 1234,
    tags: ["racing", "3D", "cars", "realistic", "physics", "simulation"],
    keywords: ["cars 3d racing", "realistic car game", "3d racing simulator"],
    dateAdded: "2024-01-18",
    featured: false
  },
  {
    id: 27,
    slug: "formula-speed",
    title: "FORMULA SPEED",
    description: "Formula 1 racing excitement! Experience the thrill of high-speed formula racing with professional tracks and realistic car handling.",
    shortDescription: "Formula 1 racing with authentic tracks!",
    category: "racing",
    thumbnail: "assets/images/formula-speed.webp",
    iframeUrl: "https://www.miniplay.com/embed/formula-speed",
    instructions: ["Arrow keys for steering", "Perfect your racing lines", "Manage fuel and tires", "Qualify for pole position", "Win the championship"],
    rating: 4.6,
    likes: 1567,
    tags: ["racing", "formula 1", "speed", "professional", "tracks", "championship"],
    keywords: ["formula speed racing", "f1 racing game", "formula 1 simulator"],
    dateAdded: "2024-01-16",
    featured: false
  },
  {
    id: 28,
    slug: "miniblox",
    title: "Miniblox",
    description: "Enter the blocky world of endless creativity and adventure! Build magnificent structures, explore vast landscapes, and survive in this charming block-based sandbox game inspired by the classic building genre. Craft tools, gather resources, and construct everything from simple houses to elaborate castles and modern cities. Experience the joy of unlimited creativity with an intuitive building system that lets you place and break blocks freely. Explore diverse biomes, discover hidden treasures, and encounter friendly creatures in procedurally generated worlds. With simplified graphics that maintain the classic blocky aesthetic, Miniblox offers an accessible and enjoyable building experience for players of all ages. Whether you prefer creative building or survival challenges, this miniature version delivers big fun in a compact, browser-friendly package. What amazing creations will you build in your blocky world?",
    shortDescription: "Charming block-based building and adventure game!",
    category: "adventure",
    thumbnail: "assets/images/miniblox.avif",
    iframeUrl: "https://www.crazygames.com/embed/miniblox",
    instructions: ["WASD to move around", "Mouse to look and interact", "Left click to break blocks", "Right click to place blocks", "Craft tools and build structures", "Explore the blocky world"],
    rating: 4.9,
    likes: 5678,
    tags: ["adventure", "sandbox", "building", "blocks", "crafting", "exploration", "creative"],
    keywords: ["miniblox game", "block building adventure", "sandbox crafting game", "blocky world builder"],
    dateAdded: "2025-06-28",
    featured: true
  },
  {
    id: 29,
    slug: "fireboy-watergirl-forest",
    title: "FIREBOY AND WATERGIRL",
    description: "Cooperative puzzle adventure! Control both characters through the Forest Temple, solving puzzles and avoiding elemental hazards.",
    shortDescription: "Cooperative elemental puzzle adventure!",
    category: "adventure",
    thumbnail: "assets/images/fireboy-watergirl.jpg",
    iframeUrl: "https://www.miniplay.com/embed/fireboy-and-watergirl-the-forest-temple",
    instructions: ["Arrow keys for Fireboy", "WASD for Watergirl", "Avoid opposite elements", "Collect colored gems", "Reach the exit together"],
    rating: 4.7,
    likes: 3456,
    tags: ["adventure", "puzzle", "cooperative", "platformer", "teamwork", "elements"],
    keywords: ["fireboy watergirl game", "cooperative adventure", "elemental puzzle"],
    dateAdded: "2024-01-22",
    featured: true
  },
  {
    id: 30,
    slug: "super-mario-bros",
    title: "SUPER MARIO BROS",
    description: "The legendary platformer adventure! Join Mario on his quest to rescue Princess Peach through the Mushroom Kingdom.",
    shortDescription: "Classic Mario platformer adventure!",
    category: "adventure",
    thumbnail: "assets/images/super-mario-bros.webp",
    iframeUrl: "https://www.miniplay.com/embed/super-mario-bros",
    instructions: ["Arrow keys to move and jump", "Collect coins and power-ups", "Stomp on enemies", "Find secret areas", "Rescue the princess"],
    rating: 4.9,
    likes: 4567,
    tags: ["adventure", "platformer", "mario", "classic", "nintendo", "retro"],
    keywords: ["super mario bros", "mario adventure game", "classic platformer"],
    dateAdded: "2024-01-20",
    featured: true
  },
  {
    id: 31,
    slug: "pokemon-quetzal",
    title: "POKEMON QUETZAL",
    description: "Embark on a new Pokemon adventure! Catch, train, and battle Pokemon in this exciting RPG adventure with new regions to explore.",
    shortDescription: "New Pokemon RPG adventure experience!",
    category: "adventure",
    thumbnail: "assets/images/pokemon-quetzal.jpg",
    iframeUrl: "https://www.miniplay.com/embed/pokemon-quetzal",
    instructions: ["Navigate with arrow keys", "Battle wild Pokemon", "Catch Pokemon with Pokeballs", "Train your team", "Become Pokemon Champion"],
    rating: 4.6,
    likes: 2345,
    tags: ["adventure", "pokemon", "RPG", "collection", "battles", "exploration"],
    keywords: ["pokemon quetzal", "pokemon adventure rpg", "pokemon game online"],
    dateAdded: "2024-01-18",
    featured: false
  },
  {
    id: 32,
    slug: "tetrix-2",
    title: "TETRIS",
    description: "Experience the ultimate block puzzle challenge in Tetrix-2! This enhanced version of the classic falling block puzzle game brings improved graphics, smoother gameplay, and exciting new features to the beloved tetromino-arranging formula. Master the art of spatial reasoning as you rotate, move, and drop colorful geometric pieces to create complete horizontal lines. With faster piece dropping, enhanced visual effects, and refined controls, Tetrix-2 delivers the perfect balance of nostalgic gameplay and modern polish. Challenge yourself to achieve higher scores, longer survival times, and faster line-clearing combinations in this definitive tetris experience. Can you handle the increasing speed and complexity as the levels progress?",
    shortDescription: "Enhanced classic block puzzle with improved features!",
    category: "puzzle",
    thumbnail: "assets/images/tetrix-2.avif",
    iframeUrl: "https://www.crazygames.com/embed/tetrix-2",
    instructions: ["Arrow keys to move pieces", "Up arrow to rotate", "Down arrow to drop faster", "Complete horizontal lines to clear them", "Prevent blocks from reaching the top", "Plan piece placement strategically"],
    rating: 4.9,
    likes: 3789,
    tags: ["puzzle", "tetris", "blocks", "classic", "strategy", "brain", "enhanced"],
    keywords: ["tetrix 2 game", "enhanced tetris puzzle", "block puzzle game", "tetromino puzzle"],
    dateAdded: "2024-01-24",
    featured: true
  },
  {
    id: 33,
    slug: "2048-number-puzzle",
    title: "2048",
    description: "Addictive number puzzle game! Slide numbered tiles to combine them and reach the elusive 2048 tile in this brain-teasing challenge.",
    shortDescription: "Addictive number combining puzzle!",
    category: "puzzle",
    thumbnail: "assets/images/2048.avif",
    iframeUrl: "https://www.crazygames.com/embed/2048",
    instructions: ["Use arrow keys to slide tiles", "Combine tiles with same numbers", "Try to reach 2048", "Plan moves strategically", "Don't fill the board"],
    rating: 4.5,
    likes: 2134,
    tags: ["puzzle", "numbers", "strategy", "brain", "mathematical", "logic"],
    keywords: ["2048 game", "number puzzle game", "mathematical puzzle"],
    dateAdded: "2024-01-22",
    featured: false
  },
  {
    id: 34,
    slug: "tekken-3",
    title: "TEKKEN 3",
    description: "Classic 3D fighting game! Master different fighting styles and special moves in this legendary arcade fighter with diverse characters.",
    shortDescription: "Legendary 3D fighting game classic!",
    category: "fighting",
    thumbnail: "assets/images/tekken3.jpg",
    iframeUrl: "https://www.miniplay.com/embed/tekken-3",
    instructions: ["Arrow keys for movement", "A, S, D for punch attacks", "Z, X, C for kick attacks", "Combine for special moves", "Master each character's style"],
    rating: 4.8,
    likes: 2987,
    tags: ["fighting", "3D", "tekken", "martial arts", "arcade", "combo"],
    keywords: ["tekken 3 game", "3d fighting game", "arcade fighter"],
    dateAdded: "2025-06-28",
    featured: true
  },
  {
    id: 35,
    slug: "street-fighter-2",
    title: "STREET FIGHTER II",
    description: "The most famous fighting game ever! Battle with iconic fighters using special moves, combos, and signature techniques.",
    shortDescription: "Iconic fighting game with legendary fighters!",
    category: "fighting",
    thumbnail: "assets/images/streetfighter2.avif",
    iframeUrl: "https://www.crazygames.com/embed/street-fighter-2",
    instructions: ["Arrow keys to move", "Punch and kick buttons", "Special move combinations", "Block incoming attacks", "Execute finishing moves"],
    rating: 4.9,
    likes: 3456,
    tags: ["fighting", "street fighter", "arcade", "special moves", "classic", "combos"],
    keywords: ["street fighter 2", "classic fighting game", "arcade fighter"],
    dateAdded: "2024-01-22",
    featured: true
  },
  {
    id: 36,
    slug: "mortal-kombat",
    title: "MORTAL KOMBAT",
    description: "Brutal fighting action! Experience the legendary fighting game with fatalities, special moves, and intense combat.",
    shortDescription: "Brutal fighting with fatalities!",
    category: "fighting",
    thumbnail: "assets/images/mortal-kombat.webp",
    iframeUrl: "https://www.miniplay.com/embed/mortal-kombat",
    instructions: ["Movement with arrow keys", "Attack with action keys", "Perform fatalities", "Block and counter", "Master special moves"],
    rating: 4.7,
    likes: 2765,
    tags: ["fighting", "mortal kombat", "fatalities", "brutal", "arcade", "combat"],
    keywords: ["mortal kombat game", "fighting game fatalities", "brutal fighter"],
    dateAdded: "2024-01-20",
    featured: false
  },
  {
    id: 37,
    slug: "dragon-ball-z-tribute",
    title: "Dragon Ball Z Tribute",
    description: "Experience the ultimate Dragon Ball Z tribute fighting game! Relive the most epic battles from the legendary anime series with authentic characters, iconic transformations, and devastating special attacks. Master the power of ki energy, unlock Super Saiyan transformations, and execute legendary techniques like the Kamehameha, Special Beam Cannon, and Final Flash. Battle through iconic storylines from the Saiyan Saga to the Buu Saga, featuring beloved characters including Goku, Vegeta, Gohan, Piccolo, and many more. This tribute edition captures the essence of Dragon Ball Z's intense combat with fluid animations, spectacular visual effects, and authentic sound design. Engage in epic beam struggles, master complex combo systems, and experience the thrill of transformations that increase your power exponentially. Can you achieve the legendary Super Saiyan status and protect Earth from ultimate evil?",
    shortDescription: "Ultimate Dragon Ball Z tribute with iconic battles!",
    category: "fighting",
    thumbnail: "assets/images/dragon-ball-z-tribute.jpg",
    iframeUrl: "https://www.miniplay.com/embed/dragon-ball-z-tribute",
    instructions: ["Control with arrow keys", "Charge ki energy for power", "Transform into Super Saiyan", "Execute signature techniques", "Master beam struggles", "Unlock character potential"],
    rating: 4.6,
    likes: 1987,
    tags: ["fighting", "anime", "dragon ball", "ki", "transformation", "tribute", "saiyan"],
    keywords: ["dragon ball z tribute", "dbz tribute game", "anime fighting tribute", "dragon ball fighting"],
    dateAdded: "2025-06-28",
    featured: false
  },
  {
    id: 38,
    slug: "injustice-gods-among-us",
    title: "Injustice Gods Among Us",
    description: "Experience the ultimate DC superhero fighting game where gods walk among mortals! Battle with iconic DC characters including Superman, Batman, Wonder Woman, The Flash, and many more legendary heroes and villains. Engage in epic cinematic combat featuring devastating super moves, interactive environments, and brutal finishing attacks that showcase each character's unique powers. Master the Clash system for dramatic mid-combo interactions, utilize environmental attacks to gain tactical advantages, and execute spectacular super moves that deliver jaw-dropping visual spectacles. Experience an engaging story mode where heroes are forced to make impossible choices in a world where traditional alliances are shattered. With stunning graphics, fluid fighting mechanics, and authentic DC character abilities, Injustice Gods Among Us delivers the definitive superhero fighting experience. Can you master the powers of gods and prove yourself worthy among legends?",
    shortDescription: "Epic DC superhero fighting with gods and legends!",
    category: "fighting",
    thumbnail: "assets/images/injusticegodsamongus.avif",
    iframeUrl: "https://www.crazygames.com/embed/injustice-gods-among-us",
    instructions: ["Use directional controls for movement", "Master basic and special attacks", "Execute devastating super moves", "Utilize environmental interactions", "Block and counter enemy attacks", "Clash during combos for advantage"],
    rating: 4.7,
    likes: 4321,
    tags: ["fighting", "DC", "superheroes", "gods", "comic", "cinematic", "powers"],
    keywords: ["injustice gods among us", "dc superhero fighting", "justice league fighting game", "superhero combat"],
    dateAdded: "2025-06-29",
    featured: true
  },
  {
    id: 39,
    slug: "fall-guys",
    title: "FALL GUYS",
    description: "Hilarious battle royale party game! Compete in colorful obstacle courses and mini-games to be the last bean standing.",
    shortDescription: "Colorful battle royale party game!",
    category: "action",
    thumbnail: "assets/images/fall-guys.webp",
    iframeUrl: "https://www.miniplay.com/embed/fall-guys",
    instructions: ["WASD to move", "Space to jump", "Navigate obstacle courses", "Qualify for next round", "Be the last one standing"],
    rating: 4.5,
    likes: 2876,
    tags: ["action", "battle royale", "party", "obstacle", "multiplayer", "fun"],
    keywords: ["fall guys game", "battle royale party", "obstacle course game"],
    dateAdded: "2024-01-14",
    featured: false
  },
  {
    id: 40,
    slug: "rocket-bot-royale",
    title: "Rocket Bot Royale",
    description: "Battle for supremacy in the ultimate robot battle royale arena! Command powerful battle bots equipped with devastating weaponry, advanced armor systems, and rocket-powered mobility in intense multiplayer combat. Drop into massive mechanical battlefields where only the strongest robot survives against waves of enemy bots and human players. Customize your battle bot with various weapon loadouts, defensive upgrades, and mobility enhancements to create the perfect war machine. Experience fast-paced robotic combat with explosive weapons, tactical positioning, and strategic resource management in diverse arena environments. Master the art of robotic warfare as you eliminate opponents, collect powerful upgrades, and adapt your strategy to become the last bot standing. With stunning mechanical designs, intense battle mechanics, and competitive multiplayer action, Rocket Bot Royale delivers the ultimate robot fighting experience that combines strategy, skill, and pure mechanical mayhem. Can you pilot your way to robot supremacy?",
    shortDescription: "Robot battle royale with explosive combat action!",
    category: "action",
    thumbnail: "assets/images/rocket-bot-roy.avif",
    iframeUrl: "https://www.crazygames.com/embed/rocket-bot-royale",
    instructions: ["Control your battle bot with movement keys", "Aim and fire weapons at enemies", "Collect upgrades and power-ups", "Use rocket boosters for mobility", "Survive against all opponents", "Become the last bot standing"],
    rating: 4.8,
    likes: 3654,
    tags: ["action", "battle royale", "robots", "combat", "multiplayer", "competitive", "weapons"],
    keywords: ["rocket bot royale", "robot battle royale game", "mechanical combat game", "bot fighting arena"],
    dateAdded: "2025-06-30",
    featured: true
  },
  {
    id: 41,
    slug: "pac-man",
    title: "Pac-Man",
    description: "Experience the legendary arcade classic that defined gaming history! Navigate through maze-like levels as the iconic yellow character, chomping on dots while avoiding colorful ghosts. Master the art of strategic movement as you collect power pellets to temporarily turn the tables and chase down your pursuers. Each level presents new challenges with increasing ghost speed and smarter AI behavior. Plan your routes carefully, use the tunnel shortcuts wisely, and aim for high scores by collecting bonus fruits and clearing levels efficiently. With authentic retro graphics, classic sound effects, and addictive arcade gameplay, Pac-Man delivers the timeless gaming experience that has captivated players for decades. Can you clear all the mazes and achieve the perfect score?",
    shortDescription: "Classic maze-chomping arcade legend!",
    category: "action",
    thumbnail: "assets/images/pac-man.webp",
    iframeUrl: "https://www.miniplay.com/embed/pac-man",
    instructions: ["Use arrow keys to move", "Eat all dots to advance", "Avoid the ghosts", "Collect power pellets to chase ghosts", "Use tunnel shortcuts strategically", "Collect bonus fruits for extra points"],
    rating: 4.9,
    likes: 5678,
    tags: ["action", "arcade", "classic", "maze", "retro", "dots", "ghosts"],
    keywords: ["pac man game", "classic arcade game", "maze game online", "retro pac man"],
    dateAdded: "2025-06-25",
    featured: true
  },
  {
    id: 42,
    slug: "snake-classic",
    title: "Snake Classic",
    description: "Relive the nostalgic mobile gaming era with the timeless Snake Classic! Control your growing serpent through the game field, collecting food items to increase your length while carefully avoiding collision with walls and your own body. Master the art of spatial planning as your snake becomes longer and maneuvering becomes increasingly challenging. Develop strategies for efficient food collection, optimal path planning, and safe navigation in tight spaces. With simple yet addictive gameplay mechanics, responsive controls, and the satisfying progression of watching your snake grow, Snake Classic offers pure gaming enjoyment that has entertained players for generations. Challenge yourself to achieve the highest score and longest snake possible without making a fatal collision!",
    shortDescription: "Timeless snake growing and survival challenge!",
    category: "action",
    thumbnail: "assets/images/classic-snake.webp",
    iframeUrl: "https://www.miniplay.com/embed/snake-classic",
    instructions: ["Use arrow keys to control snake direction", "Eat food to grow longer", "Avoid hitting walls", "Don't collide with your own body", "Plan your path carefully", "Aim for the highest score"],
    rating: 4.7,
    likes: 3456,
    tags: ["action", "classic", "snake", "retro", "mobile", "survival", "growing"],
    keywords: ["snake classic game", "snake online game", "classic mobile game", "retro snake"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 43,
    slug: "money-ping-pong",
    title: "Money Ping Pong",
    description: "Experience table tennis with a lucrative twist in Money Ping Pong! Compete in fast-paced ping pong matches where every point scored earns you virtual currency and valuable rewards. Master precise paddle control, strategic ball placement, and lightning-fast reflexes to dominate opponents and accumulate wealth. Upgrade your equipment, unlock new paddles, and invest in better training facilities using your earnings. Face increasingly skilled AI opponents, each with unique playing styles and difficulty levels that challenge your table tennis mastery. With realistic physics, satisfying paddle mechanics, and an engaging progression system, Money Ping Pong combines the classic sport with rewarding gameplay elements that keep you coming back for more matches and bigger prizes!",
    shortDescription: "Earn money while mastering table tennis skills!",
    category: "action",
    thumbnail: "assets/images/money-ping-pong.avif",
    iframeUrl: "https://www.crazygames.com/embed/money-ping-pong-stj",
    instructions: ["Move paddle with mouse or arrow keys", "Hit the ball back to opponent", "Aim for strategic ball placement", "Earn money for each point", "Upgrade equipment with earnings", "Defeat progressively harder opponents"],
    rating: 4.4,
    likes: 2345,
    tags: ["action", "sports", "ping pong", "money", "upgrade", "competitive", "skill"],
    keywords: ["money ping pong game", "table tennis money", "ping pong earnings", "sports money game"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 44,
    slug: "asteroid-breaker",
    title: "Asteroid Breaker",
    description: "Defend Earth from incoming asteroid threats in this intense space action game! Command a powerful spacecraft equipped with advanced weaponry to blast through waves of dangerous asteroids heading toward our planet. Master precision shooting, strategic positioning, and quick reflexes as you navigate through asteroid fields of varying sizes and densities. Collect power-ups, upgrade your ship's weapons, and unlock special abilities to handle increasingly challenging asteroid formations. Experience realistic space physics, spectacular explosion effects, and dynamic difficulty progression that keeps the action intense throughout your mission. With multiple weapon types, special abilities, and challenging boss asteroids, Asteroid Breaker delivers an adrenaline-pumping space shooter experience that tests your defensive skills against cosmic threats!",
    shortDescription: "Blast asteroids to protect Earth from destruction!",
    category: "action",
    thumbnail: "assets/images/asteroid-breaker.avif",
    iframeUrl: "https://www.crazygames.com/embed/asteroid-breaker-ezu",
    instructions: ["Control ship with arrow keys", "Shoot asteroids with spacebar", "Collect power-ups and upgrades", "Avoid asteroid collisions", "Protect Earth from impact", "Defeat massive boss asteroids"],
    rating: 4.5,
    likes: 1987,
    tags: ["action", "space", "shooter", "asteroids", "defense", "upgrade", "cosmic"],
    keywords: ["asteroid breaker game", "space shooter asteroids", "earth defense game", "asteroid blaster"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 45,
    slug: "bricks-breaker",
    title: "Bricks Breaker",
    description: "Break through colorful brick formations in this classic arcade puzzle action game! Control your paddle to bounce the ball and systematically destroy all bricks on each level. Master ball physics, angle calculations, and strategic paddle positioning to clear challenging brick patterns efficiently. Collect power-ups that enhance your abilities with multi-ball action, larger paddles, powerful laser shots, and explosive ball effects. Navigate through hundreds of uniquely designed levels, each presenting different brick arrangements, special blocks, and obstacle configurations. With satisfying destruction mechanics, progressive difficulty, and addictive gameplay that combines skill with strategy, Bricks Breaker delivers the perfect blend of classic arcade action and modern puzzle challenges. Can you break through every level and become the ultimate brick-breaking champion?",
    shortDescription: "Classic brick-breaking arcade puzzle action!",
    category: "action",
    thumbnail: "assets/images/bricks-breaker.avif",
    iframeUrl: "https://www.crazygames.com/embed/bricks-breaker",
    instructions: ["Move paddle with arrow keys or mouse", "Bounce ball to hit bricks", "Collect falling power-ups", "Clear all bricks to advance", "Use power-ups strategically", "Master ball angle control"],
    rating: 4.6,
    likes: 2876,
    tags: ["action", "arcade", "bricks", "puzzle", "classic", "power-ups", "bouncing"],
    keywords: ["bricks breaker game", "brick breaking arcade", "classic breakout game", "brick destroyer"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 46,
    slug: "flappy-bird",
    title: "Flappy Bird",
    description: "Experience the viral sensation that took the mobile gaming world by storm! Guide your feathered friend through an endless series of pipe obstacles using simple tap controls that demand perfect timing and unwavering concentration. Master the art of precise altitude control as you navigate through increasingly narrow gaps between pipes. Each successful passage requires split-second decision making and flawless execution, making every point scored feel like a genuine achievement. With deceptively simple mechanics that hide incredible difficulty, Flappy Bird challenges your patience, persistence, and precision like no other game. The addictive 'one more try' gameplay loop keeps you coming back to beat your high score and achieve the perfect run. Can you maintain steady flight and soar to legendary scores?",
    shortDescription: "Viral tap-to-fly challenge with pipe obstacles!",
    category: "action",
    thumbnail: "assets/images/flappy-bird.jpg",
    iframeUrl: "https://www.miniplay.com/embed/flappy-bird-mobile",
    instructions: ["Tap or press spacebar to flap", "Navigate through pipe gaps", "Avoid hitting pipes or ground", "Maintain steady altitude", "Score points for each pipe passed", "Beat your high score"],
    rating: 4.3,
    likes: 4321,
    tags: ["action", "flying", "pipes", "timing", "viral", "challenging", "mobile"],
    keywords: ["flappy bird game", "viral mobile game", "flying bird game", "pipe navigation"],
    dateAdded: "2025-06-25",
    featured: true
  },
  {
    id: 47,
    slug: "doodle-jump",
    title: "Doodle Jump",
    description: "Bounce your way to infinite heights in this beloved endless jumping adventure! Control the adorable Doodler as he springs from platform to platform, reaching ever greater altitudes in a hand-drawn sketchy world. Master momentum control, platform prediction, and strategic item usage to achieve maximum jumping height. Encounter various platform types including moving platforms, breakable surfaces, and spring-powered boost pads that add variety to your ascent. Collect power-ups, avoid dangerous creatures, and utilize special items like jetpacks and springs to propel yourself even higher. With charming doodle-style graphics, intuitive tilt controls, and addictive vertical progression gameplay, Doodle Jump offers endless entertainment as you compete for the highest possible score. How high can your Doodler bounce?",
    shortDescription: "Endless bouncing adventure to infinite heights!",
    category: "action",
    thumbnail: "assets/images/doodle-jump.jpg",
    iframeUrl: "https://www.miniplay.com/embed/doodle-jump",
    instructions: ["Tilt device or use arrow keys to move", "Land on platforms to bounce higher", "Collect power-ups and items", "Avoid dangerous creatures", "Use jetpacks and springs for big jumps", "Reach the highest altitude possible"],
    rating: 4.7,
    likes: 3789,
    tags: ["action", "jumping", "endless", "doodle", "platforms", "bouncing", "vertical"],
    keywords: ["doodle jump game", "endless jumping game", "platform bouncing", "vertical jumping"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 48,
    slug: "geometry-dash",
    title: "Geometry Dash",
    description: "Pulse-pounding rhythm-based platforming that synchronizes music with geometric precision! Navigate your geometric character through increasingly complex obstacle courses where every jump, dash, and movement aligns perfectly with an energetic electronic soundtrack. Master precise timing, memorize challenging patterns, and develop lightning-fast reflexes to overcome spikes, saw blades, and moving platforms. Each level presents unique visual themes, escalating difficulty, and perfectly choreographed obstacles that create an almost dance-like experience between player and music. With stunning geometric visuals, pulse-pounding soundtracks, and satisfying progression through increasingly complex challenges, Geometry Dash delivers an unparalleled fusion of music, precision platforming, and geometric artistry. Can you maintain perfect rhythm and conquer the ultimate geometric gauntlet?",
    shortDescription: "Rhythm-based geometric platforming precision challenge!",
    category: "action",
    thumbnail: "assets/images/geometry-dash.webp",
    iframeUrl: "https://www.miniplay.com/embed/geometry-dash",
    instructions: ["Tap or press spacebar to jump", "Hold for continuous jumping", "Synchronize with the music rhythm", "Avoid spikes and obstacles", "Memorize level patterns", "Maintain perfect timing"],
    rating: 4.8,
    likes: 5432,
    tags: ["action", "rhythm", "geometric", "music", "precision", "platformer", "timing"],
    keywords: ["geometry dash game", "rhythm platformer", "geometric action", "music synchronization"],
    dateAdded: "2025-06-25",
    featured: true
  },
  {
    id: 49,
    slug: "slithercraft-io",
    title: "SlitherCraft.io",
    description: "Enter the ultimate multiplayer snake arena where Minecraft meets classic snake gameplay! Control your blocky serpent in a massive online battlefield filled with other players competing for dominance. Grow your snake by consuming colorful orbs scattered throughout the pixelated world while avoiding collisions with other snakes. Master strategic positioning, quick reflexes, and tactical decision-making to outmaneuver opponents and force them into fatal crashes. Customize your snake's appearance with various Minecraft-inspired skins and patterns. With the familiar blocky aesthetic, competitive multiplayer action, and addictive growth mechanics, SlitherCraft.io combines the best elements of snake games with the beloved Minecraft visual style. Can you become the longest snake in the server?",
    shortDescription: "Minecraft-style multiplayer snake battle arena!",
    category: "action",
    thumbnail: "assets/images/slithercraft-io.avif",
    iframeUrl: "https://www.crazygames.com/embed/slithercraft-io",
    instructions: ["Move snake with mouse or arrow keys", "Eat orbs to grow longer", "Avoid hitting other snakes", "Force opponents to crash into you", "Customize your snake skin", "Become the longest snake"],
    rating: 4.5,
    likes: 2134,
    tags: ["action", "multiplayer", "snake", "minecraft", "io game", "competitive", "blocky"],
    keywords: ["slithercraft io game", "minecraft snake game", "multiplayer snake io", "blocky snake battle"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 50,
    slug: "agar-io",
    title: "Agar.io",
    description: "Dive into the primordial multiplayer cellular warfare that started the .io gaming revolution! Begin as a tiny cell in a vast petri dish and grow by consuming smaller cells and nutritious pellets scattered throughout the environment. Master the delicate balance of aggression and survival as you navigate a world where you're simultaneously predator and prey. Split your cell strategically to catch fast-moving targets, eject mass to escape larger threats, and use virus obstacles to your tactical advantage. With real-time multiplayer action involving hundreds of players, Agar.io creates an incredibly dynamic ecosystem where alliances form and dissolve in seconds. The simple concept belies deep strategic gameplay that has captivated millions worldwide. Can you evolve from microscopic organism to dominant cellular entity?",
    shortDescription: "Massive multiplayer cellular evolution and survival!",
    category: "action",
    thumbnail: "assets/images/agar-io.avif",
    iframeUrl: "https://www.crazygames.com/embed/agario",
    instructions: ["Move with mouse cursor", "Eat smaller cells and pellets", "Avoid larger players", "Press spacebar to split cell", "Press W to eject mass", "Use viruses strategically"],
    rating: 4.7,
    likes: 6789,
    tags: ["action", "multiplayer", "io game", "cells", "evolution", "survival", "competitive"],
    keywords: ["agar io game", "cell evolution game", "multiplayer io game", "cellular warfare"],
    dateAdded: "2025-06-25",
    featured: true
  },
  {
    id: 51,
    slug: "paper-io-2",
    title: "Paper.io 2",
    description: "Claim territory and expand your domain in this enhanced version of the territorial conquest phenomenon! Navigate your colored line around the battlefield to capture and claim areas while defending against aggressive opponents trying to cut off your expansion trails. Master strategic territory claiming, efficient path planning, and defensive positioning to maximize your controlled area. The improved mechanics introduce new challenges including smarter AI opponents, dynamic obstacles, and special power-ups that can dramatically shift the territorial balance. Plan your expansion routes carefully, as leaving your safe zone makes you vulnerable to elimination if enemies cross your trail. With faster-paced gameplay, enhanced graphics, and more strategic depth than the original, Paper.io 2 delivers intense territorial warfare that rewards both careful planning and bold aggressive expansion. Can you dominate the entire map?",
    shortDescription: "Enhanced territorial expansion and conquest strategy!",
    category: "action",
    thumbnail: "assets/images/paper-io-2.avif",
    iframeUrl: "https://www.crazygames.com/embed/paper-io-2",
    instructions: ["Move with arrow keys or mouse", "Create closed loops to claim territory", "Return to your area to secure claims", "Avoid having your trail cut", "Cut opponents' trails to eliminate them", "Expand your territory strategically"],
    rating: 4.6,
    likes: 3456,
    tags: ["action", "strategy", "territory", "io game", "expansion", "competitive", "planning"],
    keywords: ["paper io 2 game", "territory conquest game", "area expansion io", "territorial strategy"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 52,
    slug: "fragen",
    title: "Fragen",
    description: "Test your knowledge and quick thinking in this fast-paced trivia and question-based challenge game! Answer a diverse range of questions spanning multiple categories including science, history, pop culture, sports, and general knowledge. Race against time as you select correct answers from multiple choices, with each correct response earning points and extending your game session. Master the balance between speed and accuracy, as rushed decisions can lead to costly mistakes while hesitation can run down your valuable time. Encounter special question types, bonus rounds, and power-ups that can boost your score and provide strategic advantages. With an extensive question database, progressive difficulty, and engaging quiz mechanics, Fragen challenges your intellectual abilities while providing educational entertainment. Can you achieve the highest knowledge score and prove your trivia mastery?",
    shortDescription: "Fast-paced trivia and knowledge challenge game!",
    category: "action",
    thumbnail: "assets/images/fragen.avif",
    iframeUrl: "https://www.crazygames.com/embed/fragen",
    instructions: ["Read questions carefully", "Select correct answers quickly", "Use time wisely for maximum points", "Answer consecutively for score bonuses", "Use hint power-ups strategically", "Achieve high knowledge scores"],
    rating: 4.3,
    likes: 1876,
    tags: ["action", "trivia", "knowledge", "questions", "educational", "quiz", "learning"],
    keywords: ["fragen game", "trivia challenge game", "knowledge quiz game", "question answer game"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 53,
    slug: "eternal-siege",
    title: "Eternal Siege",
    description: "Command your fortress in an endless battle against relentless enemy forces in this epic tower defense warfare game! Build and upgrade defensive structures, deploy strategic unit formations, and coordinate powerful magical abilities to withstand wave after wave of increasingly dangerous attackers. Master resource management, tactical positioning, and timing as you balance offense and defense in prolonged siege scenarios. Unlock advanced military technologies, recruit specialized defenders, and discover powerful artifacts that can turn the tide of battle. Face diverse enemy types including armored knights, swift assassins, flying creatures, and massive siege engines that require different defensive strategies. With stunning medieval visuals, deep strategic gameplay, and endless replayability, Eternal Siege delivers the ultimate fortress defense experience that tests your military leadership and strategic planning abilities. Can your fortress withstand the eternal siege?",
    shortDescription: "Epic fortress defense against endless enemy sieges!",
    category: "action",
    thumbnail: "assets/images/eternal-siege.avif",
    iframeUrl: "https://www.crazygames.com/embed/eternal-siege",
    instructions: ["Build defensive towers and structures", "Manage resources efficiently", "Deploy troops strategically", "Upgrade defenses between waves", "Use special abilities at key moments", "Defend against endless enemy sieges"],
    rating: 4.7,
    likes: 2543,
    tags: ["action", "tower defense", "strategy", "siege", "medieval", "warfare", "fortress"],
    keywords: ["eternal siege game", "fortress defense game", "tower defense warfare", "siege strategy"],
    dateAdded: "2025-06-25",
    featured: true
  },
  {
    id: 54,
    slug: "cowz-io",
    title: "cowz.io",
    description: "Moo your way to victory in this udderly entertaining multiplayer farm battle arena! Control your cow character in fast-paced online combat where farming meets fierce competition. Grow your cow by consuming grass, crops, and defeated opponents while avoiding larger bovine bullies who want to turn you into ground beef. Master cow physics, strategic grazing, and combat maneuvers to dominate the pastoral battlefield. Customize your cow with different breeds, colors, and special abilities that provide tactical advantages in the farming frenzy. Encounter special farm elements like milk power-ups, hay bale obstacles, and farmer NPCs that add complexity to the barnyard battles. With charming farm aesthetics, competitive multiplayer action, and surprisingly deep cow combat mechanics, cowz.io delivers a uniquely entertaining agricultural warfare experience. Can you become the ultimate alpha cow of the farm?",
    shortDescription: "Multiplayer cow battle in farming arena warfare!",
    category: "action",
    thumbnail: "assets/images/cowz-io.avif",
    iframeUrl: "https://www.crazygames.com/embed/cowz-io",
    instructions: ["Move cow with arrow keys or mouse", "Eat grass and crops to grow", "Ram into smaller cows to defeat them", "Avoid larger opponent cows", "Collect farm power-ups", "Become the biggest cow"],
    rating: 4.4,
    likes: 1987,
    tags: ["action", "multiplayer", "io game", "farm", "cows", "competitive", "growth"],
    keywords: ["cowz io game", "cow battle game", "farm io multiplayer", "bovine arena game"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 55,
    slug: "archer-clash",
    title: "Archer Clash",
    description: "Draw your bow and engage in epic archery combat in this skill-based multiplayer battle arena! Master the art of precision shooting, trajectory calculation, and timing as you face off against skilled archer opponents from around the world. Adjust for wind resistance, distance, and movement to land perfect shots while dodging incoming arrows with agile movement and strategic positioning. Unlock different bow types, arrow varieties, and special abilities that enhance your archery prowess and provide tactical advantages in combat. Experience various battle modes including duels, team battles, and tournament competitions that test different aspects of your archery skills. With realistic arrow physics, satisfying bow mechanics, and competitive multiplayer action, Archer Clash delivers the ultimate virtual archery experience that rewards precision, strategy, and quick reflexes. Can you achieve legendary archer status and rule the battlefield?",
    shortDescription: "Precision archery combat in multiplayer battles!",
    category: "action",
    thumbnail: "assets/images/archer-clash.avif",
    iframeUrl: "https://www.crazygames.com/embed/archer-clash-ftj",
    instructions: ["Aim bow with mouse movement", "Hold and release to shoot arrows", "Adjust for distance and wind", "Move to dodge incoming arrows", "Upgrade bows and arrow types", "Master precision shooting"],
    rating: 4.5,
    likes: 2234,
    tags: ["action", "archery", "multiplayer", "precision", "combat", "bows", "skill"],
    keywords: ["archer clash game", "archery battle game", "bow combat multiplayer", "precision archer"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 56,
    slug: "war-v-survivor",
    title: "War V: Survivor",
    description: "Survive the ultimate warzone in this intense battle royale survival experience! Drop into a hostile battlefield where only the strongest, smartest, and most adaptable warriors can claim victory. Scavenge for weapons, armor, and essential supplies while navigating through dangerous terrain filled with enemy combatants and environmental hazards. Master tactical combat, stealth mechanics, and resource management as the playable area shrinks and forces increasingly intense confrontations. Utilize advanced military equipment, construct temporary fortifications, and form strategic alliances to increase your survival chances. With realistic combat mechanics, diverse weapon systems, and dynamic weather conditions that affect gameplay, War V: Survivor delivers a hardcore military survival experience that tests every aspect of your tactical warfare skills. Can you emerge as the ultimate war survivor?",
    shortDescription: "Hardcore military survival in ultimate warzone!",
    category: "action",
    thumbnail: "assets/images/war-v-survivor.avif",
    iframeUrl: "https://www.crazygames.com/embed/war-v-survivor",
    instructions: ["Scavenge for weapons and supplies", "Stay within the safe zone", "Engage enemies tactically", "Use cover and stealth", "Manage health and resources", "Survive until the end"],
    rating: 4.6,
    likes: 3123,
    tags: ["action", "survival", "battle royale", "military", "combat", "tactical", "warfare"],
    keywords: ["war v survivor game", "military survival game", "warzone battle royale", "tactical combat"],
    dateAdded: "2025-06-25",
    featured: true
  },
  {
    id: 57,
    slug: "uncle-hit-punch-dummy",
    title: "Uncle Hit: Punch the Dummy",
    description: "Release your stress and unleash your fury on the ultimate punching dummy in this satisfying combat simulation! Experience realistic physics-based destruction as you deliver devastating punches, kicks, and special attacks to a highly responsive training dummy. Master various fighting techniques, combo attacks, and special moves while watching satisfying damage effects and realistic ragdoll physics. Unlock different fighting styles, upgrade your combat abilities, and discover creative ways to maximize damage output. The therapeutic gameplay provides a safe outlet for stress relief while offering entertaining combat mechanics and humorous interactions. With detailed damage visualization, responsive physics simulation, and endless creative destruction possibilities, Uncle Hit: Punch the Dummy delivers the ultimate stress-relief fighting experience. How much damage can you inflict with your martial arts mastery?",
    shortDescription: "Stress-relief combat simulation with punching dummy!",
    category: "action",
    thumbnail: "assets/images/uncle-hit-punch-the-dummy.avif",
    iframeUrl: "https://www.crazygames.com/embed/uncle-hit-punch-the-dummy",
    instructions: ["Click and drag to punch", "Use different attack combinations", "Try various fighting techniques", "Watch realistic damage effects", "Experiment with combo attacks", "Maximize damage output"],
    rating: 4.2,
    likes: 1543,
    tags: ["action", "fighting", "simulation", "stress relief", "physics", "combat", "dummy"],
    keywords: ["uncle hit punch dummy", "punching simulation game", "stress relief game", "combat dummy"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 58,
    slug: "crazy-vikings-life",
    title: "Crazy Vikings Life",
    description: "Embark on wild Nordic adventures in this action-packed Viking simulation game! Experience the chaotic and entertaining life of fearless Viking warriors as they raid, explore, and conquer in humorous medieval settings. Engage in epic battles using authentic Viking weapons while managing your clan's resources, relationships, and reputation. Navigate through various adventure scenarios including sea voyages, village raids, trading expeditions, and mythological encounters with Norse gods and monsters. Master Viking combat techniques, strategic planning, and diplomatic negotiations to build the most powerful and respected Viking clan. With comedic storylines, engaging character interactions, and dynamic event systems, Crazy Vikings Life delivers an entertaining blend of action, strategy, and Norse mythology that celebrates the legendary Viking culture with modern gaming humor. Can you lead your clan to legendary status in Valhalla?",
    shortDescription: "Wild Viking adventures with humor and chaos!",
    category: "action",
    thumbnail: "assets/images/crazy-vikings-life.avif",
    iframeUrl: "https://www.crazygames.com/embed/crazy-vikings-life",
    instructions: ["Control Viking character movement", "Engage in combat with weapons", "Manage clan resources", "Complete adventure quests", "Trade with other settlements", "Build Viking reputation"],
    rating: 4.4,
    likes: 2065,
    tags: ["action", "vikings", "adventure", "humor", "combat", "simulation", "nordic"],
    keywords: ["crazy vikings life", "viking adventure game", "norse action game", "viking simulation"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 59,
    slug: "crazy-miners",
    title: "Crazy Miners",
    description: "Dig deep into underground adventures in this chaotic multiplayer mining game! Compete against other players in frantic excavation battles where speed, strategy, and a little bit of madness determine who strikes it rich. Navigate through procedurally generated underground networks filled with precious gems, rare minerals, and dangerous obstacles. Master efficient digging techniques, strategic tunnel planning, and resource management while avoiding cave-ins, underground creatures, and sabotage from rival miners. Upgrade your mining equipment, unlock special abilities, and discover hidden treasure chambers that contain legendary rewards. With explosive gameplay mechanics, competitive multiplayer action, and satisfying destruction physics, Crazy Miners delivers an entertaining blend of strategy and chaos that celebrates the adventurous spirit of underground exploration. Can you become the ultimate crazy mining legend?",
    shortDescription: "Chaotic multiplayer underground mining competition!",
    category: "action",
    thumbnail: "assets/images/crazy-miners.avif",
    iframeUrl: "https://www.crazygames.com/embed/crazy-miners-multiplayer",
    instructions: ["Dig tunnels with mining tools", "Collect gems and minerals", "Compete against other miners", "Upgrade mining equipment", "Avoid cave-ins and dangers", "Find hidden treasure chambers"],
    rating: 4.3,
    likes: 1789,
    tags: ["action", "mining", "multiplayer", "underground", "competition", "digging", "treasure"],
    keywords: ["crazy miners game", "multiplayer mining game", "underground competition", "mining action"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 60,
    slug: "hero-3-flying-robot",
    title: "Hero 3: Flying Robot",
    description: "Soar through futuristic skies as an advanced robotic hero in this action-packed aerial adventure! Control a powerful flying robot equipped with cutting-edge technology, devastating weaponry, and incredible aerial maneuverability. Engage in intense aerial combat against enemy forces, navigate through challenging obstacle courses, and complete heroic missions that test your piloting skills and combat prowess. Master flight mechanics, targeting systems, and energy management while exploring vast three-dimensional environments filled with threats and opportunities. Upgrade your robot's capabilities, unlock new weapons and abilities, and customize your mechanical hero for optimal performance in various mission types. With stunning futuristic visuals, smooth flight controls, and engaging combat mechanics, Hero 3: Flying Robot delivers an exhilarating superhero experience that combines classic aerial action with modern robotic warfare. Can you become the ultimate flying robot hero?",
    shortDescription: "Futuristic flying robot hero in aerial combat!",
    category: "action",
    thumbnail: "assets/images/hero-3-flying-robot.avif",
    iframeUrl: "https://www.crazygames.com/embed/hero-3-flying-robot",
    instructions: ["Control flight with arrow keys", "Shoot enemies with spacebar", "Navigate through obstacles", "Complete heroic missions", "Upgrade robot abilities", "Master aerial combat"],
    rating: 4.5,
    likes: 2456,
    tags: ["action", "robot", "flying", "hero", "combat", "futuristic", "aerial"],
    keywords: ["hero 3 flying robot", "robot hero game", "flying action game", "aerial robot combat"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 61,
    slug: "neko-sliding-cat-puzzle",
    title: "Neko Sliding: Cat Puzzle",
    description: "Embark on an adorable feline puzzle adventure with charming cat-themed sliding challenges! Solve delightful sliding puzzles featuring cute cats in various poses and settings. Master the art of spatial reasoning as you slide puzzle pieces to recreate beautiful cat images and unlock new levels of increasing complexity. Each puzzle presents a different adorable cat scenario, from playful kittens to majestic adult cats in scenic environments. Challenge your logical thinking and pattern recognition skills while enjoying the relaxing and therapeutic puzzle-solving experience. With progressive difficulty levels, hint systems, and satisfying completion animations, Neko Sliding Cat Puzzle provides hours of brain-teasing entertainment perfect for cat lovers and puzzle enthusiasts alike. Can you solve all the adorable cat puzzles and become the ultimate neko puzzle master?",
    shortDescription: "Adorable cat-themed sliding puzzle adventure!",
    category: "puzzle",
    thumbnail: "assets/images/neko-sliding-cat-puzzle.avif",
    iframeUrl: "https://www.crazygames.com/embed/neko-sliding-cat-puzzle",
    instructions: ["Click and drag puzzle pieces", "Slide pieces to correct positions", "Complete the cat image", "Use hints when stuck", "Progress through difficulty levels", "Enjoy cute cat animations"],
    rating: 4.6,
    likes: 2143,
    tags: ["puzzle", "cats", "sliding", "cute", "logic", "brain teaser", "animals"],
    keywords: ["neko sliding cat puzzle", "cat puzzle game", "sliding puzzle cats", "cute cat puzzle"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 62,
    slug: "blockbuster-puzzle",
    title: "BlockBuster Puzzle",
    description: "Experience the ultimate block-clearing puzzle challenge that combines strategy with explosive action! Arrange and match colorful blocks to create powerful chain reactions and clear challenging puzzle configurations. Master the art of block placement, strategic thinking, and timing as you work to eliminate all blocks from increasingly complex puzzle boards. Utilize special power blocks, combo multipliers, and explosive elements to achieve maximum clearing efficiency and high scores. Each level presents unique layouts, obstacle configurations, and strategic challenges that test your puzzle-solving abilities. With satisfying block destruction physics, vibrant visual effects, and progressive difficulty curves, BlockBuster Puzzle delivers an engaging brain-training experience that rewards both careful planning and quick thinking. Can you master the art of block elimination and become the ultimate puzzle destroyer?",
    shortDescription: "Strategic block-clearing puzzle with explosive action!",
    category: "puzzle",
    thumbnail: "assets/images/blockbuster-puzzle.avif",
    iframeUrl: "https://www.crazygames.com/embed/blockbuster-puzzle",
    instructions: ["Click to place and arrange blocks", "Match blocks to clear them", "Create chain reactions for combos", "Use special power blocks", "Clear all blocks to win", "Plan moves strategically"],
    rating: 4.5,
    likes: 1876,
    tags: ["puzzle", "blocks", "strategy", "matching", "chain reaction", "brain teaser", "explosive"],
    keywords: ["blockbuster puzzle game", "block clearing puzzle", "strategic block game", "puzzle destruction"],
    dateAdded: "2025-06-25",
    featured: false
  },
  {
    id: 63,
    slug: "wood-block-journey",
    title: "Wood Block Journey",
    description: "Embark on a serene puzzle adventure through beautifully crafted wooden block challenges! Navigate through calming forest-themed levels where you arrange and fit wooden blocks into perfect patterns and configurations. Master the art of spatial reasoning and logical thinking as you solve increasingly complex wooden block puzzles inspired by traditional woodworking and craftsmanship. Each level presents unique shapes, orientations, and fitting challenges that require careful observation and strategic placement. Experience the satisfying tactile feeling of virtual woodwork as blocks snap into place with realistic physics and sounds. With peaceful natural soundscapes, beautiful wooden textures, and progressively challenging gameplay, Wood Block Journey offers a meditative and rewarding puzzle experience that celebrates the timeless appeal of wooden craftsmanship. Can you complete the ultimate wooden block masterpiece?",
    shortDescription: "Serene wooden block fitting and arrangement puzzles!",
    category: "puzzle",
    thumbnail: "assets/images/wood-block-journey.avif",
    iframeUrl: "https://www.crazygames.com/embed/wood-block-journey",
    instructions: ["Drag and drop wooden blocks", "Fit pieces into target shapes", "Rotate blocks to find correct orientation", "Complete each level pattern", "Use logical thinking for placement", "Enjoy the calming experience"],
    rating: 4.7,
    likes: 2567,
    tags: ["puzzle", "wood", "blocks", "zen", "relaxing", "craftsmanship", "spatial"],
    keywords: ["wood block journey", "wooden puzzle game", "block fitting puzzle", "zen block game"],
    dateAdded: "2025-06-25",
    featured: true
  },
  {
    id: 64,
    slug: "moto-x3m-pool-party",
    title: "Moto X3M: Pool Party",
    description: "Dive into aquatic motorcycle madness in this summer-themed extreme sports adventure! Navigate your dirt bike through water-soaked obstacle courses filled with pool slides, water jumps, and splash-tastic challenges. Master wet-weather physics, underwater sections, and slippery surface navigation as you perform death-defying stunts over swimming pools and water parks. Experience unique aquatic elements including underwater tunnels, floating platforms, and massive water slides that add refreshing twists to classic motorcycle stunt gameplay. Execute perfect backflips, front flips, and custom tricks while maintaining balance on wet and unpredictable surfaces. With vibrant summer visuals, challenging water-based obstacles, and satisfying splash effects, Moto X3M Pool Party delivers the ultimate summer motorcycle stunt experience. Can you conquer all the aquatic challenges and become the pool party stunt champion?",
    shortDescription: "Aquatic motorcycle stunts in summer pool paradise!",
    category: "racing",
    thumbnail: "assets/images/moto-x3m-pool-party.avif",
    iframeUrl: "https://www.crazygames.com/embed/moto-x3m-pool-party",
    instructions: ["Use arrow keys to control motorcycle", "Accelerate and brake carefully on wet surfaces", "Perform stunts with up/down arrows", "Navigate through water obstacles", "Land safely after jumps", "Complete levels as fast as possible"],
    rating: 4.8,
    likes: 4231,
    tags: ["racing", "motorcycle", "stunts", "water", "summer", "pool", "extreme sports"],
    keywords: ["moto x3m pool party", "water motorcycle game", "pool stunt bike", "aquatic racing"],
    dateAdded: "2025-06-28",
    featured: true
  },
  {
    id: 65,
    slug: "moto-x3m-spooky-land",
    title: "Moto X3M: Spooky Land",
    description: "Enter the haunted realm of motorcycle mayhem in this spine-chilling Halloween adventure! Navigate your bike through eerie graveyards, haunted mansions, and supernatural obstacle courses filled with ghosts, zombies, and otherworldly challenges. Master spooky physics with floating platforms, ghostly ramps, and mystical portals that transport you through haunted dimensions. Encounter unique Halloween elements including pumpkin cannons, skeleton bridges, witch cauldrons, and vampire castle jumps that test your courage and riding skills. Perform terrifying stunts while avoiding deadly traps like swinging scythes, crumbling tombstones, and haunted machinery. With atmospheric Halloween visuals, creepy sound effects, and spine-tingling obstacle designs, Moto X3M Spooky Land delivers a thrilling horror-themed motorcycle experience perfect for brave riders. Can you survive the supernatural challenges and escape the spooky land?",
    shortDescription: "Halloween motorcycle horror with supernatural stunts!",
    category: "racing",
    thumbnail: "assets/images/moto-x3m-spooky-land.avif",
    iframeUrl: "https://www.miniplay.com/embed/moto-x3m-spooky-land",
    instructions: ["Control bike with arrow keys", "Navigate through spooky obstacles", "Avoid deadly Halloween traps", "Perform stunts for time bonuses", "Land carefully on unstable platforms", "Survive the supernatural challenges"],
    rating: 4.7,
    likes: 3654,
    tags: ["racing", "motorcycle", "halloween", "spooky", "horror", "supernatural", "stunts"],
    keywords: ["moto x3m spooky land", "halloween motorcycle game", "spooky bike stunts", "horror racing"],
    dateAdded: "2025-06-28",
    featured: true
  },
  {
    id: 66,
    slug: "moto-x3m-winter",
    title: "Moto X3M: Winter",
    description: "Brave the frozen wilderness in this ice-cold motorcycle extreme sports adventure! Navigate treacherous winter landscapes filled with snow-covered ramps, icy obstacles, and frozen challenges that test your cold-weather riding skills. Master winter physics with slippery ice surfaces, snow drifts, and frozen platforms that require precise throttle control and balance adjustments. Experience unique winter elements including ice slides, snow cannons, frozen waterfalls, and arctic wildlife obstacles that create thrilling seasonal challenges. Perform spectacular winter stunts while avoiding hypothermia-inducing crashes on dangerous icy terrain. Bundle up for high-speed action through blizzards, avalanche zones, and sub-zero temperatures that make every jump and landing a life-or-death decision. With stunning winter visuals, realistic snow effects, and bone-chilling obstacle courses, Moto X3M Winter delivers the ultimate frozen motorcycle experience. Can you survive the arctic conditions and conquer the winter wonderland?",
    shortDescription: "Extreme winter motorcycle stunts in frozen wonderland!",
    category: "racing",
    thumbnail: "assets/images/moto-x3m-4.avif",
    iframeUrl: "https://www.crazygames.com/embed/moto-x3m-4",
    instructions: ["Use arrow keys for bike control", "Handle slippery ice carefully", "Navigate through snow obstacles", "Perform cold-weather stunts", "Maintain balance on frozen surfaces", "Complete winter challenges quickly"],
    rating: 4.8,
    likes: 3987,
    tags: ["racing", "motorcycle", "winter", "ice", "snow", "extreme sports", "cold"],
    keywords: ["moto x3m winter", "winter motorcycle game", "ice bike stunts", "snow racing"],
    dateAdded: "2025-06-28",
    featured: true
  },
  {
    id: 67,
    slug: "pac-man-classic",
    title: "PAC-MAN Classic",
    description: "Experience the legendary arcade classic that defined gaming history! Navigate the iconic maze as PAC-MAN, chomping dots and avoiding colorful ghosts in this timeless arcade adventure. Master the art of strategic movement as you collect all dots while evading Blinky, Pinky, Inky, and Sue, each with unique AI patterns and behaviors. Consume power pellets to temporarily turn the tables on your ghostly pursuers, racking up bonus points by eating them. Collect bonus fruits for extra points and aim for the highest score possible in this endlessly entertaining arcade masterpiece. With authentic sound effects, classic gameplay mechanics, and the original maze design, PAC-MAN Classic delivers the pure nostalgic gaming experience that captivated generations of players and established the foundation of arcade gaming culture.",
    shortDescription: "The legendary arcade maze game that started it all!",
    category: "puzzle",
    thumbnail: "assets/images/pac-man.webp",
    iframeUrl: "https://www.crazygames.com/embed/pac-man",
    instructions: [
      "Use arrow keys to move PAC-MAN",
      "Eat all dots to complete level",
      "Avoid the four ghosts",
      "Collect power pellets to eat ghosts",
      "Grab bonus fruits for extra points",
      "Clear all levels to win"
    ],
    rating: 4.9,
    likes: 3245,
    tags: ["puzzle", "classic", "arcade", "maze", "retro", "pac-man", "nostalgic", "dots"],
    keywords: ["pac-man game", "classic arcade maze", "pacman online", "retro arcade game"],
    dateAdded: "2025-07-10",
    featured: true
  }
];

// ============================================
// GAME CATEGORIES
// ============================================

const gameCategories = {
  all: "All Games",
  action: "Action Games",
  shooter: "Shooter Games", 
  racing: "Racing Games",
  adventure: "Adventure Games",
  puzzle: "Puzzle Games",
  fighting: "Fighting Games"
};

// ============================================
// GAME RENDERING FUNCTIONS
// ============================================

function renderGames(games) {
  console.log('renderGames called, game count:', games ? games.length : 0);
  
  const gamesGrid = document.getElementById('games-grid');
  console.log('Found games-grid element:', !!gamesGrid);
  
  if (!gamesGrid) {
    console.error('games-grid element not found');
    return;
  }
  
  // Clear existing content
  gamesGrid.innerHTML = '';
  console.log('Grid content cleared');
  
  if (!games || games.length === 0) {
    console.log('No game data, showing empty state');
    gamesGrid.innerHTML = createNoGamesMessage();
    return;
  }
  
  console.log('Starting to render', games.length, 'game cards');
  
  // Render game cards
  games.forEach((game, index) => {
    console.log('Rendering game:', game.title);
    try {
      const gameCard = createGameCard(game);
      gamesGrid.appendChild(gameCard);
      console.log('Successfully added game card:', game.title);
    } catch (error) {
      console.error('Error rendering game card:', game.title, error);
    }
  });
  
  console.log('Game card rendering complete');
  
  // Update game count
  const gamesCount = document.querySelector('.games-count');
  if (gamesCount) {
    gamesCount.textContent = `${games.length} games loaded`;
  }
}

function createGameCard(game) {
  // Dynamically get favorites and userRatings, use defaults if not available
  const currentFavorites = (typeof favorites !== 'undefined') ? favorites : [];
  const currentUserRatings = (typeof userRatings !== 'undefined') ? userRatings : {};
  
  const isFavorited = currentFavorites.includes(game.id);
  const userRating = currentUserRatings[game.id] || 0;
  
  const card = document.createElement('div');
  card.className = 'game-card glow-on-hover';
  card.dataset.gameId = game.id;
  card.dataset.gameSlug = game.slug;
  
  card.innerHTML = `
    <div class="game-thumbnail">
      <img src="${game.thumbnail}" 
           alt="${game.title}" 
           class="game-card-image"
           loading="eager"
           decoding="sync"
           style="image-rendering: auto; image-rendering: optimize-quality; filter: contrast(1.1) brightness(1.05) saturate(1.15);"
           onload="this.style.filter='contrast(1.12) brightness(1.08) saturate(1.18)'; this.style.imageRendering='optimize-quality';"
           onerror="this.src='https://via.placeholder.com/500x400/6B46C1/FFFFFF?text=${encodeURIComponent(game.title)}'; this.style.objectFit='contain'; this.style.backgroundColor='var(--neon-purple)'; this.style.filter='contrast(1.3) brightness(1.2) saturate(1.2)';">
      <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" 
              title="${isFavorited ? 'Remove from favorites' : 'Add to favorites'}">
        ${isFavorited ? '❤️' : '🤍'}
      </button>
      ${game.featured ? '<div class="featured-badge">FEATURED</div>' : ''}
    </div>
    <div class="game-info">
      <h3 class="game-title neon-text">${game.title}</h3>
      <p class="game-description">${game.shortDescription}</p>
      <div class="game-meta">
        <div class="game-rating">
          <span class="stars">${generateStars(game.rating)}</span>
          <span class="rating-value">${game.rating}</span>
        </div>
        <div class="game-likes">
          <span class="like-count">${formatNumber(game.likes)}</span>
          <span class="like-icon">👍</span>
        </div>
      </div>
      <div class="game-tags">
        ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      ${userRating > 0 ? `<div class="user-rating">Your rating: ${generateStars(userRating)}</div>` : ''}
    </div>
  `;
  
  // 添加事件监听器
  card.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // 检查是否点击了收藏按钮
    if (e.target.closest('.favorite-btn')) {
      return; // 如果点击的是收藏按钮，不启动游戏
    }
    
    // 直接启动游戏
    playGame(game.id);
  });

  // 收藏按钮事件监听器
  const favoriteBtn = card.querySelector('.favorite-btn');
  if (favoriteBtn) {
    favoriteBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(game.id);
    });
  }
  
  return card;
}

function createNoGamesMessage() {
  return `
    <div class="no-games">
      <div class="no-games-icon">🎮</div>
      <h3 class="neon-text">No Games Found</h3>
      <p>Try adjusting your search criteria or filters</p>
      <button class="neon-button" onclick="resetFilters()">Reset Filters</button>
    </div>
  `;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return '★'.repeat(fullStars) + 
         (hasHalfStar ? '☆' : '') + 
         '☆'.repeat(emptyStars);
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function animateGameCards() {
  const cards = document.querySelectorAll('.game-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// ============================================
// GAME UTILITIES
// ============================================

function getGameById(id) {
  return gamesData.find(game => game.id === id);
}

function getGamesByCategory(category) {
  if (category === 'all') return gamesData;
  return gamesData.filter(game => game.category === category);
}

function getFeaturedGames() {
  return gamesData.filter(game => game.featured);
}

function getPopularGames(limit = 4) {
  return [...gamesData]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, limit);
}

function getTopRatedGames(limit = 4) {
  return [...gamesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

function searchGames(query) {
  const lowerQuery = query.toLowerCase();
  return gamesData.filter(game => 
    game.title.toLowerCase().includes(lowerQuery) ||
    game.description.toLowerCase().includes(lowerQuery) ||
    game.shortDescription.toLowerCase().includes(lowerQuery) ||
    game.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    game.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
}

function resetFilters() {
  const searchInput = document.getElementById('game-search');
  const categoryFilter = document.getElementById('category-filter');
  const sortFilter = document.getElementById('sort-filter');
  
  if (searchInput) searchInput.value = '';
  if (categoryFilter) categoryFilter.value = 'all';
  if (sortFilter) sortFilter.value = 'popular';
  
  // Reapply filters
  if (window.applyFilters) {
    applyFilters('');
  }
}

// ============================================
// GAME STATISTICS
// ============================================

function getGameStats() {
  return {
    totalGames: gamesData.length,
    totalCategories: Object.keys(gameCategories).length - 1, // 减去 "all"
    featuredGames: getFeaturedGames().length,
    averageRating: (gamesData.reduce((sum, game) => sum + game.rating, 0) / gamesData.length).toFixed(1),
    totalLikes: gamesData.reduce((sum, game) => sum + game.likes, 0),
    categoriesCount: gamesData.reduce((acc, game) => {
      acc[game.category] = (acc[game.category] || 0) + 1;
      return acc;
    }, {})
  };
}

function updateGameStats(gameId, updates) {
  const gameIndex = gamesData.findIndex(game => game.id === gameId);
  if (gameIndex !== -1) {
    Object.assign(gamesData[gameIndex], updates);
    return true;
  }
  return false;
}

// ============================================
// GAME LOADING PLACEHOLDERS
// ============================================

function createLoadingCard() {
  const card = document.createElement('div');
  card.className = 'game-card loading-placeholder';
  
  card.innerHTML = `
    <div class="game-thumbnail">
      <div class="loading-shimmer"></div>
    </div>
    <div class="game-info">
      <div class="loading-title"></div>
      <div class="loading-description"></div>
      <div class="loading-meta"></div>
    </div>
  `;
  
  return card;
}

function showLoadingCards(count = 6) {
  const gamesGrid = document.getElementById('games-grid');
  if (!gamesGrid) return;
  
  gamesGrid.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const loadingCard = createLoadingCard();
    gamesGrid.appendChild(loadingCard);
  }
}

// ============================================
// RANDOM GAME FUNCTIONS
// ============================================

function getRandomGame() {
  const randomIndex = Math.floor(Math.random() * gamesData.length);
  return gamesData[randomIndex];
}

function getRandomGames(count = 3) {
  const shuffled = [...gamesData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

// 使函数全局可用
window.GameModule = {
  gamesData,
  gameCategories,
  renderGames,
  createGameCard,
  getGameById,
  getGamesByCategory,
  getFeaturedGames,
  getPopularGames,
  getTopRatedGames,
  searchGames,
  resetFilters,
  getGameStats,
  getRandomGame,
  getRandomGames,
  showLoadingCards
}; 