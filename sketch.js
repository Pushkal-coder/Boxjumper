var canvas;
var music;
var dabba,box1,box2,box3,box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    var dabba = createSprite(700,500,40,40)
    dabba.shapeColor = "white"
    var box1 = createSprite(700,550,200,20)
    box1.shapeColor = "red"
    var box2 = createSprite(480,550,200,20)
    box2.shapeColor = "pink"
    var box3 = createSprite(260,550,200,20)

    var box4 = createSprite(40,550,200,20)

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    drawSprites();
    //add condition to check if box touching surface and make it box
}
