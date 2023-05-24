import { RoomManager } from './rooms/room_manager.js';


window.addEventListener('DOMContentLoaded', function(){

   const canvas = document.querySelector("canvas");
   const ctx = canvas.getContext('2d');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;

    window.addEventListener('resize', ()=>{
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    let lastTime = 0;
    const game = new RoomManager(canvas.width, canvas.height,ctx);

    function animate(timeStamp){
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      ctx.clearRect(0,0,canvas.width,canvas.height);
  
      game.update(deltaTime);
      game.draw(ctx);

      requestAnimationFrame(animate);
    }

    animate(0);

});