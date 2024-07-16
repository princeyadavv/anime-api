const animeCharacters = [
  { name: "Goku", series: "Dragon Ball series", description: "The powerful and optimistic Saiyan warrior from Earth.", specialPower: "Super Saiyan transformations and powerful energy attacks", image:"https://wallpapers.com/images/hd/flaring-son-goku-nh5qea4aaaxecjp7.webp" },


  { name: "Naruto Uzumaki", series: "Naruto series", description: "A spirited ninja with dreams of becoming Hokage.", specialPower: "Chakra manipulation and mastering various ninja techniques", image:"https://wallpapers.com/images/high/dope-naruto-4ug4nfv88fow3ldj.webp" },


  { name: "Monkey D. Luffy", series: "One Piece", description: "Captain of the Straw Hat Pirates, seeking the One Piece treasure.", specialPower: "Rubber-like elasticity and enhanced physical abilities", image:"https://wallpapers.com/images/high/one-piece-luffy-pfp-success-pose-wind-effect-08tmqg26q5295uc3.webp" },


  { name: "Light Yagami", series: "Death Note", description: "A high school student who gains a death god's notebook with deadly powers.", specialPower: "Ability to kill anyone whose name is written in the Death Note", image:"https://wallpapers.com/images/high/light-yagami-anime-bxxhhr28p9rmgoqk.webp" },


  { name: "Ichigo Kurosaki", series: "Bleach", description: "A teenager with the ability to see ghosts, who becomes a Soul Reaper.", specialPower: "Zanpakuto swordsmanship, spiritual energy manipulation", image:"https://wallpapers.com/images/high/bleach-ichigo-hbqxtjqbxkvd4boo.webp" },


  { name: "Edward Elric", series: "Fullmetal Alchemist", description: "A young alchemist seeking the Philosopher's Stone to restore his brother.", specialPower: "Alchemy, ability to transmute matter", image:"https://wallpapers.com/images/high/edward-elric-1680-x-1050-wallpaper-mhrr5ewabf26k2hj.webp" },


  { name: "Spike Spiegel", series: "Cowboy Bebop", description: "A laid-back bounty hunter with a dark past, traveling through space.", specialPower: "Exceptional combat skills, marksmanship", image:"https://wallpapers.com/images/high/spike-spiegel-1920-x-1080-wallpaper-6fnip42j9xb3eujd.webp" },


  { name: "Saitama", series: "One Punch Man", description: "A hero who defeats any opponent with a single punch, seeking excitement.", specialPower: "Unparalleled strength and invulnerability", image:"https://wallpapers.com/images/high/saitama-pictures-yi2vfspop17v2e5i.webp" },


  { name: "Kirito", series: "Sword Art Online", description: "A skilled gamer trapped in a virtual reality MMORPG.", specialPower: "Master swordsman, virtual reality combat skills", image:"https://wallpapers.com/images/high/kirito-in-the-city-l3lfh6ws49rvfqn0.webp" },


  { name: "Asuna Yuuki", series: "Sword Art Online", description: "A strong-willed and skilled player in Sword Art Online.", specialPower: "Swordsmanship, strategic thinking in battles", image:"https://wallpapers.com/images/high/yuuki-asuna-3840-x-2160-wallpaper-xnktc19u1ullur3i.webp" },


  { name: "Mikasa Ackerman", series: "Attack on Titan", description: "A highly skilled and fiercely protective soldier in humanity's fight for survival.", specialPower: "Exceptional combat skills, Three-dimensional Maneuver Gear proficiency", image:"https://wallpapers.com/images/high/mikasa-pfp-blades-6gobrn3he9890t2j.webp" },


  { name: "Levi Ackerman", series: "Attack on Titan", description: "A captain known for his exceptional combat skills and stoic demeanor.", specialPower: "Masterful combat techniques, strategic mind", image:"https://wallpapers.com/images/high/sad-levi-pfp-l3ok64xo5tcf1pu6.webp" },


  { name: "Eren Yeager", series: "Attack on Titan", description: "A determined young man with the ability to transform into a Titan.", specialPower: "Titan shifting, enhanced strength and regeneration", image:"https://wallpapers.com/images/high/eren-yeager-is-my-name-d0r1f8hn1c8tprn1.webp" },


  { name: "Lelouch vi Britannia", series: "Code Geass", description: "A genius strategist with a mysterious power, leading a rebellion.", specialPower: "Geass power, ability to command others with eye contact", image:"https://wallpapers.com/images/high/good-looking-lelouch-lamperouge-ma67ze4d72fgc6wa.webp" },


  { name: "Natsu Dragneel", series: "Fairy Tail", description: "A fiery and loyal mage of the Fairy Tail guild, with Dragon Slayer abilities.", specialPower: "Fire Dragon Slayer Magic, enhanced physical abilities", image:"https://wallpapers.com/images/high/natsu-dragneel-774-x-1032-wallpaper-jqit1eqglmkb0z3a.webp" },


  { name: "Erza Scarlet", series: "Fairy Tail", description: "A strong and disciplined swordswoman known as Titania in Fairy Tail.", specialPower: "Requip Magic, mastery of various weapons and armors", image:"https://wallpapers.com/images/high/erza-scarlet-1920-x-1200-wallpaper-p1r2i7f1x718xp4m.webp" },


  { name: "Gon Freecss", series: "Hunter x Hunter", description: "An adventurous and kind-hearted young boy aiming to find his father as a Hunter.", specialPower: "Enhanced physical abilities, Nen mastery", image:"https://wallpapers.com/images/high/gon-sticking-tongue-out-hxh-pfp-tvwnrxcgqrti3yd4.webp" },


  { name: "Killua Zoldyck", series: "Hunter x Hunter", description: "A skilled assassin from a family of notorious killers, befriending Gon on his journey.", specialPower: "Electricity manipulation, assassin skills", image:"https://wallpapers.com/images/high/stubborn-hunter-x-hunter-killua-pfp-graphic-art-xon928puxiiybbxn.webp" },


  { name: "Roronoa Zoro", series: "One Piece", description: "A swordsman with incredible strength and loyalty to his captain, Luffy.", specialPower: "Swordsmanship, three-sword style combat", image:"https://wallpapers.com/images/high/fierce-anime-roronoa-zoro-pfp-mi7yaz4zwy1wixal.webp" },


  { name: "Usopp", series: "One Piece", description: "A talented marksman and storyteller, part of the Straw Hat Pirates crew.", specialPower: "Expert marksmanship, creativity in weapon design", image:"https://wallpapers.com/images/high/one-piece-usopp-weapon-9jx8k086nkjdiell.webp" },


  { name: "Roy Mustang", series: "Fullmetal Alchemist", description: "A state alchemist known as the Flame Alchemist, aiming for justice and reform.", specialPower: "Flame alchemy, ability to manipulate fire", image:"https://wallpapers.com/images/high/roy-mustang-1472-x-2616-wallpaper-kg12xv0fhl5ktjc3.webp" },


  { name: "Rukia Kuchiki", series: "Bleach", description: "A Soul Reaper with a strong sense of duty and a close friend of Ichigo Kurosaki.", specialPower: "Kido spells, Zanpakuto swordsmanship", image:"https://wallpapers.com/images/high/rukia-kuchiki-1440-x-1080-wallpaper-ia3dgk4161a57bmp.webp" },


  { name: "Shoyo Hinata", series: "Haikyuu!!", description: "A determined volleyball player with a small stature but great jumping ability.", specialPower: "High jumping ability, quick reflexes", image:"https://wallpapers.com/images/high/matching-anime-profile-pictures-1080-x-1080-pk042ayb9ad268oq.webp" },


  { name: "Saber", series: "Fate/stay night", description: "A heroic spirit summoned by Masters in the Holy Grail War, known for her swordsmanship.", specialPower: "Noble Phantasm, exceptional swordsmanship", image:"https://wallpapers.com/images/high/saber-fate-stay-night-kbzbcagu7yob5pca.webp" },


  { name: "Maka Albarn", series: "Soul Eater", description: "A scythe-wielding meister aiming to turn her demon weapon partner into a Death Scythe.", specialPower: "Scythe combat, ability to resonate souls", image:"https://wallpapers.com/images/high/soul-eater-pfp-funny-mm3wv335xrhl5w1y.webp" },


  { name: "Shinji Ikari", series: "Neon Genesis Evangelion", description: "A reluctant pilot of the Evangelion units, dealing with complex emotions and duties.", specialPower: "Piloting Evangelion units, synchronization with Eva", image:"https://wallpapers.com/images/high/shinji-ikari-1024-x-1024-wallpaper-bwbv05rztw410itg.webp" },


  { name: "Gintoki Sakata", series: "Gintama", description: "A laid-back samurai and freelancer, navigating a bizarre world with humor and skill.", specialPower: "Exceptional swordsmanship, strategic thinking", image:"https://wallpapers.com/images/high/gintama-gintoki-with-hashida-kanshichirou-9bb7yc7b9mawz65i.webp" },


  { name: "Alphonse Elric", series: "Fullmetal Alchemist", description: "Edward Elric's younger brother, whose soul is bound to a suit of armor in their quest.", specialPower: "Soul bound to armor, durability and strength", image:"https://wallpapers.com/images/high/alphonse-elric-1002-x-1458-wallpaper-4i9xx33flz4dnicr.webp" },


  { name: "Kagome Higurashi", series: "Inuyasha", description: "A modern-day girl who travels through time to the feudal era, discovering her powers.", specialPower: "Spiritual powers, archery skills", image:"https://wallpapers.com/images/high/kagome-higurashi-1920-x-1080-wallpaper-opc31jar2u1mmsco.webp" },


  { name: "Yusuke Urameshi", series: "Yu Yu Hakusho", description: "A rebellious teenage delinquent turned Spirit Detective, tasked with protecting the living world.", specialPower: "Spirit Gun, Spirit Detective abilities", image:"https://wallpapers.com/images/high/yu-yu-hakusho-background-8xqeaq7wh7gjcd8z.webp" },


  { name: "Hiei", series: "Yu Yu Hakusho", description: "A cold and powerful demon swordsman, initially an antagonist turned ally.", specialPower: "Jagan Eye, swordsmanship, demon powers", image:"https://wallpapers.com/images/high/ghost-fighter-hiei-yu-yu-hakusho-nupwmtcmtaeu03ym.webp" },


  { name: "Tatsuya Shiba", series: "The Irregular at Magic High School", description: "A skilled magic user with unique abilities in a world where magic is both science and art.", specialPower: "Regrowth magic, elemental sight", image:"https://wallpapercave.com/wp/wp6949496.jpg" },


  { name: "Miyuki Shiba", series: "The Irregular at Magic High School", description: "Tatsuya's talented sister and a prodigy in magical studies.", specialPower: "Cocytus magic, strategic magic use", image:"https://wallpapercave.com/wp/wp3082772.jpg" },


  { name: "Yato", series: "Noragami", description: "A lesser god seeking recognition and building his own shrine with the help of a Regalia.", specialPower: "Godly powers, Regalia abilities", image:"https://wallpapers.com/images/high/noragami-pictures-ayu0zsf2ttiq09n0.webp" },


  { name: "Taiga Aisaka", series: "Toradora!", description: "A small but fierce girl known as the Palmtop Tiger, with a softer side.", specialPower: "Strong will, martial arts skills", image:"https://wallpapers.com/images/high/taiga-aisaka-1ek3ce4vppl3gt2v.webp" },


  { name: "Ryuuji Takasu", series: "Toradora!", description: "A kind-hearted and responsible high school student known for his scary appearance.", specialPower: "Domestic skills, caring personality", image:"https://wallpapers.com/images/high/ryuuji-takasu-900-x-507-wallpaper-j82ty22k66ohd2yi.webp" },


  { name: "Homura Akemi", series: "Puella Magi Madoka Magica", description: "A mysterious and determined magical girl with a tragic past.", specialPower: "Time manipulation, magical abilities", image:"https://wallpapers.com/images/high/puella-magi-madoka-magica-2poe8i565ttkdjs4.webp" },


  { name: "Yugi Muto", series: "Yu-Gi-Oh!", description: "A young duelist who solves the Millennium Puzzle, unlocking the spirit within.", specialPower: "Duel Monsters skills, Millennium Puzzle's spirit", image:"https://wallpapers.com/images/high/yugi-muto-2240-x-1867-wallpaper-gqna9ta7ne40zhy5.webp" },


  { name: "Allen Walker", series: "D.Gray-man", description: "An exorcist with a cursed eye, fighting against demons known as Akuma.", specialPower: "Innocence arm, anti-Akuma weapon abilities", image:"https://wallpapers.com/images/high/allen-walker-exorcist-in-action-yuswv2e9nxydake1.webp" },


  { name: "Usagi Tsukino", series: "Sailor Moon", description: "A clumsy but kind-hearted girl who transforms into the Sailor Guardian of love and justice.", specialPower: "Moon Prism Power, various magical attacks", image:"https://wallpapers.com/images/high/sailor-moon-background-d6guitcgcug5g6eg.webp" },


  { name: "Rei Ayanami", series: "Neon Genesis Evangelion", description: "A mysterious and emotionally distant pilot of the Evangelion units.", specialPower: "Piloting Evangelion units, synchronization with Eva", image:"https://wallpapers.com/images/high/rei-ayanami-1200-x-1200-wallpaper-0d4rfhkmnefy3bo7.webp" },


  { name: "Simon", series: "Tengen Toppa Gurren Lagann", description: "A young digger who becomes a leader in a battle against oppressive forces with his team.", specialPower: "Gurren Lagann pilot, spiral energy manipulation", image:"https://wallpapers.com/images/high/gurren-lagann-simon-1400-x-788-wallpaper-qhcm961jbn48720g.webp" },


  { name: "Kamina", series: "Tengen Toppa Gurren Lagann", description: "A charismatic and fearless leader who inspires others in the fight for freedom.", specialPower: "Fearless spirit, leadership skills", image:"https://wallpapers.com/images/high/kamina-the-spirited-leader-from-gurren-lagann-3agbioce3qlv4oc6.webp" },


  { name: "Yoko Littner", series: "Tengen Toppa Gurren Lagann", description: "A skilled marksman and member of Team Dai-Gurren, fighting for survival.", specialPower: "Marksmanship, combat skills", image:"https://wallpapers.com/images/high/yoko-littner-1600-x-1600-wallpaper-drzz2ll9sfwcnrsh.webp" },


  { name: "Misaka Mikoto", series: "A Certain Scientific Railgun", description: "An electromaster with powerful electrical abilities, living in a city of espers.", specialPower: "Electromaster abilities, Railgun attacks", image:"https://wallpapercave.com/wp/wp7643656.jpg" },


  { name: "Accelerator", series: "A Certain Magical Index", description: "An esper with the ability to manipulate vectors, initially a villain turned anti-hero.", specialPower: "Vector manipulation, immense calculation abilities", image:"https://imgs.search.brave.com/I90GDGRYmOugNUYLZescKziE7Ey9mNjKxqdmPwziljA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDYv/dG9hcnUtYWNjZWxl/cmF0b3Itdi10ZWl0/b2t1LUNyb3BwZWQu/anBn" },


  { name: "Soma Yukihira", series: "Food Wars!", description: "A talented young chef aiming to surpass his father in the culinary world.", specialPower: "Creative culinary skills, adaptive cooking techniques", image:"https://imgs.search.brave.com/_wN84j46fThP0mX3FV2EntR8lOITofEAvANft45njHE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9vcGVyLmNvbS9p/bWcvZ2FsbGVyeS95/dWtpaGlyYS1zb21h/cy1lbnRpcmUtYmFj/a3N0b3J5LWV4cGxh/aW5lZC9pbnRyby0x/NTgzNTA3NzY0Lmpw/Zw" },


  { name: "Erina Nakiri", series: "Food Wars!", description: "An elite chef known as the God Tongue for her highly sensitive palate.", specialPower: "God Tongue ability, culinary expertise", image:"https://imgs.search.brave.com/JeAv2xYpgNS25wyAAWHd7JjcrrR3JW1yoMhxeDOEdfc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzEwL01lbnRv/cnMtYW5kLVRlYWNo/ZXJzLWVyaW5hLW5h/a2lyaS00LmpwZw" },


  { name: "Hinata Hyuga", series: "Naruto series", description: "A skilled ninja from the Hyuga clan, known for her Byakugan and determination.", specialPower: "Byakugan, gentle fist combat style", image:"https://wallpapercave.com/uwp/uwp4398840.jpeg" },


  { name: "Neji Hyuga", series: "Naruto series", description: "A talented and confident ninja from the Hyuga clan, mastering the Byakugan.", specialPower: "Byakugan, gentle fist combat style", image:"https://wallpapercave.com/wp/wp6307224.jpg" },


  { name: "Itachi Uchiha", series: "Naruto series", description: "A prodigious ninja with tragic ties to his clan, wielding powerful Uchiha techniques.", specialPower: "Sharingan, mastery of Uchiha techniques", image:"https://wallpapercave.com/wp/wp13161904.jpg" },


  { name: "Kakashi Hatake", series: "Naruto series", description: "A skilled and enigmatic ninja known as the Copy Ninja, with a unique eye technique.", specialPower: "Sharingan, ninja techniques mastery", image:"https://wallpapers.com/images/high/kakashi-sharingan-qbng6mu7gke69lo5.webp" },


  { name: "Gaara", series: "Naruto series", description: "A former antagonist turned protective leader, with control over sand.", specialPower: "Sand manipulation, jinchuriki abilities", image:"https://wallpapers.com/images/high/confused-young-gaara-v0y8hdvd60vb80ny.webp" },


  { name: "Jotaro Kujo", series: "JoJo's Bizarre Adventure", description: "A stoic and skilled Stand user, fighting against supernatural threats.", specialPower: "Star Platinum Stand, precise combat skills", image:"https://wallpapers.com/images/high/jotaro-kujo-1920-x-1080-wallpaper-6bp0cdtwtquzp8l9.webp" },


  { name: "Joseph Joestar", series: "JoJo's Bizarre Adventure", description: "A witty and resourceful Stand user, known for his unpredictable tactics.", specialPower: "Hermit Purple Stand, strategic thinking", image:"https://imgs.search.brave.com/vuRKYmVnrSHFvSUB7jJQkOwroz_5QhoP3yna1eYnK7I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2pq/YmEvaW1hZ2VzLzEv/MWUvSm9zZXBoX0pv/ZXN0YXJfYW5pbWUu/cG5nL3JldmlzaW9u/L2xhdGVzdC9zY2Fs/ZS10by13aWR0aC1k/b3duLzI3MD9jYj0y/MDIxMDIxMTAxNDkx/MA" },


  { name: "Jonathan Joestar", series: "JoJo's Bizarre Adventure", description: "A noble and honorable gentleman fighting against dark forces with courage.", specialPower: "Hamon energy, martial arts skills", image:"https://wallpapers.com/images/high/joseph-joestar-1920-x-1640-wallpaper-zaqup5l4owuzxc1k.webp" },


  { name: "Giorno Giovanna", series: "JoJo's Bizarre Adventure", description: "A determined and ambitious Stand user with a powerful lineage.", specialPower: "Gold Experience Stand, life manipulation", image:"https://wallpapers.com/images/high/flaming-awesome-giorno-giovanna-ea448u1nibw6tc81.webp" },


  { name: "Deku (Izuku Midoriya)", series: "My Hero Academia", description: "A determined and heroic student aiming to become the greatest hero.", specialPower: "One For All Quirk, enhanced strength and agility", image:"https://wallpapers.com/images/high/midoriya-izuku-cute-boy-cartoon-mk56f1iq1nk0deux.webp" },


  { name: "All Might", series: "My Hero Academia", description: "The Symbol of Peace and the world's greatest hero, passing on his power.", specialPower: "One For All Quirk, enhanced strength and speed", image:"https://wallpapers.com/images/high/all-might-background-lil6jfl97403gtei.webp" },


  { name: "Shoto Todoroki", series: "My Hero Academia", description: "A powerful student with both ice and fire Quirks, aiming to reconcile his past.", specialPower: "Half-Cold Half-Hot Quirk, powerful elemental abilities", image:"https://wallpapers.com/images/high/my-hero-academia-todoroki-with-onigiri-tfdvg594h61bfuy1.webp" },


  { name: "Katsuki Bakugo", series: "My Hero Academia", description: "An explosive and driven student with powerful explosive Quirk abilities.", specialPower: "Explosion Quirk, tactical combat skills", image:"https://wallpapers.com/images/high/katsuki-bakugo-power-unleashed4-k-4dxhwtk9ljdncnxh.webp" },


  { name: "Ochaco Uraraka", series: "My Hero Academia", description: "A cheerful and determined student with the ability to make objects weightless.", specialPower: "Zero Gravity Quirk, tactical combat and rescue skills", image:"https://wallpapercave.com/uwp/uwp3542583.jpeg" },


  { name: "Sakura Haruno", series: "Naruto series", description: "A determined ninja with impressive medical and combat skills, aiming to support her team.", specialPower: "Medical ninjutsu, strength enhancement", image:"https://wallpapercave.com/wp/wp12066782.jpg" },


  { name: "Nami", series: "One Piece", description: "A talented navigator and member of the Straw Hat Pirates, dreaming of charting the world.", specialPower: "Cartography skills, weather manipulation weapon", image:"https://wallpapercave.com/wp/wp13626060.jpg" },


  { name: "Robin Nico", series: "One Piece", description: "An archaeologist and member of the Straw Hat Pirates, with the ability to sprout multiple limbs.", specialPower: "Devil Fruit powers, history knowledge", image:"https://wallpapers.com/images/high/nico-robin-2048-x-1707-wallpaper-18y7us57dsk7tq86.webp" },


  { name: "Sanji", series: "One Piece", description: "A chivalrous cook and fighter of the Straw Hat Pirates, known for his kicks.", specialPower: "Black Leg Style, culinary skills", image:"https://wallpapers.com/images/high/close-up-of-vinsmoke-sanji-gva996asz0soj8kx.webp" },


  { name: "Brook", series: "One Piece", description: "A skeletal musician and member of the Straw Hat Pirates, with a lively spirit.", specialPower: "Soul abilities, musical talent", image:"https://wallpapers.com/images/high/one-piece-pfp-gray-brook-z5qcmwhl8wev7nhk.webp" },


  { name: "Franky", series: "One Piece", description: "A cyborg shipwright and member of the Straw Hat Pirates, with a strong sense of justice.", specialPower: "Cyborg enhancements, shipbuilding skills", image:"https://wallpapers.com/images/high/one-piece-battle-franky38-mecha-05nah0523kllwqva.webp" },


  { name: "Trafalgar D. Water Law", series: "One Piece", description: "A surgeon and pirate with a mysterious past, wielding powerful Room techniques.", specialPower: "Room techniques, medical expertise", image:"https://wallpapers.com/images/high/one-piece-pictures-070xo3d1u9vv9ean.webp" }
];


animeCharacters.forEach((obj, index) => {
  const newObj = { id: index + 1, ...obj };
  
  animeCharacters[index] = newObj;
});

module.exports = animeCharacters;
