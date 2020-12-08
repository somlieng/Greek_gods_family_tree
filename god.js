class God{
    constructor(gName,x,y,image,width,height,cardType,godType,domain,description,children,spouse){
        this.greekName = gName;
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.cardType = cardType;
        this.godType = godType;
        this.domain = domain;
        this.description = description;
        this.children = [];
        this.spouse = [];
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
        .attr("domain",this.domain)
        .attr("description",this.description)
        .attr("width",this.width)
        .attr("height",this.height)
//        .attr("cursor", "default")
    if(this.cardType === "small"){
        tree.append("text") //text
            .text(this.greekName)
            .attr("class","text-"+this.godType)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+(this.height/2)-5);
         tree.append("text") //text
            .text(this.domain)
            .attr("class","domain-"+this.godType+" "+"domain")
            .attr("id","domain-"+this.greekName)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+(this.height/2)+10);
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
        tree.append("text") //text
            .text(this.domain)
            .attr("class","domain-"+this.godType+" "+"domain")
            .attr("id","domain-"+this.greekName)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+picHeight+50);
        }
    }
    
}