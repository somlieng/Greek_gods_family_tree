class God{
    constructor(gName,x,y,image,width,height,children,spouse){
        this.greekName = gName;
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.children = [];
        this.spouse = [];
//        this.romanName = rName;
//        this.godType = type;
//        this.godTitle = title;
//        this.description = desc;
//        this.image = picture;
    }
    
    clickCard(){
        console.log("clicked");
    }
    
    //God cards
    view(){ 
    tree.append("rect") //add card
        .attr("x",this.x)
        .attr("y",this.y)
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("godName",this.greekName)
        .attr("children",this.children)
        .attr("width",this.width)
        .attr("height",this.height)
        .attr("cursor", "grab")
    tree.append("text") //text
        .text(this.greekName)
        .attr("x",this.x)
        .attr("y",this.y+20);
    tree.append("svg:image")
        .attr("xlink:href",this.image)
        .attr("x", this.x)
        .attr("y", this.y+20)
        .attr("height", 20);
//        .attr("width", 20);
    }
    
    hover(){
    
    }
}

//static get variable () {
//
//return value;
//
//}