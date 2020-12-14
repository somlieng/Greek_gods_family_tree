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
                Oceanus:"God of the Ocean",
                Tethys:"Goddess of the Rivers",
                Hyperion:"God of Light",
                Theia:"Goddess of the Aether",
                Crius:"",
                Kronos:"",
                Rhea:"",
                Themis:"",
                Iapetus:"",
                Mnmosyne:"",
                Coeus:"",
                Phoebe:"",
                Poseidon:"",
                Demeter:"",
                Zeus:"",
                Hera:"",
                Hades:"",
                Hestia:"",
                Triton:"",
                Athena:"",
                Hebe:"",
                Hephaestus:"",
                Ares:"",
                Aphrodite:"",
                Adonis:"",
                Hermes:"",
                Apollo:"",
                Artemis:"",
                Ganymede:"",
                Persephone:"",
                Charities:"",
                Dike:"",
                Eunomia:"",
                Eirene:"",
                Eros:"",
                Psyche:"",
                Hermaphodites:"",
                muses:"",
                Hecate:"",
                Typhon:"Father of all monsters",
                Echidna:"Mother of all monsters",
                Orthrus:"",
                Cerebus:"",
                Colchian:"",
                Chimera:"",
                Hydra:"",
                Sphinx:"",
                Aether:"Day",
                Hemera:"Light",
                Thalassa:"Sea Goddess",
                Charon:"Ferryman to the underworld",
                Moros:"Doom",
                Ker:"Violent death",
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
                Sirens:"Beauties that drown sailors",
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
                Leto:"Goddess",
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
                Minotaur:"Half bull, half man"
             };

