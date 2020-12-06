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

let width = window.innerWidth-margins.left-margins.right;
let height = window.innerHeight-margins.top;

let cardWidth = 50;
let cardHeight = 100;

let cardTopSpace = 50;
let betweenCards = 50;

let downLink = 10;

let cardAbove = cardHeight+cardTopSpace;
let cardSpace = cardWidth+betweenCards;

function zoomed({transform}) {
    tree.attr("transform", transform);
}

function dragging() {
    tree.attr("cursor", "grabbing");
    console.log("dragging");
}

let tree = d3.select("#familyTree").append("svg")
             .attr("viewBox", [0, 0, width, height])
             .attr("cursor", "grab")
             .call(d3.zoom() //zoom interaction
                .extent([[0, 0], [width, height]])
                .scaleExtent([1, 8])
                .on("zoom", zoomed))
             .on('mousedown',dragging)
             .append("g");

let familyTree = [];

let lineType = {main:"main",
                child:"child",
                personification:"personification",
                monster:"monster",
                earth:"earth",
                water:"water",
                sky:"sky"};

let godMap = {};

let center = width/2-cardWidth/2;

//************make a shit ton of gods************//

//level 1 god
let Chaos = new God("Chaos",center,margins.top,"img/corgi.jpeg",cardWidth,cardHeight);

let level2 = Chaos.y+cardAbove;

//level 2 gods
let Gaia = new God("Gaia",center,level2,"img/corgi.jpeg",cardWidth,cardHeight);
let Tartarus = new God("Tartarus",Gaia.x-cardSpace,level2,"img/corgi.jpeg",cardWidth,cardHeight);
let ErosElder = new God("Eros Elder",Tartarus.x-cardSpace,level2,"img/corgi.jpeg",cardWidth,cardHeight);
let Erebus = new God("Erebus",Gaia.x+cardSpace,level2,"img/corgi.jpeg",cardWidth,cardHeight);
let Nyx = new God("Nyx",Erebus.x+cardSpace,level2,"img/corgi.jpeg",cardWidth,cardHeight);

let level3 = Gaia.y+cardAbove;

//level 3 gods
let Uranus = new God("Uranus",center,level3,"img/corgi.jpeg",cardWidth,cardHeight);
let Typhon = new God("Typhon",margins.left,level3,"img/corgi.jpeg",cardWidth,cardHeight);
let Ourea = new God("Ourea",center-cardSpace,level3,"img/corgi.jpeg",cardWidth,cardHeight);
let Pontus = new God("Pontus",center+cardSpace,level3,"img/corgi.jpeg",cardWidth,cardHeight);

let level4 = Uranus.y+cardAbove;

