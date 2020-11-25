let options;
let data;
let familyTree;
let jsonObj = [];

function makeOptions(){
    return options = {
        target: "#familyTree",
        debug: true,
        hideMarriageNodes: true,
        marriageNodeSize: 10,
        nodeWidth: 100,
        nodeHeight: 200,
        height: 800,
        width: 1200,
        callbacks: {
//            nodeRenderer: function(name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer) {
//                let node = '';
//                    node += '<div ';
//                    node += 'style="height:100%;width:100%;" ';
//                    node += 'class="' + nodeClass + '" ';
//                    node += 'id="node' + id + '">\n';
//                    node += '<img src="'+"img/corgi.jpeg"+'"';
//                    node += '>';
//                    node += textRenderer(name, extra, textClass);
//                    node += '</div>';
//                return node;
//            }
        }
    }
}

//make a shit ton of gods
let Chaos = new God("Chaos","woman","nodeText","img/corgi.jpeg");
let Tartarus = new God("Tartarus","man","nodeText","img/corgi.jpeg");
let Gaia = new God("Gaia","woman","nodeText","img/corgi.jpeg");
let Eros = new God("Eros","man","nodeText","img/corgi.jpeg");
let Erebus = new God("Erebus","man","nodeText","img/corgi.jpeg");
let Nyx = new God("Nyx","woman","nodeText","img/corgi.jpeg");
let Typhon = new God("Typhon","man","nodeText","img/corgi.jpeg");

//gName,Class,textClass

jsonObj = [{
  name: Chaos.name, 
  class: Chaos.class,             
  textClass: Chaos.textClass,                
  marriages: [{                          
    spouse: {                             
      name: Chaos.name,
      class: Chaos.class
    },
    children: [{                          
      name: Tartarus.name,
      class: Tartarus.class,             
      textClass: Tartarus.textClass,
        marriages: [{                          
        spouse: {                             
          name: Gaia.name,
          class: Gaia.class
        },
        children: [{                          
          name: Typhon.name,
          class: Typhon.class,             
          textClass: Tartarus.textClass,
          }
        ]
        } //ends Tartarus-Gaia marriage
       ],
      extra: {
        image:Tartarus.image
        } 
    },{
      name: Gaia.name,
      class: Gaia.class,             
      textClass: Gaia.textClass,
      extra: {
        image:Gaia.image
      } 
    },{
      name: Eros.name,
      class: Eros.class,             
      textClass: Eros.textClass,
      extra: {
        image:Eros.image
      } 
    },{
      name: Erebus.name,
      class: Erebus.class,             
      textClass: Erebus.textClass,
      extra: {
        image:Erebus.image
      } 
    },{
      name: Nyx.name,
      class: Nyx.class,             
      textClass: Nyx.textClass,
      extra: {
        image:Nyx.image
      } 
    }
    ]
  }
  ],
  extra: {
    image:Chaos.image
  }                               
}]

makeOptions();

familyTree = dTree.init(jsonObj,options);

//familyTree = d3.json("familyTree.js", function(error, treeData) {
//      	dTree.init(treeData,options);
//    	});



//let width = window.innerWidth;
//let height = window.innerHeight;
//
//let tree = d3.select("#familyTree").append("svg")
//             .attr("width",width)
//             .attr("height",height);
//
//let data;
//let familyTree;
//let familyInfo;
//let zoom;
//
////call family tree creator
//makeTree();
//
//async function makeTree(){
//    data = await prepareData('familyTree.csv','greekName','parent');
//    familyTree = d3.tree().size([width,600]);
//    familyInfo = familyTree(data);
//    console.log(familyInfo);
//    console.log(familyInfo.descendants());
//    console.log(familyInfo.links());
//    //get descendents
//    let info = await familyInfo.descendants(); 
//    //make cards
//    for(let i = 0; i<info.length;i++){ 
//        makeCards(info[i]);
//    }
//    //get links
//    let link = await familyInfo.links();
//    //make connections
//    for(let i = 0; i<link.length;i++){ 
//        makeConnections(link[i]);
//    }
//}
//
//async function prepareData(source,nameKey,parentKey){
//    let input = await d3.csv(source);
//    data = await d3.stratify()
//             .id(d => d[nameKey])
//             .parentId(d => d[parentKey])
//             (input)
//    return data;
//}
//
//function makeCards(source){
//    tree.append("rect") //rect background
//        .attr("x",source.x)
//        .attr("y",source.y);
//    tree.append("text") //text
//        .text(source.data.greekName)
//        .attr("x",source.x)
//        .attr("y",source.y+15);
//}
//
//function makeConnections(input){
//   let line = tree.append("path")
//                  .attr("d",pathMaker(input));
//}
//
//function pathMaker(input){
//    return  "M"+input.source.x+","+input.source.y+
//            "v 100"+
//            "H"+input.target.x+
//            "V"+input.target.y
//}
//
//function isSpouse(input){
//    
//}