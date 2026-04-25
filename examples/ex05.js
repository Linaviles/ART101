let count=0;
let colors=["Orchid", "Coral", "HotPink", "Plum"];
let colorCount;

let pencil={
color: "Yellow",
isSharp: false,
};

$("#desperation").click( function(){

    count = count +1; 

    colorCount=count-1;

    $("#desperation").html("you clicked me " + count + " and your favourite color today is: " + colors[colorCount] );

    $("#desperation").css( "background-color", colors[colorCount]);  

    $("html").css( "background-color", colors[colorCount+1]);

    console.log(pencil.color);

// things to try out:
// make the page background color two colors ahead of the button color
// make the page background color one color beyond of the button color

});
