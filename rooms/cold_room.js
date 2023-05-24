import { InputHandler } from "../input_handler.js";
import { Player } from "../player.js";


export class ColdRoom
{
    constructor(width,height)
    {
        this.width = width;
        this.height = height;
        this.input = new InputHandler(this);
        this.player = new Player(this);
        this.lastKey = undefined;
    }

    update()
    {

    }

    draw(context)
    {
        context.fillStyle = 'rosybrown';
        context.fillRect(0,0,this.width,this.height);

        /**
         * Door to garden
        */
          context.fillStyle = 'black';
          context.fillRect(300,0,150,10);
        
        /**
         * Door to laboratory
        */
        context.fillStyle = 'black';
        context.fillRect(this.width - 10,600,10,150);
    
    }
}