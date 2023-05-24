import { InputHandler } from "../input_handler.js";
import { Player } from "../player.js";

export class Office{
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
        context.fillStyle = 'indigo';
        context.fillRect(0,0,this.width,this.height);

        /**
         * Door to entrance
         */
        context.fillStyle = 'yellow';
        context.fillRect(this.width - 10,200,10,150);

       /**
         * Door to library
         */
        context.fillStyle = 'yellow';
        context.fillRect(1350,this.height - 10,150,10);

        /**
         * Door to laboratory
         */
        context.fillStyle = 'yellow';
        context.fillRect(500,this.height - 10,150,10);

        /**
         * Door to garden
         */
        context.fillStyle = 'yellow';
        context.fillRect(0,500,10,150);

         /**
         * Door to secret room
         */
         context.fillStyle = 'yellow';
         context.fillRect(30,0,150,10);

        
    }
}