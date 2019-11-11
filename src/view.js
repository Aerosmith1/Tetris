export default class View{

    static colors ={

        '1': 'cyan',
        '2': 'blue',
        '3': 'orange',
        '4': 'yellow',
        '5': 'green',
        '6': 'red',
        '7': 'purple'

    };

    constructor(element,width,height,rows,columns){

        this.element=element;
        this.height=height;
        this.width=width;

        this.canvas = document.createElement('canvas');
        this.canvas.width=this.width;
        this.canvas.height=this.height;
        this.context = this.canvas.getContext("2d");
        this.blockwidth = this.width/columns;
        this.blockheigth = this.height/rows;
        this.element.appendChild(this.canvas);

        

    }

    renderplayfield( {playfield}){
        this.clearscr();
        for (let y = 0; y < playfield.length; y++) {
            for(let x=0;x<playfield[y].length;x++){

                if(playfield[y][x]){
    
                    this.context.fillStyle = View.colors[playfield[y][x]];
                    this.context.strokeStyle = "black";
                    this.context.lineWidth = 2;
                    this.context.fillRect(x * this.blockwidth,y * this.blockheigth,this.blockwidth,this.blockheigth);
                    this.context.strokeRect(x * this.blockwidth,y * this.blockheigth,this.blockwidth,this.blockheigth);

                    
    
                }
    
            }
            
        }
    
    }
    
    
     clearscr()  {

        this.context.clearRect(0,0,this.width,this.height);

     } 
        


}