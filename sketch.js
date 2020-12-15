//To-Do
//Build out all the gods
//Make the cursor turn to grabbing on drag
//Make cards prettier
//Make links make more sense
//Make modals more pretty
//Fill in all the data for the greek gods
//Add legend
//Add title screen
//Add god types to card color
//split spouse line in half
//make half spouse line highlight on hover

//Global Variables

let tree;

let margins = {top:50,
               bottom: 50,
               left: 50,
               right:50};

let width = window.innerWidth;
let height = window.innerHeight;

let regularCard = {width: 100,
                   height:150,
                   type:"regular"};

let largeCard = {width: 120,
                 height: 170,
                 type:"large"};

let smallCard = {width: 90,
                 height: 40,
                 type:"small"};

let cardWidth = 40;

let cardTopSpace = 150;

let betweenCards = 20;
let smallCardBetween = 15;

let cardAbove = largeCard.height+cardTopSpace;

let cardSpace = largeCard.width+betweenCards;
let cardSpaceSmall = smallCard.width+smallCardBetween;
let cardSpaceSmallHeight = smallCard.height+smallCardBetween;

let centers ={regular:width/2-regularCard.width/2,
              large:width/2-largeCard.width/2,
              small:width/2-smallCard.width/2,
             };

let familyTree = [];

let lineType = {main:"line-main",
                child:"line-child",
                personification:"line-personification",
                underworld:"line-underworld",
                monster:"line-monster",
                earth:"line-earth",
                water:"line-water",
                sky:"line-sky",
                mortal:"line-mortal"};

let godType = { personification:"personification",
                monster:"monster",
                earth:"earth",
                water:"water",
                underworld:"underworld",
                mortal:"mortal",
                sky:"sky"};

let godMap = {};
let cardIDs = [];
let linkIDs = [];

let domain = {  Chaos:"The Void",
                Gaia:"Mother Earth",
                Tartarus:"Underworld",
                ErosElder:"Love and Procreation",
                Erebus:"Darkness",
                Nyx:"Night",
                Uranus:"Father Sky",
                Ourea:"The Mountains",
                Pontus:"The Sea",
                Oceanus:"God of the River Oceanos",
                Tethys:"Goddess of the Rivers and Nursing",
                Hyperion:"God of Light",
                Theia:"Goddess of Sight and the Aether",
                Crius:"God of the constellations",
                Kronos:"God of the Harvest",
                Rhea:"Goddess of Fertility",
                Themis:"Goddess of Law & Order",
                Iapetus:"God of Mortal Life",
                Mnmosyne:"Goddess of Memory",
                Coeus:"The Celestial Axis",
                Phoebe:"Bright Intellect and Prophecy",
                Poseidon:"God of the Sea",
                Demeter:"Goddess of the Harvest",
                Zeus:"King of the Gods. God of Sky and Thunder",
                Hera:"Queen of the Gods. Goddess of Women",
                Hades:"God of the Underworld",
                Hestia:"Virgin Goddess of the Hearth",
                Triton:"Messenger of the Sea",
                Athena:"Goddess of Wisdom",
                Hebe:"Goddess of Youth",
                Hephaestus:"God of Fire",
                Ares:"God of War",
                Aphrodite:"Goddess of Love and Beauty",
                Adonis:"Mortal lover of Aphrodite",
                Hermes:"Messenger of the Gods",
                Apollo:"God of the Sun, the Arts, and Medicine",
                Artemis:"Goddess of the Moon and Hunting",
                Ganymede:"Zeus's male lover",
                Persephone:"Queen of the Underworld",
                Charities:"Goddesses of Charm, Beauty, & Grace",
                Dike:"Goddess of Justice",
                Eunomia:"Goddess of good order",
                Eirene:"Goddess of Peace",
                Eros:"God of Love",
                Psyche:"Princess who's beauty rival Aphrodite",
                Hermaphodites:"God of Androgyny",
                muses:"Goddesses of Artistic Inspiration",
                Hecate:"Goddess of Magic and Crossroads",
                Typhon:"Father of all monsters",
                Echidna:"Mother of all monsters",
                Orthrus:"Two-headed dog who guarded the cattle of Geryon",
                Cerebus:"Three-headed dog who guarded the gates of the underworld",
                Colchian:"Guardian of the Golden Fleece",
                Chimera:"Part lion, part goat, with a snake-headed tail",
                Hydra:"Many headed serpent",
                Sphinx:"Woman faced lion with wings",
                Aether:"God of the upper sky",
                Hemera:"Goddess of the day",
                Thalassa:"Sea Goddess",
                Charon:"Ferryman to the underworld",
                Moros:"Doom",
                Thanatos:"Death",
                Hypnos:"Sleep",
                Oneriroi:"Dream Spirits",
                Momus:"Blame",
                Geras:"Old Age",
                Oizys:"Distress",
                Nemesis:"Retribution",
                Philotes:"Affection",
                Apate:"Deceit",
                Eris:"Strife",
                Moirai:"The 3 Fates",
                Keres:"Death Spirits",
                Hesperides:"Nymphs",
                Cyclops:"One-eyed monsters",
                Hecatoncheires:"Monster with 50 heads",
                Giantes:"The Giants",
                Erinyes:"The Furies",
                Meliae:"Ash Tree Nymphs",
                Thamus:"Sea god",
                Phorcys:"Sea god",
                Ceto:"Sea goddess",
                Iris:"Personification of the rainbow",
                Harpies:"Winged bird with female faces",
                Gorgons:"Snake-headed women",
                Graeae:"3 witches who share an eye and a tooth",
                Scylla:"Sea monster",
                Eurybia:"Sea goddess",
                Nereus:"Old man of the sea",
                Doris:"Oceanid",
                Amphitrite:"Goddess of the sea",
                Helios:"The Sun",
                Selene:"The Moon",
                Eos:"Dawn",
                Astraeus:"Dusk",
                Anemoi:"The 4 winds",
                Astra:"The Planets",
                Asia:"Oceanid",
                Atlas:"God who carried celestial sphere",
                Prometheus:"God of Foresight. Creator of man",
                Epimetheus:"God of Hindsight",
                Pandora:"The first woman",
                Styx:"Oceanid",
                Pallas:"Titan god of war",
                Nike:"Victory",
                Zelus:"Zeal",
                Kratos:"Strength",
                Bia:"Force",
                Pleione:"Oceanid",
                Eurynome:"Oceanid",
                Methis:"Oceanid",
                Maia:"One of the Pleiades",
                Leto:"Goddess of Motherhood",
                Asteria:"Goddess of Falling stars",
                Thetis:"Nereid leader",
                Peleus:"Greek hero",
                Achilles:"Hero of the Trojan War",
                Theseus:"Killed the Minotaur, founder of Athens",
                Perseus:"Killed Medusa, founder of Mycenae",
                Heracles:"Greatest of greek heros",
                Helen:"Her abduction started the Trojan War",
                Minos:"King of Crete, owner of Minotaur",
                Pasiphae:"Queen of Crete, mother of Minotaur",
                Dionysus:"God of wine",
                Ariadne:"Gave Theseus ball of twine out of the Labyrith",
                Tyche:"Good luck",
                Perse:"Eldest Oceanid",
                Circe:"Enchantress who turned men into pigs",
                Minotaur:"Half bull, half man",
                Perses:"Titan god of destruction"
             };

