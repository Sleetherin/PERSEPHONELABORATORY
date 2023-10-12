
export class Player{
    constructor(room)
    {
      this.room = room;
      this.x = 100;
      this.y = 100;
      this.width = 100;
      this.height = 100;
      this.frameX = 0;
      this.frameY = 0;
      this.speedX = 0;
      this.speedY = 0;
      this.maxSpeed = 10;
      this.maxFrame = 20;
      this.fps = 15;
      this.frameInterval = 1000/this.fps;
      this.frameTimer = 0;
      this.state = 'entrance';
  
    }
    
    setSpeed(speedX,speedY){
      this.speedX = speedX;
      this.speedY = speedY;
    }
    
    update(deltaTime)
    { 
      //idle animation
      if(this.frameTimer > this.frameInterval){
        this.frameTimer = 0;
        if(this.frameX < this.maxFrame) this.frameX++;
        else this.frameX = 0;
      }else{
        this.frameTimer += deltaTime;
      }

      if(this.room.lastKey == 'PArrowLeft'){
        this.setSpeed(-this.maxSpeed, 0);
      }else if(this.room.lastKey == 'PArrowRight'){
        this.setSpeed(this.maxSpeed, 0);
      }else if(this.room.lastKey == 'PArrowUp'){
        this.setSpeed(0, -this.maxSpeed);
      } else if(this.room.lastKey == 'PArrowDown'){
      this.setSpeed(0, this.maxSpeed);
      }else{
        this.setSpeed(0,0);
      }
     
     this.x += this.speedX;
     this.y += this.speedY;

      /**
       * Manage the movement of the player in entrance
       */

      if(this.state === 'entrance')
      {
           //to go to the main office
           if(this.x < 0 && this.y >= 200 && this.y < 350)
           {
             this.state = 'office';
             this.x = this.room.width - this.width;
          //to go to the library
           } else if(this.x < 0 && this.y >= 700 && this.y < 850)
           {
             this.state = 'library';
             this.x = this.room.width - this.width;
           } else if(this.x < 0)
           {
             this.x = 0;
           }

           //upper border
           if(this.y < 0)
           {
             this.y = 0;
           }

           //lower border
           if(this.y > this.room.height - this.height)
           {
             this.y = this.room.height - this.height;
           }

           //right border
           if(this.x > this.room.width - this.width)
           {
             this.x = this.room.width - this.width;
           }
      } 


      /**
       * Manage the movement of the player in library
       */
      if(this.state === 'library')
      {
          if(this.y < 0  && this.x >= 750 && this.x < 900)
          {
            this.state = 'office';
            this.y = this.room.height - this.height;
            this.x = 1400;
          }
          else if(this.x < 0 && this.y >= 400 && this.y < 550)
          {
            this.state = 'main_lab';
            this.x = this.room.width - this.width;
          }
          else if(this.x > this.room.width -this.width && this.y >= 700 && this.y < 850)
          {
            this.state = 'entrance';
            this.x = 10;
          }

          //upper border
          if(this.y < 0 && (this.x < 750 || this.x >= 900))
          {
            this.y = 0;
          }

          //lower border
          if(this.y > this.room.height - this.height)
          {
            this.y = this.room.height - this.height;          
          }

          //right border
          if(this.x > this.room.width - this.width && (this.y <= 700 || this.y > 850))
          {
            this.x = this.room.width - this.width;
          }

          //left border
          if(this.x < 0 && (this.y <= 400 || this.y > 550))
          {
            this.x = 0;
          }
      } 

      /**
       * Manage the movement of the player in Persephone's office
       */

      if(this.state === 'office')
      {
        if(this.x > this.room.width - this.width && this.y >= 200 && this.y < 350)
        {
          this.state = 'entrance';
          this.x = 10;
        } 
        else if(this.y > this.room.height - this.height && this.x >= 1350 && this.x < 1500)
        {
          this.state = 'library';
          this.y = 10;
          this.x = 800;
        } else if(this.y > this.room.height - this.height && this.x >= 500 && this.x < 650)
        {
          this.state = 'main_lab';
          this.x = 1400;
          this.y = 10;
        } else if(this.x < 0 && this.y >= 500 && this.y < 650)
        {
          this.state = 'garden';
          this.x = this.room.width;
          this.y = 800;
        }else if(this.y < 0 && this.x >= 30 && this.x < 180)
        {
          this.state = 'secret_room';
          this.y = this.room.height - this.height;
        }

        //upper border
        if(this.y < 0 && (this.x <= 30 || this.x > 180))
        {
          this.y = 0;
        }

        //lower border
        if(this.y > this.room.height - this.height && (this.x <= 500 || this.x > 1500 || (650 < this.x < 1350)))
        {
          this.y = this.room.height - this.height;
        }

        //right border
        if(this.x > this.room.width - this.width && (this.x <= 200 || this.x > 350))
        {
          this.x = this.room.width - this.width;
        }

        //left border
        if(this.x < 0 && (this.y <= 500 || this.y > 650))
        {
          this.x = 0;
        }
      }
      
      /**
       * Manage the movement of the player in the secret lab
       */
      if(this.state === 'secret_room')
      {
        if(this.y > this.room.height && this.x >= 30 && this.x < 180)
        {
          this.state = 'office';
          this.y = 10;
        }

        //upper border
        if(this.y < 0)
        {
          this.y = 0;
        }

        //lower border
        if(this.y > this.room.height - this.height && (this.x <= 30 || this.x > 180))
        {
          this.y = this.room.height - this.height;
        }

        //left border
        if(this.x < 0)
        {
          this.x = 0;
        }

        //right border
        if(this.x > this.room.width - this.width)
        {
          this.x = this.room.width - this.width;
        }
      }

      /**
       * Manage the movement of the player in the garden
       */

      if(this.state == 'garden')
      {
        if(this.x > this.room.width && this.x >= 750 && this.y < 900)
        {
          this.state = 'office';
          this.x = 10;
          this.y = 550;
        }else if(this.y > this.room.height && this.x >= 300 && this.x < 450)
        {
          this.state = 'cold_room';
          this.y = 0;
        }
   
        //upper border
        if(this.y < 0)
        {
          this.y = 0;
        }

        //lower border
        if(this.y > this.room.height- this.height && (this.x <= 300 || this.x > 450))
        {
          this.y = this.room.height- this.height;
        }

        //right border
        if(this.x > this.room.width - this.width && (this.y <= 750 || this.y > 900))
        {
          this.x = this.room.width - this.width;
        }

        //left border
        if(this.x < 0)
        {
          this.x = 0;
        }
      }

      /**
       * Manage the movement of the player in the cold room
       */
      if(this.state == 'cold_room')
      {
        if(this.y < 0 && this.x >= 300 && this.x < 450)
        {
          this.state = 'garden';
          this.y = this.room.height - this.height;
        }
        else if(this.x > this.room.width && this.y >= 600 && this.y < 750)
        {
          this.state = 'main_lab';
          this.x = 10;
        }

        //upper border
        if(this.y < 0 && (this.x <= 300 || this.x > 450))
        {
          this.y = 0;
        }
        
        //lower border
        if(this.y > this.room.height - this.height)
        {
          this.y = this.room.height - this.height;
        }

        //right border
        if(this.x > this.room.width - this.width && (this.y <= 600 || this.y > 750))
        {
          this.x = this.room.width - this.width;
        }

        //left border 
        if(this.x < 0)
        {
          this.x = 0;
        }
      }

      /**
       * Manage the movement of the player in the main laboratory
      */
      if(this.state === 'main_lab')
      {
        if(this.x < 0 && this.y >= 600 && this.y < 750)
        {
          this.state = 'cold_room';
          this.x = this.room.width;
        }
        else if(this.y < 0 && this.x >= 1400 && this.x < 1550)
        {
          this.state = 'office';
          this.x = 550;
          this.y = this.room.height - this.height;
        } 
        else if(this.x > this.room.width && this.y >= 400 && this.y < 550)
        {
          this.state = 'library';
          this.x = 0;
        }

        //upper border
        if(this.y < 0 && (this.x <= 1400 || this.x > 1550))
        {
          this.y = 0;
        }

        //lower border
        if(this.y > this.room.height - this.height)
        {
          this.y = this.room.height - this.height;
        }

        //left border
        if(this.x < 0 && (this.y <= 600 || this.y > 750))
        {
          this.x = 0;
        }

        //right border
        if(this.x > this.room.width - this.width && (this.y <= 400 || this.y > 550))
        {
           this.x = this.room.width - this.width;
        }
      }

    }
  

    draw(context)
    {  
      context.fillStyle = 'black';
      context.fillRect(this.x, this.y, this.width, this.height);
    }
}