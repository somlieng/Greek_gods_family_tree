let margins = {top:50,
               bottom: 50,
               left: 50,
               right:50};

let width = window.innerWidth-margins.left-margins.right;
let height = window.innerHeight-margins.top;

let cardWidth = 100;
let cardHeight = 100;

let cardTopSpace = 50;
let betweenCards = 50;

let downLink = 20;

let cardAbove = cardHeight+cardTopSpace;
let cardLeft = cardWidth+betweenCards;

let tree = d3.select("#familyTree").append("svg")
             .attr("width",window.innerWidth)//width
             .attr("height",window.innerHeight)
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
let ErosElder = new God("Eros Elder",margins.left,level2,"img/corgi.jpeg",cardWidth,cardHeight);
let Tartarus = new God("Tartarus",ErosElder.x+cardLeft,level2,"img/corgi.jpeg",cardWidth,cardHeight);
let Gaia = new God("Gaia",center,level2,"img/corgi.jpeg",cardWidth,cardHeight);
let Erebus = new God("Erebus",Gaia.x+cardLeft,level2,"img/corgi.jpeg",cardWidth,cardHeight);
let Nyx = new God("Nyx",Erebus.x+cardLeft,level2,"img/corgi.jpeg",cardWidth,cardHeight);

let level3 = Gaia.y+cardAbove;

//level 3 gods
let Typhon = new God("Typhon",margins.left,level3,"img/corgi.jpeg",cardWidth,cardHeight);
let Ourea = new God("Ourea",center-cardLeft,level3,"img/corgi.jpeg",cardWidth,cardHeight);
let Uranus = new God("Uranus",center,level3,"img/corgi.jpeg",cardWidth,cardHeight);
let Pontus = new God("Pontus",center+cardLeft,level3,"img/corgi.jpeg",cardWidth,cardHeight);

let level4 = Uranus.y+cardAbove;

