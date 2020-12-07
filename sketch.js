//To-Do
//Build out all the gods
//Make the cursor turn to grabbing on drag
//Make gods fit on first load (width-wise)
//Make cards prettier
//Make links make more sense
//Make modals more pretty
//Fill in all the data for the greek gods
//Add memes
//Add legend
//Add title screen
//Add god types to card color
//split spouse line in half
//make half spouse line highlight on hover

let margins = {top:50,
               bottom: 50,
               left: 50,
               right:50};

let width = window.innerWidth;
let height = window.innerHeight;

let regularCard = {width: 80,
                   height:100,
                   type:"regular"};

let largeCard = {width: 90,
                 height: 120,
                 type:"large"};

let smallCard = {width: 90,
               height: 30,
                type:"small"};

let cardWidth = 40;
let cardHeight = 50;

let smallCardWidth = 30;
let smallCardHeight = 40;

let cardTopSpace = 50;

let betweenCards = 20;
let smallCardBetween = 15;

let downLink = 10;

let cardAbove = largeCard.height+cardTopSpace;

let cardSpace = largeCard.width+betweenCards;
let cardSpaceSmall = smallCardWidth+smallCardBetween;

let centers ={regular:width/2-regularCard.width/2,
              large:width/2-largeCard.width/2,
              small:width/2-smallCard.width/2,
             };

function zoomed({transform}) {
    tree.attr("transform", transform);
}

function dragging() {
    tree.attr("cursor", "grabbing");
    console.log("dragging");
}

let tree = d3.select("#familyTree").append("svg")
             .attr("viewBox", [0, 0, width, height])
             .attr("preserveAspectRatio", "none")
//             .classed("svg-content", true)
             .attr("cursor", "grab")
             .call(d3.zoom() //zoom interaction
                .extent([[0, 0], [width, height]])
                .scaleExtent([0, 9])
                .on("zoom", zoomed))
//             .on('mousedown',dragging)
             .append("g");

let familyTree = [];

let lineType = {main:"line-main",
                child:"line-child",
                personification:"line-personification",
                underworld:"line-underworld",
                monster:"line-monster",
                earth:"line-earth",
                water:"line-water",
                sky:"line-sky"};

let godType = { personification:"personification",
                monster:"monster",
                earth:"earth",
                water:"water",
                underworld:"underworld",
                mortal:"mortal",
                sky:"sky"};

let godMap = {};

//************make a shit ton of gods************//

//level 1 god
let Chaos = new God("Chaos",centers.small,margins.top,null,smallCard.width,smallCard.height,smallCard.type,godType.underworld);

let level2 = Chaos.y+cardAbove;

