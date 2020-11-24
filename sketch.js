let width = window.innerWidth;
let height = window.innerHeight;

let tree = d3.select("#familyTree").append("svg")
             .attr("width",width)
             .attr("height",height);

let data;
let familyTree;
let familyInfo;

//call family tree creator
makeTree();

async function makeTree(){
    data = await prepareData('familyTree.csv','greekName','parent');
    familyTree = d3.tree().size([width,600]);
    familyInfo = familyTree(data);
    console.log(familyInfo);
    let info = data.descendants();
    for(let i = 0; i<info.length;i++){
        makeCards(info[i]);
    }
}

async function prepareData(source,nameKey,parentKey){
    let input = await d3.csv(source);
    data = await d3.stratify()
             .id(d => d[nameKey])
             .parentId(d => d[parentKey])
             (input)
    return data;
}

function makeCards(source){
    tree.append("rect") //rect background
        .attr("x",source.x)
        .attr("y",source.y);
    tree.append("text") //text
        .text(source.data.greekName)
        .attr("x",source.x)
        .attr("y",source.y+15);
}