class God{
    constructor(gName,x,y,image,width,height,cardType,godType,children,spouse){
        this.greekName = gName;
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.cardType = cardType;
        this.godType = godType;
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
    
    var picHeight = this.width-20;
    tree.append("rect") //add card
        .attr("x",this.x)
        .attr("y",this.y)
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("godName",this.greekName)
        .attr("class",this.godType)
        .attr("children",this.children)
        .attr("width",this.width)
        .attr("height",this.height)
        .attr("cursor", "grab")
    if(this.cardType === "small"){
        tree.append("text") //text
            .text(this.greekName)
            .attr("class","text-"+this.godType)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+(this.height/2));
    }else{
        tree.append("svg:image")
            .attr("xlink:href",this.image)
            .attr("x", this.x+10)
            .attr("y", this.y+10)
            .attr("height",picHeight);
        tree.append("text") //text
            .text(this.greekName)
            .attr("class","text-"+this.godType)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+picHeight+30);
        }
    }
    
    hover(){
    
    }
}

//static get variable () {
//
//return value;
//
//}