let description = {  Chaos:"Chaos was the first of the primordial gods (protogenoi) to emerge at the dawn of creation. She was followed in quick succession by Gaia (Gaea, Earth), Tartaros (the Pit Below) and Eros (Procreation). Chaos represents the void state preceding the creation of the universe or cosmos in the Greek creation myths, or to the initial 'gap' created by the original separation of heaven and earth.<br><br><a href='https://www.theoi.com/Protogenos/Khaos.html'>Click here to learn more about Chaos</a>",
                Gaia:"Gaia is the primordial goddess and personification of the Earth and is the ancestral mother of all life. She is the most important primordial god. She is the mother of the Titans and a plethora of other important figures in Greek mythology.<br><br>With her son, Uranus, she mothered the Cyclops, the Hecatoncheries, and the Titans. Uranus then locked the Cyclops and Hecatoncheries away inside Gaia, which caused Gaia great pain. So she created a sickle and conspired with her sons to avenge her. Hyperion, Crius, Coeus and Iapetus--posted at the four corners of the world--seized hold of their father and held him fast while Kronos castrated him with a sickle.<br><br>She is one of the 5 Greek primordial gods along with Eros, Tartarus, Erebus, and Nyx<br><br><a href='https://www.theoi.com/Protogenos/Gaia.html'>Click here to learn more about Gaia</a>",
                Tartarus:"Tartarus is both a deity and a place in the underworld. As a place, Tartarus is used as a dungeon of torment and suffering for the wicked and as the prison for the Titans. Tartarus is the place where, souls are judged after death and where the wicked received divine punishment. He is one of the 5 Greek primordial gods along with Eros, Gaia, Erebus, and Nyx<br><br><a href='https://www.theoi.com/Protogenos/Tartaros.html'>Click here to learn more about Tartarus</a>",
                ErosElder:"Not to be confused with the Eros the younger (also known as Cupid), this primordial god was born from Chaos and is the first personification of Love and Procreation. He is one of the 5 Greek primordial gods along with Tartarus, Gaia, Erebus, and Nyx<br><br><a href='https://www.theoi.com/Protogenos/Eros.html'>Click here to learn more about Eros</a>",
                Erebus:"Erebus is the primordial god of darkness. Little is written about him in Greek literature and mythology. In Greek literature, the name Erebus is also used as a region of the Greek underworld where the dead pass immediately after dying, and is sometimes used interchangeably with Tartarus. He is one of the 5 Greek primordial gods along with Tartarus, Gaia, Eros, and Nyx<br><br><a href='https://www.theoi.com/Protogenos/Erebos.html'>Click here to learn more about Erebus</a>",
                Nyx:"Nyx is the primordial goddess and personification of the night. Her appearances are sparse in surviving mythology, but is said to be a figure of such exceptional power and beauty that she is feared by Zeus himself. <br><br> According to Hesiod's Theogony, Nyx's daughter Hemera (Day) left Tartarus just as Nyx (Night) entered it; continuing cyclicly, when Hemera returned, Nyx left. She is one of the 5 Greek primordial gods along with Tartarus, Gaia, Eros, and Erebus<br><br><a href='https://www.theoi.com/Protogenos/Nyx.html'>Click here to learn more about Nyx</a>",
                Uranus:"Uranus is the primordial god of the sky.In the Olympian creation myth, as Hesiod tells it in the Theogony, Uranus came every night to cover the earth and mate with Gaia, but he hated the younger children (The cyclops and the hecatoncheries) she bore him. Uranus imprisoned Gaia's youngest children inside Gaia, which caused Gaia great pain. So she created a sickle and conspired with her sons to avenge her. Hyperion, Crius, Coeus and Iapetus--posted at the four corners of the world--seized hold of their father and held him fast while Kronos castrated him with a sickle.<br><br>After he was castrasted, the blood that the landed on the Earth created the Erinyes (the Furies), the Giantes, and the Meliaes. From where his genitials landed in the sea birthed Aphrodite<br><br><a href='https://www.theoi.com/Protogenos/Ouranos.html'>Click here to learn more about Uranus</a>",
                Ourea:"The Ourea were the primordial gods of the mountains. Each mountain was believed to have its own ancient deity. Mountains were depicted in classical art as old, bearded men partially emerged from between a pair of crags. The ten ourea were Aitna, Athos, Helikon, Kithairon, Nysos, Olympus I, Olympus II, Oreios, Parnes, and Tmolus <br><br><a href='https://www.theoi.com/Protogenos/Ourea.html'>Click here to learn more about the Ourea</a>",
                Pontus:"Pontus is the primordial god of the sea. He was the sea itself, not merely its resident deity, who was born from earth at the dawn of creation. In Greco-Roman mosaics Pontos is depicted as a giant head with a watery-gray beard and crab-claw horns rising from the sea.<br><br><a href='https://www.theoi.com/Protogenos/Pontos.html'>Click here to learn more about Pontus</a>",
                Oceanus:"Oceanus was the primordial Titan god of the great, earth-encircling River Okeanos, origin of all of the earth's fresh-water. He was the eldest of the Titan offspring of Uranus and Gaia. With his sister, Tethys, he is the father of the river gods (not included, Hesiod's Theogony note that there are 3000 of them), and the Nephelai (Clouds nymphs, not included on this chart), and the Oceanids, sea nymphs (Hesiod's Theogony list 41 Oceanids, but only 8 is included here). He was the only one of the Titans not to participate in the castration of Uranus, and in the Titan-Wars remained neutral.<br><br><a href='https://www.theoi.com/Titan/TitanOkeanos.html'>Click here to learn more about Oceanus</a>",
                Tethys:"Tethys was the primordial Titan goddess of all fresh water and nursing. With her brother, Oceanus, she is the mother of the river gods (not included, Hesiod's Theogony note that there are 3000 of them), and the Nephelai (Clouds nymphs, not included on this chart), and the Oceanids, sea nymphs (Hesiod's Theogony list 41 Oceanids, but only 8 is included here).<br><br>Tethys had no active role in Greek mythology and no established cults. Her name was derived from the Greek word têthê meaning 'nurse' or 'grandmother'.<br><br><a href='https://www.theoi.com/Titan/TitanisTethys.html'>Click here to learn more about Tethys</a>",
                Hyperion:"Hyperion was the Titan god of heavenly light. With his sister Theia, he is the father of the lights of heaven: Eos the Dawn, Helios the Sun, and Selene the Moon.<br><br>Hyperion was one of four Titan brothers who conspired with Kronos to castrate and depose their father Uranus. Hyperion, Crius, Coeus and Iapetus--posted at the four corners of the world--seized hold of their father and held him fast while Kronos castrated him with a sickle. As the father of the sun and dawn, Hyperion was no doubt regarded as the Titan of the pillar of the east. His brothers Koios, Krios and Iapetos presided respectively over the north, south and west. He was cast into Tartarus at the end of the Titan-War along with his brothers.<br><br><a href='https://www.theoi.com/Titan/TitanHyperion.html'>Click here to learn more about Hyperion</a>",
                Theia:"Theia was the Titan goddess of sight and the shining ether of the bright, blue sky. She was also, by extension, the goddess who endowed gold and silver with their brilliance and intrinsic value. With her brother Hyperion, she is the mother of the lights of heaven: Eos the Dawn, Helios the Sun, and Selene the Moon.<br><br><a href='https://www.theoi.com/Titan/TitanisTheia.html'>Click here to learn more about Theia</a>",
                Crius:"Crius was the Titan god of constellations. Crius was one of four Titan brothers who conspired with Kronos to castrate and depose their father Uranus. Hyperion, Crius, Coeus and Iapetus--posted at the four corners of the world--seized hold of their father and held him fast while Kronos castrated him with a sickle. Crius represents the southern pillar as his name means 'the Ram',the constellation Aries, whose springtime rising in the south marked the start of the Greek year. He was cast into Tartarus at the end of the Titan-War along with his brothers.<br><br><a href='https://www.theoi.com/Titan/TitanKrios.html'>Click here to learn more about Crius</a>",
                Kronos:"Kronos was the leader and youngest of the first generation of Titans, the divine descendants of Uranus and Gaia. He ruled the cosmos during the Golden Age after castrating and deposing his father, Uranus.<br><br>After dispatching Uranus, Cronus re-imprisoned the Hecatoncheires and the Cyclopes, which angered Gaia. Later, Kronos learned from Gaia and Uranus that he was destined to be overcome by his own sons, just as he and his brothers had overthrown his father. As a result, he devoured all of his children as soon as they were born to prevent the prophecy. When the sixth child, Zeus, was born, Rhea sought Gaia to devise a plan to save them. Rhea secretly gave birth to Zeus in Crete, and handed Cronus a stone wrapped in swaddling clothes, which he promptly swallowed, thinking that it was his son.<br><br> Once he had grown up, Zeus used an emetic to force Kronos to disgorge his siblings. After freeing his siblings, Zeus released the Hecatoncheires, and the Cyclopes who forged for him his thunderbolts, Poseidon's trident and Hades' helmet of darkness. In a vast war called the Titanomachy, Zeus and his older brothers and older sisters, with the help of the Hecatoncheires and Cyclopes, overthrew Kronos and the other Titans. He was cast into Tartarus at the end of the Titan-War along with his brothers.<br><br><a href='https://www.theoi.com/Titan/TitanKronos.html'>Click here to learn more about Kronos</a>",
                Rhea:"Rhea was the Queen of the Titans and goddess of female fertility and the wilds. She represented the eternal flow of time and generations; as the great Mother, the 'flow' was menstrual blood, birth waters, and milk. She was also a goddess of comfort and ease<br><br>Rhea rescued her infant son Zeus from Kronos who had devoured her other five children, by decieving him with a stone.<br><br><a href='https://www.theoi.com/Titan/TitanisRhea.html'>Click here to learn more about Rhea</a>",
                Themis:"Themis was the Titanis-goddess of natural order, divine law and tradition, and the oracles of the earth. She was the divine voice (themistes) who first instructed mankind in the primal laws of justice and morality, such as the precepts of piety, the rules of hospitality, good governance, conduct of assembly, and pious offerings to the gods.<br><br>She was the mother by Zeus of the Fates (The Morai) and Seasons (The Horai).<br><br><a href='https://www.theoi.com/Titan/TitanisThemis.html'>Click here to learn more about Themis</a>",
                Iapetus:"Iapetus was The titan god of mortality and life-span. Iapetus was one of four Titan brothers who conspired with Kronos to castrate and depose their father Uranus. Hyperion, Crius, Coeus and Iapetus--posted at the four corners of the world--seized hold of their father and held him fast while Kronos castrated him with a sickle. Iapetus would have been the pillar of the west, a position later held by his son Atlas. He was cast into Tartarus at the end of the Titan-War along with his brothers.<br><br>His sons Prometheus and Epimetheus were the creators of mankind and all other mortal creatures. He also had another son, Menoetius -- the god rash action and violent rage, who is not included in this chart<br><br><a href='https://www.theoi.com/Titan/TitanIapetos.html'>Click here to learn more about Iapetus</a>",
                Mnmosyne:"Mnemosyne was was the Titan goddess of memory and remembrance and the inventress of language and words. As a Titan daughter of Uranus, Mnemosyne was also a goddess of time. She represented the rote memorisation required to preserve the stories of history and the sagas of myth before the introduction of writing.<br><br>With Zeus, she is the mother of the 9 Muses, the goddess of artistic inspiration<br><br><a href='https://www.theoi.com/Titan/TitanisMnemosyne.html'>Click here to learn more about Mnemosyne</a>",
                Coeus:"Coeus was the Titan god of intelligence and the axis of heaven He was also known as Polos. Coeus was one of four Titan brothers who conspired with Kronos to castrate and depose their father Uranus. Hyperion, Crius, Coeus and Iapetus--posted at the four corners of the world--seized hold of their father and held him fast while Kronos castrated him with a sickle. Coeus's alternate name, Polos ('of the northern pole'), suggests he was the Titan of the pillar of the north.<br><br>Coeus, as god of the axis of heaven around which the constellations revolved, was probably also a god of heavenly oracles, just as his wife Phoebe presided over the oracles of the axis of earth Delphi,--a role inherited by their grandson Apollo.<br><br><a href='https://www.theoi.com/Titan/TitanKoios.html'>Click here to learn more about Coeus</a>",
                Phoebe:"Phoebe was the Titan goddess of the bright intellect. She was wife of the Titan Coeus and the grandmother of Apollo, Artemis and Hecate. Phoebe was the third goddess to hold the great oracle of Delphoi (Delphi) which she in turn bestowed upon her grandson Apollo. Her name was derived from the Greek words phoibos 'bright' or 'radiant', phoibazô 'to prophesy' and phoibaô 'to purify'.<br><br><a href='https://www.theoi.com/Titan/TitanisPhoibe.html'>Click here to learn more about Phoebe</a>",
                Poseidon:"Poseidon was the Olympian god of the sea, earthquakes, floods, drought and horses. He was depicted as a mature man with a sturdy build and dark beard holding a trident<br><br>At birth Poseidon was swallowed whole by his father Kronos. He was later freed by his brother Zeus and fought along side him in the Titan War. After winning the war, Poseidon and his brothers drew lots for the division of the cosmos after the fall of the Titans, and won the sea as his domain.<br><br>He entered a contest with the goddess Athena for dominion over Athens and produced the very first horse as a gift. But the king refused him the prize and in anger Poseidon afflicted the land with drought.<br><br>Poseidon had many children with his wife Amphitrite and even more with other nymphs and mortals. Only Triton and Theseus are included on this chart. Some of his other children include Rhode, goddess-nymph of the Island of Rhodes, giants such as Antaios and the cyclops Polyphemos, magical horses like Pegasos and Arion, and various mortal kings, heroes and villians including Bellerophontes.<br><br><a href='https://www.theoi.com/Olympios/Poseidon.html'>Click here to learn more about Poseidon</a>",
                Demeter:"Demeter was the Olympian goddess of agriculture, grain and bread who sustained mankind with the earth's rich bounty. Demeter was depicted as a mature woman, often wearing a crown and bearing sheafs of wheat or a cornucopia, and a torch.<br><br>Demeter's most famous story is the story of the abduction of her daughter Persephone. With her brother Zeus, she had one daughter, Persephone. Zeus, without the knowledge of Demeter, had promised Persephone to Hades, and while the unsuspecting maiden was gathering flowers which Zeus had caused to grow in order to tempt her, the earth opened up and carried her off to Hades. Persephone's cries of anguish were heard only by Hecate and Helios. Demeter, who heard only the echo of her voice, immediately set out in search of her daughter. <br><br>With the help of Hecate and Helios, Demeter discovered that Persephone was abducted by Hades. Furious, Demeter caused droughts and famine that devastated humankind, cutting off the blessings to Olympus. Zeus, anxious that the race of mortals should not become extinct, as the gods need the human sacrifices, sent Iris to induce Demeter to return to Olympus. However, Demeter vows to not to return to Olympus, nor to restore the fertility of the earth until she gets her daughter back.<br><br> Zeus relents and sends Hermes to bring Persephone back to her mother. Hoever, because Persephone ate 6 pomengranate seeds, she must reside in the underworld for 6 months out of the year. This is the story origin of the winter seasons, which represent Demter's grief of being away from her daughter.<br><br><a href='https://www.theoi.com/Olympios/Demeter.html'>Click here to learn more about Demeter</a>",
                Zeus:"Zeus was the King of the Gods and the god of the sky, weather, law and order, destiny and fate, and kingship. He was depicted as a regal, mature man with a sturdy figure and dark beard. His usual attributes were a lightning bolt, a royal sceptre and an eagle.<br><br>Zeus was the youngest child of the Titans Kronos and Rhea. Kronos devoured each of his children as they were born, but Zeus escaped this fate when his mother spirited him away, handing the Titan a stone substitute wrapped in swaddling cloth. The god was raised in secrecy on Mount Dikte in Crete where he was nursed by nymphs on the milk of the goat Amaltheia and guarded by the warrior Curetes who drowned out the sound of his crying with their shield-clashing battle-dance.<br><br>Upon coming of age Zeus recruited the goddess Metis to his cause. She served the Titan Kronos a magical draught which caused him to disgorge his sibling Kronos had devoured. Zeus liberated the six giant-sons of Heaven from the pit of Tartaros. In gratitude the Kyklopes (Cyclopes) armed him with lightning-bolts and the Hekatonkheires (Hundred-Handed) aided him in his assault on the Titanes with volleys of thrown boulders. Kronos and his allies were eventually defeated and banished to a prison beneath the earth.<br><br>After the fall of the Titan-gods, Zeus and his brothers drew lots to divide rule of the cosmos - Zeus won the heavens, Poseidon the sea and Hades the underworld.<br><br>Other than the story of the Olympian origins, Zeus is notorious in many other stories for fucking anything that has boobs. Zeus seduced many mortal woman including Leda in the guise of a swan, Europa as a bull, Danae as a shower of gold, Alkmene as her own husband, Callisto as the goddess Artemis, and Antiope as a satyr. Zeus has far many more children that can be listed on this chart.<br><br><a href='https://www.theoi.com/Olympios/Zeus.html'>Click here to learn more about Zeus</a>",
                Hera:"Hera was the Olympian queen of the gods, and the goddess of marriage, women, the sky and the stars of heaven. She was usually depicted as a beautiful woman wearing a crown and holding a royal, lotus-tipped sceptre, and sometimes accompanied by a lion, cuckoo or hawk.<br><br>Other than the Olympian origin story, she appears in a lot of other stories, most as a vengeful character persecuting a woman Zeus had cheated on her on or a bastard child of Zeus. Example, she sent the dragon Python after a pregnant Leto and commanded the Earth to turn her away so that she would not birth her children.In other story, she threw down her own son, Hephaestus, from Olympus because he was born a cripple.<br><br>In stories with more favorable light, Hera helps Jason on his quest to find the golden fleece and helps the Greeks out during the Trojan War.<br><br><a href='https://www.theoi.com/Olympios/Hera.html'>Click here to learn more about Hera</a>",
                Hades:"Hades was the king of the underworld and god of the dead. He presided over funeral rites and defended the right of the dead to due burial. Haides was also the god of the hidden wealth of the earth, from the fertile soil with nourished the seed-grain, to the mined wealth of gold, silver and other metals.<br><br>Haides was devoured by Kronos (Cronus) as soon as he was born, along with four of his siblings. Zeus later caused the Titan to disgorge them, and together they drove the Titan gods from heaven and locked them away in the pit of Tartaros. When the three victorious brothers then drew lots for the division of the cosmos, Haides received the third portion, the dark dismal realm of the underworld, as his domain.<br><br>Haides desired a bride and petitioned his brother Zeus to grant him one of his daughters. The god offered him Persephone, the daughter of Demeter. However, knowing that the goddess would resist the marriage, he assented to the forceful abduction of the girl. When Demeter learned of this, she was furious and caused a great dearth to fall upon the earth until her daughter was returned. Zeus was forced to concede lest mankind perish, and the girl was fetched forth from the underworld. However, since she had tasted of the pomegranate seed, she was forced to return to him for a portion of each year.<br><br><a href='https://www.theoi.com/Khthonios/Haides.html'>Click here to learn more about Hades</a>",
                Hestia:"Hestia was the virgin goddess of the hearth (both private and municipal) and the home. As the goddess of the family hearth she also presided over the cooking of bread and the preparation of the family meal. Hestia was also the goddess of the sacrificial flame and received a share of every sacrifice to the gods. The cooking of the communal feast of sacrificial meat was naturally a part of her domain.<br><br>When the gods Apollon and Poseidon sought for her hand in marriage, Hestia refused and asked Zeus to let her remain an eternal virgin. He agreed and she took her place at his royal hearth.<br><br><a href='https://www.theoi.com/Ouranios/Hestia.html'>Click here to learn more about Hestia</a>",
                Triton:"Triton was a fish-tailed sea-god, the son and herald of Poseidon who stilled the waves with his conch-shell trumpet.<br><br><a href='https://www.theoi.com/Pontios/Triton.html'>Click here to learn more about Triton</a>",
                Athena:"Athena was the Olympian goddess of wisdom and good counsel, war, the defence of towns, heroic endeavour, weaving, pottery and various other crafts. She was depicted as a stately woman armed with a shield and spear, and wearing a long robe, crested helm, and the famed aigis--a snake-trimmed cape adorned with the monstrous visage of the Gorgon Medusa.<br><br>She is the daugther of Zeus and Methis, though she was birthed from the head of Zeus, fully-grown and arrayed in arms.<br><br>Some of her famous stories include her contest with Poseidon for dominion of Athens in which she produced the first olive tree and he the first horse, assisting of Heracles with his twelve labours, and her weaving contest with Arachne who was transformed by the goddess into a spider after Athena lost.<br><br><a href='https://www.theoi.com/Olympios/Athena.html'>Click here to learn more about Athena</a>",
                Hebe:"Hebe was the goddess of youth and the cupbearer of the gods who served ambrosia at the heavenly feast. She was also the patron goddess of the young bride and an attendant of the goddess Aphrodite.<br><br>Heracles received Hebe as his wife upon his ascension to Olympos, a wedding which reconciled the hero with Hebe's mother Hera.<br><br><a href='https://www.theoi.com/Ouranios/Hebe.html'>Click here to learn more about Hebe</a>",
                Hephaestus:"Hephaestus was the Olympian god of fire, smiths, craftsmen, metalworking, stonemasonry and sculpture. He was depicted as a bearded man holding a hammer and tongs--the tools of a smith--and sometimes riding a donkey.<br><br>At his birth, Hephaestus was cast out of Olympus for being born a cripple. Some of his more famous stories include the capture of Hera in a cursed throne and his return to Olympus, the capture of his wife Aphrodite with Ares in a golden net thus revealing her adultery, crafting of Pandora--the first woman, and crafting of the armour of Achilles at the request of the hero's mother Thetis<br><br><a href='https://www.theoi.com/Olympios/Hephaistos.html'>Click here to learn more about Hephaestus</a>",
                Ares:"Ares was the Olympian god of war, battlelust, courage and civil order. In ancient Greek art he was depicted as either a mature, bearded warrior armed for battle, or a nude, beardless youth with a helm and spear.<br><br>Ares was infamous for this adulterous relationship with Aphrodite. Those two just loved to fuck. In two of his more famous stories, Ares was in bed with Aphrodite but her husband Hephaistos trapped the pair in a golden net and humiliated them by calling the rest of the gods to witness. In the other story, Aphrodite fell in love with the handsome youth Adonis, Ares grew jealous, transformed himself into a boar, and gorged the boy to death as he was out hunting.<br><br><a href='https://www.theoi.com/Olympios/Ares.html'>Click here to learn more about Ares</a>",
                Aphrodite:"Aphrodite was the Olympian goddess of love, beauty, pleasure and procreation. She was depicted as a beautiful woman often accompanied by the winged godling Eros. Her attributes included a dove, apple, scallop shell and mirror. In classical sculpture and fresco she was usually depicted nude. Aphrodite was born from the where Uranus's castrated dong fell into the sea and she emerged from the sea form fully formed.<br><br>Aphrodite has a keen interest in the lives of mortals and appear in lots of stories, particularly ones that involve romance. These include bringing the statue of Pygmalion to life after he fell in love with it, the race of Hippomenes for Atalanta, which was won with the help of the goddess and her golden apples, and her love for Adonis, who was tragically killed by a boar (who was actually Ares).<br><br>Her involvement in mortals' lives are not always good persay, for example she was the one who persuaded Paris to declare her the most beautiful by promising him the hand of Helen of Troy in marriage, which inadvertently caused the Trojan War.<br><br><a href='https://www.theoi.com/Olympios/Aphrodite.html'>Click here to learn more about Aphrodite</a>",
                Adonis:"Adonis was the mortal lover of the goddess Aphrodite. He was conceived after Aphrodite cursed his mother Myrrha to lust after her own father, King Cinyras of Cyprus. Myrrha had sex with her father in complete darkness for nine nights, but he discovered her identity and chased her with a sword. The gods transformed her into a myrrh tree and, in the form of a tree, she gave birth to Adonis. Aphrodite found the infant and gave him to be raised by Persephone, the queen of the Underworld. Adonis grew into an astonishingly handsome young man, causing Aphrodite and Persephone to feud over him. He was gorged to death by a wild boar.<br><br><a href='https://www.theoi.com/Olympios/AphroditeLoves2.html#Adonis'>Click here to learn more about Adonis</a>",
                Hermes:"Hermes was the Olympian god of herds and flocks, travellers and hospitality, roads and trade, thievery and cunning, heralds and diplomacy, language and writing, athletic contests and gymnasiums, astronomy and astrology. He was the herald and personal messenger of Zeus, King of the Gods, and also the guide of the dead who led souls down into the underworld.<br><br>Hermes was depicted as either a handsome and athletic, beardless youth or as an older, bearded man, with winged boots and a herald's wand.<br><br>As a new-born infant Hermes snuck out of his crib, stole the cattle of the god Apollon, and crafted the first lyre from a tortoise-shell. Zeus was so amused by the young god's antics that he granted him a place as one of the twelve supreme gods of Olympus.<br><br>Hermes appears in a lot of Greek mythology stories as a guide for the heros. For example, he assisted the hero Perseus in his quest to slay the Gorgon Medousa, providing guidance and gifts from the gods and gave Odysseus a magical herb to protect the hero from the magic of Circe.<br><br><a href='https://www.theoi.com/Olympios/Hermes.html'>Click here to learn more about Hermes</a>",
                Apollo:"Apollo was the Olympian god of prophecy and oracles, music, song and poetry, archery, healing, plague and disease, and the protection of the young. He was depicted as a handsome, beardless youth with long hair and attributes such as a wreath and branch of laurel, bow and quiver of arrows, raven, and lyre.<br><br>Like his old man, Apollo got around a lot. He had numerous children with nymphs and mortals. One of his more famous children is Orpheus, who played a song so sad after his wife died that Hades let him bring her back as long as he didn't look at her until he reached Earth (he did, and thus lost her again). Apollo's most famous love was for the nymph Daphne, who didn't want him. But he doesn't understand consent and kept trying to bang her anyways, so she pleaded to Gaia and Gaia turned her into a laurel tree. Finally, Apollo wasn't just a lady's man either, some of his lovers include men such as Branchus, Hyacinth, and Hymenaios<br><br><a href='https://www.theoi.com/Olympios/Apollon.html'>Click here to learn more about Apollo</a>",
                Artemis:"Artemis was the Olympian goddess of hunting, the wilderness and wild animals. She was also a goddess of childbirth, and the protectress of the girl child up to the age of marriage--her twin brother Apollo was similarly the protector of the boy child. Together the two gods were also bringers of sudden death and disease--Artemis targetted women and girls, Apollo men and boys.<br><br>In ancient art Artemis was usually depicted as a girl or young maiden with a hunting bow and quiver of arrows.<br><br>Artemis is a virgin goddess;however, she had one companion, Orion, a handsome giant. But her jealous brother Apollon tricked her into killing him with a distant bow-shot. In her grief Artemis placed him amongst the stars as the constellation Orion.<br><br><a href='https://www.theoi.com/Olympios/Artemis.html'>Click here to learn more about Artemis</a>",
                Ganymede:"Ganymede was a handsome Trojan prince who was carried off to heaven by Zeus in the shape of an eagle where he was appointed as cup-bearer of the gods. He is the boy-toy of not only Zeus, but also  Eros and Hymenaios.<br><br>Ganymedes was often portrayed as the god of homosexual love.<br><br><a href='https://www.theoi.com/Ouranios/Ganymedes.html'>Click here to learn more about Ganymede</a>",
                Persephone:"Persephone was the goddess queen of the underworld, wife of the god Hades. She was also the goddess of spring growth. Her abduction into the underworld by her uncle, and her stay in the underworld for 6 months out of the year, is the origin story for the winter seasons.<br><br><a href='https://www.theoi.com/Khthonios/Persephone.html'>Click here to learn more about Persephone</a>",
                Charities:"The Charities were three goddesses of grace, beauty, adornment, joy, mirth, festivity, dance and song. The Charities were attendants of the goddesses Aphrodite and Hera. Throughout the mythology, there are many possible candidates for the names of the Charities. For the myth where Eurynome is their mother, their names are Aglaia, Euphrosyne, and Thalia. <br><br><a href='https://www.theoi.com/Ouranios/Kharites.html'>Click here to learn more about the Charities</a>",
                Dike:"Dike was the goddess of justice, fair judgements and the rights established by custom and law. Like her siblings, she probably also represented an aspect of springtime growth.<br><br>Dike was also one of the Horai, goddesses of the seasons and the keepers of the gates of heaven; while their three sisters, the Moirai spinned out the web of fate.<br><br>The Horai were particularly honoured by farmers who planted and tended their crops in time with the rising and setting of the stars--measures of the passing seasons.<br><br><a href='https://www.theoi.com/Ouranios/HoraDike.html'>Click here to learn more about the Dike</a>",
                Eunomia:"Eunomia was the goddess of good order and lawful conduct. She was associated with the internal stability of a state, including the enactment of good laws and the maintenance of civil order. She was also the spring-time goddess of green pastures<br><br>Eunomia was also one of the Horai, goddesses of the seasons and the keepers of the gates of heaven; while their three sisters, the Moirai spinned out the web of fate.<br><br>The Horai were particularly honoured by farmers who planted and tended their crops in time with the rising and setting of the stars--measures of the passing seasons.<br><br><a href='https://www.theoi.com/Ouranios/HoraEunomia.html'>Click here to learn more about the Eunomia</a>",
                Eirene:"Eirene was the goddess of peace and the season of spring.<br><br>Eirene was also one of the Horai, goddesses of the seasons and the keepers of the gates of heaven; while their three sisters, the Moirai spinned out the web of fate.<br><br>The Horai were particularly honoured by farmers who planted and tended their crops in time with the rising and setting of the stars--measures of the passing seasons.<br><br><a href='https://www.theoi.com/Ouranios/HoraEirene.html'>Click here to learn more about the Eirene</a>",
                Eros:"Eros was the mischievous, winged god of love, a minion and constant companion of the goddess Aphrodite. He is famous for shooting arrows at people to make them fall in love. He is the husband to Psyche.<br><br><a href='https://www.theoi.com/Ouranios/Eros.html'>Click here to learn more about the Eros</a>",
                Psyche:"Psyche was the goddess of the soul and the wife of Eros god of love. She was once a mortal princess whose extraordinary beauty earned the ire of Aphrodite when men began turning their worship away from the goddess towards the girl. Aphrodite commanded Eros make Psyche fall in love with the most hideous of men but the god instead fell in love and carried her off to his hidden palace. Eros hid his true identity and told Psykhe she must never gaze upon his face. Her jealous sisters, however, tricked her into disobeying and the angry god forsook her. Psyche searched the world for her lost love and eventually came into the service of Aphrodite. The goddess commanded her perform a series of seemingly impossible tasks which culminated in a journey to the Underworld. Psyche was afterwards reunited with Eros and the couple were married in a ceremony attended by all the gods<br><br><a href='https://www.theoi.com/Ouranios/Psykhe.html'>Click here to learn more about the Psyche</a>",
                Hermaphodites:"Hermaphodites was the god of hermaphrodites and of effeminates. He was numbered amongst the winged love-gods known as Erotes.Hermaphroditos was a son of Hermes and Aphrodite, the gods of male and female sexuality.<br><br><a href='https://www.theoi.com/Ouranios/ErosHermaphroditos.html'>Click here to learn more about the Hermaphodites</a>",
                muses:"The 9 Muses are goddess of artistic inpiration. They were also goddesses of knowledge, who remembered all things that had come to pass.Later the Mousai were assigned specific artistic spheres:<ul><li>Calliope, epic poetry</li><li>Clio, history</li><li>Urania, astronomy</li><li>Thalia, comedy</li><li>Melpomene, tragedy</li><li>Polyhymnia, religious hymns</li><li>Erato, erotic poetry</li><li>Euterpe, lyric poetry</li><li>Terpsichore, choral song and dance</li></ul><br><a href='https://www.theoi.com/Ouranios/Mousai.html'>Click here to learn more about the 9 Muses</a>",
                Hecate:"Hecate was the goddess of magic, witchcraft, the night, moon, ghosts and crossroads.<br><br>Hecate assisted Demeter in her search for Persephone, guiding her through the night with flaming torches. After the mother-daughter reunion became she Persephone's minister and companion in Hades.<br><br> Two animals are closely associated with Hecate, the black she-dog and the polecat. The dog was the Trojan Queen Hecuba who leapt into the sea after the fall of Troy and was transformed by the goddess. The polecat was either the witch Gale, turned as punishment for her incontinence, or Galinthias, midwife of Alkmene (Alcmena), who was transformed by the enraged goddess Eileithyia but adopted by the sympathetic Hekate.<br><br><a href='https://www.theoi.com/Khthonios/Hekate.html'>Click here to learn more about Hecate</a>",
                Typhon:"Typhon was a monstrous storm-giant who laid siege to heaven but was defeated by Zeus and imprisoned in the pit of Tartaros. He was the source of devastating storms which issued forth from that dark nether-realm. He was a winged giant, said to be so huge that his head brushed the stars. He was man-shaped from the waist up with two coiled serpents in place of legs. He had a hundred serpent-heads for fingers, a filthy, matted beard, pointed ears, and eyes flashing fire.<br><br><a href='https://www.theoi.com/Gigante/Typhoeus.html'>Click here to learn more about Typhon</a>",
                Echidna:"Echidna was a monstrous she-dragon with the head and breast of a woman and the tail of a coiling serpent. She probably represented the corruptions of the earth--rot, slime, fetid waters, illness and disease. Echidna was the wife of Typhon and together they spawned a host of terrible monsters to plague the earth including the Chimera, Cerberus, the Hydra, Sphinx and the Colchian Dragon.<br><br><a href='https://www.theoi.com/Ther/DrakainaEkhidna1.html'>Click here to learn more about Echidna</a>",
                Orthrus:"Orthrus was a two-headed, serpent-tailed dog which guarded the fabulous, red cattle of Geryon on the island of Erytheia. Heracles was sent to fetch these as one of his twelve labours and in the process slew both Orthrus and his master.<br><br><a href='https://www.theoi.com/Ther/KuonOrthros.html'>Click here to learn more about Orthrus</a>",
                Cerebus:"Cerebus was the gigantic, three-headed hound of Hades which guarded the gates of the underworld and prevented the escape of the shades of the dead.<br><br><a href='https://www.theoi.com/Ther/KuonKerberos.html'>Click here to learn more about Cerebus</a>",
                Colchian:"The Colchian dragon was a giant, watchful serpent which guarded the Golden Fleece in the sacred grove of Ares in Colchis. When Jason and the Argonauts came to fetch the fleece, the beast was either slain by the hero or put to sleep by the witch Medea. <br><br><a href='https://www.theoi.com/Ther/Khimaira.html'>Click here to learn more about the Colchian Dragon</a>",
                Chimera:"The Chimera was a three-headed monster which ravaged the countryside of Lycia in Anatolia. It was a bizarre fire-breathing creature with the body and head of a lion, a goat's head rising from its back, the udders of a goat, and a serpent for a tail.<br><br><a href='https://www.theoi.com/Ther/Khimaira.html'>Click here to learn more about Chimera</a>",
                Hydra:"The Hydra was a gigantic, nine-headed water-serpent, which haunted the swamps of Lerna. Heracles was sent to destroy her as one of his twelve labours, but for each of her heads that he decapitated, two more sprang forth. So with the help of Iolaos, he applied burning brands to the severed stumps, cauterizing the wounds and preventing the regeneration.<br><br><a href='https://www.theoi.com/Ther/DrakonHydra.html'>Click here to learn more about Hydra</a>",
                Sphinx:"The Sphinx was a female monster with the body of a lion, the head and breast of a woman, eagle's wings and, according to some, a serpent's tail. She was sent by the gods to plague the town of Thebes as punishment for some ancient crime, preying on its youths and devouring all who failed to solve her riddle.<br><br><a href='https://www.theoi.com/Ther/Sphinx.html'>Click here to learn more about the Sphinx</a> ",
                Aether:"Aether was the personification of the 'upper sky' or the heavens. He embodies the pure upper air that the gods breathe, as opposed to the normal air (ἀήρ, aer) breathed by mortals.<br><br>In the evening his mother Nyx drew her dark veil across the sky, obscuring the ether and bringing night. In the morn his sister and wife Hemera dispersed night's mist to reveal the shining blue ether of day.<br><br><a href='https://www.theoi.com/Protogenos/Aither.html'>Click here to learn more about Aether</a>",
                Hemera:"Hemera was the goddess of the daytime and the personification of day. According to Hesiod's Theogony, Hemera left Tartarus just as Nyx entered it; when Hemera returned, Nyx left.<br><br><a href='https://www.theoi.com/Protogenos/Hemera.html'>Click here to learn more about Hemera</a>",
                Thalassa:"Thalassa was the primordial goddess of the sea. With her uncle, Pontus, she produced the fish and other sea creatures. Thalassa was the literal body of the sea and in the fables of Aesop, manifests as a woman formed of sea-water rising from her native element.<br><br>Thalassa is depicted in Greco-Roman mosaics as a matronly woman, half-submerged in the sea, with crab-claw horns, seaweed for clothes, and a ship's oar in her hand.<br><br><a href='https://www.theoi.com/Protogenos/Thalassa.html'>Click here to learn more about Thalassa</a>",
                Charon:"Charon was the Ferryman of the Dead, an underworld daimon in the service of King Hades. He gathered the shades of the dead from the upper world and led them down to the shores of the Akherousian  mere in the underworld where Charon transported them across the waters to Hades in his skiff. His fee was a single obolos coin which was placed in the mouth of a corpse upon burial. Those who had not received proper burial were unable to pay the fee and were left to wander the earthly side of the Akheron, haunting the world as ghosts.<br><br><a href='https://www.theoi.com/Khthonios/Kharon.html'>Click here to learn more about Charon</a>",
                Moros:"Moros was the personification of doom--the force which drove man towards his fated death. Moros' siblings Thanatos and Ker presided over the physical aspects of death--Ker was the bringer of violent death and deadly illness, while Thanatos represented a more gentle passing.<br><br><a href='https://www.theoi.com/Daimon/Moros.html'>Click here to learn more about Moros</a>",
                Thanatos:"Thanatos was the personification of of non-violent death. His touch was gentle, likened to that of his twin brother Hypnos (Sleep). Violent death was the domain of Thanatos' blood-craving sisters, the Keres, spirits of slaughter and disease.<br><br>Thanatos plays a prominent role in two myths. Once when he was sent to fetch Alcestis to the underworld, he was driven off by Herakles in a fight. Another time he was captured by the criminal Sisyphus who trapped him in a sack so as to avoid death.<br><br><a href='https://www.theoi.com/Daimon/Thanatos.html'>Click here to learn more about Thanatos</a>",
                Hypnos:"Hypnos was the personification of of sleep. He dwelt in Erebos, the land of eternal darkness beyond the gates of the rising sun, and rose into the sky each night in the train of his mother Nyx. Hypnos was often paired with his twin brother Thanatos , and the Oneiroi (Dreams).<br><br><a href='https://www.theoi.com/Daimon/Hypnos.html'>Click here to learn more about Hypnos</a>",
                Oneriroi:"The Oneriroi were the dark-winged spirits (daimones) of dreams which emerged each night like a flock of bats from their cavernous home in Erebos--the land of eternal darkness beyond the rising sun. The Oneiroi passed through one of two gates. The first of these, made of horn, was the source of the prophetic god-sent dreams, while the other, constructed of ivory, was the source of dreams which were false and without meaning. The term for nightmare was melas oneiros (black dream).<br><br><a href='https://www.theoi.com/Daimon/Oneiroi.html'>Click here to learn more about The Oneriroi</a>",
                Momus:"Momus was the personification of mockery, blame, ridicule, scorn, complaint and harsh criticism. He was expelled by Zeus from heaven for ridiculing the gods.<br><br><a href='https://www.theoi.com/Daimon/Momos.html'>Click here to learn more about Momus</a>",
                Geras:"Geras was the personification of old age, one of the malevolent spirits spawned by the goddess Nyx.<br><br><a href='https://www.theoi.com/Daimon/Geras.html'>Click here to learn more about Geras</a>",
                Oizys:"Oizys was the personification of misery and woe, distress and suffering. She was one of the malevolent children of Nyx<br><br><a href='https://www.theoi.com/Daimon/Oizys.html'>Click here to learn more about Oizys</a>",
                Nemesis:"Nemesis is the goddess of indignation against, and retribution for, evil deeds and undeserved good fortune. She was a personification of the resentment aroused in men by those who commited crimes with apparent impunity, or who had inordinate good fortune.<br><br>Nemesis directs human affairs in such a way as to maintain equilibrium. Happiness and unhappiness were measured out by her, care being taken that happiness was not too frequent or too excessive. Thus she is often depicted with Tyche, goddess of good fortune, and keeps Tyche from giving away too much happiness.<br><br><a href='https://www.theoi.com/Daimon/Nemesis.html'>Click here to learn more about Nemesis</a>",
                Philotes:"Philotes was the personification of of friendship and affection. She was perhaps also the spirit of sexual intercourse--an alternate meaning of the word philotês in Greek.<br><br><a href='https://www.theoi.com/Daimon/Philotes.html'>Click here to learn more about Philotes",
                Apate:"Apate was the personification of deceit, deception, guile and fraud. She was a companion of the Pseudologoi (Lies). Her male counterpart was Dolos, daimon of trickery, and her opposite number was Aletheia, the spirit of truth.<br><br><a href='https://www.theoi.com/Daimon/Apate.html'>Click here to learn more about Apate",
                Eris:"Eris was the personification of of strife, discord, contention and rivalry. Because of Eris' disagreeable nature she was the only goddess not to be invited to the wedding of Peleus and Thetis. When she turned up anyway and was refused admittance, she raged and threw a golden apple amongst the goddesses inscribed 'To the fairest.' Three laid claim to it--Hera, Aphrodite and Athena--and in their rivalry brought about the events leading up to the Trojan War.<br><br><a href='https://www.theoi.com/Daimon/Eris.html'>Click here to learn more about Eris",
                Moirai:"The Moirai, or the 3 Fates, are three goddesses of fate who personified the inescapable destiny of man. The individuals were Clotho, the 'the Spinner,' who spun the thread of life, Lachesis, 'the Apportioner of Lots', who measured it, and Aisa, 'She who cannot be turned,' who cut it short.<br><br>At the birth of a person, the Moirai spinned out the thread of his future life, followed his steps, and directed the consequences of his actions according to the counsel of the gods.<br><br>As goddesses of fate they must necessarily have known the future, which at times they revealed, and were therefore prophetic deities. Their ministers were all the soothsayers and oracles.<br><br>The Moirai were described as ugly, old women and sometimes lame. They were severe, inflexible and stern. Klotho carries a spindle or a roll (the book of ate), Lakhesis a staff with which she points to the horoscope on a globe, and Atropos a scroll, a wax tablet, a sundial, a pair of scales, or a cutting instrument.<br><br><a href='https://www.theoi.com/Daimon/Moirai.html'>Click here to learn more about The Moirai</a>",
                Keres:"The Keres were female spirits and the personification of violent or cruel death, including death in battle, by accident, murder or ravaging disease. The Keres were cravers of blood and feasted upon it after ripping a soul free from the mortally wounded bodies and sending it on their way to Hades.<br><br><a href='https://www.theoi.com/Daimon/Keres.html'>Click here to learn more about the Kers</a>",
                Hesperides:"The Hesperides were the goddess-nymphs of evening and sunsets and evenings. They were the daughters of either Nyx (Night) or the heaven-bearing Titan Atlas.<br><br>The Hesperides were entrusted with the care of the tree of the golden apples which was had been presented to the goddess Hera by Gaia on her wedding day. They were assisted by a hundred-headed guardian-Drakon (Dragon). Heracles was sent to fetch the apples as one of his twelve labours and, upon slaying the serpent, stole the precious fruit. Athena later returned them to the Hesperides.<br><br><a href='https://www.theoi.com/Titan/Hesperides.html'>Click here to learn more about the Hesperides</a>",
                Cyclops:"The cyclops were three, one-eyed, immortal giants who forged the lightning-bolts of Zeus. As soon as they were born, their father Uranus locked them away inside the belly of Gaia, along with their stormy brothers, the hundred-handed Hecatoncheires. Zeus and his brothers later released them and in return they provided the god with his thunderbolts, Poseidon with his storm-raising trident, and Hades with a helm of invisibility.<br><br><a href='https://www.theoi.com/Titan/Kyklopes.html'>Click here to learn more about the Cyclops</a>",
                Hecatoncheires:"The Hecatoncheires or Hundred-Handed giants were three primordial sons of Uranus and Gaia . Each had a hundred hands for wielding clouds and fifty heads for blustering winds. Their three companion brothers, the Cyclopes, were masters of thunder and lightning. The six giants were released by Zeus during his war against the Titans and helped drive the elder gods from heaven down into the pit. The Hecatoncheires were then appointed as the prison's eternal wardens.<br><br><a href='https://www.theoi.com/Titan/Hekatonkheires.html'>Click here to learn more about the Hecatoncheires</a>",
                Giantes:"The Giantes were a tribe of a hundred giants. At the urging of Gaia the Gigantes waged war on the gods and were destroyed in the ensuing battle.<br><br><a href='https://www.theoi.com/Gigante/Gigantes.html'>Click here to learn more about the Giantes</a>",
                Erinyes:"The Erinyes, or the Furies, were three goddesses of vengeance and retribution who punished men for crimes against the natural order. They were particularly concerned with homicide, unfilial conduct, offenses against the gods, and perjury. <a href='https://www.theoi.com/Khthonios/Erinyes.html'>Click here to learn more about the Erinyes</a>",
                Meliae:"The Meliae are the nymphs of mountain ash-tree. According to Hesiod, the Meliae were born from the drops of blood that fell on Gaia when Kronos castrated Uranus.<br><br>The Meliae were the nurses for Zeus when his mother, Rhea, hid him away from his father. They were the wives of the Silver Race of Man and mothers of the Bronze, the third generation of mankind. They nursed their sons on the honey-sap of the ash, and armed them with spears crafted from the wood of their trees. The Bronze were an overly warlike race who incurred the wrath of Zeus and were destroyed in the floods of the Great Deluge.<br><br><a href='https://www.theoi.com/Nymphe/NymphaiMeliai.html'>Click here to learn more about The Meliae</a>",
                Thamus:"Thamus was an old sea god who personified the wonders of the sea. His name was derived from the Greek word thaumatos meaning 'miracle' or 'wonder.'<br><br><a href='https://www.theoi.com/Pontios/Thaumas.html'>Click here to learn more about Thamus</a>",
                Phorcys:"Phorcys was the ancient sea-god of the hidden dangers of the deep. He and his wife, and sister, Ceto were also gods of the largest of sea creatures.<br><br><a href='https://www.theoi.com/Pontios/Phorkys.html'>Click here to learn more about Phorcys</a>",
                Ceto:"Ceto was was the goddess of the dangers of the sea and, more specifically, of sea-monsters, whales and large sharks. She consorted with her brother Phorcys to produced a brood of fearsome monsters.<br><br><a href='https://www.theoi.com/Pontios/Keto.html'>Click here to learn more about Ceto</a>",
                Iris:"Iris was the goddess of the rainbow and the messenger of the Olympian gods. She was often described as the handmaiden and personal messenger of Hera.<br><br><a href='https://www.theoi.com/Pontios/Iris.html'>Click here to learn more about Iris</a>",
                Harpies:"The Harpies were the spirits of sudden, sharp gusts of wind. They were known as the hounds of Zeus and were despatched by the god to snatch away people and things from the earth. Sudden, mysterious dissappearances were often attributed to the Harpies.<br><br><a href='https://www.theoi.com/Pontios/Harpyiai.html'>Click here to learn more about the Harpies</a>",
                Gorgons:"The Gorgons were three powerful, winged daimones named Medusa, Sthenno and Euryale who have snakes for hair. Of the three sisters only Medousa was mortal. When Perseus killed Medusa, two creatures sprang forth from the wound--the winged horse Pegasus and the giant Chrysaor. Perseus fled with the monster's head in a sack and her two angry sisters chasing close on his heels.<br><br><a href='https://www.theoi.com/Pontios/Gorgones.html'>Click here to learn more about the Gorgons</a>",
                Graeae:"The Graeae were three, sea hags who personified the white foam of the sea. They were grey-haired from birth and shared amongst themselves a single, detatchable eye and tooth. The hero Perseus stole these when he was searching for the Medusa, compelling the hags to reveal the location of their sister. The names of the Graiai suggest rather dire monsters--Deino is the 'the terrible,' Enyo 'the warlike' and Persis 'the destoyer.'<br><br><a href='https://www.theoi.com/Pontios/Gorgones.html'>Click here to learn more about the Graeae</a>",
                Scylla:"Scylla was a sea-monster who haunted the rocks of a narrow strait opposite the whirlpool of Charybdis. Ships who sailed too close to her rocks would lose six men to her ravenous, darting heads. Homer describes Skylla as a creature with twelve dangling feet, six long necks and grisly heads lined with a triple row of sharp teeth. <br><br><a href='https://www.theoi.com/Pontios/Skylla.html'>Click here to learn more about Scylla</a>",
                Eurybia:"Eurybia was the goddess of power over, and mastery of, the sea. She apparently presided over external forces which influence the main such as the rise of the constellations, seasonal weather, and the power of the winds.<br><br><a href='https://www.theoi.com/Pontios/Eurybia.html'>Click here to learn more about Eurybia</a>",
                Nereus:"Nereus was the old man of the sea, and the god of the sea's rich bounty of fish. He dwelt in the depths of the Aegean with his wife Doris and fifty Nereid daughters.<br><br>Like many of the other sea-gods Nereus was a master shapeshifter, and spoke with prophetic voice. It was for his knowledge that Herakles once wrestled him, in search of directions to the land of the Hesperides.<br><br><a href='https://www.theoi.com/Pontios/Nereus.html'>Click here to learn more about Nereus</a>",
                Doris:"Doris is the Oceanid-nymph wife of the sea-god Nereus and the mother of the fifty Nereides (only 2 is included in this chart). She may have been the goddess of the rich fishing-grounds found at the mouths of rivers where fresh water mingled with the brine.<br><br><a href='https://www.theoi.com/Nymphe/NympheDoris.html'>Click here to learn more about Doris</a>",
                Amphitrite:"Amphitrite is the goddess-queen of the sea, wife of Poseidon, and eldest of the fifty Nereides.She was the female personification of the sea--the loud-moaning mother of fish, seals and dolphins.<br><br>When Poseidon first sought Amphitrite's hand in marriage, she fled his advances, and hid herself away near Atlas in the Ocean stream at the far ends of the earth. The dolphin-god Delphin eventually tracked her down and persuaded her to return to wed the sea-king. She had many children with Poseidon, but only Triton is included in this chart.<br><br><a href='https://www.theoi.com/Pontios/Amphitrite.html'>Click here to learn more about Amphitrite</a>",
                Helios:"Helios was the Titan god of the sun, a guardian of oaths, and the god of sight. He dwelt in a golden palace in the River Oceanus at the far ends of the earth from which he emerged each dawn, crowned with the aureole of the sun, driving a chariot drawn by four winged steeds. When he reached the the land of the Hesperides in the far West he descended into a golden cup which bore him through the northern streams of Okeanos back to his rising place in the East.<br><br><a href='https://www.theoi.com/Titan/Helios.html'>Click here to learn more about Helios</a>",
                Selene:"Selene was the Titan goddess of the moon. She was depicted as a woman riding sidesaddle on a horse or driving a chariot drawn by a pair of winged steeds. Her lunar sphere or crescent was either a crown set upon her head or the fold of a raised, shining cloak. She was sometimes said to drive a team of oxen and her lunar crescent was likened to a pair of bull's horns.<br><br><a href='https://www.theoi.com/Titan/Selene.html'>Click here to learn more about Selene</a>",
                Eos:"Eos was the rosy-fingered goddess of the dawn. Eos had an unquenchable desire for handsome young men, some say as the result of a curse laid upon her by the goddess Aphrodite. Her lovers included Orion, Phaethon, Cephalus and Tithonus, three of which she ravished away to distant lands. The Trojan prince Tithonos became her official consort. When the goddess petitioned Zeus for his immortality, she neglected also to request eternal youth. In time he shrivelled up by old age and transformed into a grasshopper.<br><br><a href='https://www.theoi.com/Titan/Eos.html'>Click here to learn more about Eos</a>",
                Astraeus:"Astraeus was the Titan god of stars and planets and of the art of astrology. By Eos (the Dawn) he was the father of the Stars and the four seasonal Winds. The arrival of these Winds was heralded by the rising of certain constellations. Astraios also had a daughter named Astrae) who was the goddess of the constellation Virgo.<br><br><a href='https://www.theoi.com/Titan/TitanAstraios.html'>Click here to learn more about Astraeus</a>",
                Anemoi:"The Anemoi were the gods of the four winds--namely Boreas the North-Wind, Zephyrus the West, Notus the South, and Eurus the East. Each of these was associated with a season--Boreas was the cold breath of winter, Zephyrus the god of spring breezes, and Notus the god of summer rain-storms.<br><br><a href='https://www.theoi.com/Titan/Eos.html'>Click here to learn more about the Anemoi</a>",
                Astra:"The Astra Planeta were the gods of the five wandering stars. They were named Phainon (planet Saturn), Phaethon (planet Jupiter), Pyroeis (planet Mars), Eosphoros (planet Venus) and Stilbon (planet Mercury). The three remaining planets--Uranus, Neptune and Pluto--are invisible to the naked eye and were only discovered and named in modern times.<br><br><a href='https://www.theoi.com/Titan/AstraPlaneta.html'>Click here to learn more about the Astra Planeta</a>",
                Asia:"Also known as Clymene, was one of the elder Oceanids and the Titan goddess of fame and renown. She was the wife of the Iapetus and the mother of Prometheus, Atlas, Epimetheus, and Menoetius (not included).<br><br><a href='https://www.theoi.com/Titan/TitanisKlymene.html'>Click here to learn more about Asia</a>",
                Atlas:"Atlas is the Titan god who bore the sky aloft. He personified the quality of endurance.Atlas was a leader of the Titanes (Titans) in their war against Zeus and after their defeat he was condemned to carry the heavens upon his shoulders.<br><br>Atlas was also the god who instructed mankind in the art of astronomy, a tool which was used by sailors in navigation and farmers in measuring the seasons. These roles were often combined and Atlas becomes the god who turns the heaven on their axis, causing the stars to revolve.<br><br>With his wife, Pleione, he had many daugthers. (Only Maia is included in this chart)<br><br><a href='https://www.theoi.com/Titan/TitanAtlas.html'>Click here to learn more about Atlas</a>",
                Prometheus:"Prometheus was the Titan god of forethought and the creator and benefactor of man. He defied Zeus on several occasions, including tricking the gods out of the best share of the sacrificial meat, and stealing fire from heaven for the benefit of mankind. Zeus was furious, and had Prometheus chained to Mount Caucasus, where an eagle was set to devour his ever-regenerating liver. The Titan was eventually released from his tortures by Heracles.<br><br><a href='https://www.theoi.com/Titan/TitanPrometheus.html'>Click here to learn more about Prometheus</a>",
                Epimetheus:"Epimetheus was the Titan god of afterthought. He was appointed with the task of creating the beasts of the earth, while his brother Prometheus was busy with the crafting of man. Epimetheus was tricked by Zeus into receiving Pandora, the first woman, and her jar of evils into the house of man.<br><br><a href='https://www.theoi.com/Titan/TitanEpimetheus.html'>Click here to learn more about Epimetheus</a>",
                Pandora:"Pandora was the first mortal woman who was formed out of clay by the gods. She was created by Hephaestus and delivered to Epimetheus as a bride by Zeus as revenge for Prometheus stealing the gods' fire. Zeus gave Pandora a storage jar as a wedding gift which she opened, releasing the swarm of evil spirits trapped within. These would forever after plague mankind. Only Elpis (Hope) remained behind, a single blessing to ease mankind's suffering.<br><br><a href='https://www.theoi.com/Heroine/Pandora.html'>Click here to learn more about Pandora</a>",
                Styx:"Styx is the goddess of the underworld River Styx and the eldest of the Oceanids. She is also the personification of hatred (stygos). Styx was a firm ally of Zeus in the Titan Wars, who brought her children Nike, Zelos, Bia and Kratos to stand beside the god in battle. Zeus rewarded her by making her stream the agent of oaths which bound the gods.<br><br><a href='https://www.theoi.com/Khthonios/PotamosStyx.html'>Click here to learn more about Styx</a>",
                Pallas:"Pallas is the Titan god of battle and warcraft. He fought on the opposite side of the Titan War from his wife and children. He was vanquished by the goddess Athena who crafted her aigis (a goat-hide arm-guard) from his skin.<br><br><a href='https://www.theoi.com/Titan/TitanPallas.html'>Click here to learn more about Pallas</a>",
                Nike:"Nike is the winged goddess of victory--victory both in war and in peaceful competition. After joining the Olympian's side of the Titan war, Nike and her siblings became sentinels of Zeus' throne. She was also appointed the charioteer for Zeus.<br><br><a href='https://www.theoi.com/Daimon/Nike.html'>Click here to learn more about Nike</a>",
                Zelus:"Zelus is the god and the personification of rivalry, emulation, jealousy, envy and zeal. After joining the Olympian's side of the Titan war, Nike and her siblings became sentinels of Zeus' throne<br><br><a href='https://www.theoi.com/Daimon/Zelos.html'>Click here to learn more about Zelus</a>",
                Kratos:"Kratos is the god and personification of strength, might, power and sovereign rule. After joining the Olympian's side of the Titan war, Nike and her siblings became sentinels of Zeus' throne<br><br>Kratos has gained immense popularity in recent years because he stars as the main protaganist in the Gor of War video games<br><br><a href='https://en.wikipedia.org/wiki/Kratos_(mythology)'>Click here to learn more about Kratos</a>",
                Bia:"Bia is the goddess and personification of force, power, might, bodily strength and compulsion. After joining the Olympian's side of the Titan war, Nike and her siblings became sentinels of Zeus' throne<br><br><a href='https://www.theoi.com/Daimon/Bia.html'>Click here to learn more about Bia</a>",
                Pleione:"Pleione is an Oceanid nymph and wife of the Titan Atlas and bore him a bevy of beautiful daughters: Calypso, the Hyades (sisterhood of nymphs that bring rain) and the 7 Pleiades (only Maia is included in this chart).<br><br>Pleione may have been numbered amongst the Epimelides (Sheep-Nymphs) and presided over the multiplication of the flocks--for her name means 'to increase in number' and her grandson Hermes was the god of animal husbandry.<br><br><a href='https://www.theoi.com/Nymphe/NymphePleione.html'>Click here to learn more about Pleione</a>",
                Eurynome:"Eurynome is one of the elder Oceanids and the Titan-goddess of water-meadows and pasture lands. She was the third wife of Zeus who bore him the Charites, goddesses of grace and beauty. Her name means 'She of Broad-Pastures' from the Greek words eurys 'wide' or 'broad' and nomia 'pasture.'<br><br><a href='https://www.theoi.com/Titan/TitanisEurynome.html'>Click here to learn more about Eurynome</a>",
                Methis:"Methis was an Oceanid, Titan-goddess of good counsel, planning, cunning and wisdom, and Zeus's first wife. She was a counsellor of Zeus during the Titan War and hatched the plan through which Kronos was forced to regurgitate his devoured children. In an odd reversal of fortune, Zeus swallowed Metis whole when a prophecy was revealed that she was destined to bear a son greater than his father. Metis afterwards bore a daughter, Athena, within the very belly of the god and equipped her with arms and armour before she was rebirthed from the god's head.<br><br><a href='https://www.theoi.com/Titan/TitanisMetis.html'>Click here to learn more about Methis</a>",
                Maia:"Maia is the eldest of the Pleiades, the seven nymphs of the constellation Pleiades. She was a shy goddess who dwelt alone in a cave near the peaks of Mount Cyllene in Arkadia where she secretly gave birth to the god Hermes, her son by Zeus. She also raised the boy Arcas in her cave whose mother Callisto had been transformed into a bear.<br><br><a href='https://www.theoi.com/Nymphe/NympheMaia.html'>Click here to learn more about Maia</a>",
                Leto:"Leto was a female Titan,a bride of Zeus, and the mother of the twin gods Apollo and Artemis. She was the goddess of motherhood and, with her children, a protectress of the young. Her name and iconography suggest she was also a goddess of modesty and womanly demure.<br><br>When Leto was pregant with the twins she was pursued relentlessly by the goddess Hera, who drove her from land to land preventing her from finding a place to rest and give birth. The floating island of Delos eventually provided her with refuge.<br><br><a href='https://www.theoi.com/Titan/TitanisLeto.html'>Click here to learn more about Leto</a>",
                Asteria:"Asteria was the Titan goddess of falling stars and nighttime divinations such as oneiromancy (by dreams) and astrology (by stars). She was the mother of Hecate, goddess of witchcraft, by the Titan Perses.<br><br>After the fall of the Titans, Zeus chased Asteria across the sky but she escaped him by transforming herself into a quail and leaping into the sea to became the island of Delos. Her sister Leto later gave birth to Apollon on the isle.<br><br><a href='https://www.theoi.com/Titan/TitanisAsteria.html'>Click here to learn more about Asteria</a>",
                Thetis:"Thetis is a goddess of the sea and the leader of the fifty Nereides. Like many other sea gods she possessed the gift of prophesy and power to change her shape at will.<br><br>Because of a prophesy that she was destined to bear a son greater than his father, Zeus had her marry a mortal man. Peleus, the chosen groom, was instructed to ambush her on the beach, and not release his grasp of the struggling goddess as she metamorphosed into a host of shapes. The couple were afterwards married in a ceremony attended by all the gods of heaven. She bore a son, the celebrated hero Achilles.<br><br><a href='https://www.theoi.com/Pontios/NereisThetis.html'>Click here to learn more about Thetis</a>",
                Peleus:"Peleus was a hero, king of Phthia, husband of Thetis and the father of their son Achilles. Peleus and his brother Telamon were friends of Heracles, and served in Heracles' expedition against the Amazons, his war against King Laomedon, and his quest for the Golden Fleece alongside Jason and the Argonauts.<br><br><a href='https://en.wikipedia.org/wiki/Peleus'>Click here to learn more about Peleus</a>",
                Achilles:"Achilles was a hero of the Trojan War, the greatest of all Greek Warriors, where he fought in the army of Argamemnon. He was trained by Charon, the wisest centaur.<br><br>He famously had 1 weakness, his heel in which his mother, Thetis, was grabbing when she dunked him into the River Styx to make him invincicble. He died when Paris, Prince of Troy, shot him through the heel with an arrow.<br><br><a href='https://en.wikipedia.org/wiki/Achilles'>Click here to learn more about Achilles</a>",
                Theseus:"Theseus was a Greek hero and the mythological founder of Athens. Like many other Greek heros, Theseus when on a lot of epic adventures. Some of his more include: capturing the Marathonian Bull and evading Medea's attempts to kill him. <br><br> His most famous story is of killing the Minotaur. Theseus set sail to Crete as apart of an agreement Athens had with Crete. Unknown to the Athenians, this was part of a yearly sacrifice to the cannabalistic Minotaur, There he is goes into the Labryinth, a giant maze built by the great inventor  Daedalus. He is only able to find his way out because the Cretean Princess Ariadne fell in love with him and gave him a ball of twine to find his way back out again. After defeating the Minotaur, Theseus sails home and strands Princess Ariadne on an island<br><br><a href='https://en.wikipedia.org/wiki/Theseus'>Click here to learn more about Theseus</a>",
                Perseus:"Perseus was the son of the Argive princess Danae who was locked away in a bronze chamber by her father Acrisius who lived in fear of a prophecy that he would one day be killed by her son. The god Zeus, however, infiltrated her prison in the guise of a golden shower and impreganted her.<br><br>When Perseus grew up King Polydektes commanded him to fetch the head of Medusa. With the help of the gods, Perseus obtained winged sandals, an invisible helm and a magical sword. He then sought out the ancient Graeae and stealing their single eye compelled them to reveal the location of the Gorgones. Perseus approached Medousa as she slept and beheaded her with eyes averted to avoid her petrifying visage.<br><br>On his journey back to Greece, Perseus came across the Ethiopian princess Andromeda chained to a rock as a sacrifice to a sea-monster. He slew the beast and brought her with him back to Greece as his bride.<br><br>Upon reaching Seriphos, the hero turned King Polydektes to stone, and then travelled on to his grandfather's kingdom to claim the throne. Perseus was the ancestor of the royal houses of Mycenae. His most famous descendant was Heracles.<br><br><a href='https://www.theoi.com/Heros/Perseus.html'>Click here to learn more about Perseus</a>",
                Heracles:"Heracles was a greek hero who was famous for being commanded by the Delphic Oracle to perform twelve labors for King Eurystheus of Mycenae. He was a great-grandson and half-brother (as they are both sired by the god Zeus) of Perseus. He was considered the greatest of the Greek heroes, a paragon of masculinity, and a champion of the Olympian order against chthonic monsters.<br><br>It was well-known that Hera hated his guts, as he was the bastard child of her unfaithful husband Zeus. Hera made Heracles difficult from birth and eventually was the one who drove him mad, which made him kill his sons, which is why he had to complete the 12 labors.<br><br>His 12 labors include:<ol><li>Slay the Nemean Lion</li><li>Slay the nine-headed Lernaean Hydra</li><li>Capture the Golden Hind of Artemis</li><li>Capture the Erymanthian Boar</li><li> Clean the Augean stables in a single day</li><li>Slay the Stymphalian Birds</li><li>Capture the Cretan Bull</li><li>Steal the Mares of Diomedes</li><li>Obtain the girdle of Hippolyta, Queen of the Amazons</li><li>Obtain the cattle of the monster Geryon</li><li>Steal the golden apples of the Hesperides</li><li>Capture and bring back Cerberus</li></ol><br><a href='https://en.wikipedia.org/wiki/Heracles#Birth_and_childhood'>Click here to learn more about Heracles</a>",
                Helen:"Helen was the queen of Sparta abducted by Paris of Troy, which started the Trojan War. She was said to have been the most beautiful woman in the world. She was married to King Menelaus of Sparta and had one daugther, Hermione.<br><br><a href='https://en.wikipedia.org/wiki/Helen_of_Troy'>Click here to learn more about Helen</a>",
                Minos:"Minos was a King of the island of Crete. Every nine years, he made King Aegeus pick seven young boys and seven young girls to be sent to Daedalus's creation, the labyrinth, to be eaten by the Minotaur. After death he was appointed as a Judge of the Dead in the Underworld, alongside Aeacus and Rhadamanthys.<br><br><a href='https://en.wikipedia.org/wiki/Minos'>Click here to learn more about Minos</a>",
                Pasiphae:"Pasiphae was an immortal daughter of the sun-god Helio sand Queen of Crete, the wife of King Minos. She fell in love with a bull and by means of a wooden cow, coupled with it and gave birth to the Minotaur. Like her siblings, Aeetes and Circe, she was a skilled practitioner of witchcraft<br><br>Pasiphae's husband King Minos also proved unfaithful. When she learned of his indiscretions she bewitched him, causing him to ejaculate poisoned creatures and destroy his lovers. Pasiphae herself, being an immortal, was alone immune to the spell.<br><br><a href='https://www.theoi.com/Titan/Pasiphae.html'>Click here to learn more about Pasiphae</a>",
                Dionysus:"Dionysus was the Olympian god of wine, vegetation, pleasure, festivity, madness and wild frenzy. Dionysos was a son of Zeus and the princess Semele of Thebes. During the course of her pregnancy, the god's jealous wife Hera tricked Semele into asking Zeus to appear before her in his full glory. Bound by oath, the god was forced to comply and she was consumed by the heat of his lightning-bolts. Zeus recovered their unborn child from her body, sewed him up in his own thigh, and carried him to term. Dionysos married princess Ariadne of Crete whom he discovered abandoned by Theseus on the island of Naxos.<br><br><a href='https://www.theoi.com/Olympios/Dionysos.html'>Click here to learn more about Dionysus</a>",
                Ariadne:"Ariadne was a princess of Crete, who was helped Theseus kill her brother, the Minotaur, in the Labryinth. She was laterabandoned by Theseus on the island of Naxos, where the god Dionysos discovered her and married her. Ariadne was brought Olympus as the immortal spouse of the god.<br><br><a href='https://www.theoi.com/Georgikos/Ariadne.html'>Click here to learn more about Ariadne</a>",
                Tyche:"Tyche was the goddess of fortune, chance, providence and fate. She is depicted with a variety of symbols: with a rudder--for guiding and conducting the affairs of the world, with a ball--for the varying unsteadiness of fortune, or with the cornucopia--the symbol of the plentiful gifts of fortune.<br><br>She is depicted as the companion of Nemesis, goddess of retribution, who keeps her in check from dispensing too much good fortune<br><br><a href='https://www.theoi.com/Daimon/Tykhe.html'>Click here to learn more about Tyche</a>",
                Perse:"Perseis was an Oceanid nymph consort of sun god, Helios. She bore him four children--the witches Circe  and Pasiphae and magician-kings Aeetes and Perses (Not included on this chart)<br><br>Aeetes was the king of Colchis, at the eastern end of the Black Sea, and Perses the ruler of the nearby kingdom of Persia. Perses was succeeded on the throne by his niece, the witch Medea, for whom the country was renamed Media. She was regarded as the ancestress of the Median royal family and probably as the founder of the order of the Magoi--the royal magicians.<br><br><a href='https://www.theoi.com/Nymphe/NymphePerseis.html'>Click here to learn more about Perseis</a>",
                Circe:"Circe was a goddess of sorcery who was skilled in the magic of transmutation, illusion, and necromancy. Circe was renowned for her vast knowledge of potions and herbs. She lived on the mythical island of Aiaia with her nymph companions. She is famous for turning Odysseus's, a descendent of Hermes, men into pigs. He manages to persuade her to return them to human shape, lives with her for a year and they have a number sons, including Latinus and Telegonus.<br><br><a href='https://www.theoi.com/Titan/Kirke.html'>Click here to learn more about Circe</a>",
                Minotaur:"The Minotaur was a bull-headed monster born to Queen Pasiphae of Crete after she fucked a bull.The creature resided in the twisting maze of the labyrinth where it was offfered a regular sacrifice of youths and maidens to satisfy its cannibalistic hunger. The beast was eventually slain by the hero Theseus.<br><br><a href='https://www.theoi.com/Ther/Minotauros.html'>Click here to learn more about Minotaur</a>",
                Perses:"Perses was the Titan god of destruction. He is used known to be the father of Hecate, honoured by Zeus above all others as the goddess of magic, crossroads, and witchcraft.<br><br><a href='https://www.theoi.com/Titan/TitanPerses.html'>Click here to learn more about Perses</a>"
             };

