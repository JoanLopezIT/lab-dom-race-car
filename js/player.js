class Player{
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img"); // es el coche

// le damos forma al coche
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }


    move(){
        this.left += this.directionX;
        this.top += this.directionY;

     // esto permite que el coche no sobrepase los limites de la pantalla

        if(this.left < 0){
            this.left = 0
        }
        if(this.top < 0){
            this.top = 0
        }

        if(this.left > this.gameScreen.offsetWitdth - this.width){
        this.left = this.gameScreen.offsetWitdth - this.width
}

   if(this.top > this.gameScreen.offsetHeight - this.height){
   this.top = this.gameScreen.offsetHeight - this.height
}
this.updatePosition();
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
    didCollide(obstacle){
        // creamos la hitbox con getbounding
        const playerHitbox = this.element.getBoundingClientRect();
        const obstacleHitBox = obstacle.element.getBoundingClientRect();

        if(
            playerHitbox.left < obstacleHitBox.right &&
            playerHitbox.right > obstacleHitBox.left &&
            playerHitbox.top < obstacleHitBox.bottom &&
            playerHitbox.bottom > obstacleHitBox.top 
        ){
            return true
        }
        else{
            return false;
        }
    }    

}