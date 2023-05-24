import { ColdRoom } from "./cold_room.js";
import { Entrance } from "./entrance.js";
import { Garden } from "./garden.js";
import { Library } from "./library.js";
import { MainLaboratory } from "./main_lab.js";
import { Office } from "./office.js";
import { SecretRoom } from "./secret_room.js";
import { InputHandler } from "../input_handler.js";
import { Player } from "../player.js";



export class RoomManager{
    constructor(width,height,context){
       this.width = width;
       this.height = height;
       this.context = context;
       this.lastKey = undefined;
       this.input = new InputHandler(this);
       this.player = new Player(this);
       this.room;
    }

    switchRoom(newRoom){
        switch(newRoom){
            case 'cold_room':
                console.log('Room where we store bio stuff');
                this.room = new ColdRoom(this.width,this.height);
                this.player.state = 'cold_room';
                break;
            case 'entrance':
                console.log('The very first room.');
                this.room = new Entrance(this.width,this.height);
                this.player.state = 'entrance';
                break;
            case 'garden':
                console.log('Magic plants room.');
                this.room = new Garden(this.width,this.height);
                this.player.state = 'garden';
                break;
            case 'library':
                console.log('Persephone library');
                this.room = new Library(this.width,this.height);
                this.player.state = 'library';
                break;
            case 'main_lab':
                console.log('This is the main laboratory.');
                this.room = new MainLaboratory(this.width,this.height);
                this.player.state = 'main_lab';
                break;
            case 'office':
                console.log('This is Persephone office.');
                this.room = new Office(this.width,this.height);
                this.player.state = 'office';
                break;
            case 'secret_room':
                console.log('This is the secret room of the laboratory.');
                this.room = new SecretRoom(this.width,this.height);
                this.player.state = 'secret_room';
                break; 
            default:
                console.log('The very first room');
                this.room = new Entrance(this.width,this.height);
                this.player.state = 'entrance';
                break;
        }
    }

    

    update(deltaTime)
    {
        this.switchRoom(this.player.state);
        this.room.update();
        this.player.update(deltaTime);
    }
 
    draw(context)
    {
      this.room.draw(context); 
      this.player.draw(context);
    }


}