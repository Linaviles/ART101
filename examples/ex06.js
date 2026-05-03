 let count = 0;
let colors = ["Orchid", "HotPink", "Coral", "Plum"];
let colorcount = 0;

$("#desperation").click(function () {
    $("html").css("background-color", colors[colorcount]);

    count = count + 1;

    if (count < 5 ){
        $("#desperation").html("you clicked me " + count + ", and your favourite color today is: " + colors[colorcount]+ ", Fresh and Happy!");
    }
    if ((5<= count) && (count <10)){
        $("#desperation").html("you clicked me " + count + ", and your favourite color today is: " + colors[colorcount]+ ", Keep Pushing");
    }
    if (count>10) {
        $("#desperation").html("you clicked me " + count + ", and your favourite color today is: " + colors[colorcount]+", too tired....");
    }

    if (colors[colorcount] == "HotPink") {
        $("#desperation").after(" (Yay! pink) ");
    }
    
    if (colors[colorcount] == "Coral") {
        $("#desperation").after(" (ew coral) ");
    }

    else if (colors[colorcount] != "HotPink") {
        $("#desperation").after(" (Not Pink!) ");
    }

    if (colorcount == 4) {
        colorcount = 0;
        console.log("it happened");
    }
    bkg(colorcount);
    makeImage("Plum");
    
    colorcount = colorcount + 1;

});

function makeImage(colorMatch){

    if (colors[colorcount] == colorMatch ){
        $("body").append("<img width=50 src='kitty.jpg'>");
    }
}

function bkg(x){
    $("#desperation").css("background-color", colors[x]);
}

/*
function makeImage( colorToMatch ) { 
    // what the function actually does
    if ( colors[colorCount]== colorToMatch ) {
        $("body").append("<img width=100 src='"+colorToMatch+".jpg'>");
    }
}  

*/