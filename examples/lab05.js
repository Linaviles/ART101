 function askNumber(num){
    let userNum = prompt("Guess 1-10?");
    if (userNum == num){
        $("#output").html("You got it!");
    }
    else{
        $("#output").html("try again sorry!");
    }
 }

 $("#good-button").click(function(){

    askNumber(5);


 });