//************make a shit ton of gods************//

//level 1 god
let Chaos = new God("Chaos",centers.small,margins.top,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Chaos,description.Chaos);

let level2 = Chaos.y+smallCard.height+50;

//level 2 gods
let Gaia = new God("Gaia",centers.large,level2,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth,domain.Gaia,description.Gaia);
let Tartarus = new God("Tartarus",Gaia.x-(cardSpace*2),level2,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld,domain.Tartarus,description.Tartarus);
let ErosElder = new God("Eros-Elder",Tartarus.x-cardSpace*2,level2,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.ErosElder,description.ErosElder);
let Erebus = new God("Erebus",Gaia.x+(cardSpace*2),level2,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld,domain.Erebus,description.Erebus);
let Nyx = new God("Nyx",Erebus.x+cardSpace*2,level2,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld,domain.Nyx,description.Nyx);

let level3 = Gaia.y+cardAbove;

//level 3 gods
let Uranus = new God("Uranus",centers.large,level3,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky,domain.Uranus,description.Uranus);
let Ourea = new God("Ourea",centers.regular-cardSpace-40,level3,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.earth,domain.Ourea,description.Ourea);
let Pontus = new God("Pontus",centers.regular+cardSpace+20,level3,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water,domain.Pontus,description.Pontus);
let Aether = new God("Aether",Erebus.x+smallCardBetween,level3,null,smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Aether,description.Aether);
let Hemera = new God("Hemera",Aether.x+cardSpace,level3,null,smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Hemera,description.Hemera);
let Thalassa = new God("Thalassa",(Aether.x+Hemera.x)/2,Aether.y+smallCard.height+betweenCards*3,null,smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Thalassa,description.Thalassa);
let Charon = new God("Charon",Hemera.x+cardSpace,level3,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld,domain.Charon,description.Charon);
let Moros = new God("Moros",Charon.x+cardSpace*2,level3-cardSpace,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Moros,description.Moros);
let Keres = new God("Keres",Charon.x+cardSpace*2,Moros.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Keres,description.Keres);
let Thanatos = new God("Thanatos",Charon.x+cardSpace*2,Keres.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Thanatos,description.Thanatos);
let Hypnos = new God("Hypnos",Charon.x+cardSpace*2,Thanatos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Hypnos,description.Hypnos);
let Oneriroi = new God("Oneriroi",Charon.x+cardSpace*2,Hypnos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Oneriroi,description.Oneriroi);
let Momus = new God("Momus",Moros.x+cardSpace,level3-cardSpace,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Momus,description.Momus);
let Geras = new God("Geras",Moros.x+cardSpace,Moros.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Geras,description.Geras);
let Oizys = new God("Oizys",Moros.x+cardSpace,Keres.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Oizys,description.Oizys);
let Nemesis = new God("Nemesis",Moros.x+cardSpace,Thanatos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Nemesis,description.Nemesis);
let Philotes = new God("Philotes",Moros.x+cardSpace,Hypnos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Philotes,description.Philotes);
let Apate = new God("Apate",Momus.x+cardSpace,level3-cardSpace,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Apate,description.Apate);
let Eris = new God("Eris",Momus.x+cardSpace,Moros.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Eris,description.Eris);
let Hesperides = new God("Hesperides",Momus.x+cardSpace,Keres.y+smallCard.height+betweenCards,null,smallCard.width*2,smallCard.height,smallCard.type,godType.earth,domain.Hesperides,description.Hesperides);

