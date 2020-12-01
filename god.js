class God{
    constructor(gName,x,y,image,width,height){
        this.greekName = gName;
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
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
        .attr("godName",this.greekName)
        .attr("width",this.width)
        .attr("height",this.height)
    tree.append("text") //text
        .text(this.greekName)
        .attr("x",this.x)
        .attr("y",this.y+20);
    }
    
    hover(){
    
    }
}

//static get variable () {
//
//return value;
//
//}