//level 2 gods
let Gaia = new God("Gaia",centers.large,level2,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth);
let Tartarus = new God("Tartarus",Gaia.x-(cardSpace*2),level2,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld);
let ErosElder = new God("Eros",Tartarus.x-cardSpace,level2,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Erebus = new God("Erebus",Gaia.x+(cardSpace*2),level2,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld);
let Nyx = new God("Nyx",Erebus.x+cardSpace,level2,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld);

let level3 = Gaia.y+cardAbove;

//level 3 gods
let Uranus = new God("Uranus",centers.large,level3,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky);
let Ourea = new God("Ourea",centers.regular-cardSpace,level3,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.earth);
let Pontus = new God("Pontus",centers.regular+cardSpace,level3,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water);

let level4 = Uranus.y+cardAbove;
let level5 = Uranus.y+2*(cardAbove);

//level 4
let Typhon = new God("Typhon",margins.left,level4,"img/corgi.jpeg",smallCard.width,smallCard.height);

//level 5 gods
let Kronos = new God("Kronos",(centers.large-cardWidth/2)-(betweenCards/2),level5,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth);
let Rhea = new God("Rhea",(centers.large+cardWidth/2)+(betweenCards/2),level5,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth);
let Crius = new God("Crius",Kronos.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky);
let Theia = new God("Theia",Crius.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky);
let Hyperion = new God("Hyperion",Theia.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky);
let Tethys = new God("Tethys",Hyperion.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water);
let Oceanus = new God("Oceanus",Tethys.x-cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water);
let Themis = new God("Themis",Rhea.x+cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Iapetus = new God("Iapetus",Themis.x+cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Mnemosyne = new God("Mnemosyne",Iapetus.x+cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Coeus = new God("Coeus",Mnemosyne.x+cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky);
let Phoebe = new God("Phoebe",Coeus.x+cardSpace,level5,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.sky);

let level6 = Kronos.y+cardAbove;
let level7 = Kronos.y+2*(cardAbove);

//level 6 gods

//level 7 gods
let Zeus = new God("Zeus",(centers.large-cardWidth/2)-(betweenCards/2),level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky);
let Hera = new God("Hera",(centers.large+cardWidth/2)+(betweenCards/2),level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky);
let Hades = new God("Hades",Hera.x+cardSpace,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.underworld);
let Hestia = new God("Hestia",Hades.x+cardSpace,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification);
let Demeter = new God("Demeter",Zeus.x-cardSpace,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth);
let Poseidon = new God("Poseidon",Demeter.x-cardSpace,level7,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.water);

let level8 = Zeus.y+cardAbove;

//level 8 gods
let Ares = new God("Ares",(centers.large-cardWidth/2)-(betweenCards/2),level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification);
let Aphrodite = new God("Aphrodite",(centers.large+cardWidth/2)+(betweenCards/2),level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification);
let Hephaestus = new God("Hephaestus",Ares.x-cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification);
let Hebe = new God("Hebe",Hephaestus.x-cardSpace,level8,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Athena = new God("Athena",Hebe.x-cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.personification);
let Triton = new God("Triton",Athena.x-cardSpace,level8,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.water);
let Adonis = new God("Adonis",Aphrodite.x+cardSpace,level8,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal);
let Hermes = new God("Hermes",Adonis.x+cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky);
let Apollo = new God("Apollo",Hermes.x+cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.sky);
let Artemis = new God("Artemis",Apollo.x+cardSpace,level8,"img/corgi.jpeg",largeCard.width,largeCard.height,largeCard.type,godType.earth);

let level9 = Aphrodite.y+cardAbove;

//level 9
let Ganymede = new God("Ganymede",Athena.x,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal);
let Persephone = new God("Persephone",Ganymede.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.underworld);
let Charities = new God("The Charitites",Persephone.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Dike = new God("Dike",Charities.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Eunomia = new God("Eunomia",Dike.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Eirene = new God("Eirene",Eunomia.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Eros = new God("Eros",Eirene.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Psyche = new God("Psyche",Eros.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.mortal);
let Hermaphrodites = new God("Hermaphrodites",Psyche.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let muses = new God("9 Muses",Hermaphrodites.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);
let Hecate = new God("Hecate",muses.x+cardSpaceSmall,level9,"img/corgi.jpeg",regularCard.width,regularCard.height,regularCard.type,godType.personification);

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
//level 4
//familyTree.push(Typhon);
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
//level 6
//level 7
familyTree.push(Zeus);
familyTree.push(Hera);
familyTree.push(Hades);
familyTree.push(Hestia);
familyTree.push(Demeter);
familyTree.push(Poseidon);
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

//familyTree.push();

//make single Parent
let primordials = [ErosElder,Tartarus,Gaia,Erebus,Nyx];

for(let god of primordials){
    pathMaker(singleParent,Chaos,god,lineType.main,"child","Chaos"+god.greekName,0,downLink);
}

pathMaker(singleParent,Gaia,Ourea,lineType.earth,"child","GaiaOurea",0,25);
pathMaker(singleParent,Gaia,Pontus,lineType.water,"child","GaiaPontus",0,25);
pathMaker(singleParent,Gaia,Uranus,lineType.sky,"child","GaiaUra",0,25);

//make spouse connections
pathMaker(spousePath,Gaia,Tartarus,lineType.personification,"spouse","GaiaTar",-20,10);
pathMaker(spousePath,Nyx,Erebus,lineType.personification,"spouse","NyxEre",0,10);
pathMaker(spouseIncest,Gaia,Uranus,lineType.main,"spouse","GaiaUra2",-10,20);
//pathMaker(spousePath,Oceanus,Tethys,lineType.main,"spouse","OceTeth");
//pathMaker(spousePath,Hyperion,Theia,lineType.main,"spouse","HypTheia");
//pathMaker(spousePath,Coeus,Phoebe,lineType.main,"spouse","CoeusPhoebe");
pathMaker(spousePath,Kronos,Rhea,lineType.main,"spouse","KroRhea",0,10);

//make child connections

//familyMaker(Gaia,Tartarus,Typhon,lineType.monster,"GaiaTartarusTyphon");

let titans = [Rhea,Kronos,Crius,Theia,Hyperion,Tethys,Oceanus,Themis,Iapetus,Mnemosyne,Coeus,Phoebe];

for(let god of titans){
    familyMaker(Gaia,Uranus,god,0,20,100,lineType.main,"GaiaUranus"+god.greekName);
}

let olympians = [Zeus,Hera,Demeter,Poseidon,Hades,Hestia]

for(let god of olympians){
    familyMaker(Kronos,Rhea,god,-20,10,100,lineType.main,"RheaKronos"+god.greekName);
}

//make Cards and push into godMap
for(let god of familyTree){
    god.view();
    godMap[god.greekName] = god;
}

tree.selectAll('rect')
    .on('click',createModal);

//click interaction for cards
function createModal(d,i){
    var godData = d.srcElement.attributes;
    var name = godData.godName.value;
    var modal = new Modal(name);
    d3.select('#modalContainer').html(modal.html);
    document.getElementById(name).style.display='block';
}

//hightlight children for cards
function highlight(parent,event){
    for(let child of parent.children){
        var color = (event === 'mouseover') ? 'red' : '';
        document.getElementById(child).style.stroke = color ;
    }
}

function highlightChildren(d,i){
    var godData = d.srcElement.attributes;
        var name = godData.godName.value;
        d3.select(this).style("cursor", "default");
        highlight(godMap[name],'mouseover');
        d3.select(this)
        .transition()
//        .attr("width",cardWidth+20)
//        .attr("height",cardHeight+20)
}

//mouse over interaction for cards
tree.selectAll('rect')
    .on('mouseover',highlightChildren);

function revert(d,i){
    var godData = d.srcElement.attributes;
        var name = godData.godName.value;
        d3.select(this).style("cursor", "grab");
        highlight(godMap[name],'mouseout');
        d3.select(this)
        .transition()
//        .attr("width",cardWidth)
//        .attr("height",cardHeight)
}

//mouse out interaction for cards
tree.selectAll('rect')
    .on('mouseout',revert);

//make Modal object
function Modal(name) {
    
//   var source;
//   if(thumbnail === ""){
//        source = 'img/bred_sheeran.jpg'
//    } else{
//        source = thumbnail};    
    
  this.html = 
    `<div id="${name}" class="w3-modal">
        <div class="w3-modal-content">
            <header class="w3-container w3-teal"> 
                <span onclick="document.getElementById('${name}').style.display='none'"class="w3-button w3-display-topright">&times;</span>
                <h2>${name}</h2>
            </header>
          <div class="w3-container">
            <p>${name}</p>
          </div>
        </div>
    </div>`;
}

function pathMaker(pathType,source,target,name,union,id,marginX,down){
  let line = tree.append("path")
                  .attr("class",name+" "+union)
                  .attr("id",id)
                  .attr("d",pathType(source,target,marginX,down));
    if(pathType === singleParent){
        source.children.push(id);
    }
    if(pathType === spousePath){
        source.spouse.push(id);
        target.spouse.push(id);
    }
    if(pathType === spouseIncest){
        source.spouse.push(id);
        target.spouse.push(id);
    }
   return line;
}

function familyMaker(wife,husband,child,marginX,down1,down2,name,id){
  let line = tree.append("path")
                  .attr("class",name)
                  .attr("id",id)
                  .attr("d",parentsChild(wife,husband,child,marginX,down1,down2));
   wife.children.push(id);
   husband.children.push(id);
   return line;
}

//Only 1 parent
function singleParent(source,target,marginX,down){
    return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down+
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
function spouseIncest(source,target,marginX,down){
     return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down+
            "H"+(target.x-20)+
            "V"+(target.y+down+target.height)+
            "H"+(target.x+target.width/2)+
            "V"+(target.y+target.height)
}

//2 parents to child
function parentsChild(wife,husband,child,marginX,down1,down2){
    var lowerCard = (wife.y > husband.y) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "v"+down2+
            "H"+(child.x+child.width/2)+
            "V"+(child.y)
}