let level4 = Uranus.y+(cardAbove);
let level5 = Uranus.y+2*(cardAbove);

//level 4
let Typhon = new God("Typhon",ErosElder.x-cardSpace*2,level3+smallCard.height,null,smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Typhon,description.Typhon);
let Echidna = new God("Echidna",Typhon.x+cardSpace,level3+smallCard.height,null,smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Echidna,description.Echidna);
let Colchian = new God("Colchian-Dragon",(Typhon.x+Echidna.x)/2-cardSpace/2,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Colchian,description.Colchian);
let Chimera = new God("Chimera",(Typhon.x+Echidna.x)/2+cardSpace/2,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Chimera,description.Chimera);
let Hydra = new God("Hydra",Chimera.x+cardSpace,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Hydra,description.Hydra);
let Sphinx = new God("Sphinx",Hydra.x+cardSpace,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Sphinx,description.Sphinx);
let Cerebus = new God("Cerebus",Colchian.x-cardSpace,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld,domain.Cerebus,description.Cerebus);
let Orthrus = new God("Orthrus",Cerebus.x-cardSpace,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Orthrus,description.Orthrus);
let Cyclops = new God("Cyclops",centers.large-20,level3+cardAbove,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Cyclops,description.Cyclops);
let Hecatoncheires = new God("Hecatoncheires",centers.large-20,Cyclops.y+smallCard.height+betweenCards,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Hecatoncheires,description.Hecatoncheires);
let Giantes = new God("Giantes",Cyclops.x+smallCard.width+betweenCards+20,level3+cardAbove,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Giantes,description.Giantes);
let Erinyes = new God("Erinyes",Cyclops.x+smallCard.width+betweenCards+20,Giantes.y+smallCard.height+betweenCards,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Erinyes,description.Erinyes);
let Meliae = new God("Meliaes",Cyclops.x+smallCard.width+betweenCards+20,Erinyes.y+smallCard.height+betweenCards,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.earth,domain.Meliae,description.Meliae);
let Iris = new God("Iris",Aether.x,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Iris,description.Iris);
let Harpies = new God("Harpies",Iris.x+cardSpace,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Harpies,description.Harpies);
let Gorgons = new God("Gorgons",Harpies.x+cardSpace,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Gorgons,description.Gorgons);
let Graeae = new God("Graeae",Gorgons.x+cardSpace,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Graeae,description.Graeae);
let Thamus = new God("Thamus",Thalassa.x,level3+cardTopSpace+60,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Thamus,description.Thamus);
let Phorcys = new God("Phorcys",Gorgons.x,level3+cardTopSpace+60,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Phorcys,description.Phorcys);
let Ceto = new God("Ceto",Graeae.x,level3+cardTopSpace+60,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Ceto,description.Ceto);
let Scylla = new God("Scylla",Graeae.x+cardSpace,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Scylla,description.Scylla);

