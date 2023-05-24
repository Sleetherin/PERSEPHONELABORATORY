import { InputHandler } from "../input_handler.js";
import { Player } from "../player.js";


export class MainLaboratory {
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
        context.fillStyle = 'fuchsia';
        context.fillRect(0,0,this.width,this.height);

        /**
         * Door to the cold room
         */
        context.fillStyle = 'black';
        context.fillRect(0,600,10,150);

         /**
         * Door to the office
         */
         context.fillStyle = 'black';
         context.fillRect(1400,0,150,10);

         /**
         * Door to the library
         */
        context.fillStyle = 'black';
        context.fillRect(this.width - 10,400,10,150);

    }
}