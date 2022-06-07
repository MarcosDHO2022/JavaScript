//En proceso de optimización...

function snake() {
    var myGamePiece;  //La pieza de movimiento y .
    var blueberry;    //Los cuadrados azules que salen, que se supone que tienen que dar puntos.
    var borderx1;     //borderx o bordery son los bordes verdes para evitar que se salga del area.
    var bordery1;
    var borderx2;
    var bordery2;
    var score = 0;  //Puntos... duh
    var x = 0;    //Coordenadas X que ayuda para varias cosas.
    var y = 0;    //Coordenadas Y que ayuda para varias cosas.
    var gspeed = 3;

    function component(width, height, color, x, y) {   //Constructor, ayuda para crear los jugadores, objectos o obstaculos. Mirenlo como una función para crear algo.
        this.width = width;                           //Además, toma en cuenta el ancho, alto, color, coordenada X y Y.
        this.height = height;
        this.speedX = 0;          //Se establecen el ancho, altura, velocidades y coordenadas al objecto.
        this.speedY = 0;
        this.x = x;
        this.y = y;                 
        this.update = function(){     //Se usa la función de update() para irse actualizando.
          ctx = myGameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPos = function() {    //Cosas de movimiento.
          this.x += this.speedX;
          this.y += this.speedY;
        }
        this.crashWith = function(otherobj) {   //Función de colisión.
          var myleft = this.x;
          var myright = this.x + (this.width);
          var mytop = this.y;
          var mybottom = this.y + (this.height);
          var otherleft = otherobj.x;
          var otherright = otherobj.x + (otherobj.width);
          var othertop = otherobj.y;
          var otherbottom = otherobj.y + (otherobj.height);
          var crash = true;
          if ((mybottom < othertop) ||
          (mytop > otherbottom) ||
          (myright < otherleft) ||
          (myleft > otherright)) {
            crash = false;
          }
          return crash;
        }
    }

    function startGame() {    //Esto inicia el juego. Se debe llamar en el index.html.
        myGameArea.start();
        borderx1 = new component(480, 10, "green", 0, 0);   //Los bordes, la pieza del jugador (cuadrado rojo) y los blueberries (puntos).
        bordery1 = new component(10, 480, "green", 0, 0);
        borderx2 = new component(480, 10, "green", 0, 260); //A la hora de crear un componente, es importante tomar en cuenta que esto funciona del siguiente modo: (width, height, color, x, y)
        bordery2 = new component(10, 480, "green", 470, 0);
        myGamePiece = new component(30, 30, "red", 60, 120);
        blueberry = new component(8, 8, "blue", 140, 120);
    }
}