//level 5 gods
let Kronos = new God("Kronos",(centers.large-cardWidth/2)-cardSpace/2,level5,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth,domain.Kronos,description.Kronos);
let Rhea = new God("Rhea",(centers.large+cardWidth/2)+cardSpace/2,level5,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth,domain.Rhea,description.Rhea);
let Eurybia = new God("Eurybia",Kronos.x-cardSpace,level5,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Eurybia,description.Eurybia);
let Crius = new God("Crius",Eurybia.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Crius,description.Crius);
let Theia = new God("Theia",Crius.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Theia,description.Theia);
let Hyperion = new God("Hyperion",Theia.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Hyperion,description.Hyperion);
let Tethys = new God("Tethys",Hyperion.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water,domain.Tethys,description.Tethys);
let Oceanus = new God("Oceanus",Tethys.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water,domain.Oceanus,description.Oceanus);
let Themis = new God("Themis",Rhea.x+cardSpace*2,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Themis,description.Themis);
let Asia = new God("Asia",Themis.x+cardSpace,level5,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Asia,description.Asia);
let Iapetus = new God("Iapetus",Asia.x+cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Iapetus,description.Iapetus);
let Mnemosyne = new God("Mnemosyne",Iapetus.x+cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Mnmosyne,description.Mnmosyne);
let Coeus = new God("Coeus",Mnemosyne.x+cardSpace*2,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Coeus,description.Coeus);
let Phoebe = new God("Phoebe",Coeus.x+cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Phoebe,description.Phoebe);

