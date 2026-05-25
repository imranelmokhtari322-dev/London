import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FILMS = [
  {
    id: 'michael',
    title: 'Michael',
    year: '2026',
    genre: 'Biography · Drama · History',
    rating: '7.8',
    description:
      'The definitive life story of Michael Jackson — from his childhood in Gary, Indiana to his rise as the King of Pop. Directed by Antoine Fuqua.',
    poster: 'https://media.themoviedb.org/t/p/w500/3Qud19bBUrrJAzy0Ilm8gRJlJXP.jpg',
    ukRank: '#1 UK',
    boxOffice: '£8.4M Opening Weekend',
    badge: 'RECORD OPENING',
    badgeColor: 'bg-red-500',
  },
  {
    id: 'devil-wears-prada-2',
    title: 'The Devil Wears Prada 2',
    year: '2026',
    genre: 'Comedy · Drama',
    rating: '7.2',
    description:
      'Miranda Priestly returns to Runway magazine in this long-awaited sequel, starring Meryl Streep, Anne Hathaway, and Emily Blunt.',
    poster: 'https://media.themoviedb.org/t/p/w500/xTI42pmsP5EDnvsNJPEDubwWBQO.jpg',
    ukRank: '#2 UK',
    boxOffice: 'Now Showing',
    badge: 'NEW RELEASE',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'super-mario-galaxy',
    title: 'The Super Mario Galaxy Movie',
    year: '2026',
    genre: 'Animation · Adventure · Comedy',
    rating: '8.1',
    description:
      "Mario and Luigi travel across the stars to stop Bowser Jr.'s crusade. The highest-grossing film of 2026 in the UK.",
    poster: 'https://media.themoviedb.org/t/p/w500/eJGWx219ZcEMVQJhAgMiqo8tYY.jpg',
    ukRank: '#3 UK',
    boxOffice: 'Top Grossing 2026',
    badge: 'TOP GROSSING',
    badgeColor: 'bg-yellow-500',
  },
  {
    id: 'project-hail-mary',
    title: 'Project Hail Mary',
    year: '2026',
    genre: 'Drama · Sci-Fi · Thriller',
    rating: '8.4',
    description:
      'Ryan Gosling stars as lone astronaut Ryland Grace, who wakes up in deep space with no memory and must save Earth from extinction.',
    poster: 'https://media.themoviedb.org/t/p/w500/yihdXomYb5kTeSivtFndMy5iDmf.jpg',
    ukRank: '#4 UK',
    boxOffice: '£31.9M Total',
    badge: "CRITIC'S PICK",
    badgeColor: 'bg-emerald-500',
  },
  {
    id: 'wuthering-heights',
    title: 'Wuthering Heights',
    year: '2026',
    genre: 'Drama · Romance',
    rating: '6.2',
    description:
      'Emerald Fennell directs Margot Robbie and Jacob Elordi in a bold reimagining of Emily Brontë\'s classic — a passion-fuelled tale of love, obsession and revenge on the Yorkshire moors.',
    poster: 'https://media.themoviedb.org/t/p/w500/3YBce6dTh1D5oCMITXk2S5QhPt.jpg',
    ukRank: '#5 UK',
    boxOffice: '$242M Worldwide',
    badge: 'BOX OFFICE HIT',
    badgeColor: 'bg-pink-500',
  },
  {
    id: 'the-housemaid',
    title: 'The Housemaid',
    year: '2025',
    genre: 'Drama · Mystery · Thriller',
    rating: '6.8',
    description:
      'Sydney Sweeney and Amanda Seyfried star in this sly, seductive thriller about a live-in housekeeper who uncovers the dark secrets of a wealthy family.',
    poster: 'https://media.themoviedb.org/t/p/w500/cWsBscZzwu5brg9YjNkGewRUvJX.jpg',
    ukRank: '#6 UK',
    boxOffice: '$401M Worldwide',
    badge: 'BLOCKBUSTER',
    badgeColor: 'bg-purple-500',
  },
  {
    id: 'hamnet',
    title: 'Hamnet',
    year: '2025',
    genre: 'Biography · Drama · History',
    rating: '7.9',
    description:
      'Chloé Zhao directs Jessie Buckley and Paul Mescal in the story of love and loss behind Shakespeare\'s Hamlet — one of the year\'s most acclaimed films.',
    poster: 'https://media.themoviedb.org/t/p/w500/zIcd6yuBucRNof5t9KVuGBHIhXU.jpg',
    ukRank: '#7 UK',
    boxOffice: '£25.7M Total',
    badge: "AWARD SEASON",
    badgeColor: 'bg-amber-600',
  },
  {
    id: 'avatar-fire-and-ash',
    title: 'Avatar: Fire and Ash',
    year: '2025',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '7.4',
    description:
      'James Cameron returns to Pandora as Jake Sully and Neytiri face the Ash People — a ruthless Na\'vi tribe threatening the survival of their family and their world.',
    poster: 'https://media.themoviedb.org/t/p/w500/aabwWZWx6z1aYP4PX2ADvbDKktd.jpg',
    ukRank: '#8 UK',
    boxOffice: '£20.8M Total',
    badge: 'JAMES CAMERON',
    badgeColor: 'bg-cyan-600',
  },
  {
    id: 'mortal-kombat-2',
    title: 'Mortal Kombat II',
    year: '2026',
    genre: 'Action · Adventure · Fantasy',
    rating: '6.5',
    description:
      'Johnny Cage joins Earth\'s champions in a brutal no-holds-barred battle against Shao Kahn to protect the Earthrealm from total annihilation.',
    poster: 'https://media.themoviedb.org/t/p/w500/lIsMeDbwntNXSUVHmWMMRXEZOVc.jpg',
    ukRank: '#9 UK',
    boxOffice: '£2.85M Total',
    badge: 'ACTION',
    badgeColor: 'bg-red-700',
  },
  {
    id: 'obsession',
    title: 'Obsession',
    year: '2026',
    genre: 'Horror',
    rating: '7.4',
    description:
      'A hopeless romantic breaks the mysterious "One Wish Willow" to win his crush\'s heart — only to discover that some desires come at a terrifying price.',
    poster: 'https://media.themoviedb.org/t/p/w500/40I66L7QKguTFDPvcLcdiTbAD7I.jpg',
    ukRank: '#10 UK',
    boxOffice: '$44M Worldwide',
    badge: 'HORROR HIT',
    badgeColor: 'bg-slate-700',
  },
  {
    id: 'hoppers',
    title: 'Hoppers',
    year: '2026',
    genre: 'Animation · Adventure · Comedy',
    rating: '7.7',
    description:
      'Pixar\'s latest — scientists discover how to hop human consciousness into robotic animals. Animal lover Mabel uncovers mysteries in the animal world beyond her wildest imagination.',
    poster: 'https://media.themoviedb.org/t/p/w500/xjtWQ2CL1mpmMNwuU5HeS4Iuwuu.jpg',
    ukRank: '#11 UK',
    boxOffice: '$385M Worldwide',
    badge: 'PIXAR',
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'the-magic-faraway-tree',
    title: 'The Magic Faraway Tree',
    year: '2026',
    genre: 'Adventure · Family',
    rating: '6.9',
    description:
      'Based on Enid Blyton\'s beloved classic — a modern family discovers a magical tree leading to fantastical worlds, starring Andrew Garfield and Claire Foy.',
    poster: 'https://media.themoviedb.org/t/p/w500/udXvLxC5gAqN8SinemyFBEcHpTf.jpg',
    ukRank: '#12 UK',
    boxOffice: '$19.7M Total',
    badge: 'BRITISH CLASSIC',
    badgeColor: 'bg-green-600',
  },
  {
    id: '28-years-later-bone-temple',
    title: '28 Years Later: The Bone Temple',
    year: '2026',
    genre: 'Horror · Sci-Fi · Thriller',
    rating: '7.5',
    description:
      'Nia DaCosta directs this chilling sequel — Ralph Fiennes stars as Spike is drawn into a satanic cult while a doctor makes a terrifying connection with the infected.',
    poster: 'https://media.themoviedb.org/t/p/w500/kK1BGkG3KAvWB0WMV1DfOx9yTMZ.jpg',
    ukRank: '#13 UK',
    boxOffice: '£3.4M Opening',
    badge: 'UK HORROR',
    badgeColor: 'bg-gray-800',
  },
  {
    id: 'scream-7',
    title: 'Scream 7',
    year: '2026',
    genre: 'Horror · Mystery',
    rating: '5.8',
    description:
      'A new Ghostface killer targets Sidney Prescott\'s daughter in the quiet town where she built a new life — forcing Sidney to face her darkest past one final time.',
    poster: 'https://media.themoviedb.org/t/p/w500/jjyuk0edLiW8vOSnlfwWCCLpbh5.jpg',
    ukRank: '#14 UK',
    boxOffice: '£3.8M Opening',
    badge: 'SCREAM SAGA',
    badgeColor: 'bg-red-900',
  },
  {
    id: 'marty-supreme',
    title: 'Marty Supreme',
    year: '2025',
    genre: 'Drama · Sport',
    rating: '7.8',
    description:
      'Timothée Chalamet stars in Josh Safdie\'s Oscar-nominated A24 film — a 1950s table tennis champion chasing greatness against all odds.',
    poster: 'https://media.themoviedb.org/t/p/w500/lYWEXbQgRTR4ZQleSXAgRbxAjvq.jpg',
    ukRank: '#15 UK',
    boxOffice: '$17.7M UK Gross',
    badge: 'OSCAR NOMINATED',
    badgeColor: 'bg-yellow-600',
  },
  {
    id: 'goat',
    title: 'GOAT',
    year: '2026',
    genre: 'Animation · Action · Adventure',
    rating: '6.9',
    description:
      'A small goat with enormous dreams gets a shot at the pros in roarball — a full-contact sport ruled by the fastest animals alive. From Sony Pictures Animation.',
    poster: 'https://media.themoviedb.org/t/p/w500/wfuqMlaExcoYiUEvKfVpUTt1v4u.jpg',
    ukRank: '#16 UK',
    boxOffice: '$17.2M UK Gross',
    badge: 'SONY ANIMATION',
    badgeColor: 'bg-blue-700',
  },
  {
    id: 'zootopia-2',
    title: 'Zootopia 2',
    year: '2025',
    genre: 'Animation · Comedy · Adventure',
    rating: '7.4',
    description:
      'Judy Hopps and Nick Wilde are back — going undercover to crack their biggest case yet when a mysterious newcomer turns Zootopia upside down.',
    poster: 'https://media.themoviedb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg',
    ukRank: '#17 UK',
    boxOffice: '$1.87B Worldwide',
    badge: 'DISNEY HIT',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 'the-sheep-detectives',
    title: 'The Sheep Detectives',
    year: '2026',
    genre: 'Action · Comedy · Mystery',
    rating: '7.1',
    description:
      'Hugh Jackman\'s shepherd reads detective novels to his sheep — until a mysterious farm incident forces the flock to become detectives themselves. Voiced by Patrick Stewart & Bryan Cranston.',
    poster: 'https://media.themoviedb.org/t/p/w500/9IL11HEZSwQOr2wVlF9gFQ1V8Ul.jpg',
    ukRank: '#18 UK',
    boxOffice: '$66M Worldwide',
    badge: 'UK TOP 3',
    badgeColor: 'bg-teal-600',
  },
  // ── 2024 UK Box Office Hits ──
  {
    id: 'inside-out-2',
    title: 'Inside Out 2',
    year: '2024',
    genre: 'Animation · Family · Comedy',
    rating: '7.8',
    description: 'Riley enters her teens and her Headquarters gets a surprise visit from a new, turbulent emotion — Anxiety. Pixar\'s biggest hit of 2024 with $75.6M at the UK box office.',
    poster: 'https://media.themoviedb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    ukRank: '#1 (2024)',
    boxOffice: '$75.6M UK',
    badge: 'PIXAR',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'deadpool-wolverine',
    title: 'Deadpool & Wolverine',
    year: '2024',
    genre: 'Action · Comedy · Sci-Fi',
    rating: '7.7',
    description: 'The Merc with a Mouth teams up with a reluctant Wolverine on a mission that will change the MCU forever. The highest-grossing R-rated film of all time.',
    poster: 'https://media.themoviedb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    ukRank: '#2 (2024)',
    boxOffice: '$73.9M UK',
    badge: 'MARVEL',
    badgeColor: 'bg-red-600',
  },
  {
    id: 'wicked-2024',
    title: 'Wicked',
    year: '2024',
    genre: 'Drama · Fantasy · Musical',
    rating: '7.7',
    description: 'Elphaba and Glinda\'s untold story before Dorothy arrives in Oz. Cynthia Erivo and Ariana Grande dazzle in the most anticipated musical adaptation in years.',
    poster: 'https://media.themoviedb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg',
    ukRank: '#3 (2024)',
    boxOffice: '$67M UK',
    badge: 'MUSICAL',
    badgeColor: 'bg-green-600',
  },
  {
    id: 'despicable-me-4',
    title: 'Despicable Me 4',
    year: '2024',
    genre: 'Animation · Comedy · Family',
    rating: '6.3',
    description: 'Gru and Lucy welcome a new addition to the family — and must contend with a dangerous new supervillain. The Minions are back and bigger than ever.',
    poster: 'https://media.themoviedb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg',
    ukRank: '#4 (2024)',
    boxOffice: '$62M UK',
    badge: 'ILLUMINATION',
    badgeColor: 'bg-yellow-500',
  },
  {
    id: 'paddington-in-peru',
    title: 'Paddington in Peru',
    year: '2024',
    genre: 'Adventure · Comedy · Family',
    rating: '7.0',
    description: 'Britain\'s most beloved bear travels to Peru to visit his beloved Aunt Lucy — and ends up on an adventure in the Amazon jungle. A smash hit at the UK box office.',
    poster: 'https://media.themoviedb.org/t/p/w500/dJaIw8OgACelojyV6YuVsOhtTLO.jpg',
    ukRank: '#5 (2024)',
    boxOffice: '$41.6M UK',
    badge: 'BRITISH',
    badgeColor: 'bg-sky-600',
  },
  {
    id: 'dune-part-two',
    title: 'Dune: Part Two',
    year: '2024',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '8.0',
    description: 'Paul Atreides unites with Chani and the Fremen on a path of revenge against the conspirators who destroyed his family — and a path to his destiny.',
    poster: 'https://media.themoviedb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    ukRank: '#6 (2024)',
    boxOffice: '$49.4M UK',
    badge: 'SCI-FI EPIC',
    badgeColor: 'bg-amber-700',
  },
  {
    id: 'moana-2',
    title: 'Moana 2',
    year: '2024',
    genre: 'Animation · Adventure · Family',
    rating: '6.2',
    description: 'Moana sets sail on a new voyage with an unlikely crew to the far seas of Oceania — and discovers an ancient mystery tied to her people\'s history.',
    poster: 'https://media.themoviedb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg',
    ukRank: '#7 (2024)',
    boxOffice: '$42.7M UK',
    badge: 'DISNEY',
    badgeColor: 'bg-teal-500',
  },
  {
    id: 'gladiator-ii',
    title: 'Gladiator II',
    year: '2024',
    genre: 'Action · Adventure · Drama',
    rating: '6.8',
    description: 'Ridley Scott returns to the Colosseum — Lucius must enter the brutal world of the arena years after witnessing his hero Maximus\'s death, to reclaim Rome\'s glory.',
    poster: 'https://media.themoviedb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
    ukRank: '#8 (2024)',
    boxOffice: '$38.8M UK',
    badge: 'RIDLEY SCOTT',
    badgeColor: 'bg-stone-600',
  },
  {
    id: 'beetlejuice-beetlejuice',
    title: 'Beetlejuice Beetlejuice',
    year: '2024',
    genre: 'Comedy · Fantasy · Horror',
    rating: '7.1',
    description: 'Tim Burton\'s long-awaited sequel — the Deetz family returns to Winter River after an unexpected tragedy, and Beetlejuice is accidentally summoned once more.',
    poster: 'https://media.themoviedb.org/t/p/w500/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg',
    ukRank: '#9 (2024)',
    boxOffice: '$33.2M UK',
    badge: 'TIM BURTON',
    badgeColor: 'bg-gray-700',
  },
  {
    id: 'it-ends-with-us',
    title: 'It Ends with Us',
    year: '2024',
    genre: 'Drama · Romance',
    rating: '6.8',
    description: 'Based on Colleen Hoover\'s bestselling novel — a young woman\'s blossoming new relationship is tested when her first love re-enters her life. Blake Lively stars.',
    poster: 'https://media.themoviedb.org/t/p/w500/oil3EZwKFp3CWxZnfGfGglesvm9.jpg',
    ukRank: '#10 (2024)',
    boxOffice: '$28.3M UK',
    badge: 'ROMANCE',
    badgeColor: 'bg-pink-600',
  },
  {
    id: 'kung-fu-panda-4',
    title: 'Kung Fu Panda 4',
    year: '2024',
    genre: 'Animation · Action · Comedy',
    rating: '6.6',
    description: 'Po must train a new Dragon Warrior — but first he must face the Chameleon, a shape-shifting villain who can imitate anyone\'s kung fu.',
    poster: 'https://media.themoviedb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
    ukRank: '#11 (2024)',
    boxOffice: '$27.3M UK',
    badge: 'DREAMWORKS',
    badgeColor: 'bg-red-500',
  },
  {
    id: 'kingdom-planet-apes',
    title: 'Kingdom of the Planet of the Apes',
    year: '2024',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '7.0',
    description: 'Set generations after Caesar\'s reign — a young ape called Noa sets out on a journey that forces him to question everything he\'s been taught about the past.',
    poster: 'https://media.themoviedb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
    ukRank: '#12 (2024)',
    boxOffice: '$20M UK',
    badge: 'SCI-FI',
    badgeColor: 'bg-orange-700',
  },
  {
    id: 'twisters',
    title: 'Twisters',
    year: '2024',
    genre: 'Action · Adventure · Thriller',
    rating: '7.2',
    description: 'Storm chaser Kate Cooper is drawn back to the Oklahoma plains to test a new technique to neutralise tornadoes — but nature has other plans.',
    poster: 'https://media.themoviedb.org/t/p/w500/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg',
    ukRank: '#13 (2024)',
    boxOffice: '$18.6M UK',
    badge: 'ACTION',
    badgeColor: 'bg-blue-700',
  },
  {
    id: 'godzilla-x-kong',
    title: 'Godzilla x Kong: The New Empire',
    year: '2024',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '6.3',
    description: 'Two ancient titans — Godzilla and Kong — face a colossal undiscovered threat hidden within the world. A clash for the very survival of the planet begins.',
    poster: 'https://media.themoviedb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
    ukRank: '#14 (2024)',
    boxOffice: '$18.4M UK',
    badge: 'MONSTERVERSE',
    badgeColor: 'bg-emerald-700',
  },
  {
    id: 'sonic-3',
    title: 'Sonic the Hedgehog 3',
    year: '2024',
    genre: 'Action · Adventure · Comedy',
    rating: '7.4',
    description: 'Sonic, Knuckles and Tails reunite against a powerful new adversary — Shadow the Hedgehog, a mysterious villain bent on revenge.',
    poster: 'https://media.themoviedb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg',
    ukRank: '#15 (2024)',
    boxOffice: '$18.8M UK',
    badge: 'SEGA',
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'alien-romulus',
    title: 'Alien: Romulus',
    year: '2024',
    genre: 'Horror · Sci-Fi · Thriller',
    rating: '7.3',
    description: 'A group of young colonists scavenging a derelict space station stumble across the most terrifying life form in the universe — with nowhere to run.',
    poster: 'https://media.themoviedb.org/t/p/w500/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg',
    ukRank: '#16 (2024)',
    boxOffice: '$17.5M UK',
    badge: 'SCI-FI HORROR',
    badgeColor: 'bg-slate-800',
  },
  {
    id: 'the-wild-robot',
    title: 'The Wild Robot',
    year: '2024',
    genre: 'Animation · Drama · Family',
    rating: '8.3',
    description: 'A robot named Roz is stranded on a wild island and must learn to adapt — raising an orphaned gosling while discovering what it means to be alive.',
    poster: 'https://media.themoviedb.org/t/p/w500/eG9lz41mJqsI4J6ubMtVqD26q2J.jpg',
    ukRank: '#17 (2024)',
    boxOffice: '$17.4M UK',
    badge: 'DREAMWORKS',
    badgeColor: 'bg-green-700',
  },
  {
    id: 'bad-boys-ride-or-die',
    title: 'Bad Boys: Ride or Die',
    year: '2024',
    genre: 'Action · Comedy · Thriller',
    rating: '7.3',
    description: 'Miami\'s finest become Miami\'s most wanted when the Bad Boys are framed as corrupt cops. Will Smith and Martin Lawrence must go on the run to clear their names.',
    poster: 'https://media.themoviedb.org/t/p/w500/oGythE98MYleE6mZlGs5oBGkux1.jpg',
    ukRank: '#18 (2024)',
    boxOffice: '$15.3M UK',
    badge: 'ACTION',
    badgeColor: 'bg-red-700',
  },
  {
    id: 'the-fall-guy',
    title: 'The Fall Guy',
    year: '2024',
    genre: 'Action · Comedy · Thriller',
    rating: '7.3',
    description: 'Ryan Gosling plays a battered stuntman who is drawn into a conspiracy while working on a massive action film — and reconnects with the director he loves.',
    poster: 'https://media.themoviedb.org/t/p/w500/e7olqFmzcIX5c23kX4zSmLPJi8c.jpg',
    ukRank: '#19 (2024)',
    boxOffice: '$15.2M UK',
    badge: 'ACTION',
    badgeColor: 'bg-orange-600',
  },
  {
    id: 'venom-last-dance',
    title: 'Venom: The Last Dance',
    year: '2024',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '6.4',
    description: 'Eddie Brock and Venom are on the run, hunted by both worlds in what may be their final chapter. Tom Hardy returns in the symbiote saga\'s thrilling conclusion.',
    poster: 'https://media.themoviedb.org/t/p/w500/sAT1P3FGhtJ68anUyJScnMu8t1l.jpg',
    ukRank: '#20 (2024)',
    boxOffice: '$15.6M UK',
    badge: 'MARVEL',
    badgeColor: 'bg-indigo-700',
  },
  {
    id: 'mufasa',
    title: 'Mufasa: The Lion King',
    year: '2024',
    genre: 'Animation · Adventure · Drama',
    rating: '7.3',
    description: 'The origin story of the legendary king — young Mufasa\'s journey to become the greatest ruler the Pride Lands has ever seen, tested by an unexpected villain.',
    poster: 'https://media.themoviedb.org/t/p/w500/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg',
    ukRank: '#21 (2024)',
    boxOffice: '$15.8M UK',
    badge: 'DISNEY',
    badgeColor: 'bg-yellow-600',
  },
  {
    id: 'a-quiet-place-day-one',
    title: 'A Quiet Place: Day One',
    year: '2024',
    genre: 'Drama · Horror · Sci-Fi',
    rating: '7.0',
    description: 'The terrifying origin story of the alien invasion — as New York City falls silent, a woman named Sam and a stranger named Eric must survive together.',
    poster: 'https://media.themoviedb.org/t/p/w500/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg',
    ukRank: '#22 (2024)',
    boxOffice: '$12.7M UK',
    badge: 'HORROR',
    badgeColor: 'bg-neutral-800',
  },
  {
    id: 'garfield-movie',
    title: 'The Garfield Movie',
    year: '2024',
    genre: 'Animation · Adventure · Comedy',
    rating: '5.9',
    description: 'Garfield — the world\'s most famous Monday-hating, lasagne-loving cat — is about to have a wild outdoor adventure after a chance encounter with his long-lost father.',
    poster: 'https://media.themoviedb.org/t/p/w500/xYduFGuch9OwbCOEUiamml18ZoB.jpg',
    ukRank: '#23 (2024)',
    boxOffice: '$11.4M UK',
    badge: 'FAMILY',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 'speak-no-evil',
    title: 'Speak No Evil',
    year: '2024',
    genre: 'Horror · Thriller',
    rating: '6.8',
    description: 'A British family accept a holiday invitation from a charismatic Danish couple they met abroad — and slowly realise something deeply sinister is happening.',
    poster: 'https://media.themoviedb.org/t/p/w500/dA4N6uWOnEMgbxXwFX7qX7adzs8.jpg',
    ukRank: '#24 (2024)',
    boxOffice: '$7.4M UK',
    badge: 'BRITISH HORROR',
    badgeColor: 'bg-zinc-800',
  },
  {
    id: 'furiosa',
    title: 'Furiosa: A Mad Max Saga',
    year: '2024',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '7.5',
    description: 'The origin of the warrior Furiosa — kidnapped from the Green Place of Many Mothers, she must survive many years in the Wasteland and find her way home.',
    poster: 'https://media.themoviedb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
    ukRank: '#25 (2024)',
    boxOffice: '$8.1M UK',
    badge: 'MAD MAX',
    badgeColor: 'bg-red-800',
  },
  {
    id: 'the-substance',
    title: 'The Substance',
    year: '2024',
    genre: 'Body Horror · Sci-Fi',
    rating: '7.3',
    description: 'Demi Moore stars in this body-horror sensation — a fading celebrity takes a mysterious drug that creates a younger, better version of herself. Cannes prize winner.',
    poster: 'https://media.themoviedb.org/t/p/w500/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg',
    ukRank: '#26 (2024)',
    boxOffice: '$5.1M UK',
    badge: 'CANNES WINNER',
    badgeColor: 'bg-fuchsia-700',
  },
  {
    id: 'transformers-one',
    title: 'Transformers One',
    year: '2024',
    genre: 'Animation · Action · Sci-Fi',
    rating: '7.7',
    description: 'The untold origin story of Optimus Prime and Megatron — best friends who became arch enemies. An animated Transformers feature unlike any before.',
    poster: 'https://media.themoviedb.org/t/p/w500/iRCgqpdVE4wyLQvGYU3ZP7pAtUc.jpg',
    ukRank: '#27 (2024)',
    boxOffice: '$5.9M UK',
    badge: 'ANIMATED',
    badgeColor: 'bg-blue-800',
  },
  // ── 2025 Blockbusters ──
  {
    id: 'captain-america-brave-new-world',
    title: 'Captain America: Brave New World',
    year: '2025',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '6.1',
    description: 'Sam Wilson\'s first mission as Captain America plunges him into an international incident and face-to-face with the Red Hulk. A new era begins for the MCU.',
    poster: 'https://media.themoviedb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
    ukRank: 'MCU 2025',
    boxOffice: '$385M Worldwide',
    badge: 'MARVEL',
    badgeColor: 'bg-red-600',
  },
  {
    id: 'thunderbolts',
    title: 'Thunderbolts*',
    year: '2025',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '7.5',
    description: 'A ragtag group of antiheroes — including Yelena Belova and Bucky Barnes — are sent on a mission that forces them to confront their darkest impulses.',
    poster: 'https://media.themoviedb.org/t/p/w500/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg',
    ukRank: 'MCU 2025',
    boxOffice: '$580M Worldwide',
    badge: 'MARVEL',
    badgeColor: 'bg-slate-600',
  },
  {
    id: 'mission-impossible-final-reckoning',
    title: 'Mission: Impossible – The Final Reckoning',
    year: '2025',
    genre: 'Action · Adventure · Thriller',
    rating: '8.2',
    description: 'Ethan Hunt faces the most impossible mission of his career — a rogue AI known as the Entity that threatens to reshape the global order. Tom Cruise\'s spectacular finale.',
    poster: 'https://media.themoviedb.org/t/p/w500/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg',
    ukRank: 'TOP 2025',
    boxOffice: '$700M+ Worldwide',
    badge: 'FINALE',
    badgeColor: 'bg-gray-800',
  },
  {
    id: '28-years-later',
    title: '28 Years Later',
    year: '2025',
    genre: 'Horror · Sci-Fi · Thriller',
    rating: '7.6',
    description: 'Danny Boyle returns to the infected world — 28 years after the rage virus first broke out, a small community survives on a tidal island. Starring Jodie Comer.',
    poster: 'https://media.themoviedb.org/t/p/w500/fWPgbnt2LSqkQ6cdQc0SZN9CpLm.jpg',
    ukRank: 'UK HORROR 2025',
    boxOffice: '$78M Worldwide',
    badge: 'DANNY BOYLE',
    badgeColor: 'bg-red-900',
  },
  {
    id: 'lilo-and-stitch',
    title: 'Lilo & Stitch',
    year: '2025',
    genre: 'Adventure · Comedy · Family',
    rating: '6.7',
    description: 'Disney\'s beloved alien experiment comes to life in this live-action remake — Lilo and Stitch\'s heartwarming story of ohana and belonging reimagined for a new generation.',
    poster: 'https://media.themoviedb.org/t/p/w500/1y3TG8N8zwwMxqh0qzdyDs3IyCq.jpg',
    ukRank: 'TOP 2025',
    boxOffice: '$1B+ Worldwide',
    badge: 'DISNEY',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 'how-to-train-your-dragon-2025',
    title: 'How to Train Your Dragon',
    year: '2025',
    genre: 'Adventure · Fantasy · Family',
    rating: '7.9',
    description: 'The beloved animated classic reimagined as a live-action epic — Hiccup\'s journey with Toothless the Night Fury is brought to breathtaking life.',
    poster: 'https://media.themoviedb.org/t/p/w500/nvvb92EslVzouKKcw4xbUHN6vS8.jpg',
    ukRank: 'TOP 2025',
    boxOffice: '$650M+ Worldwide',
    badge: 'LIVE ACTION',
    badgeColor: 'bg-teal-700',
  },
  {
    id: 'jurassic-world-rebirth',
    title: 'Jurassic World Rebirth',
    year: '2025',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '6.8',
    description: 'Five years after the Jurassic World collapse — a covert mission to the most dangerous island on Earth puts a new team face-to-face with the most extreme dinosaurs ever seen.',
    poster: 'https://media.themoviedb.org/t/p/w500/oqhaffnQqSzdLrYAQA5W4IdAoCX.jpg',
    ukRank: 'TOP 2025',
    boxOffice: '$1B+ Worldwide',
    badge: 'JURASSIC',
    badgeColor: 'bg-green-800',
  },
  {
    id: 'fantastic-four-first-steps',
    title: 'The Fantastic Four: First Steps',
    year: '2025',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '7.6',
    description: 'Marvel\'s First Family — Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm — make their MCU debut in a retro-futuristic adventure set in an alternate 1960s.',
    poster: 'https://media.themoviedb.org/t/p/w500/6yRMyWwjuhKg6IU66uiZIGhaSc8.jpg',
    ukRank: 'MCU 2025',
    boxOffice: '$900M+ Worldwide',
    badge: 'MARVEL',
    badgeColor: 'bg-blue-700',
  },
  {
    id: 'final-destination-bloodlines',
    title: 'Final Destination: Bloodlines',
    year: '2025',
    genre: 'Horror · Thriller',
    rating: '6.8',
    description: 'Death\'s design returns — a college student is plagued by a violent recurring vision and must unravel a deadly connection that stretches back generations.',
    poster: 'https://media.themoviedb.org/t/p/w500/mdPXs0RtfZxJ1UHnNZPhuFDbeJx.jpg',
    ukRank: 'HORROR 2025',
    boxOffice: '$350M+ Worldwide',
    badge: 'HORROR',
    badgeColor: 'bg-red-950',
  },
  // ── More 2024 UK Hits ──
  {
    id: 'ghostbusters-frozen-empire',
    title: 'Ghostbusters: Frozen Empire',
    year: '2024',
    genre: 'Action · Comedy · Fantasy',
    rating: '6.4',
    description: 'The Spengler family returns to the iconic New York firehouse, where the original Ghostbusters built their legacy — and face a terrifying new ice-based threat.',
    poster: 'https://media.themoviedb.org/t/p/w500/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg',
    ukRank: '#28 (2024)',
    boxOffice: '$19.2M UK',
    badge: 'GHOSTBUSTERS',
    badgeColor: 'bg-lime-700',
  },
  {
    id: 'wonka',
    title: 'Wonka',
    year: '2023',
    genre: 'Adventure · Comedy · Family',
    rating: '7.2',
    description: 'Timothée Chalamet stars as a young Willy Wonka in the origin story of the world\'s most imaginative inventor before he opened his famous chocolate factory.',
    poster: 'https://media.themoviedb.org/t/p/w500/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg',
    ukRank: '#29 (2024)',
    boxOffice: '$24.5M UK',
    badge: 'FAMILY',
    badgeColor: 'bg-purple-600',
  },
  {
    id: 'migration',
    title: 'Migration',
    year: '2023',
    genre: 'Animation · Adventure · Comedy',
    rating: '7.1',
    description: 'An overprotective duck dad is convinced by his family to go on a migration adventure — leading the Mallard family on a wild trip from New England to Jamaica.',
    poster: 'https://media.themoviedb.org/t/p/w500/ldfCF9RhR40mppkzmftxapaHeTo.jpg',
    ukRank: '#30 (2024)',
    boxOffice: '$26.6M UK',
    badge: 'ILLUMINATION',
    badgeColor: 'bg-sky-500',
  },
  {
    id: 'joker-folie-a-deux',
    title: 'Joker: Folie à Deux',
    year: '2024',
    genre: 'Crime · Drama · Musical',
    rating: '5.5',
    description: 'Arthur Fleck is imprisoned at Arkham awaiting trial for his crimes as the Joker — where he meets Harley Quinn (Lady Gaga) and discovers the power of music.',
    poster: 'https://media.themoviedb.org/t/p/w500/57MFWGHarg9jid7yfDTka4RmcMU.jpg',
    ukRank: '#31 (2024)',
    boxOffice: '$13.2M UK',
    badge: 'DC',
    badgeColor: 'bg-violet-700',
  },
  {
    id: 'bob-marley-one-love',
    title: 'Bob Marley: One Love',
    year: '2024',
    genre: 'Biography · Drama · Music',
    rating: '6.2',
    description: 'The extraordinary life and music of Bob Marley — celebrating his legacy as one of the most iconic musicians of all time, featuring Kingsley Ben-Adir.',
    poster: 'https://media.themoviedb.org/t/p/w500/1lQftpEARVVB9op4TaYiIbactzG.jpg',
    ukRank: '#32 (2024)',
    boxOffice: '$21.6M UK',
    badge: 'BIOGRAPHY',
    badgeColor: 'bg-yellow-700',
  },
  {
    id: 'anyone-but-you',
    title: 'Anyone But You',
    year: '2023',
    genre: 'Comedy · Romance',
    rating: '6.4',
    description: 'After a promising first date goes awry, two people who can\'t stand each other must pretend to be a couple at a wedding in Sydney. Sydney Sweeney & Glen Powell star.',
    poster: 'https://media.themoviedb.org/t/p/w500/joDIxa8B7Izc0ohLiV7LK3gBeXp.jpg',
    ukRank: '#33 (2024)',
    boxOffice: '$12.8M UK',
    badge: 'ROM-COM',
    badgeColor: 'bg-rose-500',
  },
  {
    id: 'back-to-black',
    title: 'Back to Black',
    year: '2024',
    genre: 'Biography · Drama · Music',
    rating: '6.5',
    description: 'The life and music of Amy Winehouse — one of Britain\'s greatest ever artists. Marisa Abela delivers a stunning performance in this emotional biopic.',
    poster: 'https://media.themoviedb.org/t/p/w500/a3q8NkM8uTh9E23VsbUOdDSbBeN.jpg',
    ukRank: '#34 (2024)',
    boxOffice: '$15.8M UK',
    badge: 'BRITISH',
    badgeColor: 'bg-stone-700',
  },
  {
    id: 'civil-war',
    title: 'Civil War',
    year: '2024',
    genre: 'Action · Drama · Thriller',
    rating: '7.3',
    description: 'Alex Garland\'s electrifying vision of a near-future America torn apart by civil war — a group of journalists race to reach Washington DC before it falls.',
    poster: 'https://media.themoviedb.org/t/p/w500/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg',
    ukRank: '#35 (2024)',
    boxOffice: '$8.2M UK',
    badge: 'A24',
    badgeColor: 'bg-red-800',
  },
  {
    id: 'conclave',
    title: 'Conclave',
    year: '2024',
    genre: 'Drama · Mystery · Thriller',
    rating: '7.5',
    description: 'Edward Berger directs Ralph Fiennes in this gripping thriller — the secret election of a new Pope reveals dark secrets buried deep within the Vatican.',
    poster: 'https://media.themoviedb.org/t/p/w500/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg',
    ukRank: '#36 (2024)',
    boxOffice: '$6.95M UK',
    badge: 'OSCAR WINNER',
    badgeColor: 'bg-amber-900',
  },
  {
    id: 'poor-things',
    title: 'Poor Things',
    year: '2023',
    genre: 'Comedy · Drama · Sci-Fi',
    rating: '7.8',
    description: 'Yorgos Lanthimos\'s bizarre masterpiece — Emma Stone plays Bella Baxter, brought back to life by a brilliant scientist, who sets out to discover the world on her own terms.',
    poster: 'https://media.themoviedb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
    ukRank: '#37 (2024)',
    boxOffice: '$9.6M UK',
    badge: 'OSCAR WINNER',
    badgeColor: 'bg-green-900',
  },
  {
    id: 'red-one',
    title: 'Red One',
    year: '2024',
    genre: 'Action · Adventure · Comedy',
    rating: '6.2',
    description: 'When Santa is kidnapped, the North Pole\'s head of security (Dwayne Johnson) must team up with the world\'s most notorious bounty hunter (Chris Evans) to save Christmas.',
    poster: 'https://media.themoviedb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',
    ukRank: '#38 (2024)',
    boxOffice: '$10M UK',
    badge: 'CHRISTMAS',
    badgeColor: 'bg-red-600',
  },
  {
    id: 'if-2024',
    title: 'IF',
    year: '2024',
    genre: 'Animation · Comedy · Drama',
    rating: '6.4',
    description: 'A young girl who can see everyone\'s imaginary friends (IFs) — including a giant purple furry creature — goes on a heartfelt journey to reconnect them with their kids.',
    poster: 'https://media.themoviedb.org/t/p/w500/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg',
    ukRank: '#39 (2024)',
    boxOffice: '$15.8M UK',
    badge: 'FAMILY',
    badgeColor: 'bg-violet-500',
  },
  {
    id: 'wicked-little-letters',
    title: 'Wicked Little Letters',
    year: '2024',
    genre: 'Comedy · Crime · Mystery',
    rating: '7.1',
    description: 'Olivia Colman and Jessie Buckley star in this brilliant British comedy about a 1920s English seaside town rocked by a poison pen letter scandal. Based on a true story.',
    poster: 'https://media.themoviedb.org/t/p/w500/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg',
    ukRank: '#40 (2024)',
    boxOffice: '$12.2M UK',
    badge: 'BRITISH',
    badgeColor: 'bg-teal-800',
  },
  {
    id: 'challengers',
    title: 'Challengers',
    year: '2024',
    genre: 'Drama · Romance · Sport',
    rating: '7.0',
    description: 'Zendaya plays a tennis prodigy who coaches her husband\'s career — until he faces his ex-best-friend and former rival on the court. A fierce love triangle.',
    poster: 'https://media.themoviedb.org/t/p/w500/H6vke7zGiuLsz4v4RPeReb9rsv.jpg',
    ukRank: '#41 (2024)',
    boxOffice: '$8.1M UK',
    badge: 'LUCA GUADAGNINO',
    badgeColor: 'bg-lime-800',
  },
  {
    id: 'longlegs',
    title: 'Longlegs',
    year: '2024',
    genre: 'Crime · Horror · Mystery',
    rating: '6.2',
    description: 'FBI agent Lee Harker (Maika Monroe) is assigned to a serial killer case — only to discover a personal connection to the mysterious suspect known only as Longlegs.',
    poster: 'https://media.themoviedb.org/t/p/w500/iz2GabtToVB05gLTVSH7ZvFtsMM.jpg',
    ukRank: '#42 (2024)',
    boxOffice: '$10.5M UK',
    badge: 'HORROR',
    badgeColor: 'bg-black',
  },
  {
    id: 'a-complete-unknown',
    title: 'A Complete Unknown',
    year: '2024',
    genre: 'Biography · Drama · Music',
    rating: '7.5',
    description: 'Timothée Chalamet plays Bob Dylan in his early New York years — the rise of a young musician who went from folk hero to controversial rock icon.',
    poster: 'https://media.themoviedb.org/t/p/w500/hU42CRk14JuPEdqZG3AWmagiPAP.jpg',
    ukRank: '#43 (2024)',
    boxOffice: 'Oscar Nominated',
    badge: 'OSCAR NOMINATED',
    badgeColor: 'bg-yellow-800',
  },
  {
    id: 'smile-2',
    title: 'Smile 2',
    year: '2024',
    genre: 'Horror · Mystery · Thriller',
    rating: '6.9',
    description: 'On the verge of a new world tour, pop superstar Skye Riley begins experiencing horrifying events — and discovers she is being cursed by a malevolent supernatural entity.',
    poster: 'https://media.themoviedb.org/t/p/w500/zDHoNtWz5KnhwdGWBsizTSjGumH.jpg',
    ukRank: '#44 (2024)',
    boxOffice: '$8.4M UK',
    badge: 'HORROR',
    badgeColor: 'bg-rose-900',
  },
  {
    id: 'the-bikeriders',
    title: 'The Bikeriders',
    year: '2024',
    genre: 'Crime · Drama',
    rating: '7.3',
    description: 'Jeff Nichols\'s compelling portrait of the Vandals motorcycle club — from a band of outsiders to a dangerous criminal enterprise. Austin Butler and Jodie Comer star.',
    poster: 'https://media.themoviedb.org/t/p/w500/hmeIsFSClo5UBWxBiiCDCnDOYJY.jpg',
    ukRank: '#45 (2024)',
    boxOffice: '$4.9M UK',
    badge: 'DRAMA',
    badgeColor: 'bg-stone-800',
  },
  {
    id: 'argylle',
    title: 'Argylle',
    year: '2024',
    genre: 'Action · Comedy · Spy',
    rating: '5.8',
    description: 'Reclusive spy novelist Elly Conway finds herself at the centre of a real-life international espionage thriller that eerily mirrors her fictional plots.',
    poster: 'https://media.themoviedb.org/t/p/w500/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg',
    ukRank: '#46 (2024)',
    boxOffice: '$7.3M UK',
    badge: 'SPY',
    badgeColor: 'bg-indigo-800',
  },
  {
    id: 'the-beekeeper',
    title: 'The Beekeeper',
    year: '2024',
    genre: 'Action · Thriller',
    rating: '7.1',
    description: 'Jason Statham plays a retired operative known as a "Beekeeper" — an off-the-books agency that maintains balance in society — who wages war after a scam ruins a loved one.',
    poster: 'https://media.themoviedb.org/t/p/w500/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg',
    ukRank: '#47 (2024)',
    boxOffice: '$4.8M UK',
    badge: 'JASON STATHAM',
    badgeColor: 'bg-amber-800',
  },
  // ── 2025–2026 New Releases ──
  {
    id: 'avengers-doomsday',
    title: 'Avengers: Doomsday',
    year: '2026',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '8.1',
    description: 'The Avengers face their ultimate nemesis — Doctor Doom — in a battle that will reshape the entire Marvel Cinematic Universe. Robert Downey Jr. returns as Victor Von Doom.',
    poster: 'https://media.themoviedb.org/t/p/w500/8HkIe2i4ScpCkcX9SzZ9IPasqWV.jpg',
    ukRank: 'MCU 2026',
    boxOffice: '$2B+ Worldwide',
    badge: 'MARVEL EVENT',
    badgeColor: 'bg-red-700',
  },
  {
    id: 'superman-2025',
    title: 'Superman',
    year: '2025',
    genre: 'Action · Adventure · Sci-Fi',
    rating: '7.0',
    description: 'James Gunn reintroduces the Man of Steel — David Corenswet plays Clark Kent as a new hero finding his place in a world that isn\'t sure what to make of him.',
    poster: 'https://media.themoviedb.org/t/p/w500/ldyfo0BKmz5rWtJJKCvwaNS4cJT.jpg',
    ukRank: 'DC 2025',
    boxOffice: '$700M+ Worldwide',
    badge: 'DC UNIVERSE',
    badgeColor: 'bg-blue-800',
  },
  {
    id: 'f1-2025',
    title: 'F1',
    year: '2025',
    genre: 'Action · Drama · Sport',
    rating: '7.8',
    description: 'Brad Pitt plays a former Formula 1 driver coaxed back to the grid to mentor a young rookie — an electrifying racing drama shot at real Grand Prix events worldwide.',
    poster: 'https://media.themoviedb.org/t/p/w500/o01kkipATHUjqN5grs3uyFT4DYP.jpg',
    ukRank: 'TOP 2025',
    boxOffice: '$700M+ Worldwide',
    badge: 'BRAD PITT',
    badgeColor: 'bg-gray-700',
  },
  {
    id: 'snow-white-2025',
    title: 'Snow White',
    year: '2025',
    genre: 'Adventure · Fantasy · Family',
    rating: '4.4',
    description: 'Disney\'s live-action reimagining of their classic fairy tale — Rachel Zegler stars as a princess who dreams of becoming a leader, not a damsel waiting to be rescued.',
    poster: 'https://media.themoviedb.org/t/p/w500/ju10W5gl3PPK3b7TjEmVOZap51I.jpg',
    ukRank: 'DISNEY 2025',
    boxOffice: '$213M Worldwide',
    badge: 'DISNEY',
    badgeColor: 'bg-sky-700',
  },
  {
    id: 'ballerina',
    title: 'Ballerina',
    year: '2025',
    genre: 'Action · Thriller',
    rating: '7.5',
    description: 'Ana de Armas stars in this John Wick spinoff — a trained female assassin seeks vengeance against the killers of her family inside the world of the High Table.',
    poster: 'https://media.themoviedb.org/t/p/w500/vYEyxF1UT779RiEalpMjUT6kfdf.jpg',
    ukRank: 'ACTION 2025',
    boxOffice: '$350M+ Worldwide',
    badge: 'JOHN WICK UNIVERSE',
    badgeColor: 'bg-slate-900',
  },
];

