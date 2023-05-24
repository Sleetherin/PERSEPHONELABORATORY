import { InputHandler } from "../input_handler.js";
import { Player } from "../player.js";

export class Garden {
    constructor(width,height){
        this.width = width;
        this.height = height;
        this.input = new InputHandler(this);
        this.player = new Player(this);  
        this.lastKey = undefined;
    }

    update()
    {
     
    }

    draw(context){
        context.fillStyle = 'green';
        context.fillRect(0,0,this.width,this.height);

        /**
         * Door to office
         */
        context.fillStyle = 'black';
        context.fillRect(this.width - 10,750,10,150);

        /**
         * Door to cold room 
         */
        context.fillStyle = 'black';
        context.fillRect(300,this.height - 10,150,10);
    }
}