//level 4 gods
let Kronos = new God("Kronos",(center-cardWidth/2)-20,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Rhea = new God("Rhea",(center+cardWidth/2)+20,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Crius = new God("Crius",Kronos.x-cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Theia = new God("Theia",Crius.x-cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Hyperion = new God("Hyperion",Theia.x-cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Tethys = new God("Tethys",Hyperion.x-cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Oceanus = new God("Oceanus",Tethys.x-cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Themis = new God("Themis",Rhea.x+cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Iapetus = new God("Iapetus",Themis.x+cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Mnemosyne = new God("Mnemosyne",Iapetus.x+cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Coeus = new God("Coeus",Mnemosyne.x+cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);
let Phoebe = new God("Phoebe",Coeus.x+cardLeft,level4,"img/corgi.jpeg",cardWidth,cardHeight);


//push them into an array
familyTree.push(Chaos);
familyTree.push(Tartarus);
familyTree.push(Gaia);
familyTree.push(ErosElder);
familyTree.push(Erebus);
familyTree.push(Nyx);
familyTree.push(Typhon);
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
pathMaker(singleParent,Chaos,ErosElder,lineType.main,"child","ChaosErosE");
pathMaker(singleParent,Chaos,Tartarus,lineType.main,"child","ChaosTar");
pathMaker(singleParent,Chaos,Gaia,lineType.main,"child","ChaosGaia");
pathMaker(singleParent,Chaos,Erebus,lineType.main,"child","ChaosEre");
pathMaker(singleParent,Chaos,Nyx,lineType.main,"child","ChaosNyx");
pathMaker(singleParent,Gaia,Ourea,lineType.earth,"child","GaiaOurea");
pathMaker(singleParent,Gaia,Pontus,lineType.water,"child","GaiaPontus");
pathMaker(singleParent,Gaia,Uranus,lineType.sky,"child","GaiaUra");

//make spouse connections
pathMaker(spousePath,Gaia,Tartarus,lineType.personification,"spouse","GaiaTar");
pathMaker(spousePath,Nyx,Erebus,lineType.personification,"spouse","NyxEre");
pathMaker(spouseIncest,Gaia,Uranus,lineType.main,"spouse","GaiaUra2");
pathMaker(spousePath,Oceanus,Tethys,lineType.main,"spouse","OceTeth");
pathMaker(spousePath,Hyperion,Theia,lineType.main,"spouse","HypTheia");
pathMaker(spousePath,Coeus,Phoebe,lineType.main,"spouse","CoeusPhoebe");
pathMaker(spousePath,Kronos,Rhea,lineType.main,"spouse","KroRhea");

//make child connections
familyMaker(Gaia,Tartarus,Typhon,lineType.monster,"GaiaTartarusTyphon");
familyMaker(Gaia,Uranus,Rhea,lineType.main,"GaiaUranusRhea");
familyMaker(Gaia,Uranus,Kronos,lineType.main,"GaiaUranusKronos");
familyMaker(Gaia,Uranus,Crius,lineType.main,"GaiaUranusCrius");
familyMaker(Gaia,Uranus,Theia,lineType.main,"GaiaUranusTheia");
familyMaker(Gaia,Uranus,Hyperion,lineType.main,"GaiaUranusHyp");
familyMaker(Gaia,Uranus,Tethys,lineType.main,"GaiaUranusTethys");
familyMaker(Gaia,Uranus,Oceanus,lineType.main,"GaiaUranusOcean");
familyMaker(Gaia,Uranus,Themis,lineType.main,"GaiaUranusThemis");
familyMaker(Gaia,Uranus,Iapetus,lineType.main,"GaiaUranusIap");
familyMaker(Gaia,Uranus,Mnemosyne,lineType.main,"GaiaUranusMnem");
familyMaker(Gaia,Uranus,Coeus,lineType.main,"GaiaUranusCoeus");
familyMaker(Gaia,Uranus,Phoebe,lineType.main,"GaiaUranusPhoebe");

//make Cards and push into godMap
for(let god of familyTree){
    god.view();
    godMap[god.greekName] = god;
}

//click interaction
tree.selectAll('rect')
    .on('click',function(d, i) { 
    var godData = d.srcElement.attributes;
    var name = godData.godName.value;
    var modal = new Modal(name);
    d3.select('#modalContainer').html(modal.html);
    document.getElementById(name).style.display='block';
    });

//hightlight children
function highlight(parent,event){
    for(let child of parent.children){
        var color = (event === 'mouseover') ? 'red' : 'black';
        document.getElementById(child).style.stroke= color ;
    }
}

//mouse over interaction
tree.selectAll('rect')
    .on('mouseover',function(d, i) { 
        var godData = d.srcElement.attributes;
        var name = godData.godName.value;
        highlight(godMap[name],'mouseover');
        d3.select(this)
        .transition()
//        .attr("width",cardWidth+20)
//        .attr("height",cardHeight+20)
    });

//mouse out interaction
tree.selectAll('rect')
    .on('mouseout',function(d, i) {
        var godData = d.srcElement.attributes;
        var name = godData.godName.value;
        highlight(godMap[name],'mouseout');
        d3.select(this)
        .transition()
//        .attr("width",cardWidth)
//        .attr("height",cardHeight)
    });

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

function pathMaker(pathType,source,target,name,union,id){
  let line = tree.append("path")
                  .attr("class",name+" "+union)
                  .attr("id",id)
                  .attr("d",pathType(source,target));
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

function familyMaker(wife,husband,child,name,id){
  let line = tree.append("path")
                  .attr("class",name)
                  .attr("id",id)
                  .attr("d",parentsChild(wife,husband,child));
   wife.children.push(id);
   husband.children.push(id);
   return line;
}

//Only 1 parent
function singleParent(source,target){
    return  "M"+(source.x+cardWidth/2)+","+(source.y+cardHeight)+
            "v"+downLink+
            "H"+(target.x+cardWidth/2)+
            "V"+target.y
}

//Spouse path function
function spousePath(source,target){
     return  "M"+(source.x+cardWidth/2)+","+(source.y+cardHeight)+
            "v"+downLink+
            "H"+(target.x+cardWidth/2)+
            "V"+(target.y+cardHeight)
}

//Spouse path function
function spouseIncest(source,target){
     return  "M"+(source.x+cardWidth/2)+","+(source.y+cardHeight)+
            "v"+downLink+
            "H"+(target.x-20)+
            "V"+(target.y+cardHeight+downLink)+
            "H"+(target.x+cardWidth/2)+
            "V"+(target.y+cardHeight)
}

//2 parents to child
function parentsChild(wife,husband,child){
    return "M"+((wife.x+husband.x+cardWidth)/2)+","+(wife.y+cardHeight+downLink)+
            "v"+downLink+
            "H"+(child.x+cardWidth/2)+
            "V"+(child.y)
}