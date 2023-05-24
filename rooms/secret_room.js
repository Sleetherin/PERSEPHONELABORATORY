import { InputHandler } from "../input_handler.js";
import { Player } from "../player.js";

export class SecretRoom{
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
        context.fillStyle = 'aquamarine';
        context.fillRect(0,0,this.width,this.height);

        /**
         * Door to office
         */
        context.fillStyle = 'black';
        context.fillRect(30,this.height - 10,150,10);
    }
}