let description = {  Chaos:"The Void",
                Gaia:"Mother Earth",
                Tartarus:"Underworld",
                ErosElder:"Love and Procreation",
                Erebus:"Darkness",
                Nyx:"Night",
                Uranus:"Father Sky",
                Ourea:"The Mountains",
                Pontus:"The Sea",
                Oceanus:"God of the Ocean",
                Tethys:"Goddess of the Rivers",
                Hyperion:"God of Light",
                Theia:"Goddess of the Aether",
                Crius:"",
                Kronos:"",
                Rhea:"",
                Themis:"",
                Iapetus:"",
                Mnmosyne:"",
                Coeus:"",
                Phoebe:"",
                Poseidon:"",
                Demeter:"",
                Zeus:"",
                Hera:"",
                Hades:"",
                Hestia:"",
                Triton:"",
                Athena:"",
                Hebe:"",
                Hephaestus:"",
                Ares:"",
                Aphrodite:"",
                Adonis:"",
                Hermes:"",
                Apollo:"",
                Artemis:"",
                Ganymede:"",
                Persephone:"",
                Charities:"",
                Dike:"",
                Eunomia:"",
                Eirene:"",
                Eros:"",
                Psyche:"",
                Hermaphodites:"",
                muses:"",
                Hecate:"",
                Typhon:"",
                Echidna:"",
                Orthrus:"",
                Cerebus:"",
                Colchian:"",
                Chimera:"",
                Hydra:"",
                Sphinx:"",
                Aether:"Day",
                Hemera:"Light",
                Thalassa:"Sea Goddess",
                Charon:"Ferryman to the underworld",
                Moros:"Doom",
                Ker:"Violent death",
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
                Sirens:"Beauties that drown sailors",
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
                Leto:"Goddess",
                Asteria:"Goddess of Falling stars",
                Thetis:"Nereid leader",
                Peleus:"Greek hero",
                Achilles:"Hero of the Trojan War",
                Theseus:"Killed the Minotaur, founder of Athens",
                Perseus:"Killed Medusa",
                Heracles:"Greatest of greek heros",
                Helen:"Her abduction started the Trojan War",
                Minos:"King of Crete, owner of Minotaur",
                Pasiphae:"Queen of Crete, mother of Minotaur",
                Dionysus:"God of wine",
                Ariadne:"Gave Theseus ball of twine out of the Labyrith",
                Tyche:"Good luck",
                Perse:"Eldest Oceanid",
                Circe:"Enchantress who turned men into pigs",
                Minotaur:"Half bull, half man"
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
let Ker = new God("Ker",Charon.x+cardSpace*2,Moros.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Ker,description.Ker);
let Thanatos = new God("Thanatos",Charon.x+cardSpace*2,Ker.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Thanatos,description.Thanatos);
let Hypnos = new God("Hypnos",Charon.x+cardSpace*2,Thanatos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Hypnos,description.Hypnos);
let Oneriroi = new God("Oneriroi",Charon.x+cardSpace*2,Hypnos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Oneriroi,description.Oneriroi);
let Momus = new God("Momus",Moros.x+cardSpace,level3-cardSpace,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Momus,description.Momus);
let Geras = new God("Geras",Moros.x+cardSpace,Moros.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Geras,description.Geras);
let Oizys = new God("Oizys",Moros.x+cardSpace,Ker.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Oizys,description.Oizys);
let Nemesis = new God("Nemesis",Moros.x+cardSpace,Thanatos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Nemesis,description.Nemesis);
let Philotes = new God("Philotes",Moros.x+cardSpace,Hypnos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Philotes,description.Philotes);
let Apate = new God("Apate",Momus.x+cardSpace,level3-cardSpace,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Apate,description.Apate);
let Eris = new God("Eris",Momus.x+cardSpace,Moros.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Eris,description.Eris);
let Moirai = new God("The Moirai",Momus.x+cardSpace,Ker.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Moirai,description.Moirai);
let Keres = new God("The Keres",Momus.x+cardSpace,Thanatos.y+smallCard.height+betweenCards,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Keres,description.Keres);
let Hesperides = new God("The Hesperides",Momus.x+cardSpace,Hypnos.y+smallCard.height+betweenCards,null,smallCard.width*2,smallCard.height,smallCard.type,godType.earth,domain.Hesperides,description.Hesperides);

let level4 = Uranus.y+(cardAbove);
let level5 = Uranus.y+2*(cardAbove);

//level 4
let Typhon = new God("Typhon",ErosElder.x-cardSpace*2,level3+smallCard.height,null,smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Typhon,description.Typhon);
let Echidna = new God("Echidna",Typhon.x+cardSpace,level3+smallCard.height,null,smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Echidna,description.Echidna);
let Colchian = new God("Colchian Dragon",(Typhon.x+Echidna.x)/2-cardSpace/2,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Colchian,description.Colchian);
let Chimera = new God("Chimera",(Typhon.x+Echidna.x)/2+cardSpace/2,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Chimera,description.Chimera);
let Hydra = new God("Hydra",Chimera.x+cardSpace,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Hydra,description.Hydra);
let Sphinx = new God("Sphinx",Hydra.x+cardSpace,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Sphinx,description.Sphinx);
let Cerebus = new God("Cerebus",Colchian.x-cardSpace,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld,domain.Cerebus,description.Cerebus);
let Orthrus = new God("Orthrus",Cerebus.x-cardSpace,level3+regularCard.height,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Orthrus,description.Orthrus);
let Cyclops = new God("The Cyclops",centers.large-20,level3+cardAbove,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Cyclops,description.Cyclops);
let Hecatoncheires = new God("The Hecatoncheires",centers.large-20,Cyclops.y+smallCard.height+betweenCards,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Hecatoncheires,description.Hecatoncheires);
let Giantes = new God("The Giantes",Cyclops.x+smallCard.width+betweenCards+20,level3+cardAbove,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.monster,domain.Giantes,description.Giantes);
let Erinyes = new God("The Erinyes",Cyclops.x+smallCard.width+betweenCards+20,Giantes.y+smallCard.height+betweenCards,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Erinyes,description.Erinyes);
let Meliae = new God("The Meliaes",Cyclops.x+smallCard.width+betweenCards+20,Erinyes.y+smallCard.height+betweenCards,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.earth,domain.Meliae,description.Meliae);
let Iris = new God("Iris",Aether.x,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Iris,description.Iris);
let Harpies = new God("The Harpies",Iris.x+cardSpace,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Harpies,description.Harpies);
let Sirens = new God("The Sirens",Harpies.x+cardSpace,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Sirens,description.Sirens);
let Gorgons = new God("The Gorgons",Sirens.x+cardSpace,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Gorgons,description.Gorgons);
let Graeae = new God("The Graeae",Gorgons.x+cardSpace,level4,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.monster,domain.Graeae,description.Graeae);
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
let Anemoi = new God("The Anemoi",Selene.x+cardSpace,level6+cardSpaceSmall,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Anemoi,description.Anemoi);
let Astra = new God("The Astra Planeta",Anemoi.x+cardSpace,level6+cardSpaceSmall,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.sky,domain.Astra,description.Astra);
let Atlas = new God("Atlas",(Asia.x+Iapetus.x)/2+betweenCards,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky,domain.Atlas,description.Atlas);
let Prometheus = new God("Prometheus",Atlas.x+cardSpace,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Prometheus,description.Prometheus);
let Epimetheus = new God("Epimetheus",Prometheus.x+cardSpace,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Epimetheus,description.Epimetheus);
let Pandora = new God("Pandora",Epimetheus.x+cardSpace,level6,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Pandora,description.Pandora);
let Pleione = new God("Pleione",Atlas.x-cardSpace,level6,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Pleione,description.Pleione);
let Tyche = new God("Tyche",Doris.x+cardSpaceSmall-40,level6A,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Tyche,description.Tyche);
let Perse = new God("Perse",Tyche.x+cardSpaceSmall-40,level6A+60,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.water,domain.Perse,description.Perse);
let Pallas = new God("Pallas",Astraeus.x+smallCard.width,level6A+80,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.personification,domain.Pallas,description.Pallas);
let Styx = new God("Styx",Anemoi.x,level6A+80,"img/corgi.jpeg",smallCard.width,smallCard.height,smallCard.type,godType.underworld,domain.Styx,description.Styx);

//level 7 gods
let Zeus = new God("Zeus",(centers.large-cardWidth/2)-cardSpace/2,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky,domain.Zeus,description.Zeus);
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
let Charities = new God("The Charitites",Persephone.x+cardSpace*1.5,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Charities,description.Charities);
let Dike = new God("Dike",Charities.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Dike,description.Dike);
let Eunomia = new God("Eunomia",Dike.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Eunomia,description.Eunomia);
let Eirene = new God("Eirene",Eunomia.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Eirene,description.Eirene);
let Eros = new God("Eros",Eirene.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Eros,description.Eros);
let Psyche = new God("Psyche",Eros.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal,domain.Psyche,description.Psyche);
let Hermaphrodites = new God("Hermaphrodites",Psyche.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.Hermaphodites,description.Hermaphodites);
let muses = new God("9 Muses",Hermaphrodites.x+cardSpace,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification,domain.muses,description.muses);
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
familyTree.push(Ker);
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
familyTree.push(Moirai);
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
familyTree.push(Sirens);
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
        source.children.add(id);
        source.childRect.add(target.rectID);
    }
    if(pathType === singleParent2){
        source.children.add(id);
        source.childRect.add(target.rectID);
    }
    if(pathType === singleParent3){
        source.children.add(id);
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
    source.children.add(id);
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
    wife.children.add(id);
    wife.childRect.add(child.rectID);
    husband.children.add(id);
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
    wife.children.add(id);
    wife.childRect.add(child.rectID);
    husband.children.add(id);
    husband.childRect.add(child.rectID);
    return line;
}
//************ Initializing calls ************//

