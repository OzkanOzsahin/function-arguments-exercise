// with no arguments

const paint = function () {

   console.log("the wall has been painted red");

};



paint();

// Single argument

const paintWall2 = function (color) {
   console.log("The wall has been painted" + color)
}

console.log("The wall has been painted ${color}");
paintWall2("green");
paintWall2("blue");

// Multiple argumenst

const paintWall3 = function (whichWall, color) {

   console.log(`The ${whichWall} wall has been painted ${color}`);
}
paintWall3("south-east", "blue");
paintWall3("north", "yellow");

const paintWall4 = function (color, whichWall) {
   console.log(`The ${whichWall} wall has been painted ${color}`);

};
paintWall4("south-east", "purple");

const paintWall5 = function (color, whichWall) {
   console.log(`The ${whichWall} wall has been painted ${color}`);

}
paintWall5("blue", "west");