let level6 = Kronos.y+1.5*cardTopSpace;
let level6A = Kronos.y+1.25*cardAbove;
let level7 = level6+1.25*cardAbove;
let level7A = level7+cardAbove;

//level 6 gods

let Nereus = new God("Nereus",Oceanus.x-cardSpace*2,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water,domain.Nereus,description.Nereus);
let Doris = new God("Doris",Nereus.x+cardSpace,level6+largeCard.height/2,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Doris,description.Doris);
let Helios = new God("Helios",Hyperion.x,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Helios,description.Helios);
let Selene = new God("Selene",Helios.x+cardSpace,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Selene,description.Selene);
let Eos = new God("Eos",Selene.x+cardSpace,level6,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Eos,description.Eos);
let Astraeus = new God("Astraeus",Eos.x+cardSpace,level6,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Astraeus,description.Astraeus);
let Anemoi = new God("Anemoi",Selene.x+cardSpace,level6+cardSpaceSmall,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Anemoi,description.Anemoi);
let Astra = new God("Astra Planeta",Anemoi.x+cardSpace,level6+cardSpaceSmall,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Astra,description.Astra);
let Atlas = new God("Atlas",(Asia.x+Iapetus.x)/2+betweenCards,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Atlas,description.Atlas);
let Prometheus = new God("Prometheus",Atlas.x+cardSpace,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Prometheus,description.Prometheus);
let Epimetheus = new God("Epimetheus",Prometheus.x+cardSpace,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Epimetheus,description.Epimetheus);
let Pandora = new God("Pandora",Epimetheus.x+cardSpace,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Pandora,description.Pandora);
let Pleione = new God("Pleione",Atlas.x-cardSpace,level6,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Pleione,description.Pleione);
let Tyche = new God("Tyche",Doris.x+cardSpaceSmall-40,level6A,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Tyche,description.Tyche);
let Perse = new God("Perseis",Tyche.x+cardSpaceSmall-40,level6A+60,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Perse,description.Perse);
let Pallas = new God("Pallas",Astraeus.x+60,level6A+80,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Pallas,description.Pallas);
let Styx = new God("Styx",Anemoi.x,level6A+80,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Styx,description.Styx);
let Perses = new God("Perses",Pallas.x+smallCard.width+20,level6+cardSpaceSmall,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Perses,description.Perses);

//level 7 gods
let Zeus = new God("Zeus",(centers.large-cardWidth/2)-cardSpace/2,level7,"img/Zeus.png",largeCard.width,largeCard.height,largeCard.type,godType.sky,domain.Zeus,description.Zeus);
let Hera = new God("Hera",(centers.large+cardWidth/2)+cardSpace/2,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky,domain.Hera,description.Hera);
let Hades = new God("Hades",Hera.x+cardSpace*2.5,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.underworld,domain.Hades,description.Hades);
let Hestia = new God("Hestia",Hades.x+cardSpace*2.5,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification,domain.Hestia,description.Hestia);
let Demeter = new God("Demeter",Zeus.x-cardSpace*2.5,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth,domain.Demeter,description.Demeter);
let Poseidon = new God("Poseidon",Demeter.x-cardSpace*2.5,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.water,domain.Poseidon,description.Poseidon);
let Amphitrite = new God("Amphitrite",Nereus.x+regularCard.width/2,level7,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water,domain.Amphitrite,description.Amphitrite);

//level 7A
let Kratos = new God("Kratos",(Styx.x+Pallas.x)/2,level7,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Kratos,description.Kratos);
let Nike = new God("Nike",(Styx.x+Pallas.x)/2,Kratos.y+cardSpaceSmallHeight,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Nike,description.Nike);
let Zelus = new God("Zelus",(Styx.x+Pallas.x)/2,Nike.y+cardSpaceSmallHeight,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Zelus,description.Zelus);
let Bia = new God("Bia",(Styx.x+Pallas.x)/2,Zelus.y+cardSpaceSmallHeight,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Bia,description.Bia);
let Eurynome = new God("Eurynome",Poseidon.x+largeCard.width/2+cardSpaceSmall,level7A,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Eurynome,description.Eurynome);
let Methis = new God("Methis",Eurynome.x+cardSpaceSmall,level7A-cardSpace,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Methis,description.Methis);
let Maia = new God("Maia",(Hades.x+Hestia.x)/2-smallCard.width/2,level7A,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Maia,description.Maia);
let Leto = new God("Leto",Hestia.x+cardSpace,level7A,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Leto,description.Leto);
let Asteria = new God("Asteria",Leto.x+cardSpace,level7A,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Asteria,description.Asteria);

let level8 = Zeus.y+cardAbove*1.5;

//level 8 gods
let Ares = new God("Ares",(centers.large)+cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification,domain.Ares,description.Ares);
let Aphrodite = new God("Aphrodite",Ares.x+cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification,domain.Aphrodite,description.Aphrodite);
let Hephaestus = new God("Hephaestus",Ares.x-cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification,domain.Hephaestus,description.Hephaestus);
let Hebe = new God("Hebe",Hephaestus.x-cardSpace,level8,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Hebe,description.Hebe);
let Athena = new God("Athena",Hebe.x-cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification,domain.Athena,description.Athena);
let Triton = new God("Triton",(Poseidon.x+Amphitrite.x)/2,level8,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water,domain.Triton,description.Triton);
let Adonis = new God("Adonis",Aphrodite.x+cardSpace,level8,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Adonis,description.Adonis);
let Hermes = new God("Hermes",Adonis.x+cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky,domain.Hermes,description.Hermes);
let Apollo = new God("Apollo",Hermes.x+cardSpace*1.5,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky,domain.Apollo,description.Apollo);
let Artemis = new God("Artemis",Apollo.x+cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth,domain.Artemis,description.Artemis);

let level9 = Aphrodite.y+cardAbove;

//level 9
let Ganymede = new God("Ganymede",Poseidon.x+largeCard.width,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Ganymede,description.Ganymede);
let Persephone = new God("Persephone",Ganymede.x+cardSpace*1.5,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld,domain.Persephone,description.Persephone);
let Charities = new God("Charitites",Persephone.x+cardSpace*1.5,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Charities,description.Charities);
let Dike = new God("Dike",Charities.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Dike,description.Dike);
let Eunomia = new God("Eunomia",Dike.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Eunomia,description.Eunomia);
let Eirene = new God("Eirene",Eunomia.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Eirene,description.Eirene);
let Moirai = new God("Moirai",Eirene.x+cardSpace,level9,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Moirai,description.Moirai);
let Eros = new God("Eros",Moirai.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Eros,description.Eros);
let Psyche = new God("Psyche",Eros.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Psyche,description.Psyche);
let Hermaphrodites = new God("Hermaphrodites",Psyche.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Hermaphodites,description.Hermaphodites);
let muses = new God("Muses",Hermaphrodites.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.muses,description.muses);
let Hecate = new God("Hecate",muses.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Hecate,description.Hecate);
let Thetis = new God("Thetis",Amphitrite.x-cardSpace,level9,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Thetis,description.Thetis);
let Peleus = new God("Peleus",Thetis.x+cardSpace,level9,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.mortal,domain.Peleus,description.Peleus);

let level10 = Persephone.y+cardAbove;

let Achilles = new God("Achilles",(Thetis.x+Peleus.x)/2+smallCard.width/2,level10,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Achilles,description.Achilles);
let Theseus = new God("Theseus",Achilles.x+cardSpace,level10,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Theseus,description.Theseus);
let Perseus = new God("Perseus",Theseus.x+cardSpace,level10,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Perseus,description.Perseus);
let Heracles = new God("Heracles",Perseus.x+cardSpace,level10,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Heracles,description.Heracles);
let Helen = new God("Helen",Heracles.x+cardSpace,level10,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Helen,description.Helen);
let Minos = new God("Minos",Helen.x+cardSpace,level10,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Minos,description.Minos);
let Pasiphae = new God("Pasiphae",Minos.x+cardSpace,level10,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water,domain.Pasiphae,description.Pasiphae);
let Circe = new God("Circe",Pasiphae.x+cardSpace,level10,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water,domain.Circe,description.Circe);

let level11 = Circe.y+cardAbove;

let Ariadne = new God("Ariadne",(Pasiphae.x+Minos.x)/2+regularCard.width/2,level11,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Ariadne,description.Ariadne);
let Dionysus = new God("Dionysus",Ariadne.x+cardSpace*2,level11,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.earth,domain.Dionysus,description.Dionysus);
let Minotaur = new God("Minotaur",Ariadne.x-cardSpace,level11,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Minotaur,description.Minotaur);

//push them into an array
//level 1 god
familyTree.push(Chaos);
//level 2 god
familyTree.push(Tartarus);
familyTree.push(Gaia);
familyTree.push(ErosElder);
familyTree.push(Erebus);
familyTree.push(Nyx);
//level 3 god
familyTree.push(Ourea);
familyTree.push(Uranus);
familyTree.push(Pontus);
familyTree.push(Aether);
familyTree.push(Hemera);
familyTree.push(Thalassa);
familyTree.push(Charon);
familyTree.push(Moros);
familyTree.push(Thanatos);
familyTree.push(Hypnos);
familyTree.push(Oneriroi);
familyTree.push(Momus);
familyTree.push(Geras);
familyTree.push(Oizys);
familyTree.push(Nemesis);
familyTree.push(Philotes);
familyTree.push(Apate);
familyTree.push(Eris);
familyTree.push(Keres);
familyTree.push(Hesperides);
//level 4
familyTree.push(Typhon);
familyTree.push(Echidna);
familyTree.push(Colchian);
familyTree.push(Chimera);
familyTree.push(Hydra);
familyTree.push(Sphinx);
familyTree.push(Cerebus);
familyTree.push(Orthrus);
familyTree.push(Cyclops);
familyTree.push(Hecatoncheires);
familyTree.push(Giantes);
familyTree.push(Erinyes);
familyTree.push(Meliae);
familyTree.push(Iris);
familyTree.push(Harpies);
familyTree.push(Gorgons);
familyTree.push(Graeae);
familyTree.push(Thamus);
familyTree.push(Phorcys);
familyTree.push(Ceto);
familyTree.push(Scylla);
//level 5
familyTree.push(Kronos);
familyTree.push(Rhea);
familyTree.push(Crius);
familyTree.push(Theia);
familyTree.push(Hyperion);
familyTree.push(Tethys);
familyTree.push(Oceanus);
familyTree.push(Themis);
familyTree.push(Iapetus);
familyTree.push(Mnemosyne);
familyTree.push(Coeus);
familyTree.push(Phoebe);
familyTree.push(Eurybia);
familyTree.push(Asia);
//level 6
familyTree.push(Nereus);
familyTree.push(Doris);
familyTree.push(Helios);
familyTree.push(Selene);
familyTree.push(Eos);
familyTree.push(Astraeus);
familyTree.push(Anemoi);
familyTree.push(Astra);
familyTree.push(Atlas);
familyTree.push(Prometheus);
familyTree.push(Epimetheus);
familyTree.push(Pandora);
familyTree.push(Pleione);
familyTree.push(Tyche);
familyTree.push(Perse);
familyTree.push(Styx);
familyTree.push(Pallas);
familyTree.push(Perses);
//level 7
familyTree.push(Zeus);
familyTree.push(Hera);
familyTree.push(Hades);
familyTree.push(Hestia);
familyTree.push(Demeter);
familyTree.push(Poseidon);
//level 7A
familyTree.push(Amphitrite);
familyTree.push(Nike);
familyTree.push(Kratos);
familyTree.push(Zelus);
familyTree.push(Bia);
familyTree.push(Eurynome);
familyTree.push(Methis);
familyTree.push(Maia);
familyTree.push(Leto);
familyTree.push(Asteria);
//level 8
familyTree.push(Aphrodite);
familyTree.push(Hephaestus);
familyTree.push(Ares);
familyTree.push(Hebe);
familyTree.push(Athena);
familyTree.push(Triton);
familyTree.push(Adonis);
familyTree.push(Hermes);
familyTree.push(Apollo);
familyTree.push(Artemis);
//level 9
familyTree.push(Ganymede);
familyTree.push(Persephone);
familyTree.push(Charities);
familyTree.push(Dike);
familyTree.push(Eunomia);
familyTree.push(Eirene);
familyTree.push(Moirai);
familyTree.push(Eros);
familyTree.push(Psyche);
familyTree.push(Hermaphrodites);
familyTree.push(muses);
familyTree.push(Hecate);
familyTree.push(Thetis);
familyTree.push(Peleus);
//level10
familyTree.push(Achilles);
familyTree.push(Theseus);
familyTree.push(Perseus);
familyTree.push(Heracles);
familyTree.push(Helen);
familyTree.push(Minos);
familyTree.push(Pasiphae);
familyTree.push(Circe);
//level 11
familyTree.push(Dionysus);
familyTree.push(Ariadne);
familyTree.push(Minotaur);

