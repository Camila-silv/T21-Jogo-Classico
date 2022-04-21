


//placar
let comprimetoPlacar = 50;
let alturaPlacar = 50;

//meu placar
let meusPontos = 0;
let xMeuPlacar = 133;
let yMeuPlacar = 20;


//placar do oponente
let pontosDoOponente = 0;
let xPlacarOponente = 375;
let yPlacarOponente = 20;

//variaveis da bolinha
let xBolinha = 290;
let yBolinha = 230;
let diametro = 20;
let raio = diametro / 2;
let xVelocidadeDaBolinha = 6;
let yVelocidadeDaBolinha = 6;

//variaveis da raquete
let alturaRaquete = 75;
let diametroRaquete = 10;

//minha raquete
let xRaquete = 10;
let yRaquete = 190;

//raquete do oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 190;
let velocidadeYOponente;






function setup() {
  createCanvas(600, 460);
  
}

function draw() {

  background(0);
  mostraBolinha();  
  colisao();
  mostraRaquete(xRaquete,yRaquete,diametroRaquete,alturaRaquete);
  mostraRaquete(xRaqueteOponente ,yRaqueteOponente ,diametroRaquete,alturaRaquete);  
  colisaoComRaquete();
  colisaoComRaqueteOponente();
  mostraPlacar(xMeuPlacar,yMeuPlacar,comprimetoPlacar,alturaPlacar);
  mostraPlacar(xPlacarOponente,yPlacarOponente,comprimetoPlacar,alturaPlacar); 
  vencedor();
  movimentoOponente();
  movimentoRaquete();
  movimentoDaBolinha();
  
}

function vencedor(){

  if(meusPontos >= 5){

    alert("VOCÊ GANHOU DA MÁQUINA!!!!!");

    meusPontos = 0;
    pontosDoOponente = 0;

  }

  if(pontosDoOponente >= 5){

    alert("A MÁQUINA NEM PRECISOU DE UM ALGORITMO MUITO COMPLEXO PRA TE GANHAR :V");

    pontosDoOponente = 0;
    meusPontos = 0;
  }
}


function reset(){

  meusPontos = 0;
  pontosDoOponente = 0;
  
}


function mostraRaquete(x,y,diametro,altura){
  fill(255);
  rect(x, y, diametro, altura);
  
}

function mostraBolinha(){  
  fill(255);
  circle(xBolinha, yBolinha, diametro);
}

function movimentoDaBolinha(){
  xBolinha += xVelocidadeDaBolinha;
  //ou xBolinha = xBolinha + xVelocidadeDaBolinha;
  yBolinha += yVelocidadeDaBolinha;
  //ou yBolinha = yBolinha + yVelocidadeDaBolinha;
  
}

function movimentoRaquete(){

  if(yRaquete > 0 ){
    if(keyIsDown(UP_ARROW))
      {
        yRaquete -= 5;
      }
  }
    
  if(yRaquete < 383){

    if(keyIsDown(DOWN_ARROW))
      {
        yRaquete += 5;
      }
  }  
}

function colisao(){
  
  if(xBolinha > 590)
     { 
       xVelocidadeDaBolinha *= - 1;
       
       meusPontos += 1;
     }
  if( xBolinha < 10)
    {
       xVelocidadeDaBolinha *= - 1;
       
       pontosDoOponente += 1;
    }
  
  if(yBolinha > 400 || yBolinha < 80)
     { 
       yVelocidadeDaBolinha *= - 1;
        
     }
  
}

function colisaoComRaquete(){
  if(xBolinha - raio < xRaquete + diametroRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete)
    {
      xVelocidadeDaBolinha *= - 1;
     
    }
}

function colisaoComRaqueteOponente(){
  if(xBolinha + diametro > xRaqueteOponente + diametroRaquete && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente)
    {
       xVelocidadeDaBolinha *= -1;
    
    }
}


function mostraPlacar(x,y,comprimetoPlacar,alturaPlacar){
  fill(255); 
  
  rect(x,y,comprimetoPlacar,alturaPlacar);  
  fill(0);
  textSize(30);
  textAlign(CENTER);
  text(pontosDoOponente, 400, 55); 
  text(meusPontos, 155, 55);  

}

function movimentoOponente(){
   velocidadeYOponente = (yBolinha - yRaqueteOponente -               diametroRaquete )/ 2 - 32;
    yRaqueteOponente += velocidadeYOponente;
}







































