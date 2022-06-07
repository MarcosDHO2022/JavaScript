var myGamePiece;  //La pieza de movimiento y .
var blueberry;    //Los cuadrados azules que salen, que se supone que tienen que dar puntos.
var borderx1;     //borderx o bordery son los bordes verdes para evitar que se salga del area.
var bordery1;
var borderx2;
var bordery2;
var score = 0;  //Puntos... duh
var x = 0;    //Coordenadas X que ayuda para varias cosas.
var y = 0;    //Coordenadas Y que ayuda para varias cosas.
var gspeed = 100;
var z = 1;
var audio = new Audio("pop.mp3");
var time = 0;

function startGame() {    //Esto inicia el juego. Se debe llamar en el index.html.
    myGameArea.start();
    borderx1 = new component(480, 10, "yellow", 0, 0);   //Los bordes, la pieza del jugador (cuadrado rojo) y los blueberries (puntos).
    bordery1 = new component(10, 480, "green", 0, 0);
    borderx2 = new component(480, 10, "green", 0, 260); //A la hora de crear un componente, es importante tomar en cuenta que esto funciona del siguiente modo: (width, height, color, x, y)
    bordery2 = new component(10, 480, "green", 470, 0);
    myGamePiece = new component(30, 30, "red", 60, 120);
    blueberry = new component(8, 8, "blue", 140, 120);
}

var myGameArea = {    //Area del juego.
    canvas : document.createElement("canvas"),  //Crea el canva.
    start : function() {
        this.canvas.width = 480;  //Tamaño de la ventana del juego.
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
      window.addEventListener('keydown', function (e){  //Estableciendo para que el teclado funcione.
        myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys[e.keyCode] = true;
      })
      window.addEventListener('keyup', function (e){
        myGameArea.keys[e.keyCode] = false;
      })
      },
      clear : function() {  //Esto, junto a la función de update(), limpia primero la pantalla y luego lo actualiza con las nuevas coordenadas X y Y.
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
      stop : function() {
        clearInterval(this.interval);
      }
}

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
    this.crashWithPoint = function(otherobj) {    //Función de colisión con los blueberry (SE DETIENE EL JUEGO).
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
      return crash;//Detiene el juego.
    }
}

function updateGameArea() {                                                          
  if (myGamePiece.crashWithPoint(blueberry)){     //Esto es que, cuando choca con un blueberry, se añade un punto, 
    audio.play();
    score++;                                      //se cambia la posición y se aumenta la velocidad.
    if (gspeed<100){   //Límite de velocidad Joel :P
      gspeed++;
    }
    x = getRndInteger(50, 450);
    y = getRndInteger(20, 240); 
    blueberry = new component(8, 8, "blue", x, y);
  }
  if ((myGamePiece.crashWith(borderx1)) || (myGamePiece.crashWith(borderx2)) || (myGamePiece.crashWith(bordery1)) || (myGamePiece.crashWith(bordery2))){
    endgame();
  }
  myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -gspeed; }   //Esto son las teclas de movimiento. Usa las flechas.
  if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = gspeed; }
  if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -gspeed; }
  if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = gspeed; }
  myGamePiece.newPos();  //newPos() cambia la posición acorde a la tecla de movimiento. Update() refresca el canva para crear la sensación de una imágen fluida lol XD.
  blueberry.newPos();
  blueberry.update();
  myGamePiece.update();
  borderx1.update();
  bordery1.update();
  borderx2.update();
  bordery2.update();
  time++;
  document.getElementById("score").innerHTML = "Score: " + score;     //Cosa de los puntos que se actualizan segun se agarran los blueberries.
  document.getElementById("time").innerHTML = "Time: " + time;
}

function getRndInteger(min, max) {                                //Función para conseguir un valor aleatorio.  
  return Math.floor(Math.random() * (max - min + 1) ) + min;      //Conviene usarlo para actualizar la posición
}                                                                 //de los blueberries cuando se agarran.

function endgame(){
  if (z == 1){
    document.write("Score: " + score + "<br>");
  }
  z++;
}