export default function TrendingFilms() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (newIndex: number) => {
    setDirection(newIndex >= activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const prev = () =>
    navigate((activeIndex - 1 + FILMS.length) % FILMS.length);
  const next = () =>
    navigate((activeIndex + 1) % FILMS.length);

  const film = FILMS[activeIndex];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: -dir * 60 }),
  };

  return (
    <section
      id="trending-films"
      className="bg-neutral-950 py-10 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-800"
    >
      {/* Film photo banner */}
      <div className="relative w-full h-40 sm:h-72 rounded-2xl overflow-hidden mb-6 sm:mb-10">
        <img
          src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=1920"
          alt="Empty Red Cinema Seats"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Red colour tint overlay */}
        <div className="absolute inset-0 bg-red-950/40 mix-blend-multiply" />
        {/* Dark gradient from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
        {/* Warm red glow from bottom */}
        <div className="absolute bottom-0 inset-x-0 h-[120px] bg-gradient-to-t from-red-800/30 to-transparent blur-[30px]" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
          <span className="font-mono text-[9px] text-amber-400 uppercase tracking-widest mb-1">Now Streaming</span>
          <p className="font-display text-4xl sm:text-6xl text-white uppercase tracking-wide leading-none drop-shadow-lg">
            Film & Cinema
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-start justify-between mb-6 sm:mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 font-mono text-[9px] text-amber-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full uppercase tracking-widest">
              <TrendingUp className="w-2.5 h-2.5" />
              UK Box Office · May 2026
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              Trending in Britain
            </h2>
            <p className="font-sans text-xs text-neutral-400 max-w-sm leading-relaxed">
              Watch the biggest films in the UK right now — all available on our Movies & Cinema package.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2 shrink-0 mt-1">
            <button
              onClick={prev}
              aria-label="Previous film"
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-[10px] text-neutral-500 min-w-[36px] text-center">
              {activeIndex + 1} / {FILMS.length}
            </span>
            <button
              onClick={next}
              aria-label="Next film"
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured film */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

          {/* Poster */}
          <div className="md:col-span-4 flex justify-center md:justify-start items-start">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={film.id + '-poster'}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                className="relative w-44 sm:w-56 md:w-64 shrink-0"
              >
                <img
                  src={film.poster}
                  alt={film.title}
                  className="w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] font-bold text-white bg-black/80 border border-neutral-700 backdrop-blur-sm px-2 py-1 rounded-lg">
                  {film.ukRank}
                </div>
                <div className={`absolute top-3 right-3 font-mono text-[9px] font-bold text-white ${film.badgeColor} px-2 py-1 rounded-lg`}>
                  {film.badge}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Film info */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={film.id + '-info'}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut', delay: 0.04 }}
                className="space-y-5"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase">
                    {film.year} · {film.genre}
                  </span>
                  <h3 className="font-display text-4xl sm:text-5xl text-white leading-none tracking-wide uppercase">
                    {film.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="font-mono text-xs text-white font-bold">{film.rating}</span>
                    <span className="font-mono text-[9px] text-neutral-500">/ 10</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5">
                    <Film className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="font-mono text-[10px] text-neutral-300">{film.boxOffice}</span>
                  </div>
                </div>

                <p className="font-sans text-sm text-neutral-400 leading-relaxed max-w-xl">
                  {film.description}
                </p>

                <div className="flex items-center gap-2 font-mono text-[9px] text-emerald-400 bg-emerald-950/40 border border-emerald-900 rounded-lg px-3 py-2 w-fit">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE ON MOVIES & CINEMA PACKAGE
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-10 flex gap-3 overflow-x-auto pb-1 no-scrollbar">
          {FILMS.map((f, i) => (
            <button
              key={f.id}
              onClick={() => navigate(i)}
              className={`shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === activeIndex
                  ? 'border-red-600 scale-105 shadow-lg shadow-red-950/40'
                  : 'border-neutral-800 opacity-50 hover:opacity-100 hover:border-neutral-600'
              }`}
              aria-label={`View ${f.title}`}
            >
              <img
                src={f.poster}
                alt={f.title}
                className="w-16 h-24 sm:w-20 sm:h-28 object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
