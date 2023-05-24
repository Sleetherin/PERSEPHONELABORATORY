//import { InputHandler } from "../input_handler.js";
import { Player } from "../player.js";


export class Entrance
{
    constructor(width,height)
    {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
    }

    update(deltaTime)
    {   
        this.time += deltaTime;
        
    }

    draw(context)
    {
        context.fillStyle = 'silver';
        context.fillRect(0,0,this.width,this.height);
        
        /**
         * Door to office
         */
        context.fillStyle = 'black';
        context.fillRect(0,200,10,150);
      

        /**
         * Door to library
         */
        context.fillStyle = 'black';
        context.fillRect(0,700,10,150);

    }
}