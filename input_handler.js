export class InputHandler{
   constructor(room){
       this.room = room;
       this.touchY = '';
       this.touchTreshold = 30;
       window.addEventListener('keydown', e => {
           this.room.lastKey = 'P' + e.key;
       });
       window.addEventListener('keyup', e => {
           this.room.lastKey = 'R' + e.key;
       });
   }
}