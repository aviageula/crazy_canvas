//happy canvas
var happyCan = document.getElementById("happyCanvas");
var happyCantx = happyCan.getContext("2d");
happyCantx.moveTo(150, 150);
//left
happyCantx.lineTo(150, 250);
//buttom
happyCantx.lineTo(250, 250);
//right
happyCantx.lineTo(250, 150);
//top
happyCantx.lineTo(150, 150);
//left eye
happyCantx.moveTo(170, 170);
happyCantx.lineTo(170, 190);
happyCantx.lineTo(180, 190);
happyCantx.lineTo(180, 170);
//right eye
happyCantx.moveTo(215, 170);
happyCantx.lineTo(215, 190);
happyCantx.lineTo(225, 190);
happyCantx.lineTo(225, 170);
//nose
happyCantx.moveTo(197, 180);
happyCantx.lineTo(197, 195);
//moth
happyCantx.moveTo(180, 215);
happyCantx.lineTo(180, 225);
happyCantx.lineTo(215, 225);
happyCantx.lineTo(215, 215);

happyCantx.stroke();

var sadCan = document.getElementById("sadCanvas");
var sadCantx = sadCan.getContext("2d");
//sad canvas
sadCantx.moveTo(150, 150);
//left
sadCantx.lineTo(150, 250);
//buttom
sadCantx.lineTo(250, 250);
//right
sadCantx.lineTo(250, 150);
//top
sadCantx.lineTo(150, 150);
//left eye
sadCantx.moveTo(170, 170);
sadCantx.lineTo(170, 190);
sadCantx.lineTo(180, 190);
sadCantx.lineTo(180, 170);
//right eye
sadCantx.moveTo(215, 170);
sadCantx.lineTo(215, 190);
sadCantx.lineTo(225, 190);
sadCantx.lineTo(225, 170);
//nose
sadCantx.moveTo(197, 180);
sadCantx.lineTo(197, 195);
//moth
sadCantx.moveTo(180, 235);
sadCantx.lineTo(180, 225);
sadCantx.lineTo(215, 225);
sadCantx.lineTo(215, 235);

sadCantx.stroke();

var button = document.getElementById("change");
button.onclick = function () {
    if (button.value == "make him happy") {
        happyCan.style.display = "inline-block";
        sadCan.style.display = "none";

        button.value="make him sad";
    }
    else if(button.value == "make him sad")
    {
        sadCan.style.display = "inline-block";
        happyCan.style.display = "none";

        button.value = "make him happy";
    }
};