createTree(width,height);
makeConnections();
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
    var NyxKids = [Moros,Ker,Thanatos,Hypnos,Oneriroi];
    
    for(let god of NyxKids){
        pathMaker(singleParent2,Nyx,god,lineType.underworld,"child","Nyx"+god.greekName,0,140);
    }
    
    var NyxKids2 = [Momus,Geras,Oizys,Nemesis,Philotes];
    
    for(let god of NyxKids2){
        pathMaker(singleParent2,Nyx,god,lineType.underworld,"child","Nyx"+god.greekName,0,300);
    }
    
    var NyxKids3 = [Apate,Eris,Moirai,Keres,Hesperides];
    
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
   
    //Asteria
    pathMaker(singleParent,Asteria,Hecate,lineType.sky,"child","AsteriaHecate",0,400);
    
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
    var PhorcycsCetoKids = [Sirens,Gorgons,Graeae,Scylla];
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
    var zeusThemis = [Dike,Eunomia,Eirene];
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
    familyMaker(parentsChild,Ares,Aphrodite,Eros,0,20,90,lineType.personification,"AresAphroditeEros");
    
    //Aphrodite and Hermes 
    familyMaker(parentsChild,Aphrodite,Hermes,Hermaphrodites,0,40,70,lineType.personification,"AphroditeHermesHermaphrodites");
    
    //Minos and Pasiphae
    familyMaker(parentsChild,Minos,Pasiphae,Ariadne,0,20,40,lineType.mortal,"MinosPasiphaeAriadne");
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
    console.log(godData);
    var name = godData.godName.value;
    console.log(name);
    var domain = godData.domain.value;
    var description = godData.description.value;
    var modal = new Modal(name,domain,description);
    d3.select('#modalContainer').html(modal.html);
    document.getElementById(name).style.display='block';
    console.log("CLICK");
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
        if(!parent.children.has(link)){
            document.getElementById(link).style.stroke = color;
        }
        if(parent.children.has(link)){
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
function Modal(name,domain,description) {
    
//   var source;
//   if(thumbnail === ""){
//        source = 'img/bred_sheeran.jpg'
//    } else{
//        source = thumbnail};    
    
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