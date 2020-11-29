let width = window.innerWidth;
let height = window.innerHeight;

let tree = d3.select("#familyTree").append("svg")
             .attr("width",width)
             .attr("height",height)
             .append("g");

let familyTree = [];

//make a shit ton of gods
let Chaos = new God("Chaos",width/2,50,"img/corgi.jpeg");
let Tartarus = new God("Tartarus",20,150,"img/corgi.jpeg");
let Gaia = new God("Gaia",120,150,"img/corgi.jpeg");
let Eros = new God("Eros",220,150,"img/corgi.jpeg");
let Erebus = new God("Erebus",320,150,"img/corgi.jpeg");
let Nyx = new God("Nyx",420,150,"img/corgi.jpeg");
let Typhon = new God("Typhon",(Tartarus.x+Gaia.x)/2,300,"img/corgi.jpeg");

//push them into an array
familyTree.push(Chaos);
familyTree.push(Tartarus);
familyTree.push(Gaia);
familyTree.push(Eros);
familyTree.push(Erebus);
familyTree.push(Nyx);
familyTree.push(Typhon);

//make Cards
for(let god of familyTree){
    god.view();
}

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

function makeConnections(input){
   let line = tree.append("path")
                  .attr("d",pathMaker(input));
}

function pathMaker(input){
    return  "M"+input.source.x+","+input.source.y+
            "v 100"+
            "H"+input.target.x+
            "V"+input.target.y
}

function isSpouse(input){
    
}