//Zoom functions (NOT MINE, FROM: https://observablehq.com/@d3/zoom)
function zoomed({transform}) {
    tree.attr("transform", transform);
}

//function dragging() {
//    tree.attr("cursor", "grabbing");
//    console.log("dragging");
//}

function createTree(treeWidth,treeHeight){
    tree = d3.select("#familyTree").append("svg")
             .attr("viewBox", [0, 0, treeWidth, treeHeight*1.5])
             .attr("preserveAspectRatio", "xMidYMid meet")
             .attr("cursor", "grab")
             .call(d3.zoom() //zoom interaction
                .extent([[0, 0], [width, height]])
                .scaleExtent([0, 9])
                .on("zoom", zoomed))
             .append("g");
}

function redraw(){
       
    width = window.innerWidth;
    height = window.innerHeight;
    document.getElementById('familyTree').innerHTML = ''
    createTree(width,height);
    makeConnections();
    makeCards();
    
}

//************Functions to make paths************//

function pathMaker(pathType,source,target,name,union,id,marginX,down){
  let line = tree.append("path")
                  .attr("class",name+" "+union)
                  .attr("id",id)
                  .attr("d",pathType(source,target,marginX,down));
    linkIDs.push(id);
    if(pathType === singleParent){
        source.childLink.add(id);
        source.children.push(target.greekName);
        source.childRect.add(target.rectID);
    }
    if(pathType === singleParent2){
        source.childLink.add(id);
        source.children.push(target.greekName);
        source.childRect.add(target.rectID);
    }
    if(pathType === singleParent3){
        source.childLink.add(id);
        source.children.push(target.greekName);
        source.childRect.add(target.rectID);
    }
    if(pathType === spousePath){
        source.spouse.push(id);
        target.spouse.push(id);
    }
//    if(pathType === spouseIncest){
//        source.spouse.push(id);
//        target.spouse.push(id);
//    }
   return line;
}

function zeusKids(source,target,name,id,marginX,down,side,down2){
  let line = tree.append("path")
                  .attr("class",name+" child")
                  .attr("id",id)
                  .attr("d",singleParent4(source,target,marginX,down,side,down2));
    linkIDs.push(id);
    source.childLink.add(id);
    source.children.push(target.greekName);
    source.childRect.add(target.rectID);
   return line;
}

function incestSpouse(source,target,name,id,marginX,down1,side,down2){
  let line = tree.append("path")
                  .attr("class",name+" spouse")
                  .attr("id",id)
                  .attr("d",spouseIncest(source,target,marginX,down1,side,down2));
        linkIDs.push(id);
        source.spouse.push(id);
        target.spouse.push(id);
   return line;
}

function familyMaker(familyType,wife,husband,child,marginX,down1,down2,name,id){
  let line = tree.append("path")
                  .attr("class",name+" child")
                  .attr("id",id)
                  .attr("d",familyType(wife,husband,child,marginX,down1,down2));
    linkIDs.push(id);
    wife.childLink.add(id);
    wife.children.push(child.greekName);
    wife.childRect.add(child.rectID);
    husband.childLink.add(id);
    husband.children.push(child.greekName);
    husband.childRect.add(child.rectID);
    return line;
}

//Only 1 parent
function singleParent(source,target,marginX,down){
    return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down+
            "H"+(target.x+target.width/2)+
            "V"+target.y
}

function singleParent2(source,target,marginX,side){
    return  "M"+(source.x+marginX+source.width)+","+(source.y+source.height/2)+
            "h"+side+
            "V"+(target.y+target.height/2)+
            "H"+target.x
}

function singleParent3(source,target,marginX,down){
    return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height/2)+
            "V"+(target.y+target.height/2)+
            "H"+target.x
}

function singleParent4(source,target,marginX,down,side,down2){
    return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down+
            "h"+side+
            "v"+down2+
            "H"+(target.x+target.width/2)+
            "V"+target.y
}

//Spouse path function
function spousePath(source,target,marginX,down){
     return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down+
            "H"+(target.x+target.width/2)+
            "V"+(target.y+target.height)
}

//Spouse path function
function spouseIncest(source,target,marginX,down1,side,down2){
     return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down1+
            "H"+(target.x-side)+
            "V"+(target.y+target.height+down2)+
            "H"+(target.x+target.width/2)+
            "V"+(target.y+target.height)
}

//2 parents to top of child
function parentsChild(wife,husband,child,marginX,down1,down2){
    var lowerCard = (wife.y+wife.height > husband.y+husband.height) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "v"+down2+
            "H"+(child.x+child.width/2)+
            "V"+(child.y)
}

//bottom parents to side of child - down and side
function parentsChild2(wife,husband,child,marginX,down1,down2){
    var lowerCard = (wife.y+wife.height > husband.y+husband.height) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "V"+(child.y+child.height/2)+
            "H"+child.x
}

//bottom parents to side of child - down, side, vertical, side
function parentsChild3(wife,husband,child,marginX,down1,down2){
    var lowerCard = (wife.y+wife.height > husband.y+husband.height) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "v"+down2+
            "H"+(child.x-marginX)+
            "V"+(child.y+child.height/2)+
            "H"+(child.x)
}

//bottom parents to side of child - down, side, vertical, side
function parentsChild4(wife,husband,child,marginX,down1,down2,bar,side,up,side2){
    var lowerCard = (wife.y+wife.height > husband.y+husband.height) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "v"+down2+
            "h"+bar+
            "v"+down2+
            "H"+(child.x-side)+
            "V"+(child.y-up)+
            "H"+(child.x-side2)+
            "V"+(child.y+child.height/2)+
            "H"+(child.x)
}

function familyMaker6lines(wife,husband,child,marginX,down1,down2,bar,side,up,side2,name,id){
  let line = tree.append("path")
                  .attr("class",name+" child")
                  .attr("id",id)
                  .attr("d",parentsChild4(wife,husband,child,marginX,down1,down2,bar,side,up,side2));
    linkIDs.push(id);
    wife.childLink.add(id);
    wife.children.push(child.greekName);
    wife.childRect.add(child.rectID);
    husband.childLink.add(id);
    husband.children.push(child.greekName);
    husband.childRect.add(child.rectID);
    return line;
}
//************ Initializing calls ************//

createTree(width,height);
makeConnections();
createCaptions();
makeCards();

//************ Make links between family members ************//

function makeConnections(){
    
    //****** make single Parent ******//
    
    //Chaos kids
    var primordials = [ErosElder,Tartarus,Gaia,Erebus,Nyx];

    for(let god of primordials){
        pathMaker(singleParent,Chaos,god,lineType.main,"child","Chaos"+god.greekName,0,20);
    }
   
    //Gaia kids
    pathMaker(singleParent,Gaia,Ourea,lineType.earth,"child","GaiaOurea",-40,25);
    pathMaker(singleParent,Gaia,Pontus,lineType.water,"child","GaiaPontus",40,25);
    pathMaker(singleParent,Gaia,Uranus,lineType.sky,"child","GaiaUra",0,25);
    
    //Nyx kids
    var NyxKids = [Moros,Keres,Thanatos,Hypnos,Oneriroi];
    
    for(let god of NyxKids){
        pathMaker(singleParent2,Nyx,god,lineType.underworld,"child","Nyx"+god.greekName,0,140);
    }
    
    var NyxKids2 = [Momus,Geras,Oizys,Nemesis,Philotes];
    
    for(let god of NyxKids2){
        pathMaker(singleParent2,Nyx,god,lineType.underworld,"child","Nyx"+god.greekName,0,300);
    }
    
    var NyxKids3 = [Apate,Eris,Hesperides];
    
    for(let god of NyxKids3){
        pathMaker(singleParent2,Nyx,god,lineType.underworld,"child","Nyx"+god.greekName,0,450);
    }
    
    //Uranus kids
    
    var UranusKids = [Giantes,Erinyes,Meliae];
    
    for(let god of UranusKids){
        pathMaker(singleParent3,Uranus,god,lineType.monster,"child","Uranus"+god.greekName,20,0);
    }
    zeusKids(Uranus,Aphrodite,lineType.personification,"UranusAphrodite",40,100,150,400);
    
    //Thamus kids
    pathMaker(singleParent,Thamus,Iris,lineType.water,"child","ThamusIris",0,20);
    pathMaker(singleParent,Thamus,Harpies,lineType.water,"child","ThamusHarpies",0,20);
    
    //Zeus kids
    var kidsZeusMortal = [Perseus,Heracles,Helen,Minos,Dionysus];
    for(let god of kidsZeusMortal){
        zeusKids(Zeus,god,lineType.mortal,"Zeus"+god.greekName,-10,240,-450,680);
    }
    
    //Poseidon kid
    pathMaker(singleParent,Poseidon,Theseus,lineType.water,"child","PoseidonTheseus",20,800);
    
    //Pasiphae
    pathMaker(singleParent,Pasiphae,Minotaur,lineType.monster,"child","AsteriaHecate",20,100);

    //****** make spouse connections ******//
    pathMaker(spousePath,Gaia,Tartarus,lineType.monster,"spouse","GaiaTar",-50,10);
    pathMaker(spousePath,Nyx,Erebus,lineType.underworld,"spouse","NyxEre",0,10);
    pathMaker(spousePath,Oceanus,Tethys,lineType.water,"spouse","OceTeth",0,20);
    pathMaker(spousePath,Hyperion,Theia,lineType.sky,"spouse","HypTheia",0,20);
    pathMaker(spousePath,Coeus,Phoebe,lineType.sky,"spouse","CoeusPhoebe",0,20);
    pathMaker(spousePath,Kronos,Rhea,lineType.main,"spouse","KroRhea",0,20);
    pathMaker(spousePath,Typhon,Echidna,lineType.monster,"spouse","TyphonEchidna",0,20);
    pathMaker(spousePath,Aether,Hemera,lineType.sky,"spouse","AetherHemera",0,20);
    pathMaker(spousePath,Pontus,Thalassa,lineType.water,"spouse","PontusThalassa",20,20);
    pathMaker(spousePath,Phorcys,Ceto,lineType.monster,"spouse","PhorcysCeto",0,20);
    pathMaker(spousePath,Crius,Eurybia,lineType.sky,"spouse","CriusEurybia",0,20);
    pathMaker(spousePath,Eos,Astraeus,lineType.sky,"spouse","EosAstraeus",0,20);
    pathMaker(spousePath,Asia,Iapetus,lineType.personification,"spouse","AsiaIapetus",0,regularCard.height-20);
    pathMaker(spousePath,Pleione,Atlas,lineType.sky,"spouse","PleioneAtlas",0,regularCard.height-20);
    pathMaker(spousePath,Epimetheus,Pandora,lineType.personification,"spouse","EpimetheusPandora",0,20);
    pathMaker(spousePath,Styx,Pallas,lineType.personification,"spouse","StyxPallas",0,20);
    pathMaker(spousePath,Perse,Helios,lineType.sky,"spouse","PerseHelios",0,20);
    pathMaker(spousePath,Nereus,Doris,lineType.water,"spouse","NereusDoris",0,20);
    pathMaker(spousePath,Poseidon,Amphitrite,lineType.water,"spouse","PoseidonAmphitrite",0,20);
    pathMaker(spousePath,Thetis,Peleus,lineType.mortal,"spouse","ThetisPeleus",0,20);
    pathMaker(spousePath,Aphrodite,Adonis,lineType.mortal,"spouse","AdonisAphrodite",20,20);
    pathMaker(spousePath,Eros,Psyche,lineType.mortal,"spouse","ErosPsyche",0,20);
    pathMaker(spousePath,Ariadne,Dionysus,lineType.earth,"spouse","AriadneDionysus",0,20);
    pathMaker(spousePath,Minos,Pasiphae,lineType.personification,"spouse","MinosPasiphae",0,20);
    
    incestSpouse(Gaia,Uranus,lineType.main,"GaiaUra2",-20,40,60,20);
    incestSpouse(Gaia,Pontus,lineType.water,"GaiaPontus",20,40,20,20);
    incestSpouse(Zeus,Themis,lineType.personification,"ZeusThemis",30,40,10,20);
    incestSpouse(Zeus,Mnemosyne,lineType.personification,"ZeusMnemosyne",20,60,70,20);
    incestSpouse(Zeus,Demeter,lineType.earth,"ZeusDemeter",-40,60,-(largeCard.width/2),0);
    incestSpouse(Zeus,Methis,lineType.water,"ZeusMethis",-30,80,-(smallCard.width/2),0);
    incestSpouse(Zeus,Eurynome,lineType.water,"ZeusEurynome",-20,210,-(smallCard.width/2),0);
    incestSpouse(Zeus,Hera,lineType.main,"ZeusHera",40,20,-(smallCard.width/2)-10,0);
    incestSpouse(Zeus,Maia,lineType.sky,"ZeusMaia",10,210,70,20);
    incestSpouse(Zeus,Leto,lineType.sky,"ZeusLeto",0,230,-(smallCard.width/2),0);
    incestSpouse(Perses,Asteria,lineType.sky,"Perses,Asteria",0,150,(smallCard.width/2)-20,20);
    incestSpouse(Hades,Persephone,lineType.underworld,"HadesPersephone",0,255,-(smallCard.width)-40,20);
    incestSpouse(Aphrodite,Ares,lineType.personification,"AresAphrodite",-20,20,-(smallCard.width),20);
    incestSpouse(Aphrodite,Hermes,lineType.personification,"AphroditeHermes",0,40,-(smallCard.width)+30,20);

    //****** make family connections ******//
    
    //Gaia and Tartarus Kids
    familyMaker(parentsChild,Gaia,Tartarus,Typhon,-(Gaia.x-Tartarus.x)/2,10,100,lineType.monster,"GaiaTartarusTyphon");
    
    familyMaker(parentsChild,Gaia,Tartarus,Echidna,-(Gaia.x-Tartarus.x)/2,10,100,lineType.monster,"GaiaTartarusEchidna");
    
    //Typhon and Echidna Kids
    var monsters = [Orthrus,Cerebus,Colchian,Chimera,Hydra,Sphinx];
    
    for (let monster of monsters){
       familyMaker(parentsChild,Typhon,Echidna,monster,-20,20,20,lineType.monster,"TyphonEchidna"+monster.greekName); 
    }

    //Gaia and Uranus kids
    var titans = [Rhea,Kronos,Crius,Theia,Hyperion,Tethys,Oceanus,Themis,Iapetus,Mnemosyne,Coeus,Phoebe];

    for(let god of titans){
        familyMaker(parentsChild,Gaia,Uranus,god,-50,20,400,lineType.main,"GaiaUranus"+god.greekName);
    }
    
    familyMaker(parentsChild2,Gaia,Uranus,Cyclops,-30,20,50,lineType.monster,"GaiaUranusCyclops");
    familyMaker(parentsChild2,Gaia,Uranus,Hecatoncheires,-30,20,50,lineType.monster,"GaiaUranusHecatonc");
    
    //Kronos and Rhea kids
    var olympians = [Zeus,Hera,Demeter,Poseidon,Hades,Hestia];

    for(let god of olympians){
        familyMaker(parentsChild,Kronos,Rhea,god,-30,20,380,lineType.main,"RheaKronos"+god.greekName);
    }
    
    //Erebus and Nyx Kids
    familyMaker(parentsChild,Erebus,Nyx,Aether,((Erebus.x+regularCard.width)-Nyx.x)/2-40,10,40,lineType.underworld,"NyxErebusAether");
    
    familyMaker(parentsChild,Erebus,Nyx,Hemera,((Erebus.x+regularCard.width)-Nyx.x)/2-40,10,40,lineType.underworld,"NyxErebusHemera");
    
    familyMaker(parentsChild,Erebus,Nyx,Charon,((Erebus.x+regularCard.width)-Nyx.x)/2+40,10,40,lineType.underworld,"NyxErebusCharon");
    
    //Aether and Hemera
    familyMaker(parentsChild,Aether,Hemera,Thalassa,((Aether.x+smallCard.width)-Hemera.x)/2,20,40,lineType.sky,"AetherHemeraThalassa");
    
    //Pontus and Gaia Kids
    var oceanKids1 = [Thamus,Phorcys,Ceto];
    for(let god of oceanKids1){
        familyMaker(parentsChild,Gaia,Pontus,god,20,20,20,lineType.water,"GaiaPontus"+god.greekName);
    }
    familyMaker(parentsChild,Gaia,Pontus,Eurybia,100,40,420,lineType.water,"GaiaPontusEurybia");
    familyMaker(parentsChild,Gaia,Pontus,Nereus,60,40,380,lineType.water,"GaiaPontusNereus");
    
    //Phorcys and Ceto
    var PhorcycsCetoKids = [Gorgons,Graeae,Scylla];
    for(let god of PhorcycsCetoKids){
        familyMaker(parentsChild,Phorcys,Ceto,god,-30,20,20,lineType.monster,"PhorcysCeto"+god.greekName);
    }
    
    //Oceanus and Tethys Kids
    var oceanids = [Doris,Tyche,Perse];
    for(let god of oceanids){
        familyMaker(parentsChild,Oceanus,Tethys,god,-20,20,120,lineType.water,"OceanusTethys"+god.greekName);
    }
    familyMaker(parentsChild,Oceanus,Tethys,Eurynome,-40,140,250,lineType.water,"OceanusTethysEurynome");
    familyMaker(parentsChild,Oceanus,Tethys,Styx,20,140,160,lineType.water,"OceanusTethysStyx");
    familyMaker(parentsChild,Oceanus,Tethys,Methis,0,140,200,lineType.water,"OceanusTethysMethis");
    familyMaker(parentsChild3,Oceanus,Tethys,Pleione,40,140,140,lineType.water,"OceanusTethysPleione");
    
    familyMaker6lines(Oceanus,Tethys,Asia,-20,20,120,100,120,-180,20,lineType.water,"OceanusTethysAsia")
    
    //Hyperion and Theia kids
    var skyKids = [Helios,Selene,Eos];
    for(let god of skyKids){
        familyMaker(parentsChild,Hyperion,Theia,god,-20,20,30,lineType.sky,"HyperionTheia"+god.greekName);
    }
    
    //Crius and Eurybia kids
    familyMaker(parentsChild,Crius,Eurybia,Astraeus,120,20,20,lineType.sky,"CriusEurybiaAstraeus");
    familyMaker(parentsChild,Crius,Eurybia,Pallas,120,20,20,lineType.sky,"CriusEurybiaPallas");
    familyMaker6lines(Crius,Eurybia,Perses,120,20,20,100,20,20,20,lineType.sky,"CriusEurybiaPerses")
    
    //Eos and Astraeus kids
    familyMaker(parentsChild,Eos,Astraeus,Anemoi,-20,20,20,lineType.sky,"EosAstraeusAnemoi");
    familyMaker(parentsChild,Eos,Astraeus,Astra,-20,20,20,lineType.sky,"EosAstraeusAstra");
    
    //Asia and Iapetus kids
    var asiaIapetus = [Atlas,Prometheus,Epimetheus];
    for(let god of asiaIapetus){
        familyMaker(parentsChild,Asia,Iapetus,god,-20,20,30,lineType.personification,"AsiaIapetus"+god.greekName);
    }
    
    //Coeus and Phoebe kids
    familyMaker(parentsChild,Coeus,Phoebe,Leto,-20,20,500,lineType.sky,"CoeusPhoebeLeto");
    familyMaker(parentsChild,Coeus,Phoebe,Asteria,-20,20,500,lineType.sky,"CoeusPhoebeAsteria");
    
    //Pleione and Atlas kid
    familyMaker(parentsChild,Pleione,Atlas,Maia,-20,20,100,lineType.sky,"PleioneAtlasMaia");
    
    //Styx and Pallas kids
    var styxPallas = [Kratos,Nike,Zelus,Bia];
    for(let god of styxPallas){
        familyMaker(parentsChild2,Pallas,Styx,god,smallCard.width,20,30,lineType.personification,"StyxPallas"+god.greekName);
    }
    
    //Perse and Helio kids
    familyMaker(parentsChild,Perse,Helios,Pasiphae,90,20,1150,lineType.sky,"PerseHeliosPasiphae");
    familyMaker(parentsChild,Perse,Helios,Circe,90,20,1150,lineType.sky,"PerseHeliosCirce");
    
    //Nereus and Doris kid
    familyMaker(parentsChild,Nereus,Doris,Amphitrite,100,20,40,lineType.water,"NereusDorisAmphitrite");
    familyMaker(parentsChild,Nereus,Doris,Thetis,100,20,200,lineType.water,"NereusDorisThetis");
    
    //Amphitrite and Poseidon kid
    familyMaker(parentsChild,Amphitrite,Poseidon,Triton,((Amphitrite.x+regularCard.width)-Poseidon.x)/2,20,40,lineType.water,"AmphitritePoseidonTriton");
    
    //Thetis and Peleus kid
    familyMaker(parentsChild,Thetis,Peleus,Achilles,((Thetis.x+smallCard.width)-Peleus.x)/2,20,100,lineType.mortal,"ThetisPeleusAchilles");
    
    //Eurynome and Zeus
    familyMaker(parentsChild,Eurynome,Zeus,Charities,80,20,300,lineType.water,"EurynomeZeusCharities");
    
    //Methis and Zeus
    familyMaker(parentsChild,Methis,Zeus,Athena,210,30,60,lineType.water,"MetisZeusAthena");
    
    //Zeus and Hera kids
    var zeusHera = [Hebe,Hephaestus,Ares];
    for(let god of zeusHera){
        familyMaker(parentsChild,Zeus,Hera,god,20,20,250,lineType.main,"ZeusHera"+god.greekName);
    }
    
    //Zeus and Themis kids
    var zeusThemis = [Dike,Eunomia,Eirene,Moirai];
    for(let god of zeusThemis){
        familyMaker(parentsChild,Zeus,Themis,god,360,40,550,lineType.personification,"ZeusThemis"+god.greekName);
    }
    
    //Zeus and Mnemosyne 
    familyMaker(parentsChild,Mnemosyne,Zeus,muses,790,60,460,lineType.personification,"MnemosyneZeus9Muses");
    
    //Zeus and Maia 
    familyMaker(parentsChild,Maia,Zeus,Hermes,0,20,60,lineType.sky,"MaiaZeusHermes");
    
    //Zeus and Leto 
    familyMaker(parentsChild,Leto,Zeus,Apollo,-30,40,60,lineType.sky,"LetoZeusApollo");
    familyMaker(parentsChild,Leto,Zeus,Artemis,-30,40,60,lineType.sky,"LetoZeusArtemis");
    
    //Zeus and Demeter 
    familyMaker(parentsChild,Zeus,Demeter,Persephone,80,60,60,lineType.earth,"DemeterZeusPersephone");
    
    //Ares and Aphrodite 
    familyMaker(parentsChild,Ares,Aphrodite,Eros,0,20,60,lineType.personification,"AresAphroditeEros");
    
    //Aphrodite and Hermes 
    familyMaker(parentsChild,Aphrodite,Hermes,Hermaphrodites,0,40,70,lineType.personification,"AphroditeHermesHermaphrodites");
    
    //Minos and Pasiphae
    familyMaker(parentsChild,Minos,Pasiphae,Ariadne,0,20,40,lineType.mortal,"MinosPasiphaeAriadne");
    
    //Hecate and Perses
    familyMaker(parentsChild,Perses,Asteria,Hecate,0,20,320,lineType.personification,"PersesAsteriaHecate");
}

