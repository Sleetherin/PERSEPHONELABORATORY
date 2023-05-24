import { InputHandler } from "../input_handler.js";
import { Player } from "../player.js";

export class Library {
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
        context.fillStyle = 'olive';
        context.fillRect(0,0,this.width,this.height);

        /**
         * Door to entrance
         */
        context.fillStyle = 'black';
        context.fillRect(this.width - 10,700,10,150);

        /**
         * Door to laboratory
         */
        context.fillStyle = 'black';
        context.fillRect(0,400,10,150);

        /**
         * Door to office
         */
        context.fillStyle = 'black';
        context.fillRect(750,0,150,10);
    }
}