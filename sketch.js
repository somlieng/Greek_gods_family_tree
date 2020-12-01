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

let cardAbove = cardHeight+cardTopSpace;
let cardLeft = cardWidth+betweenCards;

let tree = d3.select("#familyTree").append("svg")
             .attr("width",width)
             .attr("height",height)
             .append("g");

let familyTree = [];

let lineType = {main:"main",
                child:"child"};

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

//make Cards
for(let god of familyTree){
    god.view();
}

//make Connections
parentChild(Chaos,Tartarus,lineType.main);

//click interaction
tree.selectAll('rect')
    .on('click',function(d, i) { 
    var godData = d.srcElement.attributes;
    var name = godData.godName.value
    console.log(name);
    var modal = new Modal(name);
    d3.select('#modalContainer').html(modal.html);
    document.getElementById(name).style.display='block';
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

function parentChild(source,target,name){
   let line = tree.append("path")
                  .attr("class",name)
                  .attr("d",pathMaker(source,target));
   console.log("LINE");
    return line;
}

function pathMaker(source,target){
    return  "M"+(source.x+cardWidth/2)+","+(source.y+cardHeight)+
            "v 20"+
            "H"+(target.x+cardWidth/2)+
            "V"+target.y
}

function isSpouse(input){
    
}