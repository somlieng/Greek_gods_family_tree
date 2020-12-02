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
             .attr("width",width)
             .attr("height",height)
             .append("g");

let familyTree = [];

let lineType = {main:"main",
                child:"child",
                personification:"personification",
                monster:"monster"};

let godMap = {};

//make a shit ton of gods
let Chaos = new God("Chaos",width/2-cardWidth/2,margins.top,"img/corgi.jpeg",cardWidth,cardHeight);
let ErosElder = new God("Eros Elder",margins.left,Chaos.y+cardAbove,"img/corgi.jpeg",cardWidth,cardHeight);
let Tartarus = new God("Tartarus",ErosElder.x+cardLeft,Chaos.y+cardAbove,"img/corgi.jpeg",cardWidth,cardHeight);
let Gaia = new God("Gaia",width/2-cardWidth/2,Chaos.y+cardAbove,"img/corgi.jpeg",cardWidth,cardHeight);
let Erebus = new God("Erebus",Gaia.x+cardLeft,Chaos.y+cardAbove,"img/corgi.jpeg",cardWidth,cardHeight);
let Nyx = new God("Nyx",Erebus.x+cardLeft,Chaos.y+cardAbove,"img/corgi.jpeg",cardWidth,cardHeight);
let Typhon = new God("Typhon",(Tartarus.x+Gaia.x)/2,Tartarus.y+cardAbove,"img/corgi.jpeg",cardWidth,cardHeight);

//push them into an array
familyTree.push(Chaos);
familyTree.push(Tartarus);
familyTree.push(Gaia);
familyTree.push(ErosElder);
familyTree.push(Erebus);
familyTree.push(Nyx);
familyTree.push(Typhon);

//make Cards and push into godMap
for(let god of familyTree){
    god.view();
    godMap[god.greekName] = god;
}

//console.log(godMap);

//make chaos connections
pathMaker(singleSource,Chaos,ErosElder,lineType.main,"ChaosErosE");
pathMaker(singleSource,Chaos,Tartarus,lineType.main,"ChaosTar");
pathMaker(singleSource,Chaos,Gaia,lineType.main,"ChaosGaia");
pathMaker(singleSource,Chaos,Erebus,lineType.main,"ChaosEre");
pathMaker(singleSource,Chaos,Nyx,lineType.main,"ChaosNyx");

//make spouse connections
pathMaker(spousePath,Gaia,Tartarus,lineType.personification,"GaiaTar");
pathMaker(spousePath,Nyx,Erebus,lineType.personification,"NyxEre");

//make child connections
familyMaker(Gaia,Tartarus,Typhon,lineType.monster,"GaiaTartarusTyphon");

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

function pathMaker(pathType,source,target,name,id){
  let line = tree.append("path")
                  .attr("class",name)
                  .attr("id",id)
                  .attr("d",pathType(source,target));
   source.children.push(id);
   if(pathType === spousePath){
       target.children.push(id);}
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
function singleSource(source,target){
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

//2 parents to child
function parentsChild(wife,husband,child){
    return "M"+((wife.x+husband.x+cardWidth)/2)+","+(wife.y+cardHeight+downLink)+
            "v"+downLink+
            "H"+(child.x+cardWidth/2)+
            "V"+(child.y)
}