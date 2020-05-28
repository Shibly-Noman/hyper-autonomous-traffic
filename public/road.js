const road = {
    setRoad: function(startX, startY, endX, endY){
        if(startX === endX){
            stroke(255);
            strokeWeight(4)
            line(startX, startY, endX, endY);
            line(startX+100, startY, endX+100, endY);
        }
        else if(startY === endY){
            stroke(255);
            strokeWeight(4)
            line(startX, startY, endX, endY);
            line(startX, startY+100, endX, endY+100);
            line(endX-40, endY+10, endX, endY+10);
            line(endX-40, endY+20, endX, endY+20);
            line(endX-40, endY+30, endX, endY+30);
            
        }
    },
    drawRoad: function(){
        this.setRoad(100, 200, 100, 400);
        this.setRoad(0, 100, 400, 100);
        this.setRoad(100, 600, 600, 600);
    } 
}