//************ Make all the cards show up ************//

function makeCards(){
    for(let god of familyTree){
        god.view();
        godMap[god.greekName] = god;
        cardIDs.push(god.rectID);
    }
    tree.selectAll('rect')
        .on('click',createModal)
        .on('mouseover',highlightChildren)
        .on('mouseout',revert);
    makeTextWrap();
}

//************ Make all captions ************//

function createCaptions(){
    caption("The Horai (The Seasons)",Eunomia.x,level9-50);
    caption("Zeus's children by mortal women",Perseus.x+regularCard.width,level10-40);
    caption("by Alcmene",Heracles.x+regularCard.width/2+5,level10-10);
}

//************ Card interactions ************//

function makeTextWrap(){
    var regular = regularCard.width-20;
    var large = largeCard.width-20;
    
    tree.select('#domain-Eros-Elder')
        .call(wrap, regular);
}

//click interaction for cards
function createModal(d,i){
    var godData = d.srcElement.attributes;
    var name = godData.godName.value;
    var domain = godData.domain.value;
    var description = godData.description.value;
    var children = godMap[name].children;
    var modal = new Modal(name,domain,description,children);
    d3.select('#modalContainer').html(modal.html);
    document.getElementById(name).style.display='block';
}

//hightlight children for cards
function highlight(parent,event){
    
        var parentColor = (event === 'mouseover') ? 'red' : '';
        var parentStroke = (event === 'mouseover') ? '4px' : '';
        document.getElementById(parent.rectID).style.stroke = parentColor;
        document.getElementById(parent.rectID).style.strokeWidth = parentStroke;
    
    for(let link of linkIDs){
        var color = (event === 'mouseover') ? 'grey' : '';
        var stroke = (event === 'mouseover') ? '4px' : '';
        if(!parent.childLink.has(link)){
            document.getElementById(link).style.stroke = color;
        }
        if(parent.childLink.has(link)){
            document.getElementById(link).style.strokeWidth = stroke;
        }
    }
    
    for(let card of cardIDs){
        var color = (event === 'mouseover') ? 'grey' : '';
        if(!parent.childRect.has(card)){
            if(card===parent.rectID){
                continue;
            }
            document.getElementById(card).style.fill = color;
        }
    }
    
    var toggle = (event === 'mouseover') ? 'visible' : 'hidden';
    var tooltip = parent.greekName+"Tooltip"
    
    d3.select('#'+tooltip).transition()
                         .duration('100')
                         .style("visibility", toggle);
}

function highlightChildren(d,i){
    var godData = d.srcElement.attributes;
    var name = godData.godName.value;
    d3.select(this).style("cursor", "pointer");
    highlight(godMap[name],'mouseover');
    d3.select(this)
      .transition()
      .duration('500');
}

function revert(d,i){
    var godData = d.srcElement.attributes;
        var name = godData.godName.value;
        d3.select(this).style("cursor", "grab");
        highlight(godMap[name],'mouseout');
        d3.select(this)
        .transition()
        .duration('500');
}

//************ Card interactions ************//

function openControls(){
    var modal = new controlsModal();
    d3.select('#modalContainer').html(modal.html);
document.getElementById('controlModal').style.display='block';
}

function openLegend(){
    var modal = new legendModal();
    d3.select('#modalContainer').html(modal.html);
document.getElementById('legend').style.display='block';
}

//make Modal object
function Modal(name,domain,description,children) {
    
//   var source;
//   if(thumbnail === ""){
//        source = 'img/bred_sheeran.jpg'
//    } else{
//        source = thumbnail}; 
    var list = "";
    
    function listmaker(){
        if(children.length === 0){
            list = "<li>"+name+ " doesn't have any children"+"</li>"
        }
        for(let i = 0; i<children.length;i++){
            var child = "<li>"+children[i]+"</li>"
            list += child;
        }
    }
    
    listmaker();
    
    this.html = 
    `<div id="${name}" class="w3-modal">
        <div class="w3-modal-content">
            <header class="w3-container"> 
                <span onclick="document.getElementById('${name}').style.display='none'"class="w3-button w3-display-topright">&times;</span>
                <h2>${name}</h2>
            </header>
          <div class="w3-container">
            <h4>${domain}</h4>
            <p>${description}</p>
            <h4>${name}'s children on this chart include:</h4>
            <ul>${list}</ul>
          </div>
        </div>
    </div>`;
}

//make controls Modal object
function controlsModal() {
  this.html = 
    `<div id="controlModal" class="w3-modal">
        <div class="w3-modal-content">
            <header class="w3-container"> 
                <span onclick="document.getElementById('controlModal').style.display='none'"class="w3-button w3-display-topright">&times;</span>
                <h2>Greek Mythology Family Tree</h2>
            </header>
          <div class="w3-container">
            <h4>Welcome to the messy and incestous world of Greek mythology! Here are the controls you might use to fully explore this weird family</h4>
            <ul>
              <li>Zoom: Use either your trackpad or mouse scroll to zoom in and out of the family tree</li>
              <li>Hover: Hover over a deity with children. All of that deity's children will highlighted.</li>
              <li>Click: Click on the card to read more information about that deity</li>
              <li>Redraw: While the tree is resposive, there is a quirk where the preserved aspect ratio will cut off the tree. Click redraw to redraw the tree to fit your screen better.</li>
            </ul>
            <p>If you ever need a quick refresh of the controls, click the controls button on the top left.</p>
          </div>
        </div>
    </div>`;
}

//make legend Modal object
function legendModal() {
  this.html = 
    `<div id="legend" class="w3-modal">
        <div class="w3-modal-content">
            <header class="w3-container"> 
                <span onclick="document.getElementById('legend').style.display='none'"class="w3-button w3-display-topright">&times;</span>
                <h2>Legend</h2>
            </header>
          <div class="w3-container legendContainer">
            <div>
                <svg height="160px" width="500px">
                    <rect x="0" y="0" width="100" height="160" class="earth" rx="6" ry="6"></rect>
                    <image href="img/corgi.jpeg" x="10" y="10" height="80"></image>
                    <text class="text-earth" x="50" y="110"> Name</text>
                    <text class="domain-earth domain" x="50" y="130"> Gender & </text>
                    <text class="domain-earth domain" x="50" y="145"> Domain </text>
                    <rect x="120" y="0" width="90" height="40" class="earth" rx="6" ry="6"></rect>
                    <text class="text-earth" x="165" y="20"> Earth Gods </text>
                    <rect x="120" y="60" width="90" height="40" class="sky" rx="6" ry="6"></rect>
                    <text class="text-sky" x="165" y="80"> Sky Gods </text>
                    <rect x="120" y="120" width="90" height="40" class="water" rx="6" ry="6"></rect>
                    <text class="text-water" x="165" y="140"> Sea Gods </text>
                    <rect x="230" y="0" width="110" height="40" class="personification" rx="6" ry="6"></rect>
                    <text class="domain-personification domain" x="285" y="20"> Personifications </text>
                    <rect x="230" y="60" width="110" height="40" class="underworld" rx="6" ry="6"></rect>
                    <text class="domain-underworld domain" x="285" y="80"> Underworld Gods </text>
                    <rect x="230" y="120" width="110" height="40" class="monster" rx="6" ry="6"></rect>
                    <text class="text-monster" x="285" y="140"> Monsters </text>
                    <rect x="360" y="0" width="110" height="40" class="mortal" rx="6" ry="6"></rect>
                    <text class="domain-mortal domain" x="415" y="15"> Mortals & </text>
                    <text class="domain-mortal domain" x="415" y="27"> Demigods </text>
                    <text class="domain-monster domain" x="415" y="70"> Spouse relationship</text>
                    <line x1="360" y1="90" x2="470" y2="90" class="line-main spouse"/>
                    <text class="domain-monster domain" x="415" y="130"> Child relationship</text>
                    <line x1="360" y1="150" x2="470" y2="150" class="line-main child"/>
                </svg>
            </div>
          </div>
        </div>
    </div>`;
}

//text wrap (NOT MINE. FROM: https://bl.ocks.org/mbostock/7555321)
function wrap(text, width) {
  text.each(function() {
    let text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      x = text.attr("x"),
      y = text.attr("y"),
      dy = 0,
      tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

//write captions
function caption(text,x,y){
    tree.append("text")
        .text(text)
        .attr("class",'caption')
        .attr("x",x)
        .attr("y",y);
}