//level 4 gods
let Kronos = new God("Kronos",(center-cardWidth/2)-20,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Rhea = new God("Rhea",(center+cardWidth/2)+20,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Crius = new God("Crius",Kronos.x-cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Theia = new God("Theia",Crius.x-cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Hyperion = new God("Hyperion",Theia.x-cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Tethys = new God("Tethys",Hyperion.x-cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Oceanus = new God("Oceanus",Tethys.x-cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Themis = new God("Themis",Rhea.x+cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Iapetus = new God("Iapetus",Themis.x+cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Mnemosyne = new God("Mnemosyne",Iapetus.x+cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Coeus = new God("Coeus",Mnemosyne.x+cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Phoebe = new God("Phoebe",Coeus.x+cardSpace,level4,"img/corgi.jpeg",cardWidth,cardHeight);


//push them into an array
familyTree.push(Chaos);
familyTree.push(Tartarus);
familyTree.push(Gaia);
familyTree.push(ErosElder);
familyTree.push(Erebus);
familyTree.push(Nyx);
//familyTree.push(Typhon);
familyTree.push(Ourea);
familyTree.push(Uranus);
familyTree.push(Pontus);
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

//make single Parent
pathMaker(singleParent,Chaos,ErosElder,lineType.main,"child","ChaosErosE",0,downLink);
pathMaker(singleParent,Chaos,Tartarus,lineType.main,"child","ChaosTar",0,downLink);
pathMaker(singleParent,Chaos,Gaia,lineType.main,"child","ChaosGaia",0,downLink);
pathMaker(singleParent,Chaos,Erebus,lineType.main,"child","ChaosEre",0,downLink);
pathMaker(singleParent,Chaos,Nyx,lineType.main,"child","ChaosNyx",0,downLink);
pathMaker(singleParent,Gaia,Ourea,lineType.earth,"child","GaiaOurea",0,downLink);
pathMaker(singleParent,Gaia,Pontus,lineType.water,"child","GaiaPontus",0,downLink);
pathMaker(singleParent,Gaia,Uranus,lineType.sky,"child","GaiaUra",0,downLink);

//make spouse connections
//pathMaker(spousePath,Gaia,Tartarus,lineType.personification,"spouse","GaiaTar");
//pathMaker(spousePath,Nyx,Erebus,lineType.personification,"spouse","NyxEre");
pathMaker(spouseIncest,Gaia,Uranus,lineType.main,"spouse","GaiaUra2",-10,10);
//pathMaker(spousePath,Oceanus,Tethys,lineType.main,"spouse","OceTeth");
//pathMaker(spousePath,Hyperion,Theia,lineType.main,"spouse","HypTheia");
//pathMaker(spousePath,Coeus,Phoebe,lineType.main,"spouse","CoeusPhoebe");
//pathMaker(spousePath,Kronos,Rhea,lineType.main,"spouse","KroRhea");

//make child connections
//familyMaker(Gaia,Tartarus,Typhon,lineType.monster,"GaiaTartarusTyphon");
familyMaker(Gaia,Uranus,Rhea,0,10,20,lineType.main,"GaiaUranusRhea");
familyMaker(Gaia,Uranus,Kronos,0,10,20,lineType.main,"GaiaUranusKronos");
familyMaker(Gaia,Uranus,Crius,0,10,20,lineType.main,"GaiaUranusCrius");
familyMaker(Gaia,Uranus,Theia,0,10,20,lineType.main,"GaiaUranusTheia");
familyMaker(Gaia,Uranus,Hyperion,0,10,20,lineType.main,"GaiaUranusHyp");
familyMaker(Gaia,Uranus,Tethys,0,10,20,lineType.main,"GaiaUranusTethys");
familyMaker(Gaia,Uranus,Oceanus,0,10,20,lineType.main,"GaiaUranusOcean");
familyMaker(Gaia,Uranus,Themis,0,10,20,lineType.main,"GaiaUranusThemis");
familyMaker(Gaia,Uranus,Iapetus,0,10,20,lineType.main,"GaiaUranusIap");
familyMaker(Gaia,Uranus,Mnemosyne,0,10,20,lineType.main,"GaiaUranusMnem");
familyMaker(Gaia,Uranus,Coeus,0,10,20,lineType.main,"GaiaUranusCoeus");
familyMaker(Gaia,Uranus,Phoebe,0,10,20,lineType.main,"GaiaUranusPhoebe");

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
        var color = (event === 'mouseover') ? 'red' : 'black';
        document.getElementById(child).style.stroke= color ;
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
    return  "M"+(source.x+marginX+cardWidth/2)+","+(source.y+cardHeight)+
            "v"+down+
            "H"+(target.x+cardWidth/2)+
            "V"+target.y
}

//Spouse path function
function spousePath(source,target,marginX,down){
     return  "M"+(source.x+marginX+cardWidth/2)+","+(source.y+cardHeight)+
            "v"+down+
            "H"+(target.x+cardWidth/2)+
            "V"+(target.y+cardHeight)
}

//Spouse path function
function spouseIncest(source,target,marginX,down){
     return  "M"+(source.x+marginX+cardWidth/2)+","+(source.y+cardHeight)+
            "v"+down+
            "H"+(target.x-20)+
            "V"+(target.y+cardHeight+downLink)+
            "H"+(target.x+cardWidth/2)+
            "V"+(target.y+cardHeight)
}

//2 parents to child
function parentsChild(wife,husband,child,marginX,down1,down2){
    var lowerCard = (wife.y > husband.y) ? wife : husband;
    console.log(lowerCard);
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+cardHeight+down1)+
            "v"+down2+
            "H"+(child.x+cardWidth/2)+
            